import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import anime from "animejs";
import Modal from "react-responsive-modal";
import { HTMLContent } from "../components/Content";

export default class IndexPage extends React.Component {
  state = {
    open: false,
    post: null
  };

  onOpenModal = post => {
    this.setState({ open: true, post: post });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    anime
      .timeline()
      .add({
        targets: ".home-title",
        translateY: [-400, 0],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 2500
      })
      .add(
        {
          targets: ".horizontal-tile",
          opacity: [0, 1],
          translateY: [-100, 0],
          easing: "easeOutExpo",
          duration: 1500,
          delay: function(el, i) {
            return 50 * i;
          }
        },
        "-=400"
      );
  }

  render() {
    const { open, post } = this.state;
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const PostContent = HTMLContent;

    return (
      <Layout>
        <div className="home-title">
          <p className="home-title-text">FOREVER FORWARD</p>
        </div>
        <div className="home-wrapper">
          <div className="container home-items">
            {posts.map(({ node: post }) => (
              <div
                className="content horizontal-tile"
                key={post.id}
                onClick={() => this.onOpenModal(post)}
              >
                <p>
                  <span className="tile-text">{post.frontmatter.title}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        {post ? (
          <Modal
            classNames={{ modal: "modal", closeIcon: "modal-close-icon" }}
            open={open}
            onClose={this.onCloseModal}
            center
          >
            <section className="section">
              <div className="container content">
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                      {post.frontmatter.title}
                    </h1>
                    <p>{post.frontmatter.description}</p>
                    <PostContent content={post.html} />
                  </div>
                </div>
              </div>
            </section>
          </Modal>
        ) : (
          <div />
        )}
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
          html
          frontmatter {
            title
            templateKey
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
