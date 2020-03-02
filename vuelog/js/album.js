
for (let i = 0; i < 4; i++) {
    let j = '#dh' + i;
    let w = '.DH' + i;
    document.querySelector(j).onclick = function () {
        document.querySelector('#dh0').setAttribute("class", "d");
        document.querySelector('.DH0').style.display = 'none';

        document.querySelector('#dh1').setAttribute("class", "d");
        document.querySelector('.DH1').style.display = 'none';

        document.querySelector('#dh2').setAttribute("class", "d");
        document.querySelector('.DH2').style.display = 'none';

        document.querySelector('#dh3').setAttribute("class", "d");
        document.querySelector(j).setAttribute("class", "dh");
        document.querySelector(w).style.display = 'block';
        
        // console.log(12345)
    }
}


