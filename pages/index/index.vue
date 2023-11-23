<template>
  <view>
    <!-- 轮播图 -->
    <swiper>
      <swiper-item >
        <image class='swiper-img' src="../../static/img/swiper1.jpg"></image>
      </swiper-item>
      <swiper-item>
        <image class='swiper-img' src="../../static/img/swiper2.jpg"></image>
      </swiper-item>
     <swiper-item>
       <image class='swiper-img' src="../../static/img/swiper3.jpg"></image>
     </swiper-item>
    </swiper>

    <!-- 跳转按钮 -->
	<view class="button-container">
      <button class="iconfont icon-huyanzhiwu" @click="redirectToTreePlanting">植树种草</button>
      <button class="iconfont icon-rili" @click="redirectToCheckIn">打卡</button>
    </view>

    <!-- 矩形按钮 -->
    <view class="button-row">
      <button class='action-button'@click="redirectToCarbonClothing">低碳衣着</button>
      <button class='action-button' @click="redirectToCarbonDiet">低碳饮食</button>
	</view>
	<view class="button-row">
      <button class='action-button' @click="redirectToCarbonElectricity">低碳用电</button>
      <button class='action-button' @click="redirectToCarbonTravel">低碳出行</button>
    </view>

    <!-- 文字链接 -->
	<view class="text-center">
		<text @click="redirectToPolicy">点击查看《政策导向》</text>
	</view>

  </view>
</template>

<script>
export default {
  methods: {
    redirectToTreePlanting() {
      // 跳转到植树种草页面
      uni.navigateTo({
        url: '/pages/treePlanting/treePlanting'
      });
    },
    redirectToCheckIn() {
      // 跳转到打卡页面
      uni.navigateTo({
        url: '/pages/checkIn/checkIn'
      });
    },
    redirectToCarbonClothing() {
      // 跳转到低碳衣着页面
      uni.navigateTo({
        url: '/pages/carbonClothing/carbonClothing'
      });
    },
    redirectToCarbonDiet() {
      // 跳转到低碳饮食页面
      uni.navigateTo({
        url: '/pages/carbonDiet/carbonDiet'
      });
    },
    redirectToCarbonElectricity() {
      // 跳转到低碳用电页面
      uni.navigateTo({
        url: '/pages/electric/electric'
      });
    },
    redirectToCarbonTravel() {
      // 跳转到低碳出行页面
      uni.navigateTo({
        url: '/pages/carbonTravel/carbonTravel'
      });
    },
    redirectToPolicy() {
      // 跳转到政策导向页面
      uni.navigateTo({
        url: '/pages/policy/policy'
      });
    }
  }
};
</script>

<style scoped>
	
swiper{
	width:100%;
	height:400rpx;
}
.swiper-img{
	width:100%;
	height:400rpx;
}
.button-container {
  display: flex;
  justify-content: space-around;
  margin: 70px 0;/* 调整按钮之间的垂直外边距 */
}
.action-button {
 padding: 12px 24px;
  border: 2px solid #41a863;
  background-color: transparent;
  color: #41a863;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.button-row {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}
.text-center {
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 10px; /* 可以根据需要调整间距 */
}
</style>