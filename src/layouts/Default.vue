<template>
  <div class="layout">
    <header class="header">
      <div
        @click="gotoLogo"
        style="display:flex; align-items: center;"
      >
        <img
          src="../../static/logo/logo.svg"
          style="width:135px;height:80px"
        >
        </img>
        <h2
          class="h_title"
          style="width:400px"
        >{{ $t('menu.title')}}</h2>
      </div>
      <nav class="nav">
        <g-link
          class="nav_link"
          :to="$tp('/')"
          :style="$props.pageIndex == 1?'color: #f9bb00': 'color:#fff'"
        >{{ $t('menu.home1')}}</g-link>
        <g-link
          class="nav_link"
          :to="$tp('/product/')"
          :style="$props.pageIndex == 2?'color: #f9bb00': 'color:#fff'"
        >{{ $t('menu.home2')}}</g-link>
        <g-link
          class="nav_link"
          :to="$tp('/standard/')"
          :style="$props.pageIndex == 3?'color: #f9bb00': 'color:#fff'"
        >{{ $t('menu.home3')}}</g-link>
        <g-link
          class="nav_link"
          :to="$tp('/train/')"
          :style="$props.pageIndex == 4?'color: #f9bb00': 'color:#fff'"
        >{{ $t('menu.home4')}}</g-link>
      </nav>
      <span
        type="primary"
        class="but"
        :style="$props.pageIndex == 5?'background-color:#f8b551':'background-color: rgb(0, 0, 255)'"
        style="border:0px; "
      >
        <g-link
          class="nav_link_but"
          :to="$tp('/content/')"
          style="font-size: 18px;"
        >{{ $t('menu.home5')}}</g-link>
      </span>
      <el-dropdown
        @command="changeLan"
        style="width: 110px;"
      >
        <span class="el-dropdown-link">
          {{ $t('menu.home6')}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="chinese">中文</el-dropdown-item>
          <el-dropdown-item command="english">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
    },
    changeLan (language) {
      this.$i18n.locale = language
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
  justify-content: space-around;
  align-items: center;
  /* height: 80px; */
  background-color: rgb(66, 22, 127);
}

.h_title {
  color: #fff;
  font-family: HiraginoSansGB-W6;
  font-size: 24px;
}

.nav {
  /* margin-left: 20px;
  margin-right: 20px; */
  width: 450px;
  display: flex;
  justify-content: space-between;
  /* margin: 0 auto; */
}

.nav_link,
.nav_link_but {
  /* margin-left: 15px;
  margin-right: 15px; */
  color: #fff;
  font-family: PingFangSC-Medium;
  font-size: 22px;
  text-decoration: none;
}
.nav_link:hover {
  color: #f9bb00 !important;
}
.but {
  height: 40px;
  line-height: 40px;
  border-radius: 2px;
  font-size: 22px;
  text-align: center;
  padding: 0 5px 0 5px;
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
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
