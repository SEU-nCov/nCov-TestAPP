<template>
	<view style="position:absolute;width:100%;height:100%;">
		<view style="margin-left:5%;margin-top:50rpx;height:100rpx;">
			<text style="font-weight:700;">管号：{{this.number}}</text>
			<button class="topbtn" @click="back">退出</button>
		</view>
		<view style="margin-left:5%;width:90%"><u-line></u-line></view>
		<view v-for="(item,index) in peopleinfo" :key="index" v-if="peopleinfo.length!=0">
			<uni-card :title="'采样人员'+(index+1)" :extra="item.time">
				<view style="line-height: 60rpx;">
					<text class="uni-body" style="color:#6A55A2;">姓名：{{item.name}}</text>
					<text class="uni-body">\n身份证号：{{item.iden}}</text>					
				</view>
			</uni-card>
		</view>
		<u-gap height="50"></u-gap>
		<view style="width:90%;position:fixed;bottom:30rpx;margin-left:5%;">
			<button class="btn" style="float:left;" @click="scan">扫管录入</button>
			<button class="btn" style="float:right;" @click="submit">提交</button>
		</view>
		<uni-fab ref="fab" :popMenu="false" horizontal="right" vertical="bottom" @fabClick="fabClick" />
	</view>
</template>

<script>
	function getValue( key, str ) {
		var reg = key + '(.*?)' + ',';
	    var m = str.match(reg);
	    return m[1];
	 }
	export default {
		data() {
			return {
				number:'请扫管录入',
				peopleid:[],
				peopleinfo:[],
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
			submit(){
				let that = this;
				uni.request({
				    url: that.$BASE_URL.BASE_URL+'/sampleInput',
				    method: 'POST',
					header:{
						'Content-Type': 'application/json',
					},
					data:{
						'tube_id':this.number,
						'nat_pointid':this.$natpoint.memberObj.nat_id,
						'user_list':this.peopleid,
					},
				    success: res => {
						if(res.data.code==200){
							uni.showToast({
								icon:"none",
								title:"信息提交成功"
							})
							that.number="请扫管录入";
							that.peopleid=[];
							that.peopleinfo=[];
						} else {
							uni.showToast({
								icon:"none",
								title:"信息提交失败，请重试"
							})
						}
				    }
				});
			},
			fabClick(){
				let that = this;
				if(this.number=='请扫管录入'){
					uni.showToast({
						icon:"none",
						title:"请先扫描核酸检测管"
					})
				} else if(this.peopleid.length==10){
					uni.showToast({
						icon:"none",
						title:"已满10人，请提交后重新扫管"
					})
				} else{
					uni.scanCode({
						success: function (res) {
							//that.number=res.result;
							var user_id=getValue("id:",res.result);
							var user_name=getValue("name:",res.result);
							var user_iden=getValue("iden:",res.result);
							let struct={name:'',iden:'',time:''};
							that.peopleid.push(user_id);
							struct.name=user_name;
							struct.iden=user_iden;
							let time = new Date();
							let year = time.getFullYear();
							let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
							let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
							let hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
							let minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
							let second = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
							struct.time= year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
							that.peopleinfo.push(struct);
							//console.log(that.peopleid);
							//console.log(that.peopleinfo);
					}});
				}
			}
		},
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
	.topbtn{
		 float:right;
		 right:5%;
		 background-color:rgba(255,255,255,0);
		 border:#3c9cff 1px solid;
		 color:#3c9cff;
		 font-size:15px;
		 line-height:60rpx;
		 height:60rpx;
		 width:150rpx;
	}
</style>