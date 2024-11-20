import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className='bg-purple-300 px-8 w-60 py-6 m-4 fixed rounded-lg'>
                <h2 className='text-2xl font-semibold py-4'>Categories</h2>
                <ul>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar