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
        <Link to="/wordpress-pages">Voltar para os posts</Link>
        <div>
          <div dangerouslySetInnerHTML={{__html: post.content }} />
        </div>
      </Layout>
    )
    else
        return <div>OOOOOOOooooooops :(</div>;
}

export default WordPressPageTemplate;