<template>
	<view>
		<view class="bg">
			<view class="cover"></view>
		</view>
		<view style="height:100rpx;line-height:100rpx;background-color:rgba(60,156,255,0.5);">
			<text style="margin-left:4%;color:white;">请选择机构</text>
		</view>
		<u-list :showScrollbar="false" height="500rpx">
			<u-list-item v-for="(item, index) in testlist" :key="index">
				<u-cell :title="item.tp_name" :label="item.tp_location" :clickable="true" @click="choose(item.tp_id,item.tp_name)">
				</u-cell>
			</u-list-item>
		</u-list>
		<view style="position:fixed;bottom:90rpx;width:100%;">
			<view style="margin-left:35%;">
				<u-icon name="arrow-leftward" :bold="true" color="#3c9cff" size="23" label="点我返回" labelSize="17" labelColor="#3c9cff" @click="back"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				testlist:[],
			}
		},
		mounted() {
			uni.request({
			    url: this.$BASE_URL.BASE_URL+'/getAllTestPoint',
			    method: 'POST',
				header:{
					'Content-Type': 'application/json',
				},
				data:{
				},
			    success: res => {
					if(res.data.code==200){
						let that = this;
						that.testlist=JSON.parse(JSON.stringify(res.data.data));
					}
			    }
			});
		},
		methods: {
			choose(id,name){
				//console.log(id)
				this.$natpoint.memberObj.nat_test=id;
				this.$natpoint.memberObj.nat_testname=name;
				uni.redirectTo({
					url:'/pages/Scancode/result'
				})
			},
			back(){
				uni.redirectTo({
					url:'/pages/Login/login'
				})
			}
		}
	}
</script>

<style>
	.bg{
		height: 480rpx;
		width: 100%;
		z-index: -1;
		background-image: url("../../static/nanjing.png");
		background-size: 100% 100%;
	}
	.cover{
		height: 100%;
		width: 100%;
		z-index: -1;
		background-color: rgba(60,156,255,0.4);
		background-size: 100% 100%;
	}
</style>
