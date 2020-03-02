axios.defaults.baseURL = 'http://admin.vlog.com:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

window.onload = function () {
    var nav = document.getElementById('nav');
    var oNav = nav.getElementsByTagName('li');
    var container = document.getElementById('container');
    var oDiv = container.getElementsByClassName('tab');
    for (var i = 0; i < oNav.length; i++) {
        oNav[i].index = i;
        oNav[i].onclick = function () {
            for (var i = 0; i < oNav.length; i++) {
                oNav[i].className = '';
                oDiv[i].style.display = "none";
            }
            this.className = 'act';
            oDiv[this.index].style.display = "block";
        }
        for (var m = 1; m < oNav.length; m++) {
            oNav[m].className = '';
            oDiv[m].style.display = "none";
        }
    }
    
    
    
    document.querySelector(".center").onclick=function(){
    	console.log(1)
    	window.location.href='./comment.html'
    }
    
    
    
    
    // 动态
    axios.get('/dongtai')
        .then(res => {
            console.log(res.data)
            let htmlArr = res.data.map(function (v, i) {
                return `<div class="centerv" style="height: 280px; margin-bottom: 20px;">
            <div>
                <video src="${v.video}" width="100%" height="100%" autoplay="autoplay" loop="loop"
                    muted="">
            </div>
            <div>
                <div class="text" style="padding-top: 10px;">${v.text}</div>
                <div class="top" style="padding-top: 10px;">
                    <img src="./img/shijian.png" alt="">
                    <span>${new Date(v.addtimes).toLocaleString()}</span>
                </div>
            </div>
        </div>`;
            });
            // console.log(htmlArr);
            document.querySelector('.videodiv').innerHTML = htmlArr.join('');
        })
        .catch(err => {
            console.error(err);
        })
    // 烧机
    axios.get('/shaoji')
        .then(res => {
            console.log(res.data)
            let htmlArr2 = res.data.map(function (d, i) {
                return `<div class="centerv center2" style="margin-bottom: 20px;">
            <img src="${d.dimg}" alt="图片加载失败">
            <div class="text shaojitext" style="padding-top: 10px;">${d.dtext}</div>
            <div class="wenzi" style="padding-top: 5px;">${d.dtextlong}</div>
            <div class="top" style="padding-top: 5px;">
                <img src="./img/yonghu.png" alt="" srcset="">
                <span>${d.dname}</span>
                <img src="./img/shijian.png" alt="">
                <span>${d.dtime}</span>
        </div>
        </div>`;
            });
            // console.log(htmlArr2);
            document.querySelector('.shaojisql').innerHTML = htmlArr2.join('');
        })
        .catch(err => {
            console.error(err);
        })
    // 观点
    axios.get('/guandian')
        .then(res => {
            console.log(res.data)
            let htmlArr3 = res.data.map(function (g, i) {
                return `<div class="centerv center3" style="margin-bottom: 20px;">
                <img src="${g.gimg}" alt="图片加载失败">
                <div style="font-size: 14px;padding-left: 5px;">${g.gtext}</div>
                <div style="color: #717171;font-size: 10px;padding-top: 10px;">
                    <img style="width: 15px;height: 15px;" src="./img/ci.png" alt="">
                    <span>${g.gd}</span>
                </div>
            </div>`;
            });
            // console.log(htmlArr3);
            document.querySelector('.guandainsql').innerHTML = htmlArr3.join('');
        })
        .catch(err => {
            console.error(err);
        })
// 评测
axios.get('/pingce')
        .then(res => {
            console.log(res.data)
            let htmlArr4 = res.data.map(function (p, i) {
                return `<div class="centerv center2"  style="margin-bottom: 20px;">
                <img src="${p.pimg}" alt="图片加载失败">
                <div class="text" style="padding-top: 10px;color: #f00;">${p.ptext}</div>
                <div class="wenzi" style="padding-top: 5px;">${p.ptextlong}</div>
                <div class="top" style="padding-top: 5px;">
                    <img src="./img/yonghu.png" alt="" srcset="">
                    <span>${p.pname}</span>
                    <img src="./img/shijian.png" alt="">
                    <span>${p.ptimes}</span>
                </div>
            </div>`;
            });
            // console.log(htmlArr4);
            document.querySelector('.pingcesql').innerHTML = htmlArr4.join('');
        })
        .catch(err => {
            console.error(err);
        })
// 图赏
axios.get('/tushang')
        .then(res => {
            console.log(res.data)
            let htmlArr5 = res.data.map(function (t, i) {
                return `<div class="centerv"  style="margin-bottom: 20px;">
                <div style="width: 100%;height: 250px;">
                    <img src="${t.timg}" alt="图片加载失败">
                </div>
                <div class="h">${t.ttext}</div>
            </div>`;
            });
            // console.log(htmlArr5);
            document.querySelector('.tushangsql').innerHTML = htmlArr5.join('');
        })
        .catch(err => {
            console.error(err);
        })

        // 专题
        axios.get('/zhuanti')
        .then(res => {
            console.log(res.data)
            let htmlArr6 = res.data.map(function (zt, i) {
                return `<div class="zhuanti" style="margin-bottom: 20px;">
                <img src="${zt.zimg}" alt="图片加载失败">
                <div class="text" style="padding-top: 30px;">${zt.ztext}</div>
            </div>`;
            });
            // console.log(htmlArr6);
            document.querySelector('.zhuantisql').innerHTML = htmlArr6.join('');
        })
        .catch(err => {
            console.error(err);
        })

        // 推荐
        axios.get('/tuijian')
        .then(res => {
            console.log(res.data)
            let htmlArr7 = res.data.map(function (tj, i) {
                return `<div class="tuijian" style="margin-bottom: 20px;">
                <img src="${tj.tjimg}" alt="图片加载失败">
                <div style="padding-left: 10px;">${tj.tjtext}</div>
                <div style="padding-top: 60px;">
                    <img style="width: 15px;height: 15px;padding-left: 10px;" src="./img/yonghu.png" alt=""
                        srcset="">
                    <span style="font-size: 12px;color: #717171;">${tj.tjname}</span>
                    <img style="width: 15px;height: 15px;padding-left: 10px;" src="./img/shijian.png" alt="">
                    <span style="font-size: 12px;color: #717171;">${tj.tjtimes}</span>
                </div>
            </div>`;
            });
            // console.log(htmlArr7);
            document.querySelector('.tuijiansql').innerHTML = htmlArr7.join('');
        })
        .catch(err => {
            console.error(err);
        })
        
        
        
      
        
        
        
        
};