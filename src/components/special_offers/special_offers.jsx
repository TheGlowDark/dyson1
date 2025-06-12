import React, { useState } from 'react';
import ProductGrid from '../product_grid/product_grid';
import './special_offers.css';

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

    return (
        <div className="special-offers">
            <div className="container">
                <div className="special-offers__header">
                    <div className="special-offers__title-block">
                        <h1 className="special-offers__title">Спецпредложения</h1>
                        <span className="special-offers__count">14</span>
                    </div>
                    <button className="special-offers__show-more">Показать еще</button>
                </div>

                <div className="special-offers__filters">
                    <div className="special-offers__tags">
                        {filters.map(filter => (
                            <button
                                key={filter.id}
                                className={`special-offers__tag ${activeFilters.includes(filter.id) ? 'active' : ''}`}
                                onClick={() => handleFilterClick(filter.id)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                    
                    <div className="special-offers__sort">
                        <select 
                            className="sort-select" 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="popular">Сначала популярные</option>
                            <option value="price-asc">По возрастанию цены</option>
                            <option value="price-desc">По убыванию цены</option>
                        </select>
                    </div>
                </div>

                <ProductGrid />
            </div>
        </div>
    );
};

export default SpecialOffers;