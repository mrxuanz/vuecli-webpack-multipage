<template>
  <img alt="Vue logo" src="../../../assets/logo.png" />
  <div>路由页面二</div>
  <router-link to="/page1">page1</router-link>
  <router-link to="/page2">page2</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "main-content",
});
</script>

<style scoped></style>
