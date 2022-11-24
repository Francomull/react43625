import React from "react";

const ItemListContainer = ({greeting}, props) => {
    return (

        <div className='s1'>

            <div className='s2'>

                <div className='s3'>
                    <h2> {greeting} </h2>
                    <h3> {props.prop} </h3>
                </div>

            </div>

        </div>

    )
}

export default ItemListContainer