import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Sections from './components/categories/categories';
import Experts from './components/experts/experts';
import Advantages from './components/advantages/advantages';
import ProductGrid from './components/product_grid/product_grid';
import SpecialOffers from './components/special_offers/special_offers'


function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <Sections/>
      <Experts/>
      <Advantages/>
      <SpecialOffers/>
    </div>
  );
}

export default App;
