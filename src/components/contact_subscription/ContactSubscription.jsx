import React from 'react';
import './contact_subscription.css';

const ContactSubscription = () => {
  return (
    <section className="contact-subscription-section">
      <div className="container">
        <div className="contact-subscription-content">
          <div className="contact-form-wrapper">
            <h2 className="contact-subscription-title">Свяжитесь с нами</h2>
            <form className="contact-form">
              <div className="form-group">
                <p><input type="text" placeholder="Ваше имя" className="form-input" /></p>
              </div>
              <div className="form-group">
                <p><input type="text" placeholder="Ваш номер телефона" className="form-input" /></p>
              </div>
              <button type="submit" className="submit-button"><p>Оставить заявку</p></button>
            </form>
          </div>

          <div className="subscription-form-wrapper">
            <h2 className="contact-subscription-title">Подпишитесь на новости</h2>
            <form className="subscription-form">
              <div className="form-group">
                <p><input type="email" placeholder="Ваш e-mail" className="form-input" /></p>
              </div>
              <button type="submit" className="subscribe-button"><p>Подписаться</p></button>
              <div className="privacy-policy">
                <input type="checkbox" id="privacy-checkbox" />
                <label htmlFor="privacy-checkbox"><p>Я ознакомлен(а) с политикой конфиденциальности и согласен(а) с обработкой персональных данных</p></label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSubscription; 