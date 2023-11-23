<template>
	<view>
		<!-- 小程序名称 -->
		<text class="text-top">碳迹汇</text>
		
		<!-- 顶部 -->
		<view class="button-row">
		<button class='top-button'>低碳饮食</button>
		</view>
		
		<!-- 顶部右侧 -->
		<view class="text-right">
			<text @click="redirectTocall">倡议</text>
		</view>
		
		<!-- 文字链接 -->
		<view class="text-center">
			<text @click="redirectTomonthvegecheck">每月素食打卡区</text>
		</view>
		
		<!-- 进度图片 -->
		
		
		<!-- 进度 -->
		<view class="button-row">
			<button class='action-button'>本月完成进度：XX%</button>
			<button class='action-button'>积分奖励：xxx</button>
		</view>
		
		<!-- 推荐 -->
		<text class="text-center">推荐绿色饮食</text>
		
		<!-- 推荐绿色饮食 -->
		<view class="button-bottom">
			<button class='title-button'>蔬菜类</button>
			<button class='word-button'>富含大量维生素C有益于人体健康，防止坏血病
			,提高人体免疫力</button>
		</view>
		<view class="button-bottom">
			<button class='title-button'>瓜果类</button>
			<button class='word-button'>富含大量维生素C有益于人体健康，防止坏血病
			,提高人体免疫力</button>
		</view>
		<view class="button-bottom">
			<button class='title-button'>蛋奶类</button>
			<button class='word-button'>尽量通过蛋奶类饮食代替肉类，既能低碳，
			又能减少过度摄入肉类饱和脂肪酸对人体的危害
</button>
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
			redirectTocall() {
				// 跳转到倡议页面
				uni.navigateTo({
					url: '/pages/call/call'
				});
			},
			redirectTomonthvegecheck() {
				// 跳转到倡议页面
				uni.navigateTo({
					url: '/pages/monthvegecheck/monthvegecheck'
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
		margin-top: 30px;
	}
	.button-row {
		display: flex;
		justify-content: space-around;
		margin: 10px 10px;
	}
	.button-bottom {
		display: flex;
		justify-content: space-around;
		margin: 0px 0px;
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
		margin-top: 30px;
		font-size: 18px
	}
	.text-top {
		font-weight: bold;
		display: flex;
		font-size: 20px
	}
	.text-right {
		font-weight: bold;
		display: flex;
		justify-content: flex-end;
		font-size: 20px
	}
	.title-button {
		padding: 1px 16px;
		border: 2px solid #41a863;
		background-color: transparent;
		color: #41a863;
		border-radius: 8px;
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s;
		margin-top: 2px;
	}
	.word-button {
		padding: 2px 1px;
		background-color: transparent;
		color: #000000;
		font-size: 8px;
		cursor: pointer;
		transition: background-color 0.3s;
		margin-top: 2px;
	}
</style>
