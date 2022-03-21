//xac dinh cac doi tuong bi tac dong
//queryall tra ve mang
    let hours= document.querySelectorAll('.hours')
    let minutes= document.querySelectorAll('.minutes')
    let seconds= document.querySelectorAll('.seconds')
    let message= document.querySelector('.message')
//ham thay doi gio
function clock(){
    //tao va lay gio hien tai
    let date=new Date()
    let h= date.getHours()
    let m= date.getMinutes()
    let s= date.getSeconds()
    console.log(h)
    console.log(m)
    console.log(s)
    