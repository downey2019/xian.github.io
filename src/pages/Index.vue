<template>
  <Layout :pageIndex="1">
    <div class="line-one">
      <g-image
        alt="Example image"
        src="../../static/home_page/banner.png"
        class="img-one"
      />
    </div>
    <div class="line-two">
      <g-image
        src="../../static/home_page/it.png"
        class="img-two"
      />
      <div class="text-two">
        <div class="two-center">
          <p>成为铁路行业数字化转型的先锋军</p>
          <p>云原生技术专家</p>
        </div>
      </div>
    </div>
    <div class="line-three">
      <el-carousel
        :interval="3000"
        type="card"
        height="600px"
        width="80%"
      >
        <el-carousel-item>
          <div class="rotation">
            <g-image
              alt="Example image"
              src="../../static/home_page/img1.png"
              class="rotation-img"
              height="300"
              width="400"
              fit="fill"
            />
            <div
              class="rotation-text"
              style="background-color: #2856ff;"
            >
              <h1>服务为本</h1>
              <p>为应用软件研发运行服务，采用自服务方式，提供持续的技术赋能和支撑保障服务，平台团队与铁路软件研发团队共同成长。</p>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="medium">
            <g-image
              alt="Example image"
              src="../../static/home_page/img2.png"
              height="300"
              width="400"
              class="rotation-img"
              fit="fill"
            />
            <div
              class="rotation-text"
              style="background-color: #0e0270;"
            >
              <h1>立足行业</h1>
              <p>立足铁路信息技术现状和发展需要，与应用软件开发团队和技术能力共同发展，是自主建设的铁路PaaS平台。</p>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="medium">
            <g-image
              alt="Example image"
              src="../../static/home_page/img3.png"
              class="rotation-img"
              height="300"
              width="400"
              fit="fill"
            />
            <div
              class="rotation-text"
              style="background-color: #e4007f;"
            >
              <h1>能力为基</h1>
              <p>基于PaaS的铁路软件研发，结合铁路应用系统多样性和技术成熟度，建设和运营PaaS，促进能力建设和体系发展。</p>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="medium">
            <g-image
              alt="Example image"
              src="../../static/home_page/img4.png"
              class="rotation-img"
              height="300"
              width="400"
              fit="fill"
            />
            <div
              class="rotation-text"
              style="background-color: #2856ff;"
            >
              <h1>应用转化</h1>
              <p>从成功应用的典型铁路应用软件研发中沉淀，逐步规范、推广到其他铁路应用软件研发中，持续优化完善。</p>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="medium">
            <g-image
              alt="Example image"
              src="../../static/home_page/img5.png"
              class="rotation-img"
              height="300"
              width="400"
              fit="fill"
            />
            <div
              class="rotation-text"
              style="background-color: #0e0270;"
            >
              <h1>注重集成</h1>
              <p>PaaS服务模式为一站式自服务，降低门槛，与软件开发运维能力无缝集成，在源头将PaaS中公共服务能力广泛集成和应用。</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="line-four">
      <div class="line-four-bg"></div>
      <div class="line-four-center">
        <h1>了解铁路PaaS平台</h1>
        <p>集铁科院的研发实践、前沿研发理念、先进研发工具为一体的开发测试PaaS云平台面向开发者提供
          研发工具产品和服务，让软件开发质量有保障，更简单高效</p>
        <el-button
          type="primary"
          class="but"
          style="background-color: #e9a400; border:0px; display: block; margin:0 auto; margin-top:20px;margin-bottom:20px;"
        >了解详情</el-button>
        <g-image
          alt="Example image"
          src="../../static/home_page/framework.png"
          width="955"
        />
      </div>
    </div>
    <div class="line-five">
      <p style="color:#adadad;">APPLICATION</p>
      <p>行业应用场景</p>
      <div class="line-five-imgs">
        <div class="line-five-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/application1.png"
            height="400"
            width="300"
            class="rotation-img"
            fit="fill"
          />
          <div class="line-five-content">
            <h3>API应用</h3>
            <p>应用开发人员通过PaaS对API和微服务，进行开发、运行、管理和安全保障。</p>
          </div>

        </div>
        <div class="line-five-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/application2.png"
            height="400"
            width="300"
            class="rotation-img"
            fit="fill"
          />
          <div class="line-five-content">
            <h3>物联网应用</h3>
            <p>PaaS支撑各类物联网应用运行环境、开发语言、部署和管理工具。</p>
          </div>
        </div>
        <div class="line-five-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/application3.png"
            height="400"
            width="300"
            class="rotation-img"
            fit="fill"
          />
          <div class="line-five-content">
            <h3>数据分析应用</h3>
            <p>PaaS为数据分析提供工具和运行环境。</p>
          </div>
        </div>
        <div class="line-five-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/application4.png"
            height="400"
            width="300"
            class="rotation-img"
            fit="fill"
          />
          <div class="line-five-content">
            <h3>移动互联网应用</h3>
            <p>PaaS提供移动应用前、后端开发框架、运行环境和APP分发管理工具等。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="line-six">
      <p style="color:#adadad;">PROJECT CASE</p>
      <p>项目案例</p>
      <div class="line-six-imgs">
        <div class="line-six-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/case1.png"
            height="170"
            width="320"
            class="rotation-img"
            fit="fill"
          />
          <span>川藏铁路技术创新协作平台</span>
        </div>
        <div class="line-six-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/case2.png"
            height="170"
            width="320"
            class="rotation-img"
            fit="fill"
          />
          <span>财务信息系统自助服务平台</span>
        </div>
        <div class="line-six-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/case3.png"
            height="170"
            width="320"
            class="rotation-img"
            fit="fill"
          />
          <span>国铁招商平台二期</span>
        </div>
        <div class="line-six-img">
          <g-image
            alt="Example image"
            src="../../static/home_page/case4.png"
            height="170"
            width="320"
            class="rotation-img"
            fit="fill"
          />
          <span>网络安全和信息化管理信息系统</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '首页'
  }
}
</script>

