axios.defaults.baseURL = 'http://admin.vlog.com:8080';

let data = {};
let uid = window.location.href.split('=')[1];
    data.uid = uid;

axios.post("/getVideo/index",data)
.then(res => {
    console.log(res);
    document.querySelector('.vtitle').innerHTML = res.data.vtitle;
    document.querySelector('.video').src = res.data.vpath;
    document.querySelector('.vtype').innerHTML = res.data.vtype;
    document.querySelector('.vtime').innerHTML = res.data.vtime;
    document.querySelector('.vinfo').innerHTML = res.data.vinfo;
    
})
.catch(err => {
    console.error(err); 
})
