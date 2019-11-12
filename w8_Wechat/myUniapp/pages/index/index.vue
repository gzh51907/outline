<template>
	<view class="content">
		<img class="logo" src="/static/logo.png"/>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<!-- 使用html标签，会自动转成view -->
		<strong>text</strong>
		<h1>使用html标签</h1>
		<button @click="handler">点我</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello world'
			}
		},
		onLoad() {

		},
		created(){
			
		},
		methods: {
			handler(){
				this.title = 'hello laoxie';
				// 在uni-app中调用小程序接口
				// wx.canIUse()
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	h1{color:#f00;}
</style>
