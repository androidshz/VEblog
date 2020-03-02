axios.defaults.baseURL = 'http://admin.vlog.com:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

;
! function () {
	var layer = layui.layer,
		form = layui.form,
		table = layui.table;
	var upload = layui.upload;

	//验证码点击刷新
	if (document.querySelector('.coder')) {
		document.querySelector('.coder').onclick = function () {
			this.src = axios.defaults.baseURL + '/coder?' + new Date();
		}
	}


	//监听登录提交
	form.on('submit(login)', function (data) {
		//  发起ajax请求把数据提交给服务器
		axios.post('/login', data.field, {
			withCredentials: true
		})
			.then(function (response) {
				console.log(response);
				if (response.data.code == 1) {
					window.location.href = './dongtai.html'
				} else {
					layer.msg(response.data.Msg);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		return false;

	});

	

	//监听注册提交
	form.on('submit(reg)', function (data) {
		//  发起ajax请求把数据提交给服务器
		axios.post('/reg', data.field, {
			withCredentials: true
		})
			.then(function (response) {
				console.log(response);
				if (response.data.code == 1) {
					window.location.href = './login.html'
				} else {
					layer.msg(response.data.Msg);
				}

			})
			.catch(function (error) {
				console.log(error);
			});
		return false;

	});
	//上传图片
	var uploadInst = upload.render({
		elem: '#uploadimg' //绑定元素
		, url: axios.defaults.baseURL + '/upload' //上传接口(服务器)
		, field: 'imgs'
		, done: function (res) {
			//上传完毕回调
			if (res.code == 1) {
				document.querySelector('#showimg').src = res.src;
				document.querySelector('#showimg').style.display = 'inline-block';
				document.querySelector('input[name="cover"]').value = res.src;
			}
		}
		, error: function () {
			//请求异常回调
		}
	});

	

	//退出操作
	if (document.querySelector('.logout')) {
		document.querySelector('.logout').onclick = function () {

			axios.get('/logout', {
				withCredentials: true
			})
				.then(res => {
					window.location.href = './login.html';
				})
				.catch(err => {
					console.error(err);
				})
		}

	}


}();