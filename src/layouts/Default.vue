<template>
  <div class="layout">
    <header class="header">
      <div
        @click="gotoLogo"
        style="display:flex;"
      >
        <img
          src="../../static/logo/logo.svg"
          style="width:135px;height:80px"
        >
        </img>
        <h2 class="h_title">铁科经纬（西安）信息科技有限公司</h2>
      </div>
      <nav class="nav">
        <g-link
          class="nav_link"
          to="/"
          :style="$props.pageIndex == 1?'color: #f9bb00': 'color:#fff'"
        >首页</g-link>
        <g-link
          class="nav_link"
          to="/product/"
          :style="$props.pageIndex == 2?'color: #f9bb00': 'color:#fff'"
        >产品</g-link>
        <g-link
          class="nav_link"
          to="/standard/"
          :style="$props.pageIndex == 3?'color: #f9bb00': 'color:#fff'"
        >规范</g-link>
        <g-link
          class="nav_link"
          to="/train/"
          :style="$props.pageIndex == 4?'color: #f9bb00': 'color:#fff'"
        >培训</g-link>
      </nav>
      <span
        type="primary"
        class="but"
        :style="$props.pageIndex == 5?'background-color:#f8b551':'background-color: rgb(0, 0, 255)'"
        style="border:0px;"
      >
        <g-link
          class="nav_link_but"
          to="/content/"
        >联系我们</g-link>
      </span>
    </header>
    <slot />
    <footer class="footer">
      <p>COPYRIGHT©2001-2021 CHINA ACADEMY OF RAILWAY SCIENCES CORPORATION LIMITED，ALL RIGHTS RESERVED</p>
      <p>中国铁道科学研究院集团有限公司 版权所有</p>
      <p>京ICP备05020493号</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
  props: ['pageIndex'],
  data () {
    return {

    }
  },
  methods: {
    gotoLogo () {
      this.$router.push('/logo/')
    }
  }

};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  width: 100%;
  margin: 0 auto;
  min-width: 1200px;
  /* padding-left: 20px;
  padding-right: 20px; */
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: rgb(66, 22, 127);
}

.h_title {
  color: #fff;
  font-family: HiraginoSansGB-W6;
  font-size: 24px;
}

.nav {
  margin-left: 100px;
  margin-right: 50px;
}

.nav_link,
.nav_link_but {
  margin-left: 20px;
  margin-right: 20px;
  color: #fff;
  font-family: PingFangSC-Medium;
  font-size: 22px;
  text-decoration: none;
}
.nav_link:hover {
  color: #f9bb00 !important;
}
.but {
  width: 130px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  font-size: 22px;
}
.but:hover {
  background-color: #f8b551 !important;
}
.footer {
  width: 100%;
  height: 240px;
  padding-top: 60px;
  background-color: #10055f;
  text-align: center;
  color: #fff;
  line-height: 24px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
}
</style>
