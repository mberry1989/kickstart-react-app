import React from "react";
import RenderElement from "./RenderElement";
import { contentTypes } from "../model/project";
import { articleLink } from "../constants/links";
import { Elements } from "@kontent-ai/delivery-sdk";

type SolutionListItemProps = Readonly<{
  solution: {
    headline?: Elements.TextElement;
    introduction?: Elements.TextElement;
    image?: Elements.AssetsElement;
  };
}>;

const SolutionListItem: React.FC<SolutionListItemProps> = ({ solution }) => {
  const shouldRender = Object.entries(solution).length > 0;

  return shouldRender && (
      <>
        <div className="flex pt-4 pb-4 justify-center">
          <div className="pr-4">
        <RenderElement
          element={solution.image}
          elementCodename="image"
          requiredElementType="asset"
          typeCodename={contentTypes.solution.codename }
          link={articleLink}
        >
          {solution.image && (
            <>
              <img
                width={440}
                height={220}
                src={solution.image.value[0]?.url ? `${solution.image.value[0]?.url}?auto=format&w=800` : ""}
                alt={solution.image.value[0].description ?? "image alt"}
                className="object-cover rounded-lg static"
              />
            </>
          )}
        </RenderElement>
        </div>
        <div className="w-1/2 ">
          <RenderElement
            element={solution.headline}
            elementCodename="headline"
            requiredElementType="text"
            typeCodename={contentTypes.solution.codename}
            link={articleLink}
          >
            <h2 className="text-left xl:text-left text-5xl font-semibold text-burgundy">
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
              <p>
                <a href="#" className="text-center xl:text-left text-burgundy text-xl mt-6 font-semibold underline">
                  Read more
                </a>
              </p>
            </p>
          </RenderElement>
        </div>
        </div>
      </>
  );
};

export default SolutionListItem;
