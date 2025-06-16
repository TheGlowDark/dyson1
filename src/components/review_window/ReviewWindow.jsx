import React, { useState, useRef } from 'react';
import './review_window.css';
import starIconFilled from '../../images/icons/star.svg';
import starIconEmpty from '../../images/icons/empty_star.svg';
import closeIcon from '../../images/icons/close.svg';

const ReviewWindow = ({ isOpen, onClose, addReview }) => {
    const [rating, setRating] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState({});

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

    const handleImageUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedImage(null);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!name.trim()) {
            newErrors.name = 'Имя не может быть пустым';
        }
        if (rating === 0) {
            newErrors.rating = 'Пожалуйста, поставьте оценку';
        }
        if (!comment.trim()) {
            newErrors.comment = 'Комментарий не может быть пустым';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            const newReview = {
                id: Date.now(), // Простой уникальный ID
                name: name.trim(),
                date: new Date().toLocaleDateString('en-GB'), // Формат даты dd/mm/yyyy
                rating: rating,
                title: '' ,// Заголовок можно добавить позже, если нужно
                text: comment.trim(),
                photos: selectedImage ? [selectedImage] : [],
            };
            addReview(newReview);
            onClose(); // Закрыть модальное окно после успешной отправки
            // Сбросить состояние формы после отправки
            setName('');
            setRating(0);
            setComment('');
            setSelectedImage(null);
            setErrors({});
        }
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
                    {errors.rating && <p className="review-error-message">{errors.rating}</p>}
                </div>

                <div className="review-form-group">
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        className={`review-input ${errors.name ? 'input-error' : ''}`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="review-error-message">{errors.name}</p>}
                </div>

                <div className="review-form-group">
                    <textarea
                        placeholder="Комментарий"
                        className={`review-textarea ${errors.comment ? 'input-error' : ''}`}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    {errors.comment && <p className="review-error-message">{errors.comment}</p>}
                </div>

                <div className="review-photo-upload-section">
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <p className="review-photo-upload-link" onClick={handleImageUploadClick}>Загрузить фото</p>
                    {selectedImage ? (
                        <img src={selectedImage} alt="Selected" className="review-preview-image" />
                    ) : (
                        <p className="review-photo-upload-hint">Нажмите кнопку "Загрузить фото" или перетащите фотографию в эту область</p>
                    )}
                </div>

                <button className="review-submit-btn" onClick={handleSubmit}>Отправить отзыв</button>
            </div>
        </div>
    );
};

export default ReviewWindow; 