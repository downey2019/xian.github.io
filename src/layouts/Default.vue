/*
 * @Author: zf 
 * @Date: 2021-10-21 16:34:54 
 * @Last Modified by: zf
 * @Last Modified time: 2021-10-22 09:43:14
 * 导航栏
 */
<template>
  <div class="layout">
    <header class="header">
      <div class="header-center">
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
          <el-popover
            width="650"
            trigger="click"
            placement="bottom-start"
            class="my-el-popover"
            >
            <el-row class="technology-row">
              <el-col :span="6" style="textAlign: center">
                <div class="tech-tit-1 tech-tit">
                  {{$t('menu.service_title_1')}}
                </div>
                <div class="tech-btn-1 tech-btn">
                  <span @click="toTrain" class="train-nofocus" :class="{'train-focus': (trainIndex === 0)}">
                    {{$t('menu.service_content_1_1')}}
                  </span>
                </div>
              </el-col>
              <el-col :span="6" style="textAlign: center">
                <div class="tech-tit-2 tech-tit">
                  {{$t('menu.service_title_2')}}
                </div>
                <div class="tech-btn-2 tech-btn">
                  <span @click="toKubernetes('consult')" class="train-nofocus" :class="{'train-focus': (trainIndex === 1)}">
                    {{$t('menu.service_content_2_1')}}
                  </span>
                </div>
              </el-col>
              <el-col :span="6" style="textAlign: center">
                <div class="tech-tit-3 tech-tit">
                  {{$t('menu.service_title_3')}}
                </div>
                <div class="tech-btn-3 tech-btn">
                  <span @click="toKubernetes('implement')" class="train-nofocus" :class="{'train-focus': (trainIndex === 2)}">
                    {{$t('menu.service_content_3_1')}}
                  </span>
                </div>
              </el-col>
              <el-col :span="6" style="textAlign: center">
                <div class="tech-tit-4 tech-tit">
                  {{$t('menu.service_title_4')}}
                </div>
                <div class="tech-btn-4 tech-btn">
                  <span @click="toKubernetes('support')" class="train-nofocus" :class="{'train-focus': (trainIndex === 3)}">
                    {{$t('menu.service_content_4_1')}}
                  </span>
                </div>
              </el-col>
            </el-row>
            <!-- <el-button slot="reference">click 激活</el-button> -->
            <g-link
              class="nav_link"
              :style="$props.pageIndex == 4?'color: #f9bb00': 'color:#fff'"
              slot="reference"
            >{{ $t('menu.home4')}}</g-link>
          </el-popover>
          <!-- <g-link
            class="nav_link"
            :to="$tp('/train/')"
            :style="$props.pageIndex == 4?'color: #f9bb00': 'color:#fff'"
          >{{ $t('menu.home4')}}</g-link> -->
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
            <el-dropdown-item command="zh-cn">中文</el-dropdown-item>
            <el-dropdown-item command="en-us">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <slot class="slot" />
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
      trainIndex: null,
    }
  },
  created() {
    const routePath = this.$route.path.split('/')[2]
    if (routePath === 'train') {
      this.trainIndex = 0
    } else if (routePath === 'k8s-1') {
      this.trainIndex = 1
    } else if (routePath === 'k8s-2') {
      this.trainIndex = 2
    } else if (routePath === 'k8s-3') {
      this.trainIndex = 3
    } else {
      this.trainIndex = null
    }
  },
  methods: {
    gotoLogo () {
      this.$router.push('/logo/')
    },
    changeLan (language) {
      this.$i18n.locale = language
      this.$router.push({
        path: `/${language}/${this.$route.path.split('/')[2]}`
      })
    },
    toTrain () {
      const lang = this.$route.path.split('/')[1]
      this.trainIndex = 0
      this.$router.push({
        path: `/${lang}/train/`,
        query: {
          sign: 'train'
        }
      })
    },
    toKubernetes (value) {
      const lang = this.$route.path.split('/')[1]
      if (value === 'consult') {
        this.trainIndex = 1
        this.$router.push({
        path: `/${lang}/k8s-1`,
      })
      } else if (value === 'implement') {
        this.trainIndex = 2
        this.$router.push({
          path: `/${lang}/k8s-2`,
        })
      } else if (value === 'support') {
        this.trainIndex = 3
        this.$router.push({
          path: `/${lang}/k8s-3`,
        })
      }
      
    }
  }

};
</script>

<style lang="less">
body {
  box-sizing: border-box;
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
  position: relative;
  /* padding-left: 20px;
  padding-right: 20px; */
}

.header {
  position: relative;
  height: 80px;
  background-color: rgb(66, 22, 127);
}
.train-nofocus {
  cursor: pointer;
  font-size: 14px;
  color: #3454e0 !important;
  border-bottom: 2px solid #fff;
  transition: all .3s;
}
.train-focus {
  padding: 0 4px;
  border-bottom: 2px solid #3454e0;
}
.tech-tit {
  color: #333;
  font-weight: 700;
}
.tech-btn {
  padding: 12px 0;
  span {
    color: black;
    &:hover {
      // color: #3454e0;
      border-bottom: 2px solid #3454e0;
    }
  }
}

.header-center {
  position: absolute;
  width: 1200px;
  height: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.h_title {
  color: #fff;
  // font-family: HiraginoSansGB-W6;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 24px;
}

.nav {
  /* margin-left: 20px;
  margin-right: 20px; */
  width: 380px;
  display: flex;
  justify-content: space-around;
  /* margin: 0 auto; */
}

.nav_link,
.nav_link_but {
  /* margin-left: 15px;
  margin-right: 15px; */
  color: #fff;
  // font-family: PingFangSC-Medium;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
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
  padding: 0 10px 0 10px;
}
.but:hover {
  background-color: #f8b551 !important;
}
.footer {
  position: absolute;
  left: 0;
  bottom: -300px;
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  padding-top: 60px;
  background-color: #10055f;
  text-align: center;
  color: #fff;
  line-height: 24px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
}
.el-dropdown {
  text-align: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
