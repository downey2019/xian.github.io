<template>
  <Layout :pageIndex=3>
    <div class="line-one">
      <g-image
        alt="Example image"
        src="../../static/standard_page/banner.png"
        class="img-one"
      />
    </div>
    <div class="line-two">
      <h2>规范的意义</h2>
      <p>缺少研发技术和过程规范将导致软件研发的4大问题</p>
      <div class="line-two-problems">
        <div
          class="line-two-problem"
          style="background-color: #503aff;"
        >
          <span>成本高</span>
        </div>
        <div
          class="line-two-problem"
          style="background-color: #e4007f;"
        >
          <span>质量低</span>
        </div>
        <div
          class="line-two-problem"
          style="background-color: #0e0270;"
        >
          <span>交付慢</span>
        </div>
        <div
          class="line-two-problem"
          style="background-color: #dea406;"
        >
          <span>共享难</span>
        </div>
      </div>
      <p>软件系统是由多个彼此关联的部分组成，需要适应业务的变化而快速变化，需要分工协作复杂的研发过程构建。
        简单明确、可执行性强的规范，明确技术选型、工作标准和操作流程，打造标准化的研发工作模式，让团队可快速高效的执行，是软件系统研发质量和效率的有力保障。</p>
    </div>
    <div class="line-three">
      <h2>铁路规范体系</h2>
      <g-image
        alt="Example image"
        src="../../static/standard_page/standard.png"
        width="1000"
      />
    </div>
    <div class="line-four">
      <h2>开发规范</h2>
      <div class="line-four-title">
        <div class="box"></div>
        <span>软件开发规范</span>
        <div class="box"></div>
      </div>
      <div class="line-four-content">
        <div
          class="line-four-card"
          v-for="(item,index) in soft_dev_spec"
          :key="index"
        >{{item}}</div>
        <div class="line-four-title">
          <div
            class="box"
            style="background-color: #e4007f;"
          ></div>
          <span>开发过程与技术管理规范</span>
          <div
            class="box"
            style="background-color: #e4007f;"
          ></div>
        </div>
        <div class="line-four-content">
          <div
            class="line-four-card"
            v-for="(item,index) in dev_and_tech"
            :key="index"
            style="background-color: #e6f3f9;"
          >{{item}}</div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '规范'
  },
  data () {
    return {
      soft_dev_spec: [
        'API命名规范', '模块命名规范', '通讯协议规范', '响应式布局规范',
        '无状态服务规范', '认证登录规范', '服务标签规范', 'redis使用规范',
        '监控数据传送规范', '自动化测试规范', 'UI测试规范', 'Mysql备份规范',
        '代码仓管理规范', '蓝绿部署规范', '监控报警规范', '更多...'
      ],
      dev_and_tech: [
        '前端开发规范', '后端开发规范', '测试', '上线部署规范', '多团队协作规范', '更多...'
      ]
    }
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
  font-family: PingFangSC-Medium;
  margin: 0 auto;
  margin-top: 20px;
  padding: 50px;
  margin-bottom: 20px;
  max-width: 1500px;
}
.line-two h2 {
  font-size: 40px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 500;
}
.line-two-problems {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
}
.line-two-problem {
  width: 160px;
  height: 160px;
  background-color: rgb(255, 255, 255);
  margin: 20px;
  border-radius: 160px;
  color: #ffffff;
  line-height: 160px;
  text-align: center;
  font-size: 24px;
}

.line-three {
  background-color: #eef9fe;
  font-family: PingFangSC-Medium;
  margin: 0 auto;
  margin-top: 20px;
  padding: 100px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.line-three h2 {
  font-size: 40px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 500;
}

.line-four {
  font-family: PingFangSC-Medium;
  margin: 0 auto;
  margin-top: 20px;
  padding: 50px;
  margin-bottom: 20px;
  max-width: 1600px;
  min-width: 1225px;
}
.line-four h2 {
  font-size: 40px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 500;
}
.line-four-title {
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 50px;
  margin-top: 50px;
  height: 50px;
  width: 100%;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #333333;
}
.box {
  width: 12px;
  height: 50px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: #503aff;
}
.line-four-content {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  margin-top: 30px;
}
.line-four-card {
  width: 230px;
  height: 80px;
  margin: 15px;
  background-color: #f9f4ff;
  box-shadow: 0px 3px 7px 0px rgba(194, 167, 167, 0.35);
  font-family: PingFangSC-Medium;
  font-size: 24px;
  line-height: 80px;
  text-align: center;
  color: #333333;
}
</style>