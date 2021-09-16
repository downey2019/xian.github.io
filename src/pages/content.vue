<template>
  <Layout :pageIndex="5">
    <div class="line-one">
      <g-image
        alt="Example image"
        src="../../static/content_page/banner.png"
        class="img-one"
      />
    </div>
    <div class="line-two">
      <h2>公司介绍</h2>
      <p> 铁科经纬（西安）信息技术有限公司成立于2020年，地址位于陕西省西安市碑林区太乙路铁永坊20 号楼3层，所属行业为软件和信息技术服务业，经营范围包含：一般项目：网络技术服务；信息系统集成服务；人工智能公共数据平台； 人工智能基础资源与技术平台；人工智能公共服务平台技术咨询服务； 大数据服务；软件开发；人工 智能基础软件开发；人工智能应用软件开发； 智能税务系统开发；软件外包服务；智能控制系统集成； 技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广。</p>
    </div>
    <div class="line-three">
      <div class="line-three-left">
        <div class="line-three-address">
          <g-image
            alt="Example image"
            src="../../static/content_page/address.svg"
            class="line-three-svg"
          />
          <p>西安市碑林区太乙路铁永坊20
            号楼3层</p>
        </div>
        <div class="line-three-email">
          <g-image
            alt="Example image"
            src="../../static/content_page/email.svg"
            class="line-three-svg"
          />
          <p>qi.yang@rails.cn</p>
        </div>
        <div class="line-three-time">
          <g-image
            alt="Example image"
            src="../../static/content_page/time.svg"
            class="line-three-svg"
          />
          <p>工作时间：8:00-18:00</p>
        </div>
      </div>
      <div class="line-three-right">
        <!-- 静态图片 -->
        <!-- <g-image
          alt="Example image"
          src="../../static/content_page/map.png"
          height="500"
          width="1000"
          fit="fill"
        /> -->
        <baidu-map
          class="map"
          :center="markerPoint"
          :zoom="16"
        >
          <bm-marker
            :position="markerPoint"
            :dragging="true"
            @click="infoWindowOpen"
          >
            <bm-info-window
              :show="show"
              @close="infoWindowClose"
              @open="infoWindowOpen"
              style="font-size:13px"
            >
              铁科经纬（西安）信息技术有限公司<br><br>
              地址：西安市碑林区太乙路铁永坊20 号楼3层
            </bm-info-window>
          </bm-marker>
        </baidu-map>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'Emap',
  metaInfo: { title: '联系我们' },
  data () {
    return {
      markerPoint: { lng: 108.97901002246088, lat: 34.244734377113936 },
      show: false
    }
  },
  mounted () {
    //this.baiduMap()
  },
  methods: {
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
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
  width: 90%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.line-two p {
  margin-top: 50px;
  /* margin-bottom: 50px; */
}

.line-three {
  max-width: 1500px;
  height: 500px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  margin-bottom: 100px;
}
.line-three-left {
  width: 300px;
  height: 100%;
}
.line-three-right {
  width: calc(100% - 320px);
  margin-left: 20px;
  /* background-color: #ff3a75; */
  height: 100%;
}
.line-three-svg {
  width: 40px;
  height: 40px;
  color: #fff;
}
.line-three-address {
  height: 110px;
  background-color: #503aff;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  padding: 20px 30px 20px 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.line-three-email {
  height: 110px;
  background-color: #0e0270;
  margin-top: 20px;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.line-three-time {
  height: 110px;
  background-color: #e4007f;
  margin-top: 20px;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.map {
  width: 100%;
  height: 490px;
}
</style>