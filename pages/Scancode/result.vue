<template>
	<view style="position:absolute;width:100%;height:100%;">
		<uni-section :title="name" type="line" >
			<uni-card cover="../../static/logo.png">
				<text style="font-weight:700;color:black;font-size:15px;line-height:100rpx;">管号：{{this.number}}</text>
				<u-line></u-line>
				<text style="line-height:100rpx;">请录入检测结果</text>
				<view style="font-size:15px;line-height:70rpx;">
					<u-radio-group :iconSize="18" :labelSize="16" v-model="value" iconPlacement="left" placement="column" @change="checkboxChange">
						<u-radio v-for="(item, index) in reslist" :key="index" shape="square"
							:name="item.name" :activeColor="item.color">
							{{item.name}}
						</u-radio>
					</u-radio-group>
					<view><button class="bottombtn" @click="submit">确认提交</button></view>
				</view>
			</uni-card>
		</uni-section>
		<view style="width:90%;position:fixed;bottom:30rpx;margin-left:5%;">
			<button class="btn" style="float:left;" @click="scan">扫码录入</button>
			<button class="btn" style="float:right;" @click="back">退出</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number:'请扫管录入',
				id:this.$natpoint.memberObj.nat_test,
				name:this.$natpoint.memberObj.nat_testname,
				value:'',
				value_last:'',
				reslist:[{name:'阴性',color:'limegreen'},{name:'阳性',color:'orange'}],
			}
		},
		methods: {
			scan(){
				let that = this;
				uni.scanCode({
					success: function (res) {
						that.number=res.result;
				}});
			},
			back(){
				uni.redirectTo({
					url:'/pages/Login/login'
				})
			},
			checkboxChange(){
				if(this.value!==this.value_last){
					this.value_last=this.value;
				} else {
					this.value='';
					this.value_last='';
				}
			},
			submit(){
				if(this.number=='请扫管录入'){
					uni.showToast({
						icon:"none",
						title:"请先扫描核酸检测管"
					})
				} else {
					let that = this;
					var num=this.number;
					uni.request({
					    url: that.$BASE_URL.BASE_URL+'/natResultInput',
					    method: 'POST',
						header:{
							'Content-Type': 'application/json',
						},
						data:{
							'tube_id':num,
							'nat_peopleid':this.$natpoint.memberObj.nat_test,
							'nat_result':this.value,
						},
					    success: res => {
							if(res.data.code==200){
								uni.showToast({
									icon:"none",
									title:"信息提交成功"
								})
								that.number="请扫管录入";
								that.value='';
								that.value_last='';
								uni.request({
									url: that.$BASE_URL.BASE_URL+'/addnatResultMessage',
									method: 'POST',
									header:{
										'Content-Type': 'application/json',
									},
									data:{
										'tube_id':num,
									},
									 success: res => {}
								});
								uni.request({
									url: that.$BASE_URL.BASE_URL+'/sendnatResultSMS',
									method: 'POST',
									header:{
										'Content-Type': 'application/json',
									},
									data:{
										'tube_id':num,
									},
									 success: res => {}
								});
							} else {
								uni.showToast({
									icon:"none",
									title:"信息提交失败，请重试"
								})
							}
					    }
					});
				}
			}
		}
	}
</script>

<style>
	.btn{
		width:45%;
		background-color:#3c9cff;
		color: white;
		border-radius:5px;
		font-size: 15px;
	}
	button:after{
		border:none;
	}
	
	.card{
		width:90%;
		height:85%;
		border:none;
		box-shadow:0 0 15px lightgray;
		margin-left: 5%;
		margin-top: 5%;
		border-radius:8px;
		justify-content:center;
		align-items:center;
	}
	
	.title{
		//border-radius: 50%;
		height: 400rpx;
		width: 60%;
		margin-left:20%;
		z-index: -1;
		background-image: url("../../static/logo.png");
		background-size: 100% 100%;
	}
	.bottombtn{
		width:46%;
		margin-left:27%;
		height: auto;
		background-color:skyblue;
		color: white;
		font-size: 15px;
		margin-top:5%;
	}
</style>
