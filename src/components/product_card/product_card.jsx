import React, { useState } from 'react';
import './styles.css';

const ProductCard = ({ 
    image, 
    title, 
    price, 
    oldPrice, 
    inStock, 
    discount,
    deliveryDate,
    rating,
    orderCount,
    id
}) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (value === '') {
            setQuantity('');
        } else {
            setQuantity(Math.max(1, parseInt(value, 10)));
        }
    };

    const handleQuantityBlur = () => {
        if (!quantity || quantity < 1) setQuantity(1);
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long'
        });
    };

    return (
        <a className="product-card-link" href={`/product/${id}`} tabIndex={-1}>
        <div className="product-card" tabIndex={0}>
            <div className="product-card__image">
                <img src={image} alt={title} />
            </div>
            <div className="product-card__info">
                <p className="product-card__title">{title}</p>
                <div className="product-card__row">
                    <div className="product-card__availability-block">
                        <span className="product-card__dot" />
                        <span className="product-card__in-stock-label">В наличии</span>
                    </div>
                    {discount && <span className="product-card__discount">-{discount}%</span>}
                </div>
                <div className="product-card__row product-card__row--price">
                    <span className="product-card__price">{price.toLocaleString()}Р</span>
                    {oldPrice && <span className="product-card__old-price">{oldPrice.toLocaleString()}Р</span>}
                </div>
            </div>
            <div className="product-card__actions" onClick={e => e.preventDefault()}>
                <div className="product-card__quantity">
                    <button 
                        className="product-card__quantity-btn" 
                        onClick={handleDecrement}
                        disabled={quantity <= 1}
                    >
                        −
                    </button>
                    <input 
                        type="text" 
                        className="product-card__quantity-input" 
                        value={quantity}
                        onChange={handleQuantityChange}
                        onBlur={handleQuantityBlur}
                    />
                    <button 
                        className="product-card__quantity-btn" 
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                </div>
                <button className="product-card__add-to-cart">
                    В корзину
                </button>
            </div>
        </div>
        </a>
    );
};

export default ProductCard; 