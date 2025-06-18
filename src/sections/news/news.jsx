import React, { useState, useEffect } from 'react';
import NewsCard from '../../components/news_card/news_card.jsx';
import './news.css';
import news_image from '../../images/news/news_image.png';
import ToggleExpandButton from '../../components/show_more/ToggleExpandButton.jsx'

const News = () => {
    const newsData = [
        {
            id: 1,
            image: news_image,
            date: '10 января 2023',
            title: 'Dyson запускает новую линейку фенов',
            description: 'Компания Dyson представила инновационную серию фенов с интеллектуальным контролем температуры и насадками для бережной укладки.'
        },
        {
            id: 2,
            image: news_image,
            date: '25 февраля 2023',
            title: 'Советы по уходу за волосами зимой',
            description: 'Эксперты Dyson делятся рекомендациями по защите волос от холода и сухого воздуха в зимний период.'
        },
        {
            id: 3,
            image: news_image,
            date: '15 марта 2023',
            title: 'Победители конкурса Dyson Beauty',
            description: 'Объявлены победители ежегодного конкурса Dyson Beauty Awards. Поздравляем лучших стилистов страны!'
        },
        {
            id: 4,
            image: news_image,
            date: '2 апреля 2023',
            title: 'Как выбрать фен для дома',
            description: 'Рассказываем, на что обратить внимание при выборе фена для домашнего использования: мощность, насадки, технологии.'
        },
        {
            id: 5,
            image: news_image,
            date: '18 мая 2023',
            title: 'Dyson открывает центр',
            description: 'В Москве открылся новый сервисный центр Dyson. Теперь обслуживание и ремонт техники стали ещё удобнее.'
        },
        {
            id: 6,
            image: news_image,
            date: '30 июня 2023',
            title: 'Летние тренды укладки волос',
            description: 'Dyson рассказывает о самых популярных летних трендах в укладке волос и делится лайфхаками для идеального образа.'
        },
    ];

    const [numDisplayed, setNumDisplayed] = useState(window.innerWidth <= 768 ? 2 : 3);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth <= 768) {
                setNumDisplayed(isExpanded ? newsData.length : 2);
            } else {
                setNumDisplayed(isExpanded ? newsData.length : 3);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded, newsData.length]);

    const handleToggle = () => {
        if (isExpanded) {
            setNumDisplayed(isMobile ? 2 : 3);
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
                {newsData.length > (isMobile ? 2 : 3) && (
                    <ToggleExpandButton 
                        onClick={handleToggle}
                        isExpanded={isExpanded}
                        expandedText="Свернуть"
                        collapsedText="Показать еще"
                    />
                )}
            </div>
        </section>
    );
};

export default News;
