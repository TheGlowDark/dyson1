import './reviews.css';
import arrowCategory from '../../images/icons/arrow_category.svg';

const reviews = [
  {
    id: 1,
    name: 'Ольга',
    date: '21/05/2022',
    rating: 5,
    title: 'Это лучший фен!',
    text: 'Пользуюсь около месяца, хочу поделиться впечатлениями. Во-первых, фен очень легкий, удобно лежит в руке, не скользит. Кнопка включения и выключения расположена удобно, а не где-то сбоку. Мощность у фена хорошая, волосы сушит быстро',
    photos: [
      '/images/reviews/review1.jpg',
      '/images/reviews/review2.jpg',
      '/images/reviews/review3.jpg'
    ]
  },
  {
    id: 2,
    name: 'Татьяна',
    date: '21/05/2022',
    rating: 5,
    title: 'Отличный фен',
    text: 'Фен очень понравился. Качественный, стильный: свою цену полностью оправдывает!',
    photos: []
  },
  {
    id: 3,
    name: 'Виктор',
    date: '21/05/2022',
    rating: 5,
    title: 'Быстро пришел',
    text: 'Фен очень понравился. Качественный, стильный: свою цену полностью оправдывает!',
    photos: ['/images/reviews/review1.jpg']
  }
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="container">
        <div className='reviews-content'>
        <div className="reviews-header">
          <h2 className="reviews-title">Отзывы <span className="reviews-title__count">151</span></h2>
          <div className="reviews-header__row">
            <div className="reviews-rating-block">
              <span className="reviews-rating-value">5</span>
              <span className="reviews-rating-max">/ 5</span>
              <span className="reviews-stars">★★★★★</span>
            </div>
            <button className="reviews-write-btn">Написать отзыв</button>
          </div>
        </div>
        <div className="reviews-list">
          {reviews.map(r => (
            <div className="review-item" key={r.id}>
              <div className="review-item__row">
                <span className="review-item__name">{r.name}</span>
                <span className="review-item__date">{r.date}</span>
              </div>
              <div className="review-item__row">
                <span className="review-item__stars">{'★'.repeat(r.rating)}</span>
                <span className="review-item__title">{r.title}</span>
              </div>
              <div className="review-item__text">{r.text}</div>
              {r.photos.length > 0 && (
                <div className="review-item__photos">
                  {r.photos.map((photo, idx) => (
                    <img src={photo} alt="Фото отзыва" key={idx} className="review-photo" />
                  ))}
                  <a href="#" className="review-item__photos-link">Смотреть все фото</a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="reviews-footer">
          <button className="reviews-more-btn">
            Показать еще
            <img src={arrowCategory} alt="arrow" className="reviews-more-arrow" />
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;