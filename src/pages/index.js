import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import SEO from "../components/Seo";
import Header from "../components/Header";

import "../styles/app.scss";

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;

    return (
      <div className="wrapper">
        <Header pathname={this.props.location.pathname} title={siteTitle} />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="Главная" />
          <div className="posts">
            {posts.map(({ node }, index) => (
              <PostItem key={index} {...node} />
            ))}
          </div>
        </Layout>
      </div>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
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
    }
  }
`;
