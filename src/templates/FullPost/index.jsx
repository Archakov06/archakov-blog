import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

import ArrowBackSvg from "../../../static/arrow.svg";

import "./FullPost.scss";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <div className="full-post">
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1570654230464-9cf6d6f0660f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
          }}
          className="full-post__header"
        >
          <div className="full-post__header-overlay">
            <div className="container">
              <Link to="/">
                <div className="full-post__header-back">
                  <img src={ArrowBackSvg} alt="Arrow back" />
                  <span>Назад</span>
                </div>
              </Link>

              <div className="full-post__header-details">
                <div className="full-post__header-details-title">
                  {post.frontmatter.title}
                </div>
                <div className="full-post__header-details-info">
                  <Link to="/">
                    <span className="full-post__category-name">Событие</span>
                  </Link>
                  <span className="full-post__date">
                    {post.frontmatter.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <div className="full-post__text">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
          <ul>
            <li>
              {next && (
                <Link to={`post${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
            <li>
              {previous && (
                <Link to={`post${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
          </ul>
        </Layout>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY, В HH:MM")
      }
    }
  }
`;
