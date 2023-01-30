import React from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import { getDoc,doc,getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()



    useEffect(() => {
      const querydb = getFirestore()
      const queryDoc = doc(querydb, "items" ,id)
      getDoc(queryDoc)
      .then(res => setItem({id:id, ...res.data()}))
          setLoading(false)
      },[id])
      
    



  return (
    <div>
        <div>
              { loading ? <Loader/> : <ItemDetail item={item} />}      
        </div> 
        
     </div>       
  )
}

export default ItemDetailContainer