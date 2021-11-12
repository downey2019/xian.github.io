/*
 * @Author: zf 
 * @Date: 2021-10-21 16:36:18 
 * @Last Modified by:   zf 
 * @Last Modified time: 2021-10-21 16:36:18 
 * 培训页面
 */
<template>
  <Layout :pageIndex=4>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisibleFlag"
      width="80%"
      v-if="detailSign === 'w1-1'"
    >
      <div class="detail-box">
        <div class="detail-header">
          <span>
            {{$t('page_train.train_detail.detail_w1_1.title')}}
          </span>
        </div>
        <div class="detail-content">
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w1_1.t1')}}
          </el-row>
          <ol class="detail-ul">
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_1.c1.c_1')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_1.c1.c_2')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_1.c1.c_3')}}</li>
          </ol>
          <hr class="detail-hr" />
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w1_1.t2')}}
          </el-row>
          <ol class="detail-ul">
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_1.c2.c_1')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_1.c2.c_2')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_1.c2.c_3')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_1.c2.c_4')}}</li>
          </ol>
        </div>
      </div>
      <div slot="footer">
        <el-button type="primary" @click="dialogVisibleFlag = false" style="backgroundColor: #3454e0;" size="small">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisibleFlag"
      width="80%"
      v-if="detailSign === 'w1-2'"
    >
      <div class="detail-box">
        <div class="detail-header">
          <span>
            {{$t('page_train.train_detail.detail_w1_2.title')}}
          </span>
        </div>
        <div class="detail-content">
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w1_2.t1')}}
          </el-row>
          <ol class="detail-ul">
            <dl>
              <dt>{{$t('page_train.train_detail.detail_w1_2.t1_1')}}</dt>
              <dd>{{$t('page_train.train_detail.detail_w1_2.c1.c1_1')}}</dd>
            </dl>
            <dl>
              <dt>{{$t('page_train.train_detail.detail_w1_2.t1_2')}}</dt>
              <dd>{{$t('page_train.train_detail.detail_w1_2.c1.c1_2')}}</dd>
              <dd>{{$t('page_train.train_detail.detail_w1_2.c1.c1_3')}}</dd>
            </dl>
            <dl>
              <dt>{{$t('page_train.train_detail.detail_w1_2.t1_3')}}</dt>
              <dd>{{$t('page_train.train_detail.detail_w1_2.c1.c1_4')}}</dd>
              <dd>{{$t('page_train.train_detail.detail_w1_2.c1.c1_5')}}</dd>
            </dl>
          </ol>
          <hr class="detail-hr" />
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w1_2.t2')}}
          </el-row>
          <ol class="detail-ul">
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_2.c2.c2_1')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_2.c2.c2_2')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_2.c2.c2_3')}}</li>
          </ol>
          <hr class="detail-hr" />
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w1_2.t3')}}
          </el-row>
          <ol class="detail-ul">
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_2.c3.c3_1')}}</li>
          </ol>
        </div>
      </div>
      <div slot="footer">
        <el-button type="primary" @click="dialogVisibleFlag = false" style="backgroundColor: #3454e0;" size="small">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisibleFlag"
      width="80%"
      v-if="detailSign === 'w1-3'"
    >
      <div class="detail-box">
        <div class="detail-header">
          <span>
            {{$t('page_train.train_detail.detail_w1_3.title')}}
          </span>
        </div>
        <div class="detail-content">
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w1_3.t1')}}
          </el-row>
          <ol class="detail-ul">
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_3.c1.c1_1')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_3.c1.c1_2')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_3.c1.c1_3')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_3.c1.c1_4')}}</li>
          </ol>
          <hr class="detail-hr" />
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w1_3.t2')}}
          </el-row>
          <ol class="detail-ul">
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_3.c2.c2_1')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_3.c2.c2_2')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_3.c2.c2_3')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_3.c2.c2_4')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w1_3.c2.c2_5')}}</li>
          </ol>
        </div>
      </div>
      <div slot="footer">
        <el-button type="primary" @click="dialogVisibleFlag = false" style="backgroundColor: #3454e0;" size="small">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisibleFlag"
      width="80%"
      v-if="detailSign === 'w2-1'"
    >
      <div class="detail-box">
        <div class="detail-header">
          <span>
            {{$t('page_train.train_detail.detail_w2_1.title')}}
          </span>
        </div>
        <div class="detail-content">
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w2_1.t1')}}
          </el-row>
          <ol class="detail-ul">
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_1.c1.c1_1')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_1.c1.c1_2')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_1.c1.c1_3')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_1.c1.c1_4')}}</li>
          </ol>
          <hr class="detail-hr" />
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w2_1.t2')}}
          </el-row>
          <ol class="detail-ul">
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_1.c2.c2_1')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_1.c2.c2_2')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_1.c2.c2_3')}}</li>
          </ol>
        </div>
      </div>
      <div slot="footer">
        <el-button type="primary" @click="dialogVisibleFlag = false" style="backgroundColor: #3454e0;" size="small">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisibleFlag"
      width="80%"
      v-if="detailSign === 'w2-2'"
    >
      <div class="detail-box">
        <div class="detail-header">
          <span>
            {{$t('page_train.train_detail.detail_w2_2.title')}}
          </span>
        </div>
        <div class="detail-content">
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w2_2.t1')}}
          </el-row>
          <ol class="detail-ul">
            <dl>
              <dt>{{$t('page_train.train_detail.detail_w2_2.t1_1')}}</dt>
              <dd>{{$t('page_train.train_detail.detail_w2_2.c1.c1_1')}}</dd>
              <dd>{{$t('page_train.train_detail.detail_w2_2.c1.c1_2')}}</dd>
              <dd>{{$t('page_train.train_detail.detail_w2_2.c1.c1_3')}}</dd>
              <dd>{{$t('page_train.train_detail.detail_w2_2.c1.c1_4')}}</dd>
              <dt>{{$t('page_train.train_detail.detail_w2_2.t1_2')}}</dt>
              <dd>{{$t('page_train.train_detail.detail_w2_2.c1.c1_5')}}</dd>
              <dd>{{$t('page_train.train_detail.detail_w2_2.c1.c1_6')}}</dd>
              <dt>{{$t('page_train.train_detail.detail_w2_2.t1_3')}}</dt>
              <dt>{{$t('page_train.train_detail.detail_w2_2.t1_4')}}</dt>
              <dd>{{$t('page_train.train_detail.detail_w2_2.c1.c1_7')}}</dd>
              <dd>{{$t('page_train.train_detail.detail_w2_2.c1.c1_8')}}</dd>
              <dd>{{$t('page_train.train_detail.detail_w2_2.c1.c1_9')}}</dd>
              <dt>{{$t('page_train.train_detail.detail_w2_2.t1_5')}}</dt>
            </dl>
          </ol>
          <hr class="detail-hr" />
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w2_2.t2')}}
          </el-row>
          <ol class="detail-ul">
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_2.c2.c2_1')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_2.c2.c2_2')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_2.c2.c2_3')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_2.c2.c2_4')}}</li>
          </ol>
        </div>
      </div>
      <div slot="footer">
        <el-button type="primary" @click="dialogVisibleFlag = false" style="backgroundColor: #3454e0;" size="small">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisibleFlag"
      width="80%"
      v-if="detailSign === 'w2-3'"
    >
      <div class="detail-box">
        <div class="detail-header">
          <span>
            {{$t('page_train.train_detail.detail_w2_3.title')}}
          </span>
        </div>
        <div class="detail-content">
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w2_3.t1')}}
          </el-row>
          <ol class="detail-ul">
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_3.c1.c1_1')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_3.c1.c1_2')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_3.c1.c1_3')}}</li>
          </ol>
          <hr class="detail-hr" />
          <el-row class="detail-title">
            <i class="el-icon-s-promotion" style="color: #3454e0"></i>&nbsp;{{$t('page_train.train_detail.detail_w2_3.t2')}}
          </el-row>
          <ol class="detail-ul">
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_3.c2.c2_1')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_3.c2.c2_2')}}</li>
            <li class="detail-li">{{$t('page_train.train_detail.detail_w2_3.c2.c2_3')}}</li>
          </ol>
        </div>
      </div>
      <div slot="footer">
        <el-button type="primary" @click="dialogVisibleFlag = false" style="backgroundColor: #3454e0;" size="small">确 定</el-button>
      </div>
    </el-dialog>
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
      <div class="part-contents train-w1-1">
        <g-image
          alt="Example image"
          src="../../static/train_page/train.png"
          width="660"
          height="320"
          fit="fill"
        />
        <div class="part-content train-w1-c1">
          <div class="part-content-big">
            <h3>{{$t('page_train.line_three.h1')}}</h3>
            <p>{{$t('page_train.line_three.p1')}}</p>
            <p>{{$t('page_train.line_three.p2')}}</p>
            <p> &nbsp;</p>
            <p>{{$t('page_train.line_three.p3')}}</p>
            <p>{{$t('page_train.line_three.p4')}}</p>
            <p>{{$t('page_train.line_three.p5')}}</p>
          </div>
          <p class="view-details view-details-1"><span @click="controlDialog('week1-1')">{{$t('page_train.train_detail.findDetail')}}</span></p>
        </div>
      </div>
      <div class="part-contents train-w1-2">
        <g-image
          alt="Example image"
          src="../../static/train_page/container.png"
          width="660"
          height="320"
          fit="fill"
        />
        <div
          class="part-content train-w1-c2"
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
          <p class="view-details view-details-2"><span @click="controlDialog('week1-2')">{{$t('page_train.train_detail.findDetail')}}</span></p>
        </div>
      </div>
      <div class="part-contents train-w1-3">
        <g-image
          alt="Example image"
          src="../../static/train_page/back_end.png"
          width="660"
          height="320"
          fit="fill"
        />
        <div class="part-content train-w1-c3">
          <div class="part-content-big">
            <h3>{{$t('page_train.line_three.h3')}}</h3>
            <p>{{$t('page_train.line_three.p12')}}</p>
            <p>{{$t('page_train.line_three.p13')}}</p>
            <p> &nbsp;</p>
            <p>{{$t('page_train.line_three.p14')}}</p>
            <p>{{$t('page_train.line_three.p15')}}</p>
            <p>{{$t('page_train.line_three.p16')}}</p>
          </div>
          <p class="view-details view-details-1"><span @click="controlDialog('week1-3')">{{$t('page_train.train_detail.findDetail')}}</span></p>
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
          <p class="view-details view-details-2"><span @click="controlDialog('week2-1')">{{$t('page_train.train_detail.findDetail')}}</span></p>
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
          <p class="view-details view-details-1"><span @click="controlDialog('week2-2')">{{$t('page_train.train_detail.findDetail')}}</span></p>
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
          <p class="view-details view-details-2"><span @click="controlDialog('week2-3')">{{$t('page_train.train_detail.findDetail')}}</span></p>
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
  data () {
    return {
      dialogVisibleFlag: false,
      dialogTitle: '',
      detailSign: ''
    }
  },
  methods: {
    controlDialog(sign) {
      if (sign === 'week1-1') {
        this.dialogTitle = 'Week1-Day1'
        this.detailSign = 'w1-1'
      } else if (sign === 'week1-2') {
        this.dialogTitle = 'Week1-Day2~3'
        this.detailSign = 'w1-2'
      } else if (sign === 'week1-3') {
        this.dialogTitle = 'Week1-Day4~5'
        this.detailSign = 'w1-3'
      } else if (sign === 'week2-1') {
        this.dialogTitle = 'Week2-Day1~2'
        this.detailSign = 'w2-1'
      } else if (sign === 'week2-2') {
        this.dialogTitle = 'Week2-Day3~4'
        this.detailSign = 'w2-2'
      } else if (sign === 'week2-3') {
        this.dialogTitle = 'Week2-Day5'
        this.detailSign = 'w2-3'
      }
      this.dialogVisibleFlag = true
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  /deep/ .el-dialog {
    background-color: #f4f5f7;
  }
  /deep/ .el-dialog__header {
    border-bottom: 2px solid #808080;
    span {
      font-weight: 700;
      color: #fff;
      background-color: #3454e0;
      padding: 3px 5px;
      border-radius: 3px;
    }
  }
  /deep/ .el-dialog__footer {
    border-top: 2px solid #808080;
    padding-bottom: 10px;
  }
  .detail-box {
    .detail-header {
      font-size: 36px;
      text-align: center;
      margin-bottom: 30px;
      color: #333333;
      font-weight: 700;
      span {
        padding: 0 12px 3px;
        border-bottom: 4px solid #3454e0;
      }
    }
    .detail-title {
      color: #333333;
      font-size: 18px;
      font-weight: 700;
    }
    .detail-content {
      .detail-hr {
        margin: 30px 0;
      }
    }
    .detail-ul {
      dt,dd {
        color: #333333;
      }
      dt {
        font-weight: 700;
        // line-height: 32px;
      }
      dd {
        margin-left: 18px;
        line-height: 32px;
      }
    }
    .detail-li {
      color: #333333;
      line-height: 32px;
      font-size: 16px;
    }
  }
}
.line-one .img-one {
  display: block;
  width: 100%;
  height: 34vw;
  min-height: 420.3px;
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
  padding-bottom: 50px;
  font-family: PingFangSC-Medium;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 50px; */
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
  box-sizing: border-box;
  position: relative;
  width: 520px;
  /* height: 320px; */
  display: flex;
  flex-direction: column;
  background-color: rgb(249, 244, 255);
  .view-details {
    position: absolute;
    // width: 100%;
    left: 0;
    right: 0;
    bottom: 8px;
    padding-right: 14px;
    font-size: 14px;
    text-align: right;
    span {
      cursor: pointer;
      transition: all .3s linear;
      padding: 2px 6px 2px;
      // color: #3454e0;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      border-radius: 5px;
    }
  }
  .view-details-1 {
    span {
      background-color: #964df0;
      color: #fff;
      border: 2px solid #f9f4ff;
      &:hover {
        background-color: #fff;
        color: #964df0;
        border: 2px solid #964df0;
      }
    }
  }
  .view-details-2 {
    span {
      background-color: #5bc6f8;
      color: #fff;
      border: 2px solid #e6f3f9;
      &:hover {
        color: #5bc6f8;
        background-color: #fff;
        border: 2px solid #5bc6f8;
      }
    }
  }
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