<template>
	<view class="">
		<u-sticky>
			<u-tabs
				:list="list" 
				:current="current"
				@change="change">
			</u-tabs>
		</u-sticky>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: '待收货'
				},
				{
					name: '待收货'
				},
				{
					name: '待收货'
				},
				{
					name: '待收货'
				},
				{
					name: '待收货'
				},
				{
					name: '待收货'
				},
				{
					name: '待付款'
				},
				{
					name: '待评价',
					count: 5
				}
			],
			current: 0
		};
	},
	methods: {
		change(index) {
			this.current = index;
		}
	}
};
</script>

<style></style>
