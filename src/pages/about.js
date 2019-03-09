import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const aboutPage = () => (
  <Layout>
    <SEO title="about" />
    <h2 className="pagecontent">About things...</h2>
    <p className="pagecontent">But I must explain to you how all this mistaken idea of
    denouncing of a pleasure and praising pain was born and I
    will give you a complete account of the system, and expound
    the actual teachings of the great explorer of the truth, the
    master-builder of human happiness. No one rejects, dislikes,
    or avoids pleasure itself, because it is pleasure, but because
    those who do not know how to pursue pleasure rationally
    encounter consequences that are extremely painful. Nor again
    is there anyone who loves or pursues or desires to obtain pain of
    itself, because it is pain, but occasionally circumstances occur in
    which toil and pain can procure him some great pleasure. To take a
    trivial example, which of us ever undertakes laborious physical exercise,
    xcept to obtain some advantage from it? But who has any right to find
    fault with a man who chooses to enjoy a pleasure that has no annoying
    consequences, or one who avoids a pain that produces no
    resultant pleasure?
    </p>



   <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default aboutPage
