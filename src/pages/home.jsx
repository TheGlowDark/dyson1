import React from 'react';
import Header from '../components/header/Header';
import Promo from '../components/promo/Promo';
import Sections from '../components/categories/categories';
import Experts from '../components/experts/experts';
import Advantages from '../components/advantages/advantages';
import SpecialOffers from '../components/special_offers/special_offers';
import Reviews from '../components/reviews/reviews';
import FAQ from '../components/FAQ/FAQ';
import News from '../components/news/news';
import ContactSubscription from '../components/contact_subscription/ContactSubscription';
import Footer from '../components/footer/Footer';
import CategoryProductSection from '../components/category_product_section/CategoryProductSection';

const Home = () => {
    return (
        <div className="App">
            <Promo />
            <Sections />
            <Experts />
            <Advantages />
            <SpecialOffers />
            <Reviews />
            <FAQ />
            <News />
            <ContactSubscription />
        </div>
    );
};

export default Home;
