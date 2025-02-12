import React from "react";
import FeaturedComponentBase from "./FeaturedComponentBase";
import { Solution } from "../model";
import { Replace } from "../utils/types";
import RenderElement from "./RenderElement";
import { contentTypes } from "../model/project";
import { articleLink } from "../constants/links";

type FeaturedSolutionProps = Readonly<{
  solution: Replace<Solution, { elements: Partial<Solution["elements"]> }>;
}>;

const FeaturedSolution: React.FC<FeaturedSolutionProps> = ({ solution }) => {
  const shouldRender = Object.entries(solution.elements).length > 0;

  return shouldRender && (
    <FeaturedComponentBase type="article" image={solution.elements?.image}>
      <>
        <div>
          <RenderElement
            element={solution.elements.headline}
            elementCodename="headline"
            requiredElementType="text"
            typeCodename={contentTypes.solution.codename}
            link={articleLink}
          >
            <h2 className="text-center xl:text-left text-5xl font-semibold text-burgundy">
              {solution.elements.headline?.value}
            </h2>
          </RenderElement>
          <RenderElement
            element={solution.elements.summary}
            elementCodename="introduction"
            requiredElementType="text"
            typeCodename={contentTypes.solution.codename}
            link={articleLink}
          >
            <p className="text-center xl:text-left text-gray-700 mt-4 text-xl">
              {solution.elements.summary?.value}
            </p>
          </RenderElement>
        </div>
        <a href="#" className="text-center xl:text-left text-burgundy text-xl mt-6 font-semibold underline">
          Read more
        </a>
      </>
    </FeaturedComponentBase>
  );
};

export default FeaturedSolution;
