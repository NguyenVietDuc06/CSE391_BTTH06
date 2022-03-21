//ham tao mang
function tao_mang(){
    // arr = new Array(Math.floor(Math.random()*11)+11)
    // for(let i=0;i<arr.length;i++){
        arr=[]
        for(let i=0;i<Math.floor(Math.random()*11)+11;i++){
        arr[i]=Math.floor(Math.random()*90)+11
    }
    return arr
}
// tao_mang()
function sap_tang(){
    for(let i=0;i<arr.length-1;i++){
        for(j=arr.length-1;j>i;j--){
            if(arr[j]<arr[j-1]){
                let temp=arr[j]
                arr[j]=arr[j-1]
                arr[j-1]=temp
            }
        }
    }
    return arr
}
//dung thu vien bi loi khi them
// function sap_tang(){
//     arr.sort()
//     return arr
// }
// console.log(sap_tang())
// sap_tang()

function sap_giam(){
    for(let i=0;i<arr.length-1;i++){
        for(j=arr.length-1;j>i;j--){
            if(arr[j]>arr[j-1]){
                let temp=arr[j]
                arr[j]=arr[j-1]
                arr[j-1]=temp
            }
        }
    }
    return arr
}
