<template>
  <view>
	<!-- 小程序名称 -->
	<text class="text-top">碳迹汇</text>
	
	<!-- 顶部 -->
    <view class="button-row">
	<button class='top-button'>低碳出行</button>
	</view>
	
	<!-- 文字链接 -->
	<view class="text-center">
		<text @click="redirectTotodaycarway">今日汽车行程</text>
	</view>
	<view class="text-center">
		<text @click="redirectTobikeway">短途自行车，步行行程</text>
	</view>
	<view class="text-center">
		<text @click="redirectTolongtravel">长途汽车高铁行程</text>
	</view>
	
	<!-- 矩形按钮 -->
	<view class="button-row">
		<button class='action-button' @click="redirectTonoteway">路程记录</button>
		<button class='action-button' @click="redirectTonotetime">时长记录</button>
		<button class='action-button' @click="redirectTotimeclassify">时间分类</button>
		<button class='action-button' @click="redirectTocarbonnumber">减碳排量</button>
	</view>
	
	
	<!-- 文字链接 -->
	<view class="text-center">
		<text>电动汽车出行推荐一览（暂未开放）</text>
	</view>
  </view>
</template>


<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			redirectTonoteway() {
				// 跳转到路程记录页面
				uni.navigateTo({
					url: '/pages/noteway/noteway'
				});
			},
			redirectTonotetime() {
				// 跳转到时长记录页面
				uni.navigateTo({
					url: '/pages/notetime/notetime'
				});
			},
			redirectTotimeclassify() {
				// 跳转到时间分类页面
				uni.navigateTo({
					url: '/pages/timeclassify/timeclassify'
				});
			},
			redirectTocarbonnumber() {
				// 跳转到减碳排量页面
				uni.navigateTo({
					url: '/pages/carbonnumber/carbonnumber'
				});
			},
			redirectTotodaycarway() {
				// 跳转到今日汽车行程页面
				uni.navigateTo({
					url: '/pages/todaycarway/todaycarway'
				});
			},
			redirectTobikeway() {
				// 跳转到短途自行车，步行行程页面
				uni.navigateTo({
					url: '/pages/bikeway/bikeway'
				});
			},
			redirectTolongtravel() {
				// 跳转到路程记录页面
				uni.navigateTo({
					url: '/pages/longtravel/longtravel'
				});
			},
		}
	}
</script>

<style>
	.action-button {
		padding: 12px 10px;
		border: 2px solid #41a863;
		background-color: #41a863;
		color: #ffffff;
		border-radius: 30px 30px;
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s;
		margin-top: 50px;
	}
	.button-row {
		display: flex;
		justify-content: space-around;
		margin: 0px 10px;
	}
	.top-button {
		padding: 1px 24px;
		border: 2px solid #41a863;
		background-color: transparent;
		color: #41a863;
		border-radius: 8px;
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s;
	}
	.text-center {
		font-weight: bold;
		display: flex;
		justify-content: center;
		margin-top: 40px;
		font-size: 18px
	}
	.text-top {
		font-weight: bold;
		display: flex;
		font-size: 20px
	}
</style>