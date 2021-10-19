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
      <h2>{{$t('page_standard.line_two.h')}}</h2>
      <p>{{$t('page_standard.line_two.p')}}</p>
      <div class="line-two-problems">
        <div
          class="line-two-problem"
          style="background-color: #503aff;"
        >
          <span>{{$t('page_standard.line_two.sp1')}}</span>
        </div>
        <div
          class="line-two-problem"
          style="background-color: #e4007f;"
        >
          <span>{{$t('page_standard.line_two.sp2')}}</span>
        </div>
        <div
          class="line-two-problem"
          style="background-color: #0e0270;"
        >
          <span>{{$t('page_standard.line_two.sp3')}}</span>
        </div>
        <div
          class="line-two-problem"
          style="background-color: #dea406;"
        >
          <span>{{$t('page_standard.line_two.sp4')}}</span>
        </div>
      </div>
      <p>{{$t('page_standard.line_two.p1')}}</p>
    </div>
    <div class="line-three">
      <h2>{{$t('page_standard.line_three.h')}}</h2>
      <g-image
        alt="Example image"
        src="../../static/standard_page/standard.png"
        width="1000"
      />
    </div>
    <div class="line-four">
      <h2>{{$t('page_standard.line_four.h')}}</h2>
      <div class="line-four-title">
        <div class="box"></div>
        <span class="line-four-titles">{{$t('page_standard.line_four.sp1')}}</span>
        <div class="box"></div>
      </div>
      <div class="line-four-content">
        <div
          class="line-four-card"
          v-for="(item,index) in $t('page_standard.soft_dev_spec')"
          :key="index"
          @click="golink"
        >{{item}}</div>
        <div class="line-four-title">
          <div
            class="box"
            style="background-color: #e4007f;"
          ></div>
          <span class="line-four-titles">{{$t('page_standard.line_four.sp2')}}</span>
          <div
            class="box"
            style="background-color: #e4007f;"
          ></div>
        </div>
        <div class="line-four-content">
          <div
            class="line-four-card"
            v-for="(item,index) in $t('page_standard.dev_and_tech')"
            :key="index"
            @click="golink"
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
  },
  methods: {
    golink () {
      this.$message({
        message: '正在开发，敬请期待',
      });
    }
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
  max-width: 1200px;
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
  font-size: 30px;
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
.line-four-titles {
  font-size: 30px;
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
  width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
}
.line-four-card {
  width: 230px;
  height: 80px;
  margin: 10px 30px 10px 30px;
  background-color: #f9f4ff;
  box-shadow: 0px 3px 7px 0px rgba(194, 167, 167, 0.35);
  font-family: PingFangSC-Medium;
  font-size: 24px;
  text-align: center;
  color: #333333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>