class Prom{
    constructor(name,jsdev){
        this.name = name;
        this.jsdev = jsdev;
    }
}

const prom =new Prom('Alim','JavaScript')

const promise = new Promise((resolve,reject)=>{
if(prom.jsdev){
    setTimeout(()=>{
        resolve(`${prom.name} является ${prom.jsdev} разработчиком`)
    },3000)
}else{
    reject(`${prom.name} не является ${prom.jsdev} разработчиком`)
}
})

console.log(promise)


promise
     .then((messsage)=>{
       console.log(messsage)
     })
    .catch((erorr)=>{
        console.log(erorr)
    })
    .finally(()=>{
        console.log('finally')
    })