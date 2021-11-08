/*
 * @Author: zf 
 * @Date: 2021-10-21 16:35:40 
 * @Last Modified by: zf
 * @Last Modified time: 2021-11-05 14:49:46
 * 首页
 */
<template>
  <Layout :pageIndex="1">
    <div class="line-one">
      <div class="line-one-inner">
        <g-image
          alt="Example image"
          src="../../static/home_page/banner.png"
          class="img-one"
        />
      </div>
    </div>
    <div class="line-two">
      <g-image
        src="../../static/home_page/it.png"
        class="img-two"
      />
      <div class="text-two">
        <div class="two-center">
          <p>{{$t('page_index.line_two.span1')}}</p>
          <p>{{$t('page_index.line_two.span2')}}</p>
        </div>
      </div>
    </div>
    <div class="line-three">
      <el-carousel
        :interval="3000"
        type="card"
        height="600px"
        width="1400px"
        class="el-carousel"
      >
        <el-carousel-item>
          <div class="rotation">
            <g-image
              alt="Example image"
              src="../../static/home_page/img1.png"
              class="rotation-img three-image"
              fit="fill"
              style="margin-left:25px;"
            />
            <div
              class="rotation-text"
              style="background-color: #2856ff;"
            >
              <h1 v-show="$i18n.locale =='zh-cn'">{{$t('page_index.line_three.h1')}}</h1>
              <b v-show="$i18n.locale == 'en-us'">{{$t('page_index.line_three.h1')}}</b>
              <p>{{$t('page_index.line_three.p1')}}</p>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <g-image
            alt="Example image"
            src="../../static/home_page/img2.png"
            class="rotation-img three-image"
            fit="fill"
            style="margin-left:25px;"
          />
          <div
            class="rotation-text"
            style="background-color: #0e0270;"
          >
            <h1 v-show="$i18n.locale =='zh-cn'">{{$t('page_index.line_three.h2')}}</h1>
            <b v-show="$i18n.locale == 'en-us'">{{$t('page_index.line_three.h2')}}</b>
            <p>{{$t('page_index.line_three.p2')}}</p>
          </div>

        </el-carousel-item>
        <el-carousel-item>

          <g-image
            alt="Example image"
            src="../../static/home_page/img3.png"
            class="rotation-img  three-image"
            fit="fill"
            style="margin-left:25px;"
          />
          <div
            class="rotation-text"
            style="background-color: #e4007f;"
          >
            <h1 v-show="$i18n.locale =='zh-cn'">{{$t('page_index.line_three.h3')}}</h1>
            <b v-show="$i18n.locale == 'en-us'">{{$t('page_index.line_three.h3')}}</b>
            <p>{{$t('page_index.line_three.p3')}}</p>
          </div>

        </el-carousel-item>
        <el-carousel-item>

          <g-image
            alt="Example image"
            src="../../static/home_page/img4.png"
            class="rotation-img three-image"
            fit="fill"
            style="margin-left:25px;"
          />
          <div
            class="rotation-text"
            style="background-color: #2856ff;"
          >
            <h1 v-show="$i18n.locale =='zh-cn'">{{$t('page_index.line_three.h4')}}</h1>
            <b v-show="$i18n.locale == 'en-us'">{{$t('page_index.line_three.h4')}}</b>
            <p>{{$t('page_index.line_three.p4')}}</p>
          </div>

        </el-carousel-item>
        <el-carousel-item>

          <g-image
            alt="Example image"
            src="../../static/home_page/img5.png"
            class="rotation-img three-image"
            fit="fill"
            style="margin-left:25px;"
          />
          <div
            class="rotation-text"
            style="background-color: #0e0270; top:298px;"
          >
            <h1 v-show="$i18n.locale =='zh-cn'">{{$t('page_index.line_three.h5')}}</h1>
            <b v-show="$i18n.locale == 'en-us'">{{$t('page_index.line_three.h5')}}</b>
            <p>{{$t('page_index.line_three.p5')}}</p>
          </div>

        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="line-four">
      <div class="line-four-bg"></div>
      <div class="line-four-center">
        <h1>{{$t('page_index.line_fore.h1')}}</h1>
        <p>{{$t('page_index.line_fore.p')}}</p>
        <el-button
          type="primary"
          class="but"
          @click="gotoProsuct"
          style="background-color: #e9a400; border:0px; display: block; margin:0 auto; margin-top:20px;margin-bottom:20px;"
        >{{$t('page_index.line_fore.but')}}</el-button>
        <g-image
          v-if="learnMoreFlag"
          alt="Example image"
          src="../../static/home_page/framework.png"
          width="955"
        />
        <g-image
          v-else
          alt="Example image"
          src="../../static/home_page/learn-more2.jpg"
          width="955"
          class="learn-more-en-pic"
        />
      </div>
    </div>
    <div class="line-five">
      <p style="color:#adadad;">APPLICATIONS</p>
      <p>{{$t('page_index.line_five.p1')}}</p>
      <div class="line-five-imgs">
        <div class="line-five-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/application1.png"
            height="400"
            width="280"
            class="rotation-img"
            fit="fill"
          />
          <div class="line-five-content">
            <h3>{{$t('page_index.line_five.h2')}}</h3>
            <p>{{$t('page_index.line_five.p2')}}</p>
          </div>

        </div>
        <div class="line-five-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/application2.png"
            height="400"
            width="280"
            class="rotation-img"
            fit="fill"
          />
          <div class="line-five-content">
            <h3>{{$t('page_index.line_five.h3')}}</h3>
            <p>{{$t('page_index.line_five.p3')}}</p>
          </div>
        </div>
        <div class="line-five-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/application3.png"
            height="400"
            width="280"
            class="rotation-img"
            fit="fill"
          />
          <div class="line-five-content">
            <h3>{{$t('page_index.line_five.h4')}}</h3>
            <p>{{$t('page_index.line_five.p4')}}</p>
          </div>
        </div>
        <div class="line-five-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/application4.png"
            height="400"
            width="280"
            class="rotation-img"
            fit="fill"
          />
          <div class="line-five-content">
            <h3>{{$t('page_index.line_five.h5')}}</h3>
            <p>{{$t('page_index.line_five.p5')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="line-six">
      <p style="color:#adadad;">PROJECT CASES</p>
      <p>{{$t('page_index.line_six.p1')}}</p>
      <div class="line-six-imgs">
        <div class="line-six-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/case1.png"
            height="170"
            width="280"
            class="rotation-img"
            fit="fill"
          />
          <span>{{$t('page_index.line_six.sp1')}}</span>
        </div>
        <div class="line-six-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/case2.png"
            height="170"
            width="280"
            class="rotation-img"
            fit="fill"
          />
          <span>{{$t('page_index.line_six.sp2')}}</span>
        </div>
        <div class="line-six-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/case3.png"
            height="170"
            width="280"
            class="rotation-img"
            fit="fill"
          />
          <span>{{$t('page_index.line_six.sp3')}}</span>
        </div>
        <div class="line-six-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/case4.png"
            height="170"
            width="280"
            class="rotation-img"
            fit="fill"
          />
          <span>{{$t('page_index.line_six.sp4')}}</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '首页'
  },
  data () {
    return {
      findLang: this.$route.path.split('/')[1],
      learnMoreFlag: true
    }
  },
  created () {
    // const lang = this.$route.path.split('/')[1]
    // if (lang === 'en-us') {
    //   this.learnMoreFlag = false
    //   console.log(this.learnMoreFlag)
    // } else if (lang === 'zh-cn') {
    //   this.learnMoreFlag = true
    //   console.log(this.learnMoreFlag)
    // }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to)
    // if (to.path === '/en-us/') {
    //   this.learnMoreFlag = false
    // } else if (to.path === '/zh-cn/') {
    //   this.learnMoreFlag = true
    // }
    next(vm => {
      if (to.path === '/en-us/') {
        vm.learnMoreFlag = false
        console.log(vm.learnMoreFlag)
      } else if (to.path === '/zh-cn/') {
        vm.learnMoreFlag = true
        console.log(vm.learnMoreFlag)
      }
    })
  },
  methods: {
    gotoProsuct () {
      this.$router.push(this.$tp('/product/'))
    }
  }
}
</script>

