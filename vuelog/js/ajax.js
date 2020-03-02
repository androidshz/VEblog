axios.defaults.baseURL = 'http://admin.vlog.com:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
!function(){		
	if(document.querySelector('#playvideo')){
		axios.get('/getvideo')
			.then(function (response) {
				let data=response.data.data[0];
				console.log(data.src)
				console.log(data)
				
				if(response.data.code==1){
					
					document.querySelector('.videotitle').innerText =data.title;
					document.querySelector('.videotype').innerText =data.typecontent;
					document.querySelector('.videosource').src =data.src;
					document.querySelector('.hidenvid').value =data.vid;
				document.querySelector('#addlikesnum').innerText=data.likes
					
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		
	}
	
	
	
	if(document.querySelector('.likes')){
		
		document.querySelector('.likes').onclick=function(event){
			
			
			
			
			
			let vid=document.querySelector('.hidenvid').value 
		document.querySelector('.likes').classList.add('color'+(event.target.dataset.style)%2)
		document.querySelector('.likes').classList.remove('color'+(1+event.target.dataset.style*1)%2)
			event.target.dataset.style=event.target.dataset.style*1+1
				axios.post('/addlikes',{vid:vid})
			.then(function (response) {
				let data=response.data.data[0];
				console.log(data)
				console.log(response.data.code)				
				if(response.data.code==1){
					document.querySelector('.videotitle').innerText =data.title;
					document.querySelector('.videotype').innerText =data.typecontent;
					
				}
			})
			.catch(function (error){
				console.log(error);
			});
		axios.get('/getvideo',{params: {uid}})
			.then(function (response) {
				let data=response.data;
				console.log(data)			
				if(response.data.code==1){
					document.querySelector('#addlikesnum').innerText=data.data[0].likes
					
				}
			})
			.catch(function (error) {
				console.log(error);
			});
			
			
		}
		
		
		
		
		
		
			console.log("登陆成功")
		axios.get('/check', {
			withCredentials: true
		})
			.then(res => {
				console.log(res.data.portrait)
				document.querySelector('.portrait').src=res.data.portrait
				document.querySelector('.userspaint').src=res.data.portrait
				
				document.querySelector('.user-avator').src=res.data.portrait
				document.querySelector('.uid').value=res.data.uid
				document.querySelector('#uid').href=`./personalHomepage.html?uid=${res.data.uid}`
				
			})
			.catch(err => {
				console.error(err);
			})
		
		
		
	let uid=document.querySelector('.uid').value
	
		axios.get('/getvideo',{params: {uid}})
			.then(function (response) {
				let data=response.data;
				console.log(data)			
				if(response.data.code==1){
					
					
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		
	}
	
	
	if(document.querySelector('#sendcomment')){
		
		document.querySelector('#sendcomment').onclick=function(){
			let vid=document.querySelector('.hidenvid').value 
			let time=new Date();
			let now=time.toLocaleString( ); //获取日期与时间
			console.log(now)
			let uid=document.querySelector('.uid').value
		let data=document.querySelector('.comment').value;
		axios.post('/aplaycomment',{commentcontent:data,times:now,vid:vid,uid:uid})
			.then(function (response) {
				console.log(response)
				let responsedata=response.data.commentcontent;
				let responsetime=response.data.times
				let username=response.data.username
				let portrait=response.data.portrait
				
				document.querySelector('.spanusername').innerText=username
				
            let htmlArr = `<li>
							<a href="">
							<span class="head-wrap">
								<img class="user-avator" src="${portrait}"/>
							</span>
							
						</a>
						<div class="comment-wrap">
							<div class="user-time">
								<a href="">
									<span class="user-name fs_14 fw_6 c_b_3">
										${username}
									</span>
									<span class="send-time fw_3 c_b_9 fontsize-12">
										${responsetime}
									</span>
								</a>
							</div>
						<div class="comment-con fs_14 c_b_9 fw_3">
							${responsedata}
						</div>
						<div class="comment-btn c_b_9 fontsize-12 fw_6 ">
							<span class="report-btn">
							举报	
							</span>
							<span class="i-ico">
								
							</span>
							<span class="relpy-btn">
								回复
							</span>
							<span class="i-ico">
								
							</span>
							<span id="">
								赞
							</span>
						</div>
						
						</div>
						
						</li>`
          
            // console.log(htmlArr);
            document.querySelector('.comment-list').innerHTML = htmlArr;
				
		
			})
			.catch(function (error) {
				console.log(error);
			});
		}
		
	}
	
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

//		axios.post('/addplaytimes',)
//			.then(function (response) {
//				console.log(response)
//				}
//			})
//			.catch(function (error) {
//				console.log(error);
//			});
//		return false;
//	
	
	
	
	
	
	
	
	
	
	
	
	
	
}();
