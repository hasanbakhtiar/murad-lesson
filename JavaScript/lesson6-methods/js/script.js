// const product = [
//   {
//     title:"test product one",
//     price:300
//   },
//   {
//     title:"test product two",
//     price:350
//   }
// ]
//
// console.log(product.length);


// const info = ["Hello","table",'book'];
// info.splice(0,2);
// console.log(info);





// const getData = new Promise((response,reject)=>{
//   const infoTry = false;
//   if (infoTry) {
//     response("This prossess is successfully!");
//   } else {
//     reject("This prossess is wrong!")
//   }
// });

// getData.then(res=>console.log(res)).catch(err=>console.log(err));

// console.log(getData)

// console.log(fetch("https://fakestoreapi.com/products"));


// fetch('https://fakestoreapi.coma/products')
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
	const filteredData = data.filter(item=>item.price<30)
	// data.map(item=>console.log(item))
	console.log(filteredData)
})


