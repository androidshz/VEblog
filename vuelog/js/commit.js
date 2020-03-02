axios.defaults.baseURL = 'http://admin.vlog.com:8080';

;!function(){
//信息获取
let uid = window.location.search.split('=').pop();
axios.get('/user/get',{
    params:{
        uid
    }
})
.then(res => {
    console.log(res);
    let data = new Date(res.data.info.birth);
    let mon = data.getMonth()+1;
    let newdata =data.getFullYear() + '-'+ mon + '-'+ data.getDate();
    document.querySelector('.endearment').innerHTML = res.data.info.username;
    document.querySelector('.personality').innerHTML = res.data.info.trades;
    document.querySelector('.portrait').src = res.data.info.portrait;

    if(document.querySelector('.num-follow')){
    document.querySelector('.num-follow').innerHTML = res.data.info.follow;
    document.querySelector('.num-fans').innerHTML = res.data.info.fans;
    document.querySelector('.num-liked').innerHTML = res.data.info.liked;
    document.querySelector('.editinfo').href = `./personalInfo.html?uid=${uid}`;
    };

    document.querySelector('.homepage').href = `./personalHomepage.html?uid=${uid}`;
    document.querySelector('.album').href = `./personalAlbum.html?uid=${uid}`;
    document.querySelector('.news').href = `./personalInfo.html?uid=${uid}`;

    if(document.querySelector('.box1')){
        document.querySelector('.updatePW').href = `./updatePassword.html?uid=${uid}`;
    }

    if(document.querySelector('.box2')){
        document.querySelector('.uid').value = res.data.info.uid;
        document.querySelector('.uid1').value = res.data.info.uid;

        document.querySelector('.unickname').innerHTML = res.data.info.username;
        document.querySelector('.unickname1').value = res.data.info.username;

        document.querySelector('.name').innerHTML = res.data.info.name;
        document.querySelector('.name1').value = res.data.info.name;

        document.querySelector('.sex').innerHTML = res.data.info.sex;
        document.querySelector('.sex1').value = res.data.info.sex;

        document.querySelector('.location').innerHTML = res.data.info.location;
        document.querySelector('.location1').value = res.data.info.location;

        document.querySelector('.birth').innerHTML = newdata;
        document.querySelector('.birth1').value = newdata;

        document.querySelector('.bloodType').innerHTML = res.data.info.bloodType;
        document.querySelector('.bloodType1').value = res.data.info.bloodType;

        document.querySelector('.trades').innerHTML = res.data.info.trades;
        document.querySelector('.trades1').value = res.data.info.trades;

        document.querySelector('.profiles').innerHTML = res.data.info.profiles;
        document.querySelector('.profiles1').value = res.data.info.profiles;

        document.querySelector('.email').innerHTML = res.data.info.email;
        document.querySelector('.email1').value = res.data.info.email;

        document.querySelector('.QQ').innerHTML = res.data.info.QQ;
        document.querySelector('.QQ1').value = res.data.info.QQ;

        document.querySelector('.phone').innerHTML = res.data.info.phone;
        document.querySelector('.phone1').value = res.data.info.phone;

        
    }
    if(document.querySelector('.PhotoWall')){
        document.querySelector('.Bt1').href = `./addAlbum.html?uid=${uid}`;
        document.querySelector('.Bt2').href = `./addVideo.html?uid=${uid}`;

    }
    if(document.querySelector('.addback')){
        document.querySelector('.addback').href = `./personalAlbum.html?uid=${uid}`;
    }
    document.querySelector('.sculpture').onclick = function(){
        window.location.href = `./editPortrait.html?uid=${uid}`
    }

    
    
})
.catch(err => {
    console.error(err); 
});



}();


    