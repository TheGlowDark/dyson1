import React, { useState, useEffect, useRef } from 'react';
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
        thumbnails: [dysonHd07Blue, img1, img2, img3, img4, img5] 
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
        thumbnails: [dysonHd07Stand, img1, img2, img3, img4, img5]
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
        thumbnails: [dyson4Purple, img1, img2, img3, img4, img5]
    }
    // Add other products as needed, mirroring the structure in ProductGrid
];

const Item = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState(null);
    const [currentThumbIndex, setCurrentThumbIndex] = useState(0);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isDescriptionOverflow, setIsDescriptionOverflow] = useState(false);
    const descriptionRef = useRef(null);
    const { addToCart } = useCart();
    const thumbnailsPerPage = 5;

    useEffect(() => {
        const foundProduct = allProducts.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setMainImage(foundProduct.image);
        } else {
            setProduct(null);
        }
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (descriptionRef.current) {
            const element = descriptionRef.current;
            setIsDescriptionOverflow(element.scrollHeight > element.clientHeight);
        }
    }, [product]);

    const handlePrevThumbs = () => {
        setCurrentThumbIndex(prev => 
            prev === 0 ? product.thumbnails.length - thumbnailsPerPage : prev - 1
        );
    };

    const handleNextThumbs = () => {
        setCurrentThumbIndex(prev => 
            prev + thumbnailsPerPage >= product.thumbnails.length ? 0 : prev + 1
        );
    };

    const visibleThumbnails = product?.thumbnails.slice(
        currentThumbIndex,
        currentThumbIndex + thumbnailsPerPage
    ) || [];

    const showPrevButton = currentThumbIndex > 0;
    const showNextButton = currentThumbIndex + thumbnailsPerPage < (product?.thumbnails.length || 0);

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

    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
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
                            {showPrevButton && (
                                <button 
                                    className="thumb-nav-btn prev-btn"
                                    onClick={handlePrevThumbs}
                                >
                                    <img src={arrowIcon} alt="Previous" className="arrow-up" />
                                </button>
                            )}
                            <div className={`thumbnails-container ${showPrevButton ? 'has-prev' : ''} ${showNextButton ? 'has-next' : ''}`}>
                                {visibleThumbnails.map((thumb, index) => (
                                    <div 
                                        key={currentThumbIndex + index}
                                        className={`thumbnail-item ${mainImage === thumb ? 'active' : ''}`}
                                        onClick={() => setMainImage(thumb)}
                                    >
                                        <img src={thumb} alt={`Thumbnail ${currentThumbIndex + index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            {showNextButton && (
                                <button 
                                    className="thumb-nav-btn next-btn"
                                    onClick={handleNextThumbs}
                                >
                                    <img src={arrowIcon} alt="Next" className="arrow-down" />
                                </button>
                            )}
                        </div>
                        <div className="item-main-image">
                            <img src={mainImage} alt={product.title} />
                            <img src={heartIcon} alt="Add to Favorites" className="heart-icon" />
                        </div>
                    </div>
                    <div className="item-info">
                        <h1 className="item-title">{product.title}</h1>
                        <div 
                            ref={descriptionRef}
                            className={`item-description ${isDescriptionExpanded ? 'expanded' : ''}`}
                            onClick={isDescriptionOverflow ? toggleDescription : undefined}
                        >
                            Фен Dyson Supersonic HD07 — это инновационный фен, который обеспечивает мощный поток воздуха и точный контроль температуры для бережной сушки волос. Благодаря интеллектуальной системе контроля температуры, фен автоматически регулирует температуру воздуха, чтобы защитить волосы от теплового повреждения. Технология Air Multiplier создает мощный, концентрированный поток воздуха, который быстро и эффективно сушит волосы, сохраняя при этом их естественную красоту и здоровье.
                        </div>
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