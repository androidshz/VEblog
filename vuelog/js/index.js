axios.defaults.baseURL = 'http://admin.vlog.com:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
;
! function () {
	var layer = layui.layer,
		form = layui.form;
	form.on('submit(addcourse)', function (data) {
		//  发起ajax请求把数据提交给服务器
		delete data.field.imgs;
		axios.post('/addcourse', data.field)
			.then(function (response) {
				console.log(response);
				// debugger;
				if (response.data.code == 1) {
					window.location.href = './dongtai.html';
				} else {
					layer.msg(response.data.Msg);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		return false;
	});
	

}();