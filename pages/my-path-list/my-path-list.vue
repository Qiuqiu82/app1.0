<template>
	<!-- 尚未设置后端nodejs环境 -->
	<!-- <view class="my-path-list">
		<view class="path-list">
			<view class="path-item">
				<view class="item-main" v-for="(item,index) in list" :key="index">
					<view class="item-name">{{item.name}}</view>
					<view>{{item.tel}}</view>
				</view>
				<view class="item-main">
					<view class="active" v-if="item.isDefault">默认</view>
					<view>{{item.city}} {{item.details}}</view>
				</view>
			</view>
		</view>
		<view class="add-path">
			<view class="add-path-btn" @tap="goAddPath">新增地址</view>
		</view>
	</view> -->
</template>

<script>
import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed:{
		...mapState({
			list:state=>state.path.list
		})	
		},
		methods: {
			goAddPath(){
				uni.navigateTo({
					url:'../../pages/my-add-path/my-add-path'
				})
			}
		}
	}
</script>

<style scoped>
.add-path{
	padding: 20rpx 0;
	width:100%;
	display:flex;
	justify-content: center;
}
.add-path-btn{
	border:2rpx solid #79c18a;
	color:#79c18a;
	border-radius: 30rpx;
	padding:6rpx 60rpx;
}
.path-list{
	padding-left:20rpx;
}
.path-item{
	padding:10rpx;
	border-bottom: 2rpx solid #CCCCCC;
}
.item-main{
	display:flex;
	align-items:center;
}
.item-name{
	padding-right:10rpx;
}
.active{
	padding-right:10rpx;
	background-color: #79c18a;
	color: #FFFFFF;
	border-radius: 26rpx;
	font-size: 24rpx;
	text-align: center;
}
</style>
