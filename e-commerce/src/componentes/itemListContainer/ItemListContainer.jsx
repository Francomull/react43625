import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = () => {

    const [item, setItem]  = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()




    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items');
        if(category){
            const queryFilter = query(queryCollection, where('category', '==', category))
            getDocs(queryFilter)
            .then(res => setItem(res.docs.map(item =>({id:item.id,...item.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res => setItem(res.docs.map(item => ({id:item.id, ...item.data()}))))
            .finally(()=> setLoading(false))
        }
        
    }, [category]);



    return (
        <div className='container'>
            <div className='row '>
                { loading ?  <Loader /> : <ItemList item={item} />}
            </div>
        </div>
    )
}

export default ItemListContainer;