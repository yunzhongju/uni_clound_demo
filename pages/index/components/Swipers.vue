<template>
	<view class="my-swiper">
		<u-swiper 
			 :effect3d="effect3d"
			 title
			 border-radius="10"
			 effect3d-previous-margin="100"
			:list="list"></u-swiper>
	</view>
</template>

<script>
export default {
	props:{
		effect3d:{
			type:Boolean,
			default:()=>true
		},
		list:{
			type:Array,
			default:()=>[]
		}
	},
	data() {
		return {
		};
	},
	methods: {}
};
</script>

<style scoped>
	.my-swiper{
		padding: 20rpx 0;
	}
</style>
