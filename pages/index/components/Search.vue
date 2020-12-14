<template>
	<view class="my-search">
		<u-search 
			:show-action="false"
			height="80"
			placeholder="日照香炉生紫烟" 
			disabled></u-search>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.my-search{
		box-sizing: border-box;
		line-height: 80rpx;
		background-image: linear-gradient(to top,#007AFF 20%,#00ffff 50%,#1296db 100%);
		padding: 20rpx 20rpx;
	}
</style>
