/*
 * @Author: zf 
 * @Date: 2021-10-21 16:38:35 
 * @Last Modified by:   zf 
 * @Last Modified time: 2021-10-21 16:38:35 
 * 联系我们页面
 */
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
      <h2>{{$t('page_content.line_two.h')}}</h2>
      <p>
        {{$t('page_content.line_two.p')}}
      </p>
    </div>
    <div class="line-three">
      <div class="line-three-left">
        <div class="line-three-address">
          <g-image
            alt="Example image"
            src="../../static/content_page/address.svg"
            class="line-three-svg"
          />
          <p> {{$t('page_content.line_three.p1')}}</p>
        </div>
        <div class="line-three-email">
          <g-image
            alt="Example image"
            src="../../static/content_page/email.svg"
            class="line-three-svg"
          />
          <p> {{$t('page_content.line_three.p2')}}</p>
        </div>
        <div class="line-three-time">
          <g-image
            alt="Example image"
            src="../../static/content_page/time.svg"
            class="line-three-svg"
          />
          <p> {{$t('page_content.line_three.p3')}}</p>
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
          ak="kCQ7cOzRD8ooC7TLegTMfK2ThjjcvmRy"
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
              style="font-size: 13px"
            >
              铁科经纬（西安）信息技术有限公司<br /><br />
              地址：西安市碑林区太乙路铁永坊20 号楼3层
            </bm-info-window>
          </bm-marker>
        </baidu-map>
      </div>
    </div>
  </Layout>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmMarker from "vue-baidu-map/components/overlays/Marker"; //点标注

import BmInfoWindow from "vue-baidu-map/components/overlays/InfoWindow"; //标注弹窗

export default {
  name: "Emap",
  components: { BaiduMap, BmMarker, BmInfoWindow },
  metaInfo: { title: "联系我们" },
  data () {
    return {
      markerPoint: { lng: 108.97901002246088, lat: 34.244734377113936 },
      show: false,
    };
  },
  mounted () {
    //this.baiduMap()
  },
  methods: {
    infoWindowClose () {
      this.show = false;
    },
    infoWindowOpen () {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.line-one {
  /* max-height: 700px; */
}
.img-one {
  display: block;
  width: 100%;
  /* max-height: 700px; */
  height: 34vw;
  min-height: 420.3px;
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
.line-two h2 {
  font-size: 30px;
  font-weight: 500;
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

/* 去掉百度地图水印 */
/deep/.anchorBL {
  display: none !important;
}
.map {
  width: 100%;
  height: 490px;
}
</style>