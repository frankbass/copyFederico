import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (

  <Layout>
    <SEO title="Home" keywords={[`costume`, `dance`, `art`]} />

    <div className="topnav">

      <Link className="button" to="/costume/">costume design</Link>

      <Link className="button" to="/art/">art work</Link>

      <Link className="button" to="/about/">about</Link>
    </div>

    <div style={{ maxWidth: `1000px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
