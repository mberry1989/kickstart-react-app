import React from "react";
// import FeaturedComponentBase from "./FeaturedComponentBase";
import RenderElement from "./RenderElement";
import { contentTypes } from "../model/project";
import { articleLink } from "../constants/links";
import { Elements } from "@kontent-ai/delivery-sdk";

type FeaturedSolutionProps = Readonly<{
  solution: {
    headline?: Elements.TextElement;
    introduction?: Elements.TextElement;
    image?: Elements.AssetsElement;
  };
}>;

const FeaturedSolution: React.FC<FeaturedSolutionProps> = ({ solution }) => {
  const shouldRender = Object.entries(solution).length > 0;

  return shouldRender && (
    // <FeaturedComponentBase type="solution" image={solution.elements?.image}>
      <>
        <div>
          <RenderElement
            element={solution.headline}
            elementCodename="headline"
            requiredElementType="text"
            typeCodename={contentTypes.solution.codename}
            link={articleLink}
          >
            <h2 className="text-center xl:text-left text-5xl font-semibold text-burgundy">
              {solution.headline?.value}
            </h2>
          </RenderElement>
          <RenderElement
            element={solution.introduction}
            elementCodename="introduction"
            requiredElementType="text"
            typeCodename={contentTypes.solution.codename}
            link={articleLink}
          >
            <p className="text-center xl:text-left text-gray-700 mt-4 text-xl">
              {solution.introduction?.value}
            </p>
          </RenderElement>
        </div>
        <a href="#" className="text-center xl:text-left text-burgundy text-xl mt-6 font-semibold underline">
          Read more
        </a>
      </>
    // </FeaturedComponentBase>
  );
};

export default FeaturedSolution;
