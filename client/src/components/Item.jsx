import React from 'react'

const Item = () => {
    return (
        <>
            <div className='border border-solid-2 p-6 bg-white flex flex-col items-center'>
                <h3 className='text-2xl font-semibold'>Item Name </h3>
                <p>Item Price: Rs 100</p>
                <p>Item Category: Category 1</p>
                <p>Item Description: Description text goes here</p>
                <button className='bg-purple-700 rounded-md text-white p-2 mt-2'>Add to Cart</button>
            </div>
        </>
    )
}

export default Item