// 19/2/2026
// let myPromise = new Promise((res,rej)=>{
//     let data = "this is my data";
//     if(data){
//         res(data);
//     }else{
//         rej("error:no data found");
//     }
// });
// // console.log(myPromise);
// myPromise.then((d)=>{
//     console.log(d);
// },(e)=>{
//     console.log(e);
// });
let pro = new Promise((resolve,reject)=>{
    let proposel ="false"
    if(proposel==="true"){
        resolve()
    }
    else{
        reject()
    }
})
pro.them(()=>console.log("proposal accepted"))
.catch(()=>console.log("proposal rejected"))