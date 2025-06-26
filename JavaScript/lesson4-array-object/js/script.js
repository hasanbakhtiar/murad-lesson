// const product = ['apple','rice','oil'];
// product[3]="bread";
// for(let i=0;i<product.length;i++){
//   console.log(product[i]);
// }

// const phone = ['samsung s25','mi 15','oppo 7'];
// const laptop = ['asus zenbook','acer predator','lenovo yoga'];
// console.log([...phone,...laptop]);

// const info = ['table',['bmw','lada',[true,[0,1,2,4,['sunny','snowly']],false],'ar'],'book','pen']
// console.log(info[1][2][1][4][1])

// const info=[];
// info[0]="table";
// info[1]='book';
// console.log(info)

// const product = {
//   title: 'Asus zenbook',
//   price: 3200,
//   newDevice: true,
//   color:['blue','black','white']
// };

// console.log(product.color[0]);

const products = [
  {
    title: 'Acer Predator',
    price: 3200,
    color: ['black', 'red'],
  },
  {
    title: 'Asus ROG',
    price: 4100,
    color: ['blue', 'yellow'],
  },
  {
    title:"Hp evobook",
    price:2000,
    
  },
  {
    title:"Lenovo Legion",
    price:5000
  }
];


for (const iterator of products) {
  if (iterator.price>3000) {
    console.log(`${iterator.title}-${iterator.price}`)
  }
  
}
