import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import anime from "animejs";

export default class IndexPage extends React.Component {
  componentDidMount() {
    anime({
      targets: ".home-title",
      translateY: 400,
      direction: "alternate",
      loop: false,
      easing: "easeOutCirc",
      duration: 2500
    });
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <div className="home-title">
          <p className="home-title-text">FOREVER FORWARD</p>
        </div>
        <div className="home-wrapper">
          <div className="container home-items">
            {posts.map(({ node: post }) => (
              <Link
                className="content horizontal-tile"
                key={post.id}
                to={post.fields.slug}
              >
                <p>
                  <span className="tile-text">{post.frontmatter.title}</span>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
