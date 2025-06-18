import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../sections/item_main/item_main';
import ProductDetailsTabs from '../components/product_details_tabs/product_details_tabs';
import FAQ from '../sections/FAQ/FAQ';
import SimilarItems from '../sections/similar_items/SimilarItems';
import DysonAd from '../sections/dyson_ad/dyson_ad';
import products from '../data/products.json';

const Product = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id, 10));

    return (
        <div className="App">
            <Item />
            <ProductDetailsTabs product={product} />
            <FAQ />
            <DysonAd />
            <SimilarItems currentProductId={parseInt(id, 10)} />
        </div>
    );
};

export default Product;
