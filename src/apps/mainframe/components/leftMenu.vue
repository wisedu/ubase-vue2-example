<template>
  <div class="main-frame">
    <ul class="menu-level1">
      <li v-for="menu in menus">
        <div class="menu-label1" @click="expand(menu)">
          <i class="iconfont" :class="'icon-'+menu.icon"></i>
          <span>{{menu.title}}</span>
          <span class="arrow" :class="{'expanded':menu.visible, 'unexpanded':!menu.visible }">
            <i class="iconfont icon-keyboardarrowright"></i>
          </span>
        </div>
        <ul v-if="menu.subMenus && menu.visible" class="menu-level2">
          <li v-for="subMenu in menu.subMenus" @click="$emit('on-selected')">
            <div class="menu-label2">
              <span>{{subMenu.title}}</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      menus: Array
    },

    created(){

    },

    methods: {
      expand(menu){
        menu.visible = !menu.visible
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .main-frame {
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    color: #fff;
    background-color: #333;
    width: 200px;
    height: 100%;
    ul {
      padding: 0;
      list-style: none !important;
    }
    .menu-level2 .menu-label2 {
      padding-left: 16px;
    }

    .menu-label1 {
      padding-left: 8px;
      position: relative;
      background-color: #666;
      height: 24px;
      line-height: 24px;

      .arrow {
        position: absolute;
        right: 8px;
      }

      .expanded{
        transition: transform .1s linear;
        transform: rotate(90deg);
      }

      .unexpanded{
        transition: transform .1s linear;
        transform: rotate(0deg);
      }
    }

    .menu-label2 {
      cursor: default;
      height: 24px;
      line-height: 24px;

      &:hover {
        background-color: #666;
      }
    }
  }


</style>
