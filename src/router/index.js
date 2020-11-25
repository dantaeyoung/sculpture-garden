/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";

import store from '@/store'

import Nav from "@/components/Nav.vue";
import Intro from "@/components/Intro.vue";
import Page from "@/components/Page.vue";
import HelloWorld from "@/components/HelloWorld.vue";

Vue.use(VueRouter);

var siteName = "Vue / Vuex / Router <-> Airtable"

const routes = [
  {
    path: "/",
    redirect: "/intro",
  },
  {
    path: "/intro",
    name: "Intro",
    components: {
      nav: Nav,
      view: Intro,
    }
  },
  {
    path: "/page/:page_name",
    name: "Page",
    components: {
      nav: Nav,
      view: Page,
    }
  },
  {
    path: "/helloworld",
    name: "HelloWorld",
    components: {
      nav: Nav,
      view: HelloWorld,
    },
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});


export default router;

