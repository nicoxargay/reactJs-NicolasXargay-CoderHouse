import Item from "./Item/Item"

const misProductos = [
    { id: 1, nombre: "Bleu de Chanel Eau de Parfum", precio: 173, categoria: "Masculino", imagen: "../src/assets/1.jpg", stock: 15 },
    { id: 2, nombre: "Dior Sauvage Elixir", precio: 265, categoria: "Masculino", imagen: "../src/assets/2.jpg", stock: 15 },
    { id: 3, nombre: "Yves Saint Laurent La Nuit de L’Homme", precio: 130, categoria: "Masculino",  imagen: "../src/assets/3.jpg", stock: 15},
    { id: 4, nombre: "Giorgio Armani Acqua di Giò Profondo", precio: 190, categoria: "Masculino", imagen: "../src/assets/4.jpg", stock: 15 },
    { id: 5, nombre: "Tom Ford Oud Wood", precio: 300, categoria: "Masculino",  imagen: "../src/assets/5.jpg", stock: 15},

    { id: 6, nombre: "Yves Saint Laurent Libre", precio: 145, categoria: "Femenino", imagen: "../src/assets/6.jpg", stock: 15 },
    { id: 7, nombre: "Yves Saint Laurent Black Opium", precio: 130, categoria: "Femenino", imagen: "../src/assets/7.jpg", stock: 15 },
    { id: 8, nombre: "Viktor & Rolf Flowerbomb", precio: 105, categoria: "Femenino", imagen: "../src/assets/8.jpg", stock: 15 },
    { id: 9, nombre: "Lancôme La Vie Est Belle", precio: 140, categoria: "Femenino",  imagen: "../src/assets/9.jpg", stock: 15},
    { id: 10, nombre: "Dior Miss Dior", precio: 115, categoria: "Femenino", imagen: "../src/assets/10.jpg", stock: 15 },

    { id: 11, nombre: "Le Labo Rose 31", precio: 340, categoria: "Unisex", imagen: "../src/assets/11.jpg", stock: 15 },
    { id: 12, nombre: "Jo Malone Wood Sage & Sea Salt", precio: 162, categoria: "Unisex", imagen: "../src/assets/12.jpg", stock: 15 },
    { id: 13, nombre: "Boy Smells Vanilla Era", precio: 78, categoria: "Unisex", imagen: "../src/assets/13.jpg", stock: 15 },
    { id: 14, nombre: "Calvin Klein CK One", precio: 81, categoria: "Unisex", imagen: "../src/assets/14.jpg", stock: 15 }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(misProductos)
        }, 100)
    })
}

export const getUnProducto = (id) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find(Item => Item.id === id)
            resolve(producto)
        }, 100);
        
    })
}

export const getProductosCategoria = (idCategoria) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.categoria === idCategoria)
            resolve(productosCategoria)
        }, 100);
    })
}