/* const fakeRequest =(url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let rand = Math.random();
            if(rand>=0.70){
                resolve();
            }else{
                reject()
            }
        },1000)
    })
}
fakeRequest("google.com")
    .then(()=>{
        console.log("call")
    })
    .catch(()=>{
        console.log("rejected")
    })
 */
const changeBack = (color,delay)=>{
    //ada may callback function cya
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color
            resolve() //dd ibigsabihn pag ma execute n na code call an resolve para a return sa
                        //sa promise resolve
        },delay)
    })
}
changeBack("red",1000)
    .then(()=>changeBack("green",2000))
    .then(()=>{
        return changeBack("violet",1000)
    })
    .then(()=>{
        return changeBack("blue",1000)
    })