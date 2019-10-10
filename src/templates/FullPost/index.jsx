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
            backgroundImage: `url("${post.frontmatter.image}")`,
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
                <Link to={`post/${next.frontmatter.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
            <li>
              {previous && (
                <Link to={`post/${previous.frontmatter.slug}`} rel="prev">
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
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        date(formatString: "DD MMMM YYYY, В HH:MM")
        image
        tags
        slug
        description
        title
      }
    }
  }
`;
