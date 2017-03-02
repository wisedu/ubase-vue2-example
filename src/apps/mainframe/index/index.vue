<template>
  <div>
    <div class="cus-top-nav">
      <div class="logo"><img :src="logo" alt=""></div>
      <nav>
        <a :href="'#'+item.route" class="cus-top-nav-hover" :class="routeSelected(item.name)?'a-selected':''"
           @click="changeRoute(item.name)" v-for="item in menu">
          <div>{{item.title}}</div>
        </a>
      </nav>
    </div>
    <div class="main-wrap">
      <div class="left-menu">
        <left-menu :menus="menus"></left-menu>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  var logo = require('statics/images/logo.png')

  export default {
    data: function () {
      return {
        logo:logo,
        selectedRoute: '',
        menus:[{
          id: 11,
          title: 'menu1',
          icon: 'keyboardvoice',
          visible: true,
          subMenus: [{id: 33, title: 'submenu1-1'}, {id: 33, title: 'submenu1-2'}, {id: 33, title: 'submenu1-3'}]
        }, {
          id: 11,
          title: 'menu2',
          icon: 'localflorist',
          visible: true,
          subMenus: [{id: 33, title: 'submenu2-1'}, {id: 33, title: 'submenu2-2'}, {id: 33, title: 'submenu2-3'}]
        }],
        menu:[{title:'租户管理', name:'323', route:'/menu/323'}, {title:'租户配置', name:'fff', route:'/menu/fff'}, {title:'初始化租户', name:'ddf',route:'/menu/ddf'}]
      }
    },

    created(){
      let defaultRoute = null
      this.menu.forEach(function (item) {
        if (item.default) {
          defaultRoute = item.route
        }
      })

      if (!defaultRoute) {
        defaultRoute = this.menu[0].name;
      }

      if (this.$router.currentRoute.path === '/') {
        this.$router.replace('/menu/'+defaultRoute)
        this.selectedRoute = defaultRoute
      } else {
        this.selectedRoute = this.$route.params.id
      }
    },

    methods: {
      changeRoute(name){
        this.selectedRoute = name
      },

      routeSelected(name){
        return this.selectedRoute == name
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .cus-top-nav {
    width: 100%;
    height: 44px;
    background-color: #131313;
  }

  .logo{
    display: inline-block;
  }
  .cus-top-nav > nav {
    display: inline-block;
    height: 44px;
    line-height: 44px;
    vertical-align: top;
  }

  .cus-top-nav > title {
    display: inline-block;
    height: 44px;
    line-height: 44px;
  }

  .cus-top-nav > title {
    font-size: 16px;
    color: #b3b3b3;
    padding: 0 16px;
  }

  .cus-top-nav > nav > a {
    display: inline-block;
    color: #fff;
    box-sizing: border-box;
    line-height: 40px;
    font-size: 14px;
    font-weight: 700;

  }

  .cus-top-nav > nav > a > div {
    padding: 0 16px;
  }

  .cus-top-nav > nav > a:after {
    display: block;
    content: ' ';
    height: 2px;
    border-bottom: 2px solid #fc9626;
    transform: scale(0);
    transition-duration: 250ms;
    transition-property: transform;
    box-shadow: 0px 0px 7px #fc9626;
  }

  .cus-top-nav > nav > a:hover:after {
    transform: scale(1);
  }

  .cus-top-nav > nav > .a-selected:after {
    border-bottom: 4px solid #fc9626;
    transform: scale(1);
    margin-top: -2px;
    box-shadow: 0px 0px 7px #fc9626;
  }

  .left-menu {
    padding: 0;
    width:100%;
    height: calc(~"100% - 44px");
    position: absolute;
  }

  body {
    background-color: #e0e6ed !important;
  }
</style>
