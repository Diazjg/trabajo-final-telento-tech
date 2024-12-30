// Crear lista de produtos

let productos = [

    {
        "id": 1,
        "name": "ARROZ DOS HERMANAS",
        "price": 2700,
        "description": "ARROZ DOS HERMANAS X 1 KG"
    },
    {
        "id": 2,
        "name": "ACEITE CAÑUELAS",
        "price": 2250,
        "description": "ACEITE CAÑUELAS X 900 ML"
    },
    {
        "id": 3,
        "name": "AZUCAR LEDESMA",
        "price": 1620,
        "description": "AZUCAR LEDESMA X 1 KG"
    },
    {
        "id": 4,
        "name": "BUDIN 9 DE ORO",
        "price": 2480,
        "description": "BUDIN 9 DE ORO X 380 GRS"
    },
    {
        "id": 5,
        "name": "FIDEOS TALLARINES LUCCHETTI",
        "price": 1410,
        "description": "FIDEOS TALLARINES LUCCHETTI X 500 GRM"
    },
    {
        "id": 6,
        "name": "LECHE LARGA VIDA LA SERENISIMA",
        "price": 2480,
        "description": "LECHE LARGA VIDA LA SERENISIMA X 1 LT"
    },
    {
        "id": 7,
        "name": "MAYONESA NATURA",
        "price": 2230,
        "description": "MAYONESA NATURA X 250 GRM"
    },
    {
        "id": 8,
        "name": "POLENTA PRESTO PRONTA",
        "price": 1200,
        "description": "POLENTA PRESTO PRONTA X 500 GRM"
    }
]


// Crear e Insertar en HTML los Productos

let contenedorProductos = document.getElementById('productos');

let contenedorIndividual = document.createElement('div');

contenedorIndividual.classList.add('card_container');

document.addEventListener("DOMContentLoaded", (event) => {
    productos.forEach(producto => {
        contenedorIndividual.innerHTML += `
        <div  id="${producto.id}" class="card">
            <div class="card-body">
                <h5 class="card-tittle text-center" id="nombre" name="nombre">${producto.name}</h5>
            </div>
            <div class="d-flex justify-content-around mb-5">
                <h3 class="card-price" id="precio" name="precio">$ ${producto.price}</h3>
                <button class="btn btn-primary" onclick="masInfo(${producto.id})">+ Info</button>
                <button class="btn btn-primary" id="Agregar">Agregar</button>
            </div>
            <div id="description_${producto.id}" style="display:none">
                <p class="card-text text-center">${producto.description}</p>
            </div>
        </div>`;
        contenedorProductos.append(contenedorIndividual);
    }); 
});

function masInfo(id){
    let desc = document.getElementById('description_' + id);
    if (desc.style.display == 'none'){
        desc.style.display = 'block';
    }else{
        desc.style.display = 'none';
    };
};

    
