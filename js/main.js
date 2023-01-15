var fullObj = {
    nomi: '',
    kattaligi: '',
    ichiga: [],
    qoshimchalari: []
}



function kattaligi(e) {
    fullObj.kattaligi = e
    ElTitleKattaligi.textContent = e
}

var ElSelect = document.querySelector('#select');
var ElTitleNomi = document.querySelector('.titleNomi');
var ElTitleKattaligi = document.querySelector('.titleKattaligi');
var ElTitleIchiga = document.querySelector('.titleIchiga');
var Elsm = document.querySelector('.sm');

ElSelect.addEventListener('change', ()=>{
    fullObj.nomi = ElSelect.value;
    ElTitleNomi.textContent = ElSelect.value;
})

 

var ElCheck1 = document.querySelector('.check1');
var ElCheck2 = document.querySelector('.check2');
var ElCheck3 = document.querySelector('.check3');
var ElCheck4 = document.querySelector('.check4');
var conta = document.querySelector('.container');

ElCheck1.addEventListener('click', ()=>{
    if (ElCheck1.checked == true) {
        fullObj.ichiga.push('Salat');
        ElTitleIchiga.textContent = fullObj.ichiga
    }else {
        var index = fullObj.ichiga.indexOf('Salat');
        if(index > -1){
            fullObj.ichiga.splice(index, 1)
            ElTitleIchiga.textContent = fullObj.ichiga
        }
    }
})
ElCheck2.addEventListener('click', ()=>{
    if (ElCheck2.checked == true) {
        fullObj.ichiga.push('Mayanez');
        ElTitleIchiga.textContent = fullObj.ichiga
    }else {
        var index = fullObj.ichiga.indexOf('Mayanez');
        if(index > -1){
            fullObj.ichiga.splice(index, 1)
            ElTitleIchiga.textContent = fullObj.ichiga
        }
    }
})
ElCheck3.addEventListener('click', ()=>{
    if (ElCheck3.checked == true) {
        fullObj.ichiga.push('Pamildori');
        ElTitleIchiga.textContent = fullObj.ichiga

    }else {
        var index = fullObj.ichiga.indexOf('Kurka go`shti');
        if(index > -1){
            fullObj.ichiga.splice(index, 1)
            ElTitleIchiga.textContent = fullObj.ichiga
        }
    }
})
ElCheck4.addEventListener('click', ()=>{
    if (ElCheck4.checked == true) {
        fullObj.ichiga.push('Kalbasa');
        ElTitleIchiga.textContent = fullObj.ichiga
    }else {
        var index = fullObj.ichiga.indexOf('Kalbasa');
        if(index > -1){
            fullObj.ichiga.splice(index, 1)
            ElTitleIchiga.textContent = fullObj.ichiga
        }
    }
})



var ElShuyetarli = document.querySelector('.shuyetarli');
var Elpishloq = document.querySelector('.pishloq');
var ElQoshimcha = document.querySelector('.titleQoshimchalari');


ElShuyetarli.addEventListener('click', ()=> {
    if(ElShuyetarli.checked == true){
        fullObj.qoshimchalari.push('Shu-yetarli')
        ElQoshimcha.textContent = fullObj.qoshimchalari;
    }else {
        var index = fullObj.qoshimchalari.indexOf('Shu-yetarli');
        if(index > -1){
            fullObj.qoshimchalari.splice(index, 1)
            ElQoshimcha.textContent = fullObj.qoshimchalari
        }
    }
})

Elpishloq.addEventListener('click', ()=> {
    if(Elpishloq.checked == true){
        fullObj.qoshimchalari.push('Pishloq')
        ElQoshimcha.textContent = fullObj.qoshimchalari;
    }else {
        var index = fullObj.qoshimchalari.indexOf('Pishloq');
        if(index > -1){
            fullObj.qoshimchalari.splice(index, 1)
            ElQoshimcha.textContent = fullObj.qoshimchalari
        }
    }
})



var ElBuyurtma = document.querySelector('.Buyurtma');

ElBuyurtma.addEventListener('click', ()=>{
    console.log(fullObj);
})