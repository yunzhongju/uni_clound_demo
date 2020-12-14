<template>
	<view class="">
		<view class="">
			<u-tabs 
			:list="list" 
			:isScroll="false"
			:current="current"
			@change="change"></u-tabs>
		</view>
		<view class="recomment">
			<view class="recomment-list">
				<view class="show-Img">
					<image
						src="http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg" mode="aspectFill">
					</image>
				</view>
				<text class="title">团员三明治</text>
				<text class="desc">吃撒快餐你吃了三颗擦拭</text>
			</view>
			
			<view class="recomment-list">
				<view class="show-Img">
					<image
						src="http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg" mode="aspectFill">
					</image>
				</view>
				<text class="title">团员三明治</text>
				<text class="desc">吃撒快餐你吃了三颗擦拭</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '早餐'
				}, 
				{
					name: '午餐'
				}, {
					name: '下午茶',
				}, {
					name: '晚餐',
				}, {
					name: '宵夜',
				}],
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style scoped>
	.recomment{
		display: flex;
		justify-content: space-around;
	}
	.recomment-list{
		width: 50%;
		padding: 0 20rpx;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
	.recomment-list .show-Img{
		width: 322rpx;
		height: 400rpx;
		box-shadow: 0 5rpx 5rpx #888888;
		border-radius: 16rpx;
	}
	.recomment-list .show-Img image{
		 width: 100%;
		 height: 100%;
		 border-radius: 16rpx;
		 
	}
	.title{
		font-weight: 600;
		margin: 15rpx 0;
	}
	.desc{
		background-color: #ffbec8;
		color: #ff334e;
		font-size: 10px;
		border-radius: 4rpx;
		padding: 4rpx 10rpx;
	}
</style>
