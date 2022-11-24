export default {
    memberObj:{
		nat_id: '',
		nat_account: '',
		nat_test:'',
		nat_testname:'',
    },
    setMemberObj(data){
        this.memberObj = Object.assign({},this.memberObj,data) 
    }
}