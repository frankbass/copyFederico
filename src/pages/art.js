import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const artPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Art Work</h1>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default artPage
