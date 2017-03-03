<template>
  <div>
    <div class="cus-top-nav">
      <div class="logo"><img :src="index.logo" alt=""></div>
      <nav>
        <a class="cus-top-nav-hover" :class="index.topSelectedMenu.id == item.id?'a-selected':''"
           @click="changeTopMenu(item.id)" v-for="item in index.menu">
          <div>{{item.title}}</div>
        </a>
      </nav>
    </div>
    <div class="main-wrap">
      <div class="left-menu" @mouseout="mouseout" @mouseover="mouseover" :style="{'width':leftWidth}">
        <left-menu :menus="index.leftNav" :mini-mode="miniMode" @on-selected="changeLeftNav" ></left-menu>
      </div>
      <div class="main-content" :style="{'margin-left':rightMarginLeft}">
        <page-frame></page-frame>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    computed: {
      ...Vuex.mapState({
        index: state => state.index
      }),
      leftWidth:function(){
          if(this.expand){
            return '276px'
          }else{
            return '45px'
          }
      },
      rightMarginLeft:function () {
        if(this.expand){
          return '45px'
        }else{
          return '45px'
        }
      }
    },

    data:function () {
      return {
          expand:true,
          miniMode:false
      }
    },

    created(){
      let defaultTopMenu = null
      this.index.menu.forEach(function (item) {
        if (item.default) {
          defaultTopMenu = item
        }
      })

      if (!defaultTopMenu) {
        defaultTopMenu = this.index.menu[0];
      }

      if (this.$router.currentRoute.path === '/') {
        this.changeTopMenu(defaultTopMenu.id)
      } else {
        let topMenuId = this.$route.params.topMenuId
        let leftMenuId = this.$route.params.leftMenuId
        this.changeTopMenu(topMenuId, leftMenuId)
      }
    },

    methods: {
      changeTopMenu(selectedTopMenuId, selectedLeftMenuId){
        var menu = this.__getTopMenuById(selectedTopMenuId)

        this.index.topSelectedMenu = menu
        this.miniMode = false
        this.expand = true

        // 如果有url则跳转到新tab页打开 当前页面仍然停留在当前菜单
        if (menu.url) {
          window.open(menu.url)
          return
        }

        this.index.leftNav = menu.children

        if (selectedLeftMenuId) {
          this.__setLeftMenuSelectedStatus(selectedLeftMenuId)
          this.$router.replace(`/${menu.id}/${selectedLeftMenuId}`)
          return
        }

        var leftSelectedMenu = this.__setLeftMenuSelectedStatus()

        this.$router.replace(`/${menu.id}/${leftSelectedMenu.id}`)
      },

      __getTopMenuById(id){
        var selectedMenu = null
        this.index.menu.forEach((item) => {
          if (item.id == id) {
            selectedMenu = item
          }
        })

        return selectedMenu
      },

      __setLeftMenuSelectedStatus(id){
        var selected = null

        if (id !== undefined) {
          this.index.leftNav.forEach((item) => {
              item.expanded = false
            item.children.forEach((item2) => {
              if (item2.id == id) {
                selected = item2
                item.expanded = true
                item2.selected = true
              } else {
                item2.selected = false
              }
            })
          })
        } else {
          this.index.leftNav.forEach((item) => {
            item.expanded = false
            item.children.forEach((item2) => {
              if (item2.selected) {
                selected = item2
                item.expanded = true
                item2.selected = true
              } else {
                item2.selected = false
              }
            })
          })
        }

        if (!selected) {
          this.index.leftNav[0].children[0].selected = true
          this.index.leftNav.forEach((item, index)=>{
              if(index == 0){
                  item.expanded = true
              }else{
                  item.expanded = false
              }
          })
          selected = this.index.leftNav[0].children[0]
        }

        this.index.leftSelectedMenu = selected

        return selected
      },

      changeLeftNav(leftMenu){
        this.index.leftSelectedMenu = leftMenu
        let topMenuId = this.$route.params.topMenuId
        this.$router.replace(`/${topMenuId}/${leftMenu.id}`)
      },

      mouseover(){
        this.expand = true
        this.miniMode = false
      },

      mouseout(){
        this.expand = false
        this.miniMode = true
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .cus-top-nav {
    width: 100%;
    height: 52px;
    background-color: #2D303A;
  }

  .logo {
    display: inline-block;
    width: 276px;
    height: 52px;
    background-color: #1D1F25;
  }

  .cus-top-nav > nav {
    display: inline-block;
    height: 52px;
    line-height: 52px;
    vertical-align: top;
  }

  .cus-top-nav > title {
    display: inline-block;
    height: 52px;
    line-height: 52px;
  }

  .cus-top-nav > title {
    font-size: 16px;
    color: #b3b3b3;
    padding: 0 16px;
  }

  .cus-top-nav > nav > a {
    display: inline-block;
    color: #727785;
    box-sizing: border-box;
    line-height: 47px;
    font-size: 14px;
    font-weight: 700;
    cursor: default;
  }

  .cus-top-nav > nav > a > div {
    padding: 0 16px;
  }

  .cus-top-nav > nav > a:after {
    display: block;
    content: ' ';
    height: 2px;
    border-bottom: 2px solid #4B8EFF;
    transform: scale(0);
    transition-duration: 250ms;
    transition-property: transform;
    box-shadow: 0px 0px 7px #4B8EFF;
  }

  .cus-top-nav > nav > a:hover:after {
    transform: scale(1);
  }

  .cus-top-nav > nav > a.a-selected {
    color:#4989F8;
  }

  .cus-top-nav > nav > .a-selected:after {
    border-bottom: 4px solid #4B8EFF;
    transform: scale(1);
    margin-top: -2px;
    box-shadow: 0px 0px 7px #4B8EFF;
  }

  .left-menu {
    padding: 0;
    display: inline-block;
    height: calc(~"100% - 52px");
    position: absolute;
    transition: width  0.25s cubic-bezier(1,.32,.3,.71);
  }

  .main-content {
    width: calc(~"100% - 276px");
    display: inline-block;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;

    iframe {
      height: 100%;
    }
  }

  .main-wrap {
    display: flex;
    min-height: calc(~"100vh - 56px");
  }

  body {
    background-color: #e0e6ed !important;
  }
</style>
