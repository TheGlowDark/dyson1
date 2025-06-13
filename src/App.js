import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Sections from './components/categories/categories';
import Experts from './components/experts/experts';
import Advantages from './components/advantages/advantages';
import ProductGrid from './components/product_grid/product_grid';
import SpecialOffers from './components/special_offers/special_offers'
import Reviews from './components/reviews/reviews'; 
import FAQ from './components/FAQ/FAQ';
import News from './components/news/news';

function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <Sections/>
      <Experts/>
      <Advantages/>
      <SpecialOffers/>
      <Reviews/>
      <FAQ/>
    </div>
  );
}

export default App;
