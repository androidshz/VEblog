axios.defaults.baseURL = 'http://admin.vlog.com:8080';


let input = document.querySelector('.filed');
input.onchange = function(){
  // console.log(input.files)
  let formdata = new FormData();
  let file = input.files[0];
  formdata.append('filed', file)
  axios.post('/uploadFile/uploadPortrait',formdata)
  .then(res => {
    console.log(res)
    document.querySelector('.imgPath').value = res.data.src;
    document.querySelector('.uploadFileImg').style.display = 'block'
    document.querySelector('.uploadFileImg').src = res.data.src;
  })
  .catch(err => {
    console.error(err); 
  })
}

let Bt = document.querySelector('.submitBt');
Bt.onclick = function(){

    let data = {};

    let portrait = document.querySelector('.imgPath').value;
    let uid = window.location.href.split('=')[1];
    data.uid = uid;
    data.portrait = portrait;
    console.log(data)
    

    axios.post('/editInfo/edit',data)
    .then(res => {
      console.log(res)
      window.location.reload();

    })
    .catch(err => {
      console.error(err); 
    })

}