<style lang="less" scoped>
.line-one-inner {
  width: 100%;
}
.img-one {
  display: block;
  width: 100%;
  height: 34vw;
  min-height: 420.3px;
}

.line-two {
  background-color: rgb(177, 0, 177);
  display: flex;
}
.img-two {
  width: 50%;
  min-height: 216px;
  height: 16.4vw;
  display: block;
}
.text-two {
  box-sizing: border-box;
  padding-left: 7.56vw;
  width: 50%;
  min-height: 216px;
  height: 16.4vw;
  font-family: PingFangSC-Semibold;
  font-size: 2vw;
  display: flex;
  align-items: center;
  justify-content: start;
  color: #fff;
}
.two-center {
  // width: 650px;
  text-align: left;
}

.line-three {
  box-sizing: border-box;
  width: 1200px;
  height: 700px;
  padding: 50px 0 50px 0;
  /* padding-left: 10%;
  padding-right: 10%; */
  max-width: 1400px;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
  width: 450px;
  margin-left: 80px;
  padding-left: 25px;
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-color: #d3dce6; */
  width: 450px;
  margin-left: 80px;
  padding-left: 25px;
}
.rotation {
  width: 100%;
  height: 100%;
}

.rotation-img.three-image {
  width: 100%;
  display: block !important;
  height: 280px !important;
  width: 360px !important;
  object-fit: cover;
  margin-left: 25px;
}
.rotation-text {
  width: 300px;
  height: 180px;
  padding: 30px;
  color: #fff;
  margin-left: 25px;
}
.rotation-text h1 {
  font-weight: normal;
}
.rotation-text b {
  font-size: 18px;
}
.rotation-text p {
  font-size: 14px;
}
.line-four {
  position: relative;
  width: 100%;
  height: 1000px;
  .learn-more-en-pic {
    width: 955px;
    height: 650px;
  }
}
.line-four-bg {
  width: 100%;
  height: 1000px;
  opacity: 0.2;
  background-image: url("../../static/home_page/bg_img.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.line-four-center {
  position: absolute;
  top: 60px;
  height: 600px;
  width: 100%;
  text-align: center;
  color: #333;
  font-family: PingFangSC-Medium;
}
.line-four-center h1 {
  font-size: 36px;
  font-weight: 400;
}
.line-four-center p {
  width: 955px;
  font-size: 22px;
  margin: 0 auto;
}
.line-five {
  height: 600px;
  width: calc(100% - 100px);
  padding: 50px;
  padding-top: 100px;
  align-items: center;
}
.line-five p {
  text-align: center;
  margin: 0;
  font-size: 30px;
  font-family: PingFangSC-Medium;
  color: #333;
}
.line-five-imgs {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.line-five-img {
  width: 280px;
  height: 400px;
  background-color: #000000;
  /* opacity: 0.6; */
  margin-left: 20px;
  position: relative;
}
.line-five-content {
  top: 80px;
  margin: 0 auto;
  width: 280px;
  /* height: 300px; */
  position: absolute;
  bottom: 0px;
}
.line-five-content p {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  letter-spacing: 0px;
  color: #fff;
  text-align: center;
  padding: 40px;
}
.line-five-content h3 {
  font-family: PingFangSC-Medium;
  font-size: 20px;
  letter-spacing: 0px;
  color: #fff;
  text-align: center;
}
.line-six {
  width: 100%;
  align-items: center;
  // padding-bottom: 300px;
}
.line-six p {
  text-align: center;
  font-size: 30px;
  margin: 0;
  font-family: PingFangSC-Medium;
  color: #333;
}
.line-six-imgs {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.line-six-img {
  width: 300px;
  height: 400px;
  text-align: center;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}
.line-six-img span {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #333;
}
</style>
