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

// let Bt = document.querySelector('.submitBt');
// Bt.onclick =function(){
//   axios.post('/add',params)
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.error(err); 
//   })
// }