<style scoped>
.line-one {
  max-height: 700px;
}
.img-one {
  display: block;
  width: 100%;
  max-height: 700px;
}

.line-two {
  background-color: rgb(177, 0, 177);
  display: flex;
}
.img-two {
  width: 50%;
  display: block;
}
.text-two {
  width: 50%;
  font-family: PingFangSC-Semibold;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.two-center {
  width: 650px;
  text-align: left;
}

.line-three {
  width: 80%;
  height: 650px;
  padding: 50px 0 50px 0;
  padding-left: 10%;
  padding-right: 10%;
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
  background-color: #99a9bf;
  width: 400px;
  margin-left: 7%;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  width: 400px;
  margin-left: 7%;
}
.rotation {
  width: 100%;
  height: 100%;
}

.rotation-Img {
  width: 100%;
  height: 50%;
  object-fit: cover;
}
.rotation-text {
  /* width: 400px; */
  height: 300px;
  padding: 30px;
  color: #fff;
  top: 300px;
  position: absolute;
}

.line-four {
  position: relative;
  width: 100%;
  height: 900px;
}
.line-four-bg {
  width: 100%;
  height: 900px;
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
  align-items: center;
}
.line-five p {
  text-align: center;
  font-size: 30px;
  font-family: PingFangSC-Medium;
  color: #333;
}
.line-five-imgs {
  display: flex;
  justify-content: center;
}
.line-five-img {
  width: 300px;
  height: 400px;
  background-color: #000000;
  /* opacity: 0.6; */
  margin-left: 20px;
  position: relative;
}
.line-five-content {
  top: 100px;
  width: 300px;
  height: 300px;
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
  height: 400px;
  align-items: center;
}
.line-six p {
  text-align: center;
  font-size: 30px;
  font-family: PingFangSC-Medium;
  color: #333;
}
.line-six-imgs {
  display: flex;
  justify-content: center;
}
.line-six-img {
  width: 320px;
  height: 400px;
  text-align: center;
}
.line-six-img span {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #333;
}
</style>
