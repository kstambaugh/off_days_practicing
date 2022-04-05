const food = ["hamburger","banana","chicken"]

for(let i = 0; i < food.length; i++){
    console.log(food[i])
}

for(i of food){
    console.log("2",i)
}

let balance = 10000
let byChance = 100
while(balance > 0){
    if(byChance%2){
    balance -= 500  //balance = balance-500
    
    }else{
    balance -= 1000
    }
    byChance -=1
    console.log(balance)
}

const car1 = {
    id:0,
    imageURL: "https://c-3d.niceshops.com/upload/image/product/facebook/default/revell-1969-chevy-nova-ss-1-pc-312084-en.jpg",
    year:"1969",
    make:"Chevy",
    model:"Nova",
    price:17000,
    warranty:1,
    mileage:1000,
    cylinders:6,
    accessories:{
        navigation:true,
        panaramicWindow:false,
        collisionDetect:false,
        selfDriving:{
            fullSelfDriving:true,
            halfSelfDriving:false,

        }
    },
}
const car2 = {
    id:1,
    imageURL:"",
    year:"1985",
    make:"Voltswagon",
    model:"Beatle",
    price:9000,
    warranty:1,
    mileage:10000,
    cylinders:4,
    accessories:{
        navigation:true,
        panaramicWindow:true,
        collisionDetect:false,
        
    },
}
const car3 = {
    id:2,
    imageURL:"",
    year:"2010",
    make:"Jeep",
    model:"Wrangler",
    price:50000,
    warranty:5,
    mileage:1000,
    cylinders:4,
    accessories:{
        navigation:true,
        panaramicWindow:false,
        collisionDetect:true
    },
}

const dealerInventory = [car1,car2,car3]

console.log(dealerInventory)


const document = {
    body:{
        dive:{
            h1:"test",
            p:"test paragraph"
        }
    }

}

console.log(Object.keys(car3));
console.log(car1.model)
console.log(car1.mileage)
console.log(Object.values(car3))