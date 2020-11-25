<template>
  <div class="hello">
    <div v-if="pageExists">

     <div v-for="(value, key) in thispage" :key="key" :class="key">
        <template v-if="key != 'Content'">
          {{ value }} 
        </template>
        <template v-else>
          <vue-markdown :prerender="postRender">{{value}}</vue-markdown>
        </template>
     </div>




    </div>
  </div>
</template>

<script>

import VueMarkdown from 'vue-markdown'

export default {
  name: "PageViewer",
  data() {
    return {};
  },
  components: {
    'vue-markdown': VueMarkdown
  },
  computed: {
    pageExists() {
      if(typeof(this.$store.state.bookshelf) == "undefined") { return false; } 
      return this.$route.params.page_name in this.$store.state.bookshelf;
    },
    thispage() {
      return this.$store.state.bookshelf[this.$route.params.page_name]
    },
    records() {
      return this.$store.state.bookshelf;
    },
  },
  methods: {
    postRender(str) {
     str = str.replaceAll(/\[\[/gi, "<Link>");
     str = str.replaceAll(/\]\]/gi, "</Link>");
    return str;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Title {
  font-size: 2em;
}

Link {
  color: blue;
}

</style>
