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
      <h2>{{$t('page_train.line_two.h')}}</h2>
      <p>{{$t('page_train.line_two.p')}}</p>
      <g-image
        alt="Example image"
        src="../../static/train_page/object.png"
        width="330"
        height="300"
        class="img-two"
      />
    </div>
    <div class="line-three">
      <h2>{{$t('page_train.line_three.h')}}</h2>
      <div class="line-three-title">
        <div class="box"></div>
        <span class="line-three-titles">{{$t('page_train.line_three.sp')}}</span>
        <div class="box"></div>
      </div>
      <div class="part-contents">
        <g-image
          alt="Example image"
          src="../../static/train_page/train.png"
          width="660"
          height="320"
          fit="fill"
        />
        <div class="part-content">
          <div class="part-content-big">
            <h3>{{$t('page_train.line_three.h1')}}</h3>
            <p>{{$t('page_train.line_three.p1')}}</p>
            <p>{{$t('page_train.line_three.p2')}}</p>
            <p> &nbsp;</p>
            <p>{{$t('page_train.line_three.p3')}}</p>
            <p>{{$t('page_train.line_three.p4')}}</p>
            <p>{{$t('page_train.line_three.p5')}}</p>
          </div>
        </div>
      </div>
      <div class="part-contents">
        <g-image
          alt="Example image"
          src="../../static/train_page/container.png"
          width="660"
          height="320"
          fit="fill"
        />
        <div
          class="part-content"
          style="background-color: rgb(230,243,249);"
        >
          <div class="part-content-big">
            <h3>{{$t('page_train.line_three.h2')}}</h3>
            <p>{{$t('page_train.line_three.p6')}}</p>
            <p>{{$t('page_train.line_three.p7')}}</p>
            <p> &nbsp;</p>
            <p>{{$t('page_train.line_three.p8')}}</p>
            <p>{{$t('page_train.line_three.p9')}}</p>
            <p>{{$t('page_train.line_three.p10')}}</p>
            <p>{{$t('page_train.line_three.p11')}}</p>
          </div>
        </div>
      </div>
      <div class="part-contents">
        <g-image
          alt="Example image"
          src="../../static/train_page/back_end.png"
          width="660"
          height="320"
          fit="fill"
        />
        <div class="part-content">
          <div class="part-content-big">
            <h3>{{$t('page_train.line_three.h3')}}</h3>
            <p>{{$t('page_train.line_three.p12')}}</p>
            <p>{{$t('page_train.line_three.p13')}}</p>
            <p> &nbsp;</p>
            <p>{{$t('page_train.line_three.p14')}}</p>
            <p>{{$t('page_train.line_three.p15')}}</p>
            <p>{{$t('page_train.line_three.p16')}}</p>
          </div>
        </div>
      </div>

      <div class="line-three-title">
        <div
          class="box"
          style="background-color: #09b765;"
        ></div>
        <span class="line-three-titles">{{$t('page_train.line_three.sp1')}}</span>
        <div
          class="box"
          style="background-color: #09b765;"
        ></div>
      </div>

      <div class="part-contents">
        <g-image
          alt="Example image"
          src="../../static/train_page/font_end.png"
          width="660"
          height="320"
          fit="fill"
        />
        <div
          class="part-content"
          style="background-color: rgb(230,243,249);"
        >
          <div class="part-content-big">
            <h3>{{$t('page_train.line_three.h4')}}</h3>
            <p>{{$t('page_train.line_three.p17')}}</p>
            <p>{{$t('page_train.line_three.p18')}}</p>
            <p> &nbsp;</p>
            <p>{{$t('page_train.line_three.p19')}}</p>
            <p>{{$t('page_train.line_three.p20')}}</p>
            <p>{{$t('page_train.line_three.p21')}}</p>
          </div>
        </div>
      </div>

      <div class="part-contents">
        <g-image
          alt="Example image"
          src="../../static/train_page/day34.png"
          width="660"
          height="320"
          fit="fill"
        />
        <div class="part-content">
          <div class="part-content-big">
            <h3>{{$t('page_train.line_three.h5')}}</h3>
            <p>{{$t('page_train.line_three.p22')}}</p>
            <p>{{$t('page_train.line_three.p23')}}</p>
            <p> &nbsp;</p>
            <p>{{$t('page_train.line_three.p24')}}</p>
            <p>{{$t('page_train.line_three.p25')}}</p>
            <p>{{$t('page_train.line_three.p26')}}</p>
          </div>
        </div>
      </div>

      <div class="part-contents">
        <g-image
          alt="Example image"
          src="../../static/train_page/agile.png"
          width="660"
          height="320"
          fit="fill"
        />
        <div
          class="part-content"
          style="background-color: rgb(230,243,249);"
        >
          <div class="part-content-big">
            <h3>{{$t('page_train.line_three.h6')}}</h3>
            <p>{{$t('page_train.line_three.p27')}}</p>
            <p>{{$t('page_train.line_three.p28')}}</p>
            <p> &nbsp;</p>
            <p>{{$t('page_train.line_three.p29')}}</p>
            <p>{{$t('page_train.line_three.p30')}}</p>
            <p>{{$t('page_train.line_three.p31')}}</p>
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
  height: 320px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
}
.line-three-content {
  width: 348px;
  /* height: 210px; */
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
  /* height: 320px; */
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
.part-content {
  width: 520px;
  /* height: 320px; */
  display: flex;
  flex-direction: column;
  background-color: rgb(249, 244, 255);
}
.part-content-one {
  width: 460px;
  height: 175px;
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
  /* margin-top: 80px; */
  align-items: center;
}
</style>