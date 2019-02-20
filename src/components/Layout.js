import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./Sketch4";

import Navbar from "../components/Navbar";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <div
          style={{
            position: "fixed",
            height: "100vh",
            width: "100vw",
            zIndex: "-99"
          }}
        >
          <P5Wrapper sketch={sketch} />
        </div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#ff4400"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400"
            rel="stylesheet"
          />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
          <meta name="viewport" content="width=1000" />
        </Helmet>
        <div>{children}</div>
        <Navbar />
      </div>
    )}
  />
);

export default TemplateWrapper;
