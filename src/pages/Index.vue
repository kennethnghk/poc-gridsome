<template>
  <Layout :set="app = getApp()">

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>
    <p> 
      Appname {{app.name}}
    </p>
    
    <ul>
      <li v-for="store in app.stores">
        {{ store.name }}
      </li>
    </ul>

  </Layout>
</template>

<page-query>
query {
  allApp {
    edges {
      node {
        name
        hostnames
        stores {
          name
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  mtaInfo: {
    title: 'Store homepage'
  },
  methods: {
    getApp() {
      const hostname = window.location.hostname
      const apps = this.$page.allApp.edges.filter((edge, hostname) => {
        return hostname in edge.node.hostnames
      })
      
      return apps[0] ? apps[0].node : null
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
