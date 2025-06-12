import React, { useState } from 'react';
import './styles.css';

const ProductCard = ({ image, title, price, oldPrice, inStock, discount }) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={image} alt={title} />
                {discount && <span className="product-card__discount">-{discount}%</span>}
            </div>
            <div className="product-card__info">
                <h3 className="product-card__title">{title}</h3>
                <div className="product-card__availability">
                    {inStock ? (
                        <span className="product-card__in-stock">В наличии</span>
                    ) : (
                        <span className="product-card__out-of-stock">Нет в наличии</span>
                    )}
                </div>
                <div className="product-card__price-block">
                    <div className="product-card__price">{price}₽</div>
                    {oldPrice && <div className="product-card__old-price">{oldPrice}₽</div>}
                </div>
                <div className="product-card__actions">
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
                            readOnly
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
        </div>
    );
};

export default ProductCard; 