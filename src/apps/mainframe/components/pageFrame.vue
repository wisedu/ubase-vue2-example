<template>
  <iframe :src="index.leftSelectedMenu.url" id="app-frame"></iframe>
</template>

<script type="text/ecmascript-6">
  export default {
    computed: {
      ...Vuex.mapState({
        index: state => state.index
      })
    }
  };
</script>

<style scoped lang="less">
  iframe {
    width: 100%;
    border: none;
    position: absolute;
  }
</style>
