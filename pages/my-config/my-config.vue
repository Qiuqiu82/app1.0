<template>
	<view class="my-config">
		<view class="config-item" @tap='goPathList'>
			<view>地址管理</view>
			<view class="config-mark"> > </view>
		</view>
		<view class="config-item">
			<view>地址管理</view>
			<view class="config-mark"> > </view>
		</view>
		<view class="config-item">
			<view>地址管理</view>
			<view class="config-mark"> > </view>
		</view>
		<view class="config-item">
			<view>地址管理</view>
			<view class="config-mark"> > </view>
		</view>
		<view class="config-item">
			<view>地址管理</view>
			<view class="config-mark"> > </view>
		</view>
		
		
		
		<view class="my-exit">退出</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goPathList(){
				uni.navigateTo({
					url:'/pages/my-path-list/my-path-list'
				})
			}
		}
	}
</script>

<style>
.config-item{
	display: flex;
	padding: 20rpx 0 20rpx 20rpx;
	border-bottom: 2rpx solid #CCCCCC;
	justify-content: space-between;
}
.config-mark{
	padding-right: 10rpx;
}
.my-exit{
	background-color: #79c18a;
	width:100%;
	line-height: 80rpx;
	color:#FFFFFF;
	text-align: center;
}

</style>
