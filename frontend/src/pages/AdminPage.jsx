import React from 'react'
import { BarChart, PlusCircle, ShoppingBasket } from 'lucide-react';
import { useState } from 'react';

import CreateProductForm from '../components/CreateProductForm.jsx';
import ProductList from '../components/ProductList.jsx';
import AnalyticsTab from '../components/AnalyticsTab.jsx';

const tabs = [
	{ id: "create", label: "Create Product", icon: PlusCircle },
	{ id: "products", label: "Products", icon: ShoppingBasket },
	{ id: "analytics", label: "Analytics", icon: BarChart },
];

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState("create");
  return (
    <>
        <div className='h-screen flex flex-col mt-16'>
            <div className='border-b px-4 py-2'>
                <div className='flex justify-center py-4'>
                    {tabs.map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 ${activeTab === tab.id ? 'bg-[#78009c] text-white' : ''}`}>
                            <tab.icon size={24} />
                            <span className='ml-2'>{tab.label}</span>
                        </button>
                    ))}
                </div>
                    {activeTab === "create" && <CreateProductForm />}
                    {activeTab === "products" && <ProductList />}
                    {activeTab === "analytics" && <AnalyticsTab />}
            </div>
        </div>
    </>
  )
}

export default AdminPage