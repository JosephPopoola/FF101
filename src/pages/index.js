import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import anime from "animejs";

export default class IndexPage extends React.Component {
  componentDidMount() {
    anime({
      targets: ".home-title",
      translateY: 450,
      direction: "alternate",
      loop: false,
      easing: "cubicBezier(0.990, -0.360, 0.590, 1.000)",
      duration: 1700
    });

    let tl = anime.timeline({
      easing: "easeIn",
      duration: 1000
    });

    tl.add({
      targets: ".horizontal-tile",
      translateY: 100,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine"
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
        <div className="home-container">
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
