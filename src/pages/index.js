import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (


  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <h1>Other some text</h1>
    <div className="topnav">

      <Link className="button" to="/costume/">costume design</Link>

      <Link className="button" to="/art/">art work</Link>

      <Link className="button" to="/about/">about</Link>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>





  </Layout>
)

export default IndexPage
