import React from 'react';
import Experts from '../components/experts/experts';
import Advantages from '../components/advantages/advantages';
import Reviews from '../components/reviews/reviews';
import FAQ from '../components/FAQ/FAQ';
import News from '../components/news/news';
import ContactSubscription from '../components/contact_subscription/ContactSubscription';
import CategoryProductSection from '../components/category_product_section/CategoryProductSection';

const Hairdryers = () => {
    return (
        <div className="App">
            <CategoryProductSection/>
            <Experts />
            <Advantages />
            <Reviews />
            <FAQ />
            <News />
            <ContactSubscription />
        </div>
    );
};

export default Hairdryers;
