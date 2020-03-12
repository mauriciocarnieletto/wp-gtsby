import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography, Card, Grid, CardHeader, CardContent, CardMedia, CardActions, Button, } from "@material-ui/core"

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
        template
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
}`
  
  const WordPressPages = ({ data }) =>  {
    const [ showPostData, setShowPostData ] = useState(null)
    
    if(data.allWordpressPost && data.allWordpressPost.edges)
    return (
      <Layout>
        <SEO title="Usando o WP como fonte de dados" />
        <h1>Usando o WP como fonte de dados</h1>
        <Link to="/">Home</Link>
        <Container>
          <Grid container>
              <Grid item sm={12} md={3}>
                {
                  data.allWordpressPost.edges.map(({ node }) => {
                    console.log(node)
                    return (
                      <Card raised key={node.id}>
                        <CardMedia
                          component="img" 
                          image={node.featured_media?.source_url}
                          height="140" 
                          width="140"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h5">
                          {node.title}
                        </Typography>
                        </CardContent>
                        <CardActions>
                          <Link to={`wordpress-pages/${node.slug}`}>
                            <Button size="small" color="primary">
                              Ver Post
                            </Button>
                          </Link>
                          <Button size="small" color="primary">
                            Ver no WP
                          </Button>
                          <Button size="small" color="primary" onClick={() => setShowPostData(node.id)}>
                            Data
                          </Button>
                        </CardActions>
                        {
                          (showPostData === node.id) 
                          ? <div>
                                <pre>{JSON.stringify(node)}</pre>
                              </div>
                            : ''
                          }
                      </Card>
                    )
                  })
                }
              </Grid>
          </Grid>
        </Container>
        
      </Layout>
    )
  else
    return '';
}


export default WordPressPages
