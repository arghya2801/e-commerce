import React from 'react'

const AddItem = () => {
    return (
        <>
            <div className='border border-solid-2 w-fit p-5 bg-teal-300 rounded-lg my-3'>
                <div className='text-2xl font-semibold'>Add Item to main Database</div>
                <form action="/form-page" method="post" className='flex gap-1 '>
                    <p className='flex flex-col'>
                        <label for="name">Name of Item:</label>
                        <input type="text" id="name" name="user_name" className='border border-solid-2' />
                    </p>
                    <p className='flex flex-col'>
                        <label for="category">Category:</label>
                        <input type="text" id="category" name="category" className='border border-solid-2' />
                    </p>
                    <p className='flex flex-col'>
                        <label for="price">Price:</label>
                        <input type="text" id="price" name="price" className='border border-solid-2' />
                    </p>
                    <p className='flex flex-col'>
                        <label htmlFor="description">Description:</label>
                        <input type="text" id="description" name="description" className='border border-solid-2' />
                    </p>
                    <p className=''>
                        <button type="submit" className='bg-teal-700 rounded-md text-white h-10 px-4'>Add Item</button>
                    </p>

                </form>

            </div>
        </>
    )
}

export default AddItem