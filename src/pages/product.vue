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
      <h2>了解铁路PaaS平台</h2>
      <p>铁路开发测试平台是基于Kubernetes技术，与微服务、容器无缝融合，兼容不同基础设施的开发运维一体化企业级PaaS平台为企业IT的开发、测试、部署、运维、管理等能力提供数化转型核心支撑，实现基于PaaS的铁路软件研发与交付。</p>
    </div>
    <div class="line-three">
      <span style="font-weight: 500;">解决的痛点</span>
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
            <p style="font-size:20px; margin-top:10px;">实现研发全过程的闭环管理</p>
            <p>通过配置管理平台提供的统一接口，获取代码仓库、持续集成引擎、持续部署引擎、源代码静态检查工具的实时数据，实现了项目计划与研发进度之间的自动化关联，形成闭环管理。</p>
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
            <p style="font-size:20px; margin-top:10px;">构建完整的持续集成测试和部署工具链</p>
            <p>以应用为中心的应用发布和全生命周期管理，提供容器/非容器应用发布和管理、资源申请、应用架构守护、灰度发布、流程管控等能力，让软件更简单，快捷，安全，高效的交付。</p>
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
            <p style="font-size:20px; margin-top:10px;">丰富了中间件工具提升软件研发效率</p>
            <p>云计算场景下基于开源方案提供了API网关、认证授权、LDAP、对象存储、全文检索、流程引擎等中间件服务，构建“平台+应用”的模式以及平台服务于应用的能力，降低应用开发的工作量和难度，提升软件研发效率。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="line-four">
      <span style="font-weight: 500;"> 我们的优势</span>
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
            <p>为铁路软件开发特点</p>
            <p>量身打造，降低门槛</p>
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
            <p>与铁路业务共同持续</p>
            <p>发展，降低成本</p>
          </div>
        </div>
      </div>
    </div>
    <div class="line-five">
      <span> 产品矩阵</span>
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
              <span>项目协作平台</span>
            </div>
          </template>
          <div class="line-five-content">
            <p>提供工作项协同、迭代跟踪、工作流、统计报表等功能，帮助研发团队更快更好地交付产品。使用团队协作与项目管理工具，高效协同生产，提高交付效率。</p>
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
              /><span>容器编排平台</span>
            </div>
          </template>
          <div class="line-five-content">
            <p>一站式的完备的分布式系统支撑平台， 支持多层安全防护、准入机制、多租户应用支撑， 助企业降低 IT 成本，提升运维效率 </p>
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
              /><span>开发者平台</span>
            </div>
          </template>
          <div class="line-five-content">
            <p>面向开发者打造的一站式开发平台，实现企业内技术共享、框架复用，做到开发的规范，快速上手、高效交付，助力企业快速开发交付分布式应用系统</p>
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
              /><span>持续交付平台</span>
            </div>
          </template>
          <div class="line-five-content">
            <p>企业级持续集成和持续交付工具，支持应用架构守护、灰度发布、流程管控等能力，让您的软件简单，快捷，安全，高效的交付</p>
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
  width: 1200px;
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
  height: 450px;
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
  width: 1300px;
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
  top: 90px;
  right: calc((100% - 1100px) / 2);
  position: absolute;
}
.line-four-text2 {
  top: 420px;
  left: calc((100% - 1100px) / 2);
  position: absolute;
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