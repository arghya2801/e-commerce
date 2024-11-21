import React from 'react'

const AddItem = () => {

    const saveItemData = () => {
        const existingData = localStorage.getItem('itemData');
        const parsedData = existingData ? JSON.parse(existingData) : [];
        if (!Array.isArray(parsedData)) {
            console.error('Stored itemData is not an array');
            return;
        }

        const name = document.getElementById('name').value;
        const category = document.getElementById('category').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;
        const quantity = document.getElementById('quantity').value;

        // Check if the item already exists
        const itemExists = parsedData.some(item =>
            item.name === name &&
            item.category === category &&
            item.price === price &&
            item.description === description &&
            item.quantity === quantity
        );

        if (!itemExists) {
            const newData = [...parsedData, { name, category, price, description, quantity }];
            localStorage.setItem('itemData', JSON.stringify(newData));
            console.log('Item data saved to local storage');
        } else {
            console.log('Item already exists in local storage');
        }
    }

    return (
        <>
            <div className='border border-solid-2 w-fit p-5 bg-[#ACACDE] rounded-lg my-3 mx-32'>
                <div className='text-2xl font-semibold'>Add Item to main Database</div>
                <form action="/" method="post" className='flex gap-1' onSubmit={(e) => { e.preventDefault(); saveItemData(); window.location.reload(); }}>
                    <p className='flex flex-col'>
                        <label htmlFor="name">Name of Item:</label>
                        <input type="text" id="name" name="user_name" className='border border-solid-2' />
                    </p>
                    <p className='flex flex-col'>
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" className='border border-solid-2' />
                    </p>
                    <p className='flex flex-col'>
                        <label htmlFor="price">Price:</label>
                        <input type="text" id="price" name="price" className='border border-solid-2' />
                    </p>
                    <p className='flex flex-col'>
                        <label htmlFor="description">Description:</label>
                        <input type="text" id="description" name="description" className='border border-solid-2' />
                    </p>
                    <p className='flex flex-col'>
                        <label htmlFor="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" className='border border-solid-2' />
                    </p>
                    <p className='px-6'>
                        <button
                            type="submit"
                            className='bg-violet-700 rounded-md text-white h-10 px-4'>
                            Add Item</button>
                    </p>
                </form>

            </div>
        </>
    )
}

export default AddItem