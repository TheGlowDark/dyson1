import React from 'react';
import Item from '../components/item_main/item_main';
import ProductDetailsTabs from '../components/product_details_tabs/product_details_tabs';
import FAQ from '../components/FAQ/FAQ';
import SimilarItems from '../components/similar_items/SimilarItems';

const Product = () => {
    return (
        <div className="App">
            <Item/>
            <ProductDetailsTabs/>
            <FAQ/>
            <SimilarItems/>
        </div>
    );
};

export default Product;
