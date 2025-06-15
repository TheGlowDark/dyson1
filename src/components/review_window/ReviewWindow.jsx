import React, { useState } from 'react';
import './review_window.css';
import starIconFilled from '../../images/icons/star.svg';
import starIconEmpty from '../../images/icons/empty_star.svg';
import closeIcon from '../../images/icons/close.svg';

const ReviewWindow = ({ isOpen, onClose }) => {
    const [rating, setRating] = useState(0);

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <img
                    key={i}
                    src={i <= rating ? starIconFilled : starIconEmpty}
                    alt="Star"
                    className="review-star-icon"
                    onClick={() => setRating(i)}
                />
            );
        }
        return stars;
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="review-modal-overlay" onClick={onClose}>
            <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="review-modal-close-btn" onClick={onClose}>
                    <img src={closeIcon} alt="Close" />
                </button>
                <h2 className="review-modal-title">Написать отзыв</h2>

                <div className="review-rating-section">
                    <p className="review-rating-label">Оценка</p>
                    <div className="review-stars-interactive">
                        {renderStars()}
                    </div>
                </div>

                <div className="review-form-group">
                    <input type="text" placeholder="Ваше имя" className="review-input" />
                </div>

                <div className="review-form-group">
                    <textarea placeholder="Комментарий" className="review-textarea"></textarea>
                </div>

                <div className="review-photo-upload-section">
                    <p className="review-photo-upload-link">Загрузить фото</p>
                    <p className="review-photo-upload-hint">Нажмите кнопку "Загрузить фото" или перетащите фотографию в эту область</p>
                </div>

                <button className="review-submit-btn">Отправить отзыв</button>
            </div>
        </div>
    );
};

export default ReviewWindow; 