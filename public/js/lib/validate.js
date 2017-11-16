/**
 * @author Administrator
 */
function initValidator(base){
	
	$("#popForm").validate({
		onkeyup:false,
		//设置验证规则   
		rules:{
 			"offer.name":{
 				required:true,
 				userNameCheck: true,
 				maxlength:20
 			},
 			"offer.tel":{
 			 maxlength:30,
 			 isMobile: true  
 			},
 			"offer.qq":{
 				maxlength:30
 			},
 			"offer.wechat":{
 				maxlength:30
 			},
 			"offer.email":{
 				maxlength:40,
 				isEmail: true
 			},
 			"offer.brief":{
 				maxlength:255,
 				stringCheck:true
 			}
 		},
		//设置错误信息  
		messages: {
			"offer.name": {
				required: "请输入用户名",
				userNameCheck: "请输入4-20位字母开头的字母或数字和下划线"
			},
			"offer.tel": {
				required: "请输入手机号码",
				isMobile: "请输入有效的手机号码"
			},
			"offer.qq":{
 				maxlength:'长度不能超过30个字符'
 			},
 			"offer.wechat":{
 				maxlength:'长度不能超过30个字符'
 			},
			"offer.email": {
				required: "请输入邮箱",
				isEmail: "请正确填写邮箱格式"
			},
			"offer.brief":{
 				maxlength:'长度不能超过255个字符',
 				stringCheck:'请输入正确的内容'
 			}
 			
		},
		errorElement:"font",
		errorPlacement: function(error, element){
			error.appendTo(element.parent().find(".tipinfo"));
		},success:"valid"
	});

}
