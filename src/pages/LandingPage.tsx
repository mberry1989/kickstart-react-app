import { DeliveryError } from "@kontent-ai/delivery-sdk";

import HeroImage from "../components/HeroImage";
import PageContent from "../components/PageContent";
import PageSection from "../components/PageSection";
import "../index.css";
import { type LandingPage } from "../model";
import { createClient } from "../utils/client";
import { useSuspenseQueries } from "@tanstack/react-query";
import { FC } from "react";
import { useAppContext } from "../context/AppContext";
import { Replace } from "../utils/types";
import RenderElement from "../components/RenderElement";
import FeaturedContent from "../components/FeaturedContent";
import { contentTypes } from "../model/project";
import KontentComponentErrorMessage from "../components/KontentComponentErrorMessage";
import Layout from "../components/Layout";
import { landingPageLink } from "../constants/links";
import { Solution } from "../model";
import FeaturedSolution from "../components/FeaturedSolution";

const LandingPage: FC = () => {
  const { environmentId, apiKey } = useAppContext();

  const solutions = useSuspenseQueries({
    queries: [
    {
      queryKey: ["solutions"],
      queryFn: () =>
        createClient(environmentId, apiKey)
          .items()
          .type(contentTypes.solution.codename)
          .toPromise()
          .then(res =>
            res.data.items[0] as Replace<Solution, { elements: Partial<Solution["elements"]> }> ?? null
          )
          .catch((err) => {
            if (err instanceof DeliveryError) {
              return null;
            }
            throw err;
          }),
        },
      ],
    });

  const [landingPageType, landingPage] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["landing_page_type"],
        queryFn: () =>
          createClient(environmentId, apiKey)
            .type(contentTypes.landing_page.codename)
            .toPromise()
            .then(res => res.data)
            .catch((err) => {
              if (err instanceof DeliveryError) {
                return null;
              }
              throw err;
            }),
      },
      {
        queryKey: ["landing_page"],
        queryFn: () =>
          createClient(environmentId, apiKey)
            .items()
            .type(contentTypes.landing_page.codename)
            .limitParameter(1)
            .toPromise()
            .then(res =>
              res.data.items[0] as Replace<LandingPage, { elements: Partial<LandingPage["elements"]> }> ?? null
            )
            .catch((err) => {
              if (err instanceof DeliveryError) {
                return null;
              }
              throw err;
            }),
      },
    ],
  });

  if (!landingPageType.data) {
    return (
      <Layout>
        <div className="flex-grow">
          <PageSection color="white">
            <KontentComponentErrorMessage>
              Missing a content type with the codename{"  "}
              <b>
                <i>{contentTypes.landing_page.codename}</i>
              </b>. Please create the{"  "}
              <a
                href="https://kontent.ai/learn/try-kontent-ai/build-the-foundation/create-a-landing-page-structure#a-create-a-landing-page-content-type"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                Landing Page content type
              </a>{" "}
              according to the instructions.
            </KontentComponentErrorMessage>
          </PageSection>
        </div>
      </Layout>
    );
  }

  if (!landingPage.data || !Object.entries(landingPage.data.elements).length) {
    return (
      <Layout>
        <div className="flex-grow" />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex-grow">
        <PageSection color="bg-creme">
          <HeroImage
            data={{
              headline: landingPage.data.elements.headline,
              subheadline: landingPage.data.elements.subheadline,
              heroImage: landingPage.data.elements.hero_image,
            }}
          />
        </PageSection>
        <PageSection color="bg-white">

{solutions && solutions.map(solution => {
  return (
<FeaturedSolution

solution={{
  headline: solution.data?.elements.headline,
  introduction: solution.data?.elements.introduction,
  image: solution.data?.elements.image,

}}

/>
  )
})}
</PageSection>
        <RenderElement
          element={landingPage.data.elements.body_copy}
          elementCodename="body_copy"
          requiredElementType="rich_text"
          errorMessageClassName="container"
          typeCodename={contentTypes.landing_page.codename}
          link={landingPageLink}
        >
          <PageSection color="bg-white">
            <PageContent body={landingPage.data.elements.body_copy!} />
          </PageSection>
        </RenderElement>
        <RenderElement
          element={landingPage.data.elements.featured_content}
          elementCodename="featured_content"
          requiredElementType="modular_content"
          errorMessageClassName="container"
          typeCodename={contentTypes.landing_page.codename}
          link={landingPageLink}
        >
          <FeaturedContent featuredContent={landingPage.data.elements.featured_content!}></FeaturedContent>
        </RenderElement>
      </div>
    </Layout>
  );
};

export default LandingPage;
