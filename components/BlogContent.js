import React from "react";
import { Col } from "react-bootstrap";
import BlockContent from "@sanity/block-content-to-react";
import HighlightCode from "./HighlightCode";
import { urlFor } from "../lib/api";

// highlight code
const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </HighlightCode>
      );
    },
    image: ({ node: { asset, alt, position = "center" } }) => {
      return (
        <div className={`blog-image blog-image-${position} mb-5`}>
          <img src={urlFor(asset.url).height(266).fit("max")} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};
console.log("serializers::", serializers);

const BlogContent = ({ content }) => {
  return <BlockContent serializers={serializers} blocks={content} />;
};

export default BlogContent;
