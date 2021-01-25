import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GiftGrid from './components/GiftGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <div>
                {categories.map(cat => <GiftGrid key={cat} category={cat} />)}
            </div>

        </div>
    );
}


export default GiftExpertApp;
