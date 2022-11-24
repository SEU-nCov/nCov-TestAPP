<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{this.title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				timer: '',
			}
		},
		onLoad() {
			this.timer=setInterval(()=>{this.gotopages()}, 1500);
		},
		onUnload() {
			clearInterval(this.timer);
		},
		methods: {
			gotopages(){
				uni.redirectTo({
					url:"/pages/Login/login"
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 350rpx;
		width: 350rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 100rpx;
		border-radius: 50%;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
