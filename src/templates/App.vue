<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>
    <p> 
      Appname {{$context.app.name}}
    </p>
    
    <ul>
      <li v-for="store in $context.app.stores">
        {{ store.name }}
      </li>
    </ul>

  </Layout>
</template>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
