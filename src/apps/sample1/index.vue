<template>
    <div>
        <div>i18n title: {{$t('index.title')}}</div>
        <div>config: name: {{$root.config.name}}</div>
        <input type="text" v-model="index.test.a.b.h">
        <div v-html="index.test.a.b.h"></div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        computed: {
            ...Vuex.mapState({
                index: state => state.index
            })
        },

        mounted(){
            Promise.all([])
            console.log(this.$root.config.name)
        }
    }
</script>
