<template>
  <div>
    <div class="header">
      <span class="logo">
        <img :src="logo" alt="">
      </span>
      <span class="name">招生管理平台</span>
    </div>
    <div class="main">
      <div class="login-wrap">
        <div>账号管理</div>
        <div></div>
      </div>
    </div>
    <div class="footer">
      版权信息©2015江苏金智教育信息股份有限公司苏ICP备10204514号
    </div>
  </div>
</template>
<script>
  export default {

    data: function () {
      return {
        logo: require('statics/images/logo.png')
      }
    }

  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .header {
    height: 64px;
    margin-left: 200px;
    line-height: 64px;

    .logo {
      height: 39px;
      display: inline-block;
      vertical-align: middle;
    }

    .name {
      font-weight: 700;
      font-size: 18px;
      margin-left: 16px;
    }
  }

  .main {
    width: 100%;
    height: 570px;
    background-image: url("../../statics/images/bac.png");
    position: relative;

    .login-wrap {
      width: 300px;
      border-radius: 8px;
      height: 300px;
      position: absolute;
      right: 200px;
      top: 96px;
      background-color: #fff;
    }
  }

  .footer {
    text-align: center;
    font-size: 12px;
    color: #bbb;
    bottom: 8px;
    position: fixed;
    width: 100%;
  }
</style>
