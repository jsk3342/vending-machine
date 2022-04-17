let insertBtu = document.querySelector('.insert-btu_bottom');
let insertMoney = document.querySelector('.insert-money');
let restMoney = document.querySelector('.rest-money');
let userMoney = insertMoney.value;
let moneyFormat = insertMoney.value.toLocaleString('ko-KR');
let myMoney = parseInt(0);

// 원 단위 콤마식
function comma(num){
    var len, point, str; num = num + ""; 
    point = num.length % 3 ; 
    len = num.length; 
    str = num.substring(0, point); 
    while (point < len) { 
        if (str != "") 
        str += ","; 
        str += num.substring(point, point + 3); 
        point += 3; 
    } return str; 
}

insertBtu.addEventListener('click', function(){ 
    restMoney.textContent = comma(insertMoney.value); 
    insertMoney.value = "";
})

let returnBtu = document.querySelector('.return-btu_bottom');

returnBtu.addEventListener('click', function() {
    restMoney.textContent  = 0;
})