import React, { useState, useRef } from 'react';
import DeliveryMap from '../../deliverymap/deliverymap';

const russianCities = [
    'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань',
    'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону',
    'Уфа', 'Красноярск', 'Воронеж', 'Пермь', 'Волгоград'
];

const DeliveryContent = () => {
    const [city, setCity] = useState('Москва');
    const [orderSum, setOrderSum] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const dateInputRef = useRef(null);

    const handleSumChange = (e) => {
        // Только цифры, не более 10 символов
        let value = e.target.value.replace(/\D/g, '').slice(0, 10);
        // Удаляем ведущие нули
        value = value.replace(/^0+/, '');
        setOrderSum(value);
    };

    const handleDateChange = (e) => {
        setDeliveryDate(e.target.value);
    };

    const isDateValid = () => {
        if (!deliveryDate) return false;
        const today = new Date();
        const selectedDate = new Date(deliveryDate);
        return selectedDate >= new Date(today.setHours(0,0,0,0));
    };

    const isFormValid = orderSum && isDateValid();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!orderSum || orderSum === '0') {
            alert('Пожалуйста, введите сумму заказа больше 0.');
            return;
        }
        if (!isDateValid()) {
            alert('Пожалуйста, выберите корректную будущую дату доставки.');
            return;
        }
        alert('Данные приняты');
    };

    return (
        <div className="tab-content-description-content-wrapper">
            <div className="delivery-section-content">
                {/* Блоки доставки */}
                <div className="delivery-info-blocks">
                    <div className="delivery-info-block">
                        <h3>Доставка по Москве</h3>
                        <ul>
                            <li>Доставка продукции по Москве и МО в течение 2 часов в день заказа или в любой удобный день.</li>
                            <li>Стоимость доставки по Москве — 0 р.</li>
                            <li>Стоимость доставки за МКАД: 500 р, до 10 км.</li>
                            <li>Стоимость доставки более 10 км — рассчитывается отдельно оператором.</li>
                            <li>Оплата возможна при получении курьеру после проверки продукции.</li>
                        </ul>
                    </div>
                    <div className="delivery-info-block">
                        <h3>Доставка в регионы</h3>
                        <ul>
                            <li>Стоимость доставки в регионы осуществляется компанией Boxberry и рассчитывается отдельно оператором.</li>
                            <li>Оплата возможна при получении курьеру после проверки продукции.</li>
                        </ul>
                    </div>
                </div>

                {/* Карта с пунктами выдачи */}
                <DeliveryMap />

                {/* Расчет стоимости */}
                <div className="delivery-calc-block">
                    <h3>Расчет стоимости курьерской доставки</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="delivery-calc-field">
                            <select value={city} onChange={e => setCity(e.target.value)}>
                                {russianCities.map(cityName => (
                                    <option key={cityName} value={cityName}>{cityName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="delivery-calc-field">
                            <input
                                type="text"
                                placeholder="Сумма заказа"
                                value={orderSum}
                                onChange={handleSumChange}
                                maxLength={10}
                            />
                        </div>
                        <div className="delivery-calc-field">
                            <input
                                type="date"
                                ref={dateInputRef}
                                value={deliveryDate}
                                onChange={handleDateChange}
                                min={new Date().toISOString().split('T')[0]}
                                style={{ cursor: 'pointer', width: '100%' }}
                                onClick={() => {
                                    if (dateInputRef.current && dateInputRef.current.showPicker) {
                                        dateInputRef.current.showPicker();
                                    }
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="delivery-calc-btn"
                            style={{ background: isFormValid ? '#111' : '#888', color: '#fff', cursor: isFormValid ? 'pointer' : 'not-allowed' }}
                            disabled={!isFormValid}
                        >
                            Рассчитать
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DeliveryContent; 