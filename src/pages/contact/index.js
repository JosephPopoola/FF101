import React from "react";
import Layout from "../../components/Layout";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <div>Email: foreverforwarddesign@gmail.com</div>
              <div>Instagram: @foreverforwarddesign</div>
              <div>Twitter: @foreverforwarddesign</div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
