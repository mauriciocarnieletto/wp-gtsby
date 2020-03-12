import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


export const query = graphql`
  {
    allWordpressPost {
      edges {
        node {
          id
          content
          date
          title
          slug
          link
          type
          parent {
            id
          }
          sticky
        }
      }
    }
  }
`

const WordPressPages = ({ data }) =>  {
  const [ showPostData, setShowPostData ] = useState(null)

  if(data.allWordpressPost && data.allWordpressPost.edges)
    return (
      <Layout>
        <SEO title="Usando o WP como fonte de dados" />
        <h1>Usando o WP como fonte de dados</h1>
        {
          data.allWordpressPost.edges.map(({ node }) => {
            return (
              <div key={node.id}>
                <h5>{node.title}</h5>
                <ul>
                  <li>
                    <Link to={`/wordpress-pages/${node.slug}`}>Ver aqui</Link>
                  </li>
                  <li>
                    <a target="_blank" href={node.link}>Ver no wordpress</a>
                  </li>
                  <li>
                    <span style={{'cursor': 'pointer'}} onClick={() => setShowPostData(node.id)}>Ver dados do post</span>
                  </li>
                </ul>
                {
                  (showPostData === node.id) 
                    ? <div>
                        <pre>{JSON.stringify(node)}</pre>
                      </div>
                    : ''
                }
              </div>
            )
          })
        }
        <Link to="/">Home Peaches</Link>
      </Layout>
    )
  else
    return '';
}


export default WordPressPages
