import React from 'react';

const labels = [
    'Длина шнура',
    'Время беспроводной работы',
    'Время для полного заряда',
    'Напряжение',
    'Время для зарядки на 90 %',
    'Вес'
];

const SpecificationsContent = ({ specifications = [] }) => (
    <div className="tab-content specifications-content-wrapper">
        <table className="specifications-table">
            <tbody>
                {labels.map((label, index) => (
                    <tr key={index}>
                        <td>{label}</td>
                        <td>{specifications[index] || '-'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default SpecificationsContent; 