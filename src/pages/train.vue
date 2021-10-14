<template>
  <Layout :pageIndex=4>
    <div class="line-one">
      <g-image
        alt="Example image"
        src="../../static/train_page/banner.png"
        class="img-one"
      />
    </div>
    <div class="line-two">
      <h2>培训模型</h2>
      <p>培训课程通过理论+案例+实操的三位一体的方式，深入浅出的培养基于Kubernetes的全栈式应用研发工程师。课程内容紧跟时代发展，不断迭代更新，涵盖应用时下热门技术框架，注重案例和实操，融入大量全真项目实训，从需求分析到项目研发再到项目测试，学员可参与每个流程细节，帮助学员学会、学懂、学透。</p>
      <g-image
        alt="Example image"
        src="../../static/train_page/object.png"
        width="330"
        height="300"
        class="img-two"
      />
    </div>
    <div class="line-three">
      <h2>培训体系</h2>
      <div class="line-three-title">
        <div class="box"></div>
        <span class="line-three-titles">案例演示</span>
        <div class="box"></div>
      </div>
      <g-image
        alt="Example image"
        src="../../static/train_page/train.png"
        width="1200"
        height="440"
        fit="fill"
      />
      <div class="line-three-contents">
        <div
          class="line-three-content"
          style="background-color: #2856ff;"
        >
          <h3>Day 1</h3>
          <p>课程题目：</p>
          <p>云原生简介；入门云原生应用开发（上）；实际案例讲解</p>
          <p>课程简介：</p>
          <p>什么是云原生，云原生开源：微服务、容器化、
            CI/CD；基础环境搭建（Docker、VMware、Git）；用一个案例跑通环境</p>
        </div>
        <div
          class="line-three-content"
          style="background-color: #0e0270;"
        >
          <h3>Day 2</h3>
          <p>课程题目：</p>
          <p>入门云原生应用开发（中）；Docker、Docker Compose介绍</p>
          <p>课程简介：</p>
          <p>git的安装、命令和使用，代码编写、代码结构等；Docker、Docker Compose介绍</p>
        </div>
        <div
          class="line-three-content"
          style="background-color: #e4007f;"
        >
          <h3>Day 3</h3>
          <p>课程题目：</p>
          <p>入门云原生应用开发（下）</p>
          <p>课程简介：</p>
          <p>镜像打包、Dockerfile编写；流水线部署安装和ArgoCD部署、流水线全过程演示</p>
        </div>

      </div>
      <div class="line-three-title">
        <div
          class="box"
          style="background-color: #09b765;"
        ></div>
        <span class="line-three-titles">专项实操</span>
        <div
          class="box"
          style="background-color: #09b765;"
        ></div>
      </div>
      <div class="part-title">容器平台实操</div>
      <div class="part-contents">
        <g-image
          alt="Example image"
          src="../../static/train_page/container.png"
          width="700"
          height="320"
          fit="fill"
        />
        <div class="part-content">
          <div class="part-content-one">
            <h3>Day 4</h3>
            <p>课程题目：Kubernetes实操环境安装和指令实操</p>
            <p>课程简介：Kubernetes本地安装、日常处理指令讲解，备份，操作演示和实操指导</p>
          </div>
          <div
            class="part-content-one"
            style="margin-top:10px;"
          >
            <h3>Day 5</h3>
            <p>课程题目：Kubernetes应用 </p>
            <p>课程简介：Kubernetes Operator介绍，Operator 部署，API调用，演示+同步实操指导</p>
          </div>
        </div>
      </div>
      <div class="part-title">前端开发实操</div>
      <div class="part-contents">
        <g-image
          alt="Example image"
          src="../../static/train_page/font_end.png"
          width="700"
          height="320"
          fit="fill"
        />
        <div class="part-content">
          <div
            class="part-content-one"
            style="background-color: rgb(230,243,249);"
          >
            <h3>Day 6</h3>
            <p>课程题目：基于VUE的前端开发</p>
            <p>课程简介：前端框架VUE介绍、配置，代码逻辑实现和运行展示演示</p>
          </div>
          <div
            class="part-content-one"
            style="margin-top:10px; background-color: rgb(230,243,249)"
          >
            <h3>Day 7</h3>
            <p>课程题目：基于Element UI组件库的前端开发</p>
            <p>课程简介：Element UI组件库介绍、引用组件库组件开发，微前端案例展示</p>
          </div>
        </div>
      </div>
      <div class="part-title">后端微服务实操</div>
      <div class="part-contents">
        <g-image
          alt="Example image"
          src="../../static/train_page/back_end.png"
          width="700"
          height="320"
          fit="fill"
        />
        <div class="part-content">
          <div class="part-content-one">
            <h3>Day 8</h3>
            <p>课程题目：基于SprintBoot微服务开发与进阶实战（上）</p>
            <p>课程简介：
              微服务架构介绍、框架搭建、中间件技术介绍；SprintBoot+中间件的微服务项目实例--中间件部署与安装</p>
          </div>
          <div
            class="part-content-one"
            style="margin-top:10px;"
          >
            <h3>Day 9</h3>
            <p>课程题目：基于SprintBoot微服务开发与进阶实战（下）</p>
            <p>课程简介：SprintBoot+中间件的微服务项目实例；ServiceMesh模式介绍、API网关、服务目录、基于Kubernetes的ServiceMesh微服务示例介绍 </p>
          </div>
        </div>
      </div>
      <div class="part-title">敏捷开发专题 </div>
      <div class="part-contents">
        <g-image
          alt="Example image"
          src="../../static/train_page/agile.png"
          width="700"
          height="320"
          fit="fill"
        />
        <div
          class="part-content"
          style="background-color: rgb(230,243,249);"
        >
          <div class="part-content-big">
            <h3>Day 10</h3>
            <p>课程题目：敏捷开发-项目管理；敏捷开发-自动化测试</p>
            <p>课程简介：
              项目协作平台迭代管理、需求跟踪、任务分配和缺陷管理使用介绍；接口测试、压力测试和UI测试</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '培训'
  },
}
</script>

