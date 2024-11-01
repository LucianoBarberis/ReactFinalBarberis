import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"

const products = [
    {
        id: 1,
        nombre: "Sofá de Tela",
        categoria: "interiores",
        precio: 500,
        stock: 10,
        descripcion: "Cómodo sofá de tela ideal para sala de estar.",
        imagen: "/img/sofa.jpg"
    },
    {
        id: 2,
        nombre: "Mesa de Centro",
        categoria: "interiores",
        precio: 150,
        stock: 20,
        descripcion: "Mesa de centro de madera con diseño moderno.",
        imagen: "/img/mesa_centro.jpg"
    },
    {
        id: 3,
        nombre: "Lámpara de Techo",
        categoria: "interiores",
        precio: 80,
        stock: 15,
        descripcion: "Lámpara colgante ideal para decorar tu comedor.",
        imagen: "/img/lampara.jpg"
    },
    {
        id: 4,
        nombre: "Parrilla Portátil",
        categoria: "exteriores",
        precio: 120,
        stock: 5,
        descripcion: "Parrilla portátil perfecta para reuniones al aire libre.",
        imagen: "/img/parrilla.jpg"
    },
    {
        id: 5,
        nombre: "Set de Jardinería",
        categoria: "exteriores",
        precio: 35,
        stock: 30,
        descripcion: "Set de herramientas para jardín, ideal para amantes de las plantas.",
        imagen: "/img/jardineria.jpg"
    },
    {
        id: 6,
        nombre: "Sillas de Patio",
        categoria: "exteriores",
        precio: 60,
        stock: 25,
        descripcion: "Sillas resistentes y cómodas para exteriores.",
        imagen: "/img/sillas_patio.jpg"
    },
    {
        id: 7,
        nombre: "Refrigerador",
        categoria: "electrodomésticos",
        precio: 800,
        stock: 8,
        descripcion: "Refrigerador con amplio espacio de almacenamiento.",
        imagen: "/img/refrigerador.jpg"
    },
    {
        id: 8,
        nombre: "Microondas",
        categoria: "electrodomésticos",
        precio: 100,
        stock: 20,
        descripcion: "Microondas compacto de alta eficiencia.",
        imagen: "/img/microondas.jpg"
    },
    {
        id: 9,
        nombre: "Licuadora",
        categoria: "electrodomésticos",
        precio: 50,
        stock: 15,
        descripcion: "Licuadora potente para preparar batidos y smoothies.",
        imagen: "/img/licuadora.jpg"
    },
    {
        id: 10,
        nombre: "Tostadora",
        categoria: "electrodomésticos",
        precio: 30,
        stock: 25,
        descripcion: "Tostadora de 4 ranuras para un desayuno rápido.",
        imagen: "/img/tostadora.jpg"
    }
];

const seedProducts = () => {
    const productsRef = collection( db, "products")

    products.map( ( { id, ...dataProduct } ) => { 
        addDoc(productsRef, dataProduct)
    })

    console.log("productos subidos")
    return
}

seedProducts()
