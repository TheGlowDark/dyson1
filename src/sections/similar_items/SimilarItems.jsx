import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/product_card/product_card.jsx';
import ToggleExpandButton from '../../components/show_more/ToggleExpandButton.jsx';
import './similar_items.css';
import products from '../../data/products.json';

// Универсальный импорт всех картинок из папки images
function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { 
        // Убираем './' и сохраняем полный путь включая подпапки
        const key = item.replace('./', '');
        images[key] = r(item); 
    });
    console.log('Available image keys:', Object.keys(images));
    return images;
}
const images = importAll(require.context('../../images', true, /\.(png|jpe?g|svg)$/));

const SimilarItems = ({ currentProductId }) => {
    const [allSimilarProducts, setAllSimilarProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const currentProduct = products.find(p => p.id === currentProductId);
        if (currentProduct && currentProduct.similar) {
            const similar = products.filter(p => currentProduct.similar.includes(p.id));
            console.log('Similar products image paths:', similar.map(p => p.image));
            setAllSimilarProducts(similar);
            setDisplayedProducts(similar.slice(0, 3));
            setIsExpanded(false);
        } else {
            setAllSimilarProducts([]);
            setDisplayedProducts([]);
        }
    }, [currentProductId]);

    const handleToggle = () => {
        if (isExpanded) {
            setDisplayedProducts(allSimilarProducts.slice(0, 3));
        } else {
            setDisplayedProducts(allSimilarProducts);
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="similar-items-section">
            <div className="container">
                <h2 className="similar-items-title">Похожие товары</h2>
                <div className="similar-items-grid">
                    {displayedProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={images[product.image]}
                            title={product.title}
                            inStock={product.inStock}
                            price={product.price}
                            oldPrice={product.oldPrice}
                        />
                    ))}
                </div>
                {allSimilarProducts.length > 3 && (
                    <ToggleExpandButton
                        onClick={handleToggle}
                        isExpanded={isExpanded}
                        collapsedText="Показать еще"
                        expandedText="Свернуть"
                    />
                )}
            </div>
        </section>
    );
};

export default SimilarItems; 