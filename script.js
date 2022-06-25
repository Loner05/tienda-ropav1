
// let carrito = [];
// let menuprompt = prompt(" 1-Ver Camisas 2-Ver Pantalones 3-Ver Carrito");





let camisas=[
    {
    nombre: "Camisa Wajiira",
    color: "blanca",
    estilo: "estampado",
    precio: 180,
    stock: 27,
    imagen: "/media/item camisa 1.jpg",
    },

    {
    nombre: "Camisa Malta",
    color: "roja",
    estilo: "rayas",
    precio: 75,
    stock: 5,
    imagen: "/media/item camisa 1.jpg",
        },

    {
    nombre: "Camisa Oporto",
    color: "beige",
    estilo: "rayas",
    precio: 225,
    stock: 12,
    imagen: "/media/item camisa 1.jpg",
        },

    {
    nombre: "Camisa Britania",
    color: "azul",
    estilo: "cuadros",
    precio:  89,
    stock: 46,
    imagen: "/media/item camisa 1.jpg",
        },

]



const pantalones=[
    {
    nombre: "pantalon Wajiira",
    color: "blanca",
    estilo: "estampado",
    precio: 180,
    stock: 27,
    },

    {
    nombre: "pantalon Malta",
    color: "roja",
    estilo: "rayas",
    precio: 75,
    stock: 5,
        },

    {
    nombre: "pantalon Oporto",
    color: "beige",
    estilo: "rayas",
    precio: 225,
    stock: 12,
        },

    {
    nombre: "Pantalon Britania",
    color: "azul",
    estilo: "cuadros",
    precio:  89,
    stock: 46,
        },

]


// if(menuprompt == 1){
// let camisasprompt = prompt("1- ver todas 2-filtrar por color 3-filtrar por precio 4-filtrar por estilo");
// if(camisasprompt == 1){
// console.log(camisas)
// }
// if(camisasprompt == 2){
//     let camisasprompt = prompt("escoge color 1-beige 2-rojo 3-azul 4-blanco");
// switch(camisasprompt){

// case 1: console.log(camisas.filter(item =>item.color == beige))
// break;
// case 2: console.log(camisas.filter(item =>item.color == rojo))
// break;
// case 3: console.log(camisas.filter(item =>item.color == azul))
// break;
// case 4: console.log(camisas.filter(item =>item.color == blanco))
// break;
// }
// }

// if(camisasprompt == 3){

// let filtroprecioprompt = prompt("1-menor precio 2- nayor precio");
// switch(filtroprecioprompt){

// case 1: console.log(camisas.sort((a, b) => a.precio - b.precio))
// break;
// case 2: console.log(camisas.sort((a, b) => b.precio - a.precio))
// break;

// }


// }
// }




// if(menuprompt == 2){
//     let pantalonesprompt = prompt("1- ver todas 2-filtrar por color 3-filtrar por precio 4-filtrar por estilo");
//     if(pantalonesprompt == 1){
//     console.log(pantalones)
//     }
//     if(pantalones == 2){
//         let pantalonesprompt = prompt("escoge color 1-beige 2-rojo 3-azul 4-blanco");
//     switch(pantalonesprompt){
    
//     case 1: console.log(pantalones.filter(item =>item.color == beige))
//     break;
//     case 2: console.log(pantalones.filter(item =>item.color == rojo))
//     break;
//     case 3: console.log(pantalones.filter(item =>item.color == azul))
//     break;
//     case 4: console.log(pantalones.filter(item =>item.color == blanco))
//     break;
//     }
//     }
    
//     if(pantalonesprompt == 3){
    
//     let filtroprecioprompt = prompt("1-menor precio 2- nayor precio");
//     switch(filtroprecioprompt){
    
//     case 1: console.log(pantalones.sort((a, b) => a.precio - b.precio))
//     break;
//     case 2: console.log(pantalones.sort((a, b) => b.precio - a.precio))
//     break;
    
//     }}
//     }
     
    // const viewarray =[];
//     let checkestilo = camisas.filter(item => item.estilo === 'cuadros');
   
     
//     let container =  document.createElement("div")
//       container.setAttribute("id","cards-container")
     
//     camisas.forEach(item =>{
       
//       let producto = document.createElement("div");
//     //   g.setAttribute("id","product-card")
//     //  const element= document.createElement("div")
    
//          producto.innerHTML = `
      

//             <div class="product-card">
//             <img src="${item.imagen}">
//             <div class="product-info">
            
//              <div>
//             <p>${item.precio}</p>
//             <p>${item.nombre}</p>            
//             </div>
//             <figure>
//              <img src="media/icons/bt_add_to_cart.svg" alt="">

//             </figure>
//         </div>
//         </div>
//          `
        

//          document.body.appendChild(container)
//     document.cards-container.append(producto)
// });


      

let estilocamisacuadros = document.getElementById("camisa-cuadros");
console.log(estilocamisacuadros );
estilocamisacuadros.addEventListener("click",camisacuadros);

function camisacuadros(){
    let checkestilo = camisas.filter(item => item.estilo === "cuadros");
    let container =  document.createElement("div")
    container.setAttribute("id","cards-container")
     console.log(checkestilo);
    
    
    let salida = checkestilo.forEach(item =>{
       
        let producto = document.createElement("div");
      //   g.setAttribute("id","product-card")
      //  const element= document.createElement("div")
      
           producto.innerHTML = `
        
  
              <div class="product-card">
              <img src="${item.imagen}">
              <div class="product-info">
              
               <div>
              <p>${item.precio}</p>
              <p>${item.nombre}</p>            
              </div>
              <figure>
               <img src="media/icons/bt_add_to_cart.svg" alt="">
  
              </figure>
          </div>
          </div>
           `
          
           document.cards-container.append(producto)
          
           document.body.appendChild(container)
  });


  

return salida;
}