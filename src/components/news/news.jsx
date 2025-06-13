import React, { useState } from 'react';
import NewsCard from '../news_card/news_card.jsx';
import './news.css';
import news_image from '../../images/news/news_image.png';
import expandIcon from '../../images/icons/expand.svg';

const News = () => {
    const newsData = [
        {
            id: 1,
            image: news_image,
            date: '21 декабря 2022',
            title: 'Есть ли безопасные выпрямители для волос',
            description: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.'
        },
        {
            id: 2,
            image: news_image,
            date: '21 декабря 2022',
            title: 'Есть ли безопасные выпрямители для волос',
            description: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.'
        },
        {
            id: 3,
            image: news_image,
            date: '21 декабря 2022',
            title: 'Есть ли безопасные выпрямители для волос',
            description: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.'
        },
        {
            id: 4,
            image: news_image,
            date: '21 декабря 2022',
            title: 'Есть ли безопасные выпрямители для волос',
            description: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.'
        },
        {
            id: 5,
            image: news_image,
            date: '21 декабря 2022',
            title: 'Есть ли безопасные выпрямители для волос',
            description: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.'
        },
        {
            id: 6,
            image: news_image,
            date: '21 декабря 2022',
            title: 'Есть ли безопасные выпрямители для волос',
            description: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.'
        },
    ];

    const [numDisplayed, setNumDisplayed] = useState(3);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        if (isExpanded) {
            setNumDisplayed(3);
        } else {
            setNumDisplayed(newsData.length);
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="news-section">
            <div className="container">
                <h2 className="news-title">Новости</h2>
                <div className="news-grid">
                    {newsData.slice(0, numDisplayed).map(news => (
                        <NewsCard 
                            key={news.id}
                            image={news.image}
                            date={news.date}
                            title={news.title}
                            description={news.description}
                        />
                    ))}
                </div>
                {newsData.length > 3 && (
                    <button className="show-more-button" onClick={handleToggle}>
                        <p>{isExpanded ? 'Свернуть' : 'Показать еще'}</p>
                        <img 
                            src={expandIcon} 
                            alt="Toggle" 
                            className={`show-more-arrow ${isExpanded ? 'rotated' : ''}`}
                        />
                    </button>
                )}
            </div>
        </section>
    );
};

export default News;
