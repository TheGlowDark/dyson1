import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
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
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleDecrement = (e) => {
        e.stopPropagation();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = (e) => {
        e.stopPropagation();
        if (quantity < 99) {
            setQuantity(quantity + 1);
        }
    };

    const handleQuantityChange = (e) => {
        e.stopPropagation();
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (value === '') {
            setQuantity('');
        } else {
            const parsedValue = parseInt(value, 10);
            setQuantity(Math.min(Math.max(1, parsedValue), 99));
        }
    };

    const handleQuantityBlur = (e) => {
        e.stopPropagation();
        if (!quantity || quantity < 1) {
            setQuantity(1);
        } else if (quantity > 99) {
            setQuantity(99);
        }
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart({ id, image, title, price, oldPrice, inStock, discount }, quantity);
    };

    const handleCardClick = () => {
        navigate(`/product/${id}`);
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long'
        });
    };

    return (
        <div className="product-card" onClick={handleCardClick}>
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
            <div className="product-card__actions">
                <div className="product-card__quantity" onClick={e => e.stopPropagation()}>
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
                <button 
                    className="product-card__add-to-cart"
                    onClick={handleAddToCart}
                >
                    В корзину
                </button>
            </div>
        </div>
    );
};

export default ProductCard; 