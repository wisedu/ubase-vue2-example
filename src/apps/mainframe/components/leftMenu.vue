<template>
  <div class="main-frame">
    <ul class="menu-level1">
      <li v-for="menu in menus">
        <div class="menu-label1" @click="expand(menu)" :class="{'selected':checkLevel1Selected(menu), 'testcolor':miniMode&&checkLevel1Selected(menu)}">
          <i class="iconfont" :class="'icon-'+menu.icon"></i>
          <span class="level1-title">{{menu.title}}</span>
          <span class="arrow" :class="{'expanded':menu.expanded, 'unexpanded':!menu.expanded }">
            <i class="iconfont icon-keyboardarrowup"></i>
          </span>
        </div>
        <ul class="menu-level2" :class="{'expanded':!(menu.children && menu.expanded && !miniMode)}"
            :style="{'max-height':getMaxHeight(menu)}">
          <li v-for="subMenu in menu.children" @click="selected(subMenu)" :class="{'selected':subMenu.selected}">
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
      menus: Array,
      miniMode:Boolean
    },

    created(){

    },

    methods: {
      expand(menu){
        this.menus.forEach((item) => {
          if (menu.id == item.id) {
            menu.expanded = !menu.expanded
          } else {
            item.expanded = false
          }
        })
      },

      selected(menu){
        this.menus.forEach((item) => {
          if (item.children) {
            item.children.forEach((item2) => {
              item2.selected = false
            })
          }
        })

        menu.selected = true
        this.$emit('on-selected', menu)
      },

      checkLevel1Selected(menu){
        var selected = false
        menu.children.forEach((item) => {
          if (item.selected) {
            selected = true
          }
        })
        return selected
      },

      getMaxHeight(menu){
        if (!menu.expanded) {
          return '0px'
        } else {
          var height = (menu.children.length * 48)
          if (height > 240) {
            height = 240
          }
          return height +'px'
        }
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .testcolor{
    background-color: #4B8EFF!important;
  }
  .main-frame {
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    color: #9198A6;
    background-color: #2D303A;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    font-size: 12px;
    ul {
      padding: 0;
      list-style: none !important;
    }
    .menu-level2 .menu-label2 {
      padding-left: 33px;
    }

    .menu-level1 {
      overflow: hidden;
      min-width: 200px;
    }

    .menu-level2 {
      transition: all 0.12s ease, 0.12s ease;
      margin: 0;
      padding: 0;
      list-style: none;
      overflow-y: scroll;
      overflow-x: hidden;
      min-width: 200px;
      width: calc(~"100% + 18px");

      &.expanded {
        max-height: 0px !important;
        overflow: hidden;
      }
      .selected {
        color: #fff;
        background-color: #4B8EFF;
      }
    }

    .menu-label1 {
      position: relative;
      background-color: #404453;
      height: 56px;
      line-height: 56px;
      padding-left: 12px;

      &.selected {
        color: #fff;
      }

      .level1-title {
        display: inline-block;
        margin-left: 14px;
      }
      .arrow {
        position: absolute;
        right: 8px;
      }

      .expanded {
        transition: transform .1s linear;
        transform: rotate(180deg);
      }

      .unexpanded {
        transition: transform .1s linear;
        transform: rotate(0deg);
      }
    }

    .menu-label2 {
      cursor: default;
      height: 48px;
      line-height: 48px;

      &:hover {
        background-color: rgba(200, 200, 200, 0.1);
      }
    }
  }


</style>
