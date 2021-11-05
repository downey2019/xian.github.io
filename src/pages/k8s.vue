<template>
  <Layout :pageIndex=4>
    <div class="k8s">
      <div class="banner-box">
        <img src="../../static/k8s_pic/banner.png" alt="" class="banener-image">
      </div>
      <div class="k8s-center">
        <div class="consult" v-if="consultFlag">

          <p class="consult-title">
            <span>
              {{$t('k8s.consult.header')}}
            </span>
          </p>
          <div class="consult-content">
            <el-divider content-position="left">{{$t('k8s.consult.title_1')}}</el-divider>
            <ul>
              <li>
                <!-- 贯穿企业IT应用的全生命周期的咨询服务 -->
                {{$t('k8s.consult.content_1.content_1_1')}}
              </li>
              <li>
                <!-- 全面满足客户微服务架构转型、Devops落地、敏捷开发和自动化运维需求，保障业务创新 -->
                {{$t('k8s.consult.content_1.content_1_2')}}
              </li>
            </ul>
            <el-divider content-position="left">
              <!-- Kubernetes应用 -->
              {{$t('k8s.consult.title_2')}}
            </el-divider>
            <ul>
              <li>
                <!-- 帮助客户在Kubernetes部署和使用的过程中会遇到各种问题，尤其是运行在生产环境时，其性能、可伸缩性、高可用性和安全性等方面的挑战 -->
                {{$t('k8s.consult.content_2.content_2_1')}}
              </li>
            </ul>
            <el-divider content-position="left">
              <!-- 安全性、性能咨询 -->
              {{$t('k8s.consult.title_3')}}
            </el-divider>
              <ul>
                <li>
                  <!-- 对于Docker、Kubernetes自身导致的问题，为客户提供优化方案 -->
                  {{$t('k8s.consult.content_3.content_3_1')}}
                </li>
              </ul>
            <el-divider content-position="left">
              <!-- 微服务咨询 -->
              {{$t('k8s.consult.title_4')}}
            </el-divider>
              <ul>
                <li>
                  <!-- 帮助客户基于Kubernetes搭建微服务架构，为企业客户提供架构咨询和相关的工具链，顺利完成从传统架构向微服务架构转型 -->
                  {{$t('k8s.consult.content_4.content_4_1')}}
                </li>
              </ul>
          </div>
        </div>
        <div class="implement" v-if="implementFlag">
          <p class="implement-title">
            <span>
              {{$t('k8s.implement.header')}}
            </span>
          </p>
          <div class="implement-content">
            <el-divider content-position="left">{{$t('k8s.implement.title_1')}}</el-divider>
            <ul>
              <li>
                {{$t('k8s.implement.content_1.content_1_1')}}
              </li>
            </ul>
            <el-divider content-position="left">
              <!-- Kubernetes应用 -->
              {{$t('k8s.implement.title_2')}}
            </el-divider>
            <ul>
              <li>
                {{$t('k8s.implement.content_2.content_2_1')}}
              </li>
              <li>
                {{$t('k8s.implement.content_2.content_2_2')}}
              </li>
              <li>
                {{$t('k8s.implement.content_2.content_2_3')}}
              </li>
              <li>
                {{$t('k8s.implement.content_2.content_2_4')}}
              </li>
              <li>
                {{$t('k8s.implement.content_2.content_2_5')}}
              </li>
              <li>
                {{$t('k8s.implement.content_2.content_2_6')}}
              </li>
              <li>
                {{$t('k8s.implement.content_2.content_2_7')}}
              </li>
              <li>
                {{$t('k8s.implement.content_2.content_2_8')}}
              </li>
              <li>
                {{$t('k8s.implement.content_2.content_2_9')}}
              </li>
              <li>
                {{$t('k8s.implement.content_2.content_2_10')}}
              </li>
            </ul>
          </div>
        </div>
        <div class="support" v-if="supportFlag">
          <p class="support-title">
            <span>
              {{$t('k8s.support.header')}}
            </span>
          </p>
          <div class="support-content">
            <el-divider content-position="left">{{$t('k8s.support.title_1')}}</el-divider>
            <ul>
              <li>
                {{$t('k8s.support.content_1.content_1_1')}}
              </li>
            </ul>
            <el-divider content-position="left">
              {{$t('k8s.support.title_2')}}
            </el-divider>
            <ul>
              <li>
                {{$t('k8s.support.content_2.content_2_1')}}
              </li>
              <li>
                {{$t('k8s.support.content_2.content_2_2')}}
              </li>
              <li>
                {{$t('k8s.support.content_2.content_2_3')}}
              </li>
              <li>
                {{$t('k8s.support.content_2.content_2_4')}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
export default {
  data () {
    return {
      consultFlag: false,
      implementFlag: false,
      supportFlag: false,
    }
  },
  beforeRouteEnter (to, from, next) {
    const sign = to.path.split('/')[2]
    console.log(sign)
    next(vm => {
      if (sign === 'k8s-1') {
        vm.consultFlag = true
        vm.implementFlag = false
        vm.supportFlag = false
      } else if (sign === 'k8s-2') {
        vm.consultFlag = false
        vm.implementFlag = true
        vm.supportFlag = false
      } else if (sign === 'k8s-3') {
        vm.consultFlag = false
        vm.implementFlag = false
        vm.supportFlag = true
      }
    })
  }
}
</script>
<style lang="less" scoped>
  .k8s {
    // width: 100%;
    position: relative;
    padding-bottom: 50px;
    box-sizing: border-box;
    .banner-box {
      img {
        width: 100%;
        height: 34vw;
        min-height: 420.3px;
      }
    }
    .consult-title,.implement-title,.support-title {
      text-align: center;
      font-size: 44px;
      span {
        border-bottom: 5px solid #42167f;
        padding: 0 15px;
        padding-bottom: 2px;
      }
    }
    .k8s-center {
      width: 1200px;
      margin: 0 auto;
      padding-top: 16px;
      .implement {
        min-height: 785px !important;
      }
    }
    .consult,.implement,.support {
      height: calc(100vh - 380px);
      min-height: 720px;
    }
    /deep/ .el-divider {
      background-color: #333;
      .el-divider__text {
        font-size: 20px;
        font-weight: 600;
      }
    }
    li {
      font-size: 16px;
      line-height: 48px;
    }
  }
</style>