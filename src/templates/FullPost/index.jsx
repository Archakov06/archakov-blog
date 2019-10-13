import React from "react";
import { Link, graphql } from "gatsby";
import classNames from "classnames";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Header from "../../components/Header";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import CategoryName from "../../components/CategoryName";

import "./FullPost.scss";

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    var d = document,
      s = d.createElement("script");
    s.src = "https://archakov.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    d.head.appendChild(s);
  }

  render() {
    const post = this.props.data.mdx;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const { location } = this.props;

    return (
      <div class="wrapper">
        {!post.frontmatter.image && (
          <Header pathname={location.pathname} title={siteTitle} />
        )}
        <div
          className={classNames("full-post", {
            "full-post--no-image": !post.frontmatter.image,
          })}
        >
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
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3032 17.0647L10.4151 17.9528C10.039 18.3288 9.43097 18.3288 9.05892 17.9528L1.28203 10.1799C0.905989 9.80387 0.905989 9.1958 1.28203 8.82376L9.05892 1.04686C9.43497 0.670821 10.043 0.670821 10.4151 1.04686L11.3032 1.93497C11.6832 2.31501 11.6752 2.93508 11.2872 3.30712L6.46663 7.89965H17.9639C18.496 7.89965 18.9241 8.3277 18.9241 8.85976V10.1399C18.9241 10.672 18.496 11.1 17.9639 11.1H6.46663L11.2872 15.6925C11.6792 16.0646 11.6872 16.6847 11.3032 17.0647Z"
                        fill="white"
                      />
                    </svg>
                    <span>Назад</span>
                  </div>
                </Link>

                <div className="full-post__header-details">
                  <div className="full-post__header-details-title">
                    {post.frontmatter.title}
                  </div>
                  <div className="full-post__header-details-info">
                    <Link to={`/category/${post.frontmatter.category}`}>
                      <CategoryName>{post.frontmatter.category}</CategoryName>
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
            <noscript>
              Please enable JavaScript to view the{" "}
              <a href="https://disqus.com/?ref_noscript">
                comments powered by Disqus.
              </a>
            </noscript>
            <div id="disqus_thread" />
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
        category
      }
    }
  }
`;
