import React, { useState } from 'react';
import ProductGrid from '../../components/product_grid/product_grid';
import './special_offers.css';
import products from '../../data/products.json';

const SpecialOffers = () => {
    const [activeFilters, setActiveFilters] = useState([]);
    const [sortBy, setSortBy] = useState('popular');

    const filters = [
        { id: 'long-hair', label: 'dyson стайлер для длинных волос' },
        { id: 'red', label: 'dyson стайлер красный' },
        { id: 'complete', label: 'dyson hot1 airwrap complete' },
        { id: 'brush', label: 'фен щетка дайсон' }
    ];

    const handleFilterClick = (filterId) => {
        if (activeFilters.includes(filterId)) {
            setActiveFilters(activeFilters.filter(id => id !== filterId));
        } else {
            setActiveFilters([...activeFilters, filterId]);
        }
    };

    // Фильтруем только товары со скидкой
    const discountedProducts = products.filter(p => p.discount > 0);

    return (
        <div className="special-offers">
            <div className="container">
            <div className="special-offers-content">
                <div className="special-offers__header">
                    <div className="special-offers__title-block">
                        <h1 className="special-offers__title">Спецпредложения
                        <span className="special-offers__count"> {discountedProducts.length}</span>
                        </h1>
                    </div>
                </div>                    
                <ProductGrid products={discountedProducts} />
            </div>
            </div>
        </div>
    );
};

export default SpecialOffers;