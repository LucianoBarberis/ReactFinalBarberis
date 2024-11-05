import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"

import "./itemlistcontainer.css"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

  const getProducts = () => {
    const collectionName = collection(db, "products")
    getDocs(collectionName)
      .then((dataDb)=> {
        const productsDb = dataDb.docs.map((productDb)=> {
          return { id: productDb.id, ...productDb.data() }
        })

        setProducts(productsDb)
      })
  }

  const getProductsByCategory = () => {
    const collectionName = collection(db, "products")
    const q = query(collectionName, where("categoria", "==", idCategory))
    getDocs(q)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => ({
          id: productDb.id,
          ...productDb.data()
        }))
        setProducts(productsDb)
      })
      .catch((error) => console.error("Error fetching products:", error))
  }

  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategory])

  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer