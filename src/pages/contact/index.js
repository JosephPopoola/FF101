import React from "react";
import Layout from "../../components/Layout";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="base-container">
          <div className="base-content">
            <h1>Contact</h1>
            <div><strong>Email:</strong> foreverforwarddesign@gmail.com</div>
            <div><strong>Instagram:</strong> <a href="https://www.instagram.com/foreverforwarddesign" target="_blank">@foreverforwarddesign</a></div>
          </div>
        </div>
      </Layout>
    );
  }
}
