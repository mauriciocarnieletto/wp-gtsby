import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WordPressPageTemplate = ({ pageContext }) =>  {
  const { post } = pageContext
  if(post)
    return (
      <Layout>
        <SEO title={post.title} />
        <div>
          <div dangerouslySetInnerHTML={{__html: post.content }} />
        </div>
        <Link to="/wordpress-pages">Voltar para os posts</Link>
      </Layout>
    )
    else
        return <div>pppppppp</div>;
}

export default WordPressPageTemplate;