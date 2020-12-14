<template>
	<view>
		<!-- 搜索 -->
		<my-search></my-search>
		<!-- 轮播视频 -->
		<my-swipers :list="banner"></my-swipers>
		<view style="height: 200rpx; margin-bottom: 100rpx;">
			<u-button type="primary" style="margin-bottom: 10rpx;" @click="update">update</u-button>
			<u-button type="primary" style="margin-bottom: 10rpx;" @click="remove">remove</u-button>
			<u-button type="primary" style="margin-bottom: 10rpx;" @click="add">add</u-button>
		</view>
		<!-- 热搜 -->
		<my-hot></my-hot>
		<!-- 今日推荐 -->
		<my-recomment></my-recomment>
		<!-- 轮播图片 -->
		<my-swipers2></my-swipers2>
		<!-- tab导航 -->
		<my-tabs></my-tabs>
		<!-- 数据 -->
		<my-list></my-list>
	</view>
</template>

<script>
import Hot from './components/Hot.vue';
import ShowList from './components/ShowList.vue';
import Recomment from './components/Recomment.vue';
import Tabs from './components/Tabs.vue';
import Search from './components/Search.vue';
import Swipers from './components/Swipers.vue';
import Swiper2 from './components/Swiper2.vue';
export default {
	components: {
		'my-search': Search,
		'my-swipers': Swipers,
		'my-swipers2': Swiper2,
		'my-hot': Hot,
		'my-tabs': Tabs,
		'my-list': ShowList,
		'my-recomment': Recomment
	},
	data() {
		return {
			banner: []
		};
	},
	onLoad() {
		this.$optionDB({
			collection: 'banner'
		}).then(res => {
			this.banner = res.data;
		});
	},
	methods: {
		add() {
			let data = {
				id: '4',
				image: 'https://www.uviewui.com/customer/sdf1516355we0sd2.jpg',
				title: '如何修改按钮的样式'
			};
			this.$optionDB({
				type: 'add',
				collection: 'banner',
				data: data
			}).then(res => {
				console.log(res);
			});
		},
		update() {
			this.$optionDB({
				type: 'update',
				collection: 'banner',
				where: { id: '4' },
				data: {
					title: 'testwrfwsa'
				}
			}).then(res => {
				console.log(res);
				// this.$options.onLoad[0]
			});
		},
		remove() {
			this.$optionDB({
				type: 'remove',
				collection: 'banner',
				where: {
					id: '4'
				}
			}).then(res => {
				console.log(res);
				this.$options.onLoad[0];
			});
		}
	}
};
</script>
