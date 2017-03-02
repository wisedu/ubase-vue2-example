<template>
    <iframe :src="src" id="app-frame"></iframe>
</template>

<script type="text/ecmascript-6">
    export default {
        computed: {
            ps(){
                return this.$store.state.index
            },
        },

        data: () => ({
            src: ''
        }),

        route: {
            data: function (transition) {
                let appList = this.ps.appList;
                let appId = transition.to.params.appId;
                let url = null;

                this.$debug(`appId: ${appId}`)

                if (!appId) {
                    this.ps.currentId = this.ps.appList[0].id
                    this.$router.replace('/' + this.ps.currentId)
                    return;
                }

                this.ps.currentId = appId

                _.each(appList, (app) => {
                    if (app.id === appId) {
                        url = app.url;
                        return false;
                    }
                });

                this.src = url
                transition.next()
            }
        }
    };
</script>

<style scoped lang="less">
    iframe {
        width: 100%;
        border: none;
    }
</style>
