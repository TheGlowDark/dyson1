import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './item_main.css';

// Import product images and data from where ProductGrid is getting it
import dysonHd07Blue from '../../images/product_cards/dyson-hd07-blue.png';
import dysonHd07Stand from '../../images/product_cards/dyson-hd07-stand.png';
import dyson4Purple from '../../images/product_cards/dyson-4-purple.png';

// Import images from src/images/product_main
import img1 from '../../images/product_main/img1.png';
import img2 from '../../images/product_main/img2.png';
import img3 from '../../images/product_main/img3.png';
import img4 from '../../images/product_main/img4.png';
import img5 from '../../images/product_main/img5.png';

import heartIcon from '../../images/icons/heart.svg';
import cartIcon from '../../images/icons/cart.svg';
import arrowIcon from '../../images/icons/arrow_item_photo.svg';

const allProducts = [
    {
        id: 1,
        image: dysonHd07Blue,
        title: "Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческами",
        price: 59990,
        oldPrice: 69990,
        inStock: true,
        discount: 15,
        deliveryDate: "2024-02-15",
        rating: 4.8,
        orderCount: 256,
        thumbnails: [dysonHd07Blue, img1, img2, img3, img4] 
    },
    {
        id: 2,
        image: dysonHd07Stand,
        title: "Фен Dyson Supersonic HD07 с 5 насадками и подставкой",
        price: 47990,
        oldPrice: 51990,
        inStock: true,
        discount: 15,
        deliveryDate: "2024-03-01",
        rating: 4.9,
        orderCount: 189,
        thumbnails: [dysonHd07Stand, img1, img2, img3, img4]
    },
    {
        id: 3,
        image: dyson4Purple,
        title: "Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет сирень",
        price: 46990,
        oldPrice: 51990,
        inStock: true,
        discount: 15,
        deliveryDate: "2024-03-10",
        rating: 4.7,
        orderCount: 142,
        thumbnails: [dyson4Purple, img1, img2, img3, img4]
    }
    // Add other products as needed, mirroring the structure in ProductGrid
];

const Item = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const foundProduct = allProducts.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setMainImage(foundProduct.image);
        } else {
            setProduct(null);
        }
    }, [id]);

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

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
        }
    };

    if (!product) {
        return <div className="item-main"><div className="container"><h1>Product not found</h1></div></div>;
    }

    return (
        <div className="item-main">
            <div className="container">
                <div className="breadcrumbs">
                    <a href="/" className="breadcrumb-link">Главная</a>
                    <span className="breadcrumb-separator">/</span>
                    <a href="/hairdryers" className="breadcrumb-link">Фены Dyson Supersonic</a>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{product.title}</span>
                </div>
                <div className="item-content">
                    <div className="item-gallery">
                        <div className="item-thumbnails">
                            {product.thumbnails.map((thumb, index) => (
                                <div 
                                    key={index}
                                    className={`thumbnail-item ${mainImage === thumb ? 'active' : ''}`}
                                    onClick={() => setMainImage(thumb)}
                                >
                                    <img src={thumb} alt={`Thumbnail ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="item-main-image">
                            <img src={mainImage} alt={product.title} />
                            <img src={heartIcon} alt="Add to Favorites" className="heart-icon" />
                        </div>
                    </div>
                    <div className="item-info">
                        <h1 className="item-title">{product.title}</h1>
                        <p className="item-description">Фен Dyson Supersonic HD07 — это инновационный фен, который обеспечивает мощный поток воздуха и точный контроль температуры для бережной сушки волос.</p>
                        <div className="item-availability">
                            <span className="dot"></span>
                            <span className="availability-text">В наличии</span>
                        </div>
                        <div className="item-price-block">
                            {product.oldPrice && <span className="item-old-price">{product.oldPrice.toLocaleString()}Р</span>}
                            <span className="item-current-price">{product.price.toLocaleString()}Р</span>
                        </div>
                        <div className="item-actions">
                            <div className="item-quantity">
                                <button 
                                    className="quantity-btn" 
                                    onClick={handleDecrement}
                                    disabled={quantity <= 1}
                                >
                                    −
                                </button>
                                <input 
                                    type="text" 
                                    className="quantity-input" 
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    onBlur={handleQuantityBlur}
                                />
                                <button 
                                    className="quantity-btn" 
                                    onClick={handleIncrement}
                                >
                                    +
                                </button>
                            </div>
                            <button 
                                className="add-to-cart-btn"
                                onClick={handleAddToCart}
                            >
                                В корзину <img src={cartIcon} alt="Cart" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;