<style scoped>
.line-one {
  /* max-height: 700px; */
}
.img-one {
  display: block;
  width: 100%;
  /* max-height: 700px; */
}
.line-two {
  font-family: PingFangSC-Medium;
  margin: 0 auto;
  margin-top: 20px;
  padding: 50px;
  margin-bottom: 20px;
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.line-two h2 {
  font-size: 40px;
  font-weight: 500;
}
.line-two p {
  margin-top: 50px;
  margin-bottom: 50px;
}

.line-three {
  font-family: PingFangSC-Medium;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
.line-three h2 {
  font-size: 40px;
  font-weight: 500;
}
.line-three-title {
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 50px;
  width: 100%;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #333333;
}
.line-three-titles {
  font-size: 30px;
}
.box {
  width: 12px;
  height: 50px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: #503aff;
}
.line-three-contents {
  width: 1200px;
  height: 250px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
}
.line-three-content {
  width: 348px;
  height: 210px;
  padding: 20px;
  border-radius: 2px;
  color: #fff;
}
.line-three-content h3 {
  font-size: 20px;
  font-weight: normal;
  margin-top: 5px;
  margin-bottom: 5px;
}
.line-three-content p {
  font-size: 16px;
  line-height: 24px;
  margin-top: 2px;
  margin-bottom: 2px;
}
.part-title {
  width: 1200px;
  height: 30px;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #333333;
}
.part-contents {
  width: 1200px;
  height: 320px;
  display: flex;
  justify-content: space-around;
}
.part-content {
  width: 480px;
  height: 320px;
  display: flex;
  flex-direction: column;
}
.part-content-one {
  width: 460px;
  height: 135px;
  font-family: PingFangSC-Regular;
  background-color: rgb(249, 244, 255);
  border-radius: 5px;
  color: #333333;
  padding: 10px 20px 10px 20px;
}
.part-content h3 {
  margin: 5px 0 5px 0;
  font-size: 20px;
}
.part-content p {
  margin: 0px;
  font-size: 16px;
}
.part-content-big {
  padding: 20px;
  margin: 0 auto;
  margin-top: 80px;
  align-items: center;
}
</style>