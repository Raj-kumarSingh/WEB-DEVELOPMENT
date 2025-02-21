const myNums=[1,2,3,4,5];
const intialValue=0;
// const myTotal=myNums.reduce(function(accumulator,currentValue){
//     console.log(`acc : ${accumulator} and currval : ${currentValue}`)
//     return accumulator+currentValue
// },intialValue)

const myTotal=myNums.reduce((accumulator,currentValue)=>(accumulator+currentValue),0)
console.log(`Total value : ${myTotal}`);

const shoppingCart=[
    {
        itemName: 'JS course',
        price: 2999
    },
    {
        itemName: 'WEB DEV',
        price: 5999
    },
    {
        itemName: 'DSA',
        price: 3999
    },
    {
        itemName: 'ML',
        price: 7999
    },
]
const total=shoppingCart.reduce((accumulator,item)=>(accumulator+item.price),0)
console.log(`Price to pay : ${total}`)