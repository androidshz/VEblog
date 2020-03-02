axios.defaults.baseURL = 'http://admin.vlog.com:8080';


let input = document.querySelector('.filed');
input.onchange = function(){
  // console.log(input.files)
  let formdata = new FormData();
  let file = input.files[0];
  formdata.append('filed', file)
  axios.post('/uploadFile/upload',formdata)
  .then(res => {
    console.log(res)
    document.querySelector('.imgPath').value = res.data.src;
  })
  .catch(err => {
    console.error(err); 
  })
}
// console.log(window.location.href)

let Bt = document.querySelector('.submitBt');
Bt.onclick = function(){

  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth()+1;
  var day = time.getDate();
  console.log(year,month,day)
  let datetime = year+'-'+month+'-'+day;

  let uid = window.location.href.split('=')[1];
  // console.log(uid[1]);

  let vtitle = document.querySelector('.vtitle').value;
  let vpath  = document.querySelector('.imgPath').value;
  let vtype  = document.querySelector('.vtype').value;
  let vtime  = datetime;
  let vinfo  = document.querySelector('.vinfo').value;
  let data = {};
  
  data.uid = uid;
  data.vtitle = vtitle;
  data.vpath = vpath;
  data.vtype = vtype;
  data.vtime = vtime;
  data.vinfo = vinfo;
  // console.log(data);

  axios.post('/addVideo/index',data)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err); 
  })
}



