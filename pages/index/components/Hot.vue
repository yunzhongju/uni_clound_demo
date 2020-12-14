<template>
	<view class="my-hot">
		<text>今日热搜</text>
		<view class="hot-list">
			<block v-for="(item, index) in list" :key="index">
				<u-tag style="margin: 0 5rpx 10rpx;" shape="circle" bg-color="#1296db" color="#fff" size="default" :text="item.title" type="primary" />
			</block>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ title: '雪月夜' },
				{ title: '雪月夜' },
				{ title: '雪月夜' },
				{ title: '雪月夜' },
				{ title: '雪月夜' },
				{ title: '雪月' },
				{ title: '沆瀣一气' },
				{ title: '沆瀣一气' },
				{ title: '沆瀣一气' },
				{ title: '沆瀣一气' },
				{ title: '沆瀣一气' },
				{ title: '沆瀣一气' }
			]
		};
	}
};
</script>

<style scoped>
.my-hot {
	padding: 0 20rpx;
}
.my-hot text {
	font-size: 24px;
	font-weight: 700;
}
.hot-list {
	padding: 10rpx 0;
	display: flex;
	flex-wrap: wrap;
}
</style>
