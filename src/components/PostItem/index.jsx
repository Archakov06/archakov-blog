import React from "react";
import { Link } from "gatsby";

import CategoryName from "../CategoryName";

import "./PostItem.scss";

const PostItem = ({ frontmatter, excerpt, fields }) => {
  return (
    <div className="post-item">
      <Link to={`/post/${frontmatter.slug}`}>
        {frontmatter.image && (
          <div className="post-item__image">
            <CategoryName absolute>{frontmatter.category}</CategoryName>
            <img src={frontmatter.image} alt={frontmatter.title} />
          </div>
        )}
        <div className="post-item__content">
          {!frontmatter.image && (
            <>
              <CategoryName>{frontmatter.category}</CategoryName>
              <br />
              <br />
            </>
          )}
          <span className="post-item__date">{frontmatter.date}</span>
          <h2>{frontmatter.title}</h2>
          <p className="post-item__text">{excerpt}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
