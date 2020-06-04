// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // api.loadSource(({ addCollection }) => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  // })

  api.loadSource(async actions => {
    const Apps = require('./src/data/apps.json');

    const appCollection = actions.addCollection({
      typeName: 'App'
    })

    for (const app of Apps) {
      appCollection.addNode(app);
    }
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allApp {
        edges {
          node {
            name
            stores {
              name
            }
          }
        }
      }
    }`)

    data.allApp.edges.forEach(({ node }) => {
      console.log(node.name)
      createPage({
        path: `/app/${node.name}`,
        component: './src/templates/App.vue',
        context: {
          app: node
        }
      })
    })
  })
}
