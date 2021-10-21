<template>
  <Layout :pageIndex=2>
    <div class="line-one">
      <g-image
        alt="Example image"
        src="../../static/product_page/banner.png"
        class="img-one"
      />
    </div>
    <div class="line-two">
      <h2>{{$t('page_product.line_two.h')}}</h2>
      <p>{{$t('page_product.line_two.p')}}</p>
    </div>
    <div class="line-three">
      <span style="font-weight: 500;">{{$t('page_product.line_three.sp')}}</span>
      <div class="line-three-imgs">
        <div
          class="line-three-img"
          style="background-color:#2856ff;"
        >
          <g-image
            alt="Example image"
            src="../../static/product_page/lineThree1.png"
            class="img-one"
          />
          <div class="line-three-text">
            <p style="font-size:20px; margin-top:10px;">{{$t('page_product.line_three.p1')}}</p>
            <p>{{$t('page_product.line_three.p2')}}</p>
          </div>

        </div>
        <div
          class="line-three-img"
          style="background-color:#0e0270;"
        >
          <g-image
            alt="Example image"
            src="../../static/product_page/lineThree2.png"
            class="img-one"
          />
          <div class="line-three-text">
            <p style="font-size:20px; margin-top:10px;">{{$t('page_product.line_three.p3')}}</p>
            <p>{{$t('page_product.line_three.p4')}}</p>
          </div>
        </div>
        <div
          class="line-three-img"
          style="background-color:#e4007f;"
        >
          <g-image
            alt="Example image"
            src="../../static/product_page/lineThree3.png"
            class="img-one"
          />
          <div class="line-three-text">
            <p style="font-size:20px; margin-top:10px;">{{$t('page_product.line_three.p5')}}</p>
            <p>{{$t('page_product.line_three.p6')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="line-four">
      <span style="font-weight: 500;">{{$t('page_product.line_four.sp')}}</span>
      <div class="line-four-imgs">
        <div
          class="line-four-img"
          @mouseenter="img1Hover=true"
          @mouseleave="img1Hover=false"
        >
          <g-image
            alt="Example image"
            src="../../static/product_page/advantage1.png"
            height="300"
            fit="fill"
          />
          <transition name="advantageShow">
            <g-image
              alt="Example image"
              src="../../static/product_page/advantage1_hover.png"
              height="300"
              fit="fill"
              class="img-hover1"
              v-show="img1Hover"
            />
          </transition>
          <div class="line-four-text1">
            <p>{{$t('page_product.line_four.p1')}}</p>
          </div>
        </div>
        <div
          class="line-four-img"
          @mouseenter="img2Hover=true"
          @mouseleave="img2Hover=false"
          style="margin-top:40px;"
        >
          <g-image
            alt="Example image"
            src="../../static/product_page/advantage2.png"
            height="300"
            fit="fill"
          />
          <transition name="advantageShow">
            <g-image
              alt="Example image"
              src="../../static/product_page/advantage2_hover.png"
              height="300"
              fit="fill"
              class="img-hover2"
              v-show="img2Hover"
            />
          </transition>
          <div class="line-four-text2">
            <span>{{$t('page_product.line_four.p2')}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="line-five">
      <span> {{$t('page_product.line_five.sp')}}</span>
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        style="width: 1000px; margin-top:50px;"
      >
        <el-tab-pane name="cooperation">
          <template slot="label">
            <div class="line-five-label">
              <g-image
                alt="Example image"
                src="../../static/product_page/cooperation.png"
                width="42"
                height="35"
                fit="fill"
              />
              <span> {{$t('page_product.line_five.sp1')}}</span>
            </div>
          </template>
          <div class="line-five-content">
            <p> {{$t('page_product.line_five.p1')}}</p>
            <el-carousel
              indicator-position="outside"
              height='550px'
              style="width: 1000px;"
            >
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/cooperation_content1.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/cooperation_content2.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/cooperation_content3.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
            </el-carousel>

          </div>
        </el-tab-pane>
        <el-tab-pane name="container">
          <template slot="label">
            <div class="line-five-label">
              <g-image
                alt="Example image"
                src="../../static/product_page/container.png"
                width="42"
                height="35"
                fit="fill"
              /><span> {{$t('page_product.line_five.sp2')}}</span>
            </div>
          </template>
          <div class="line-five-content">
            <p> {{$t('page_product.line_five.p2')}}</p>
            <el-carousel
              indicator-position="outside"
              height='550px'
              style="width: 1000px;"
            >
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/container_content.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/container_content1.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/container_content2.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
            </el-carousel>

          </div>
        </el-tab-pane>
        <el-tab-pane name="development">
          <template slot="label">
            <div class="line-five-label">
              <g-image
                alt="Example image"
                src="../../static/product_page/development.png"
                width="42"
                height="35"
                fit="fill"
              /><span> {{$t('page_product.line_five.sp3')}}</span>
            </div>
          </template>
          <div class="line-five-content">
            <p> {{$t('page_product.line_five.p3')}}</p>
            <el-carousel
              indicator-position="outside"
              height='550px'
              style="width: 1000px;"
            >
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/development_content1.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/development_content2.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/development_content3.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/development_content4.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
            </el-carousel>

          </div>
        </el-tab-pane>
        <el-tab-pane name="pay"> <template slot="label">
            <div class="line-five-label">
              <g-image
                alt="Example image"
                src="../../static/product_page/pay.png"
                width="42"
                height="35"
                fit="fill"
              /><span> {{$t('page_product.line_five.sp4')}}</span>
            </div>
          </template>
          <div class="line-five-content">
            <p> {{$t('page_product.line_five.p4')}}</p>
            <el-carousel
              indicator-position="outside"
              height='550px'
              style="width: 1000px;"
            >
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/pay_content.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/pay_content1.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
              <el-carousel-item>
                <g-image
                  alt="Example image"
                  src="../../static/product_page/pay_content2.png"
                  width="1000"
                  height="550"
                  fit="fill"
                />
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '产品'
  },
  data () {
    return {
      img1Hover: false,
      img2Hover: false,
      activeName: 'cooperation'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped >
.line-one {
  width: 100%;
  /* height: 700px; */
  /* max-height: 700px; */
}
.img-one {
  display: block;
  width: 100%;
  /* max-height: 700px; */
}

.line-two {
  margin-top: 80px;
  font-family: PingFangSC-Medium;
  font-weight: 400;
  color: #333;
  align-items: center;
}
.line-two h2 {
  text-align: center;
  font-size: 40px;
  line-height: 100px;
  font-weight: 500;
}
.line-two p {
  font-size: 24px;
  line-height: 36px;
  width: 1100px;
  padding: 50px;
  margin: 0 auto;
}

.line-three {
  margin-top: 100px;
  font-family: PingFangSC-Medium;
  color: #333;
  text-align: center;
  font-size: 30px;
}
.line-three-imgs {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.line-three-img {
  margin: 7.5px;
  width: 390px;
  /* height: 450px; */
  background-color: rgb(185, 33, 33);
  color: #fff;
  font-family: PingFangSC-Regular;
  font-size: 14px;
}
.line-three-text {
  padding: 20px;
  text-align: left;
}

.line-four {
  margin-top: 100px;
  font-family: PingFangSC-Medium;
  color: #333;
  text-align: center;
  align-items: center;
  font-size: 30px;
}
.line-four-imgs {
  height: 600px;
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  position: relative;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #ffffff;
}
.img-hover1 {
  top: 3px;
  left: calc((100% - 1205px) / 2);
  position: absolute;
}
.img-hover2 {
  top: 339px;
  right: calc((100% - 1209px) / 2);
  position: absolute;
}
.line-four-text1 {
  top: 20px;
  right: calc((100% - 1120px) / 2);
  height: 280px;
  width: 300px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  line-height: 50px;
}
.line-four-text2 {
  top: 350px;
  left: calc((100% - 1140px) / 2);
  position: absolute;
  height: 280px;
  width: 300px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  line-height: 50px;
}
.line-five {
  margin-top: 100px;
  font-family: PingFangSC-Medium;
  color: #333;
  font-weight: 500;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  font-size: 30px;
}
.line-five-label {
  width: 210px;
  height: 60px;
  color: #333;
  font-weight: 500;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
}
>>> .el-tabs__nav {
  height: 80px !important;
}
.line-five-content {
  height: 800px;
  width: 100%;
  /* justify-content: center; */
  padding-top: 50px;
  flex-direction: column;
  display: flex;
  align-items: center;
}
.line-five-content p {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #666666;
  margin-bottom: 50px;
  margin-top: 0;
}

.advantageShow-leave-active,
.advantageShow-enter-active {
  transition: all 0.3s ease;
}
.advantageShow-leave-active {
  height: 0px !important;
}
.advantageShow-leave {
  height: 0px;
}
.advantageShow-enter {
  height: 0px !important;
}
.advantageShow-enter-active {
  height: 0px;
}

.el-carousel__item h3 {
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>