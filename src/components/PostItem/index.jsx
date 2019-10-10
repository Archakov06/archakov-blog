import React from "react";
import { Link } from "gatsby";

import "./PostItem.scss";

const PostItem = ({ frontmatter, excerpt, fields }) => {
  return (
    <div className="post-item">
      <Link to={`/post/${fields.slug}`}>
        <div className="post-item__image">
          <img
            src="https://images.unsplash.com/photo-1570654230464-9cf6d6f0660f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt={frontmatter.title}
          />
        </div>
        <div className="post-item__content">
          <span className="post-item__date">{frontmatter.date}</span>
          <h2>{frontmatter.title}</h2>
          <p className="post-item__text">{excerpt}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
