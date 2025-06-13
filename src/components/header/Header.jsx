import { useState } from 'react';
import "./header.css";

import logoImg from './../../images/logo.png';
import burger from './../../images/icons/burger.png';
import cart from './../../images/icons/cart.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header_row">
                    <div className="header_left">
                        <button className="burger hover-opacity" onClick={toggleMenu}>
                            <img src={burger} alt="Menu"/>
                        </button>
                        <a href="/" className="header_logo hover-opacity">
                            <img src={logoImg} alt="Logo"/>
                        </a>
                    </div>
                    <nav className={`header_nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><a href="!!!" className="hover-opacity">О нас</a></li>
                            <li><a href="!!!" className="hover-opacity">Доставка и оплата</a></li>
                            <li><a href="!!!" className="hover-opacity">Регистрация продукта</a></li>
                            <li><a href="!!!" className="hover-opacity">Сервис</a></li>
                            <li><a href="!!!" className="hover-opacity">Сертификаты и лицензии</a></li>
                        </ul>
                    </nav>
                    <div className="header_right">
                        <a href="/cart" className="cart-link hover-opacity">
                            <img src={cart} alt="Cart"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

// import { useState } from 'react';
// import "./header.css";
// import logoImg from './../../images/icons/logo.png';
// import burger from './../../images/icons/burger.png';
// import cart from './../../images/icons/cart.png';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header_row">
//           <div className="header_left">
//             <button 
//               className="burger-button" 
//               aria-expanded="false"
//               aria-controls = 'header_nav'
//             >
//               <img src={burger} alt="" />
//             </button>
//             <div className="header_logo">
//               <img src={logoImg} alt="Логотип компании" />
//             </div>
//           </div>
          
//           <nav 
//             className={`header_nav ${isMenuOpen ? 'active' : ''}`}
//             aria-hidden={!isMenuOpen}
//           >
//             <ul>
//               <li><a href="!!!">О нас</a></li>
//               <li><a href="!!!">Доставка и оплата</a></li>
//               <li><a href="!!!">Регистрация продукта</a></li>
//               <li><a href="!!!">Сервис</a></li>
//               <li><a href="!!!">Сертификаты и лицензии</a></li>
//             </ul>
//           </nav>
          
//           <div className="header_right">
//             <img src={cart} alt="Корзина покупок"/>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
