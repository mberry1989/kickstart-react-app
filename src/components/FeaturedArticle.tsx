import React from "react";
import FeaturedContent from "./FeaturedContent";
import { Article } from "../model";

type FeaturedArticleProps = Readonly<{
  article: Article;
}>;

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <FeaturedContent type="article" image={article.elements.image}>
      <>
        <div>
          <h2 className="text-center xl:text-left text-5xl font-semibold text-burgundy">
            {article.elements.title.value}
          </h2>
          <p className="text-center xl:text-left text-gray-light mt-6 text-lg">
            Published on {new Date(article.elements.publish_date.value!).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
              day: "numeric",
            })}
          </p>
          <p className="text-center xl:text-left text-gray-700 mt-4 text-xl">
            {article.elements.introduction.value}
          </p>
        </div>
        <a href="#" className="text-center xl:text-left text-burgundy text-xl mt-6 font-semibold underline">
          Read more
        </a>
      </>
    </FeaturedContent>
  );
};

export default FeaturedArticle;
