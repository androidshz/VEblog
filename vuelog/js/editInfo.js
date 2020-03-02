axios.defaults.baseURL = 'http://admin.vlog.com:8080';


var boor = true;
var objInfo1 = {};

document.querySelectorAll('.button')[0].onclick = function () {

    if (boor) {
        document.querySelectorAll('.button')[0].innerHTML = '保存';
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll('.information')[i].style.display = 'none';
        }
        for (let j = 0; j < 8; j++) {
            document.querySelectorAll('.editInformation')[j].style.display = 'block';
        }
        boor = false;
    } else {
        document.querySelectorAll('.button')[0].innerHTML = '编辑';
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll('.information')[i].style.display = 'block';
        }
        for (let j = 0; j < 8; j++) {
            document.querySelectorAll('.editInformation')[j].style.display = 'none';
            let val = document.querySelectorAll('.editInformation')[j].value;
            let nam = document.querySelectorAll('.editInformation')[j].name;
            objInfo1[nam] = val;
        }
        let name1 = document.querySelector('.uid').name;
        let value1 = document.querySelector('.uid').value;
        objInfo1[name1] = value1;
        boor = true;

        console.log(objInfo1);
        //发起ajax请求给服务器
        axios.post('/editInfo/edit', objInfo1)
            .then(function (response) {
                console.log(response);
                // 添加成功
                if (response.data.code == 1) {
                    window.location.reload();
                    window.alert('修改成功');
                } else {
                    //   layer.msg(response.data.Msg);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        // window.location.href = './personalInfo.html'

    }
};
var boor1 = true;
var objInfo2 = {};

document.querySelectorAll('.button')[1].onclick = function () {
    if (boor1) {
        document.querySelectorAll('.button')[1].innerHTML = '保存';
        for (let i = 9; i < 12; i++) {
            document.querySelectorAll('.information')[i].style.display = 'none';
        }
        for (let j = 8; j < 11; j++) {
            document.querySelectorAll('.editInformation')[j].style.display = 'block';
        }
        boor1 = false;
    } else {
        document.querySelectorAll('.button')[1].innerHTML = '编辑';
        for (let i = 8; i < 12; i++) {
            document.querySelectorAll('.information')[i].style.display = 'block';
        }
        for (let j = 8; j < 11; j++) {
            document.querySelectorAll('.editInformation')[j].style.display = 'none';
            let val = document.querySelectorAll('.editInformation')[j].value;
            let nam = document.querySelectorAll('.editInformation')[j].name;
            objInfo2[nam] = val;
        }

        let name2 = document.querySelector('.uid1').name;
        let value2 = document.querySelector('.uid1').value;
        objInfo2[name2] = value2;
        boor1 = true;

        console.log(objInfo2);
        //发起ajax请求给服务器
        axios.post('/editInfo/edito', objInfo2)
            .then(function (response) {
                console.log(response);
                // 添加成功
                if (response.data.code == 1) {
                    window.location.reload();
                    window.alert('修改成功');
                } else {
                    //   layer.msg(response.data.Msg);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        // window.location.href = './personalInfo.html'

    }
};
var boor2 = true;
document.querySelectorAll('.button')[2].onclick = function () {
    if (boor2) {
        document.querySelectorAll('.button')[2].innerHTML = '保存';
        document.querySelectorAll('.information')[12].style.display = 'none';
        document.querySelectorAll('.editInformation')[11].style.display = 'block';

        boor2 = false;
    } else {
        document.querySelectorAll('.button')[2].innerHTML = '编辑';
        document.querySelectorAll('.information')[12].style.display = 'block';
        document.querySelectorAll('.editInformation')[11].style.display = 'none';

        boor2 = true;
    }
};
var boor3 = true;
document.querySelectorAll('.button')[3].onclick = function () {
    if (boor3) {
        document.querySelectorAll('.button')[3].innerHTML = '保存';
        document.querySelectorAll('.information')[13].style.display = 'none';
        document.querySelectorAll('.editInformation')[12].style.display = 'block';


        boor3 = false;
    } else {
        document.querySelectorAll('.button')[3].innerHTML = '编辑';
        document.querySelectorAll('.information')[13].style.display = 'block';
        document.querySelectorAll('.editInformation')[12].style.display = 'none';

        boor3 = true;
    }
};


//修改信息

    // if(1){

    //     //发起ajax请求给服务器
    //     axios.post('/course/edit', data.field)
    //       .then(function (response) {
    //         console.log(response);
    //         // 添加成功
    //         if (response.data.code == 1) {
    //           window.location.href = './course.html'
    //         } else {
    //           layer.msg(response.data.Msg);
    //         }
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //     return false;

    // }