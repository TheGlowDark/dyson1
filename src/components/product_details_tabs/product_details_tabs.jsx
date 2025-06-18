import React, { useState, useRef } from 'react';
import './product_details_tabs.css';
import BundleContent from './content/BundleContent';
import SpecificationsContent from './content/SpecificationsContent';
import DeliveryContent from './content/DeliveryContent';
import PaymentContent from './content/PaymentContent';
import RulesContent from './content/RulesContent';
import WarrantyContent from './content/WarrantyContent';
import CertificatesContent from './content/CertificatesContent';

const ProductDetailsTabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState('bundle');
    const tabsHeaderRef = useRef(null);

    const tabs = [
        { id: 'bundle', label: 'Комплектация' },
        { id: 'specifications', label: 'Характеристики' },
        { id: 'delivery', label: 'Доставка' },
        { id: 'payment', label: 'Оплата' },
        { id: 'rules', label: 'Правила эксплуатации' },
        { id: 'warranty', label: 'Гарантия' },
        { id: 'certificates', label: 'Сертификаты' }
    ];

    const tabContent = {
        bundle: <BundleContent />,
        specifications: <SpecificationsContent specifications={product?.specifications || []} />,
        delivery: <DeliveryContent />,
        payment: <PaymentContent />,
        rules: <RulesContent />,
        warranty: <WarrantyContent />,
        certificates: <CertificatesContent />
    };

    // Горизонтальный скролл колесиком мыши
    const handleWheel = (e) => {
        if (tabsHeaderRef.current && e.deltaY !== 0) {
            tabsHeaderRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <div className="product-details-tabs">
            <div className="container" style={{ overflowX: 'auto' }}>
                <div
                    className="tabs-header"
                    ref={tabsHeaderRef}
                    onWheel={handleWheel}
                >
                    {tabs.map(tab => (
                        <div
                            key={tab.id}
                            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </div>
                    ))}
                </div>
                <div className="tabs-content">
                    {tabContent[activeTab]}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsTabs;
