import React, { useState } from 'react';
import ProductCard from '../product_card/product_card';
import './styles.css';

const ProductGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('popular');
    
    const products = [
        {
            id: 1,
            image: "/images/products/dyson-hd07-blue.png",
            title: "Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческами",
            price: 59990,
            oldPrice: 69990,
            inStock: true,
            discount: 15
        },
        {
            id: 2,
            image: "/images/products/dyson-hd07-stand.png",
            title: "Фен Dyson Supersonic HD07 с 5 насадками и подставкой",
            price: 47990,
            oldPrice: 51990,
            inStock: true,
            discount: 15
        },
        {
            id: 3,
            image: "/images/products/dyson-4-purple.png",
            title: "Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет сирень",
            price: 46990,
            oldPrice: 51990,
            inStock: true,
            discount: 15
        },
        // Дублируем товары для демонстрации пагинации
        {
            id: 4,
            image: "/images/products/dyson-hd07-blue.png",
            title: "Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческами",
            price: 59990,
            oldPrice: 69990,
            inStock: true,
            discount: 15
        },
        {
            id: 5,
            image: "/images/products/dyson-hd07-stand.png",
            title: "Фен Dyson Supersonic HD07 с 5 насадками и подставкой",
            price: 47990,
            oldPrice: 51990,
            inStock: true,
            discount: 15
        },
        {
            id: 6,
            image: "/images/products/dyson-4-purple.png",
            title: "Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет сирень",
            price: 46990,
            oldPrice: 51990,
            inStock: true,
            discount: 15
        }
    ];

    const itemsPerPage = 3;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Получаем товары для текущей страницы
    const getCurrentPageProducts = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return products.slice(startIndex, endIndex);
    };

    return (
        <div className="products-section">
            <div className="products-header">
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
            
            <div className="product-grid">
                {getCurrentPageProducts().map(product => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>

            <div className="pagination">
                <button 
                    className="pagination__btn" 
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    ←
                </button>
                <span className="pagination__info">{currentPage} из {totalPages}</span>
                <button 
                    className="pagination__btn" 
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default ProductGrid; 