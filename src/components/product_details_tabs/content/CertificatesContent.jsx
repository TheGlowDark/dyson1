import React from 'react';

const CertificatesContent = () => {
    // Placeholder images - replace with actual paths if available
    const certificateImages = [
        'https://via.placeholder.com/200x280?text=Certificate+1',
        'https://via.placeholder.com/200x280?text=Certificate+2',
        'https://via.placeholder.com/200x280?text=Certificate+3',
    ];

    return (
        <div className="tab-content certificates-content">
            <div className="certificates-grid">
                {certificateImages.map((image, index) => (
                    <img key={index} src={image} alt={`Certificate ${index + 1}`} className="certificate-image" />
                ))}
            </div>
        </div>
    );
};

export default CertificatesContent; 