const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
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
`)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }
  const { allWordpressPost } = result.data 
  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    console.log(edge);
    createPage({
      path: `/wordpress-pages/${edge.node.slug}`,
      component: slash(postTemplate),
      context: {
        pagePath: edge.node.slug,
        id: edge.node.id,
        post: edge.node,
      },
    })
  })
}