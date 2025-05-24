import "./header.css";

import logoImg from './../../images/icons/logo.png';
import burger from './../../images/icons/burger.png';
import cart from './../../images/icons/cart.png';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header_row">
                    <div className="header_left">
                        <div className="burger">
                            <img src={burger} alt="burger"/>
                        </div>
                        <div className="header_logo">
                            <img src={logoImg} alt="Logo"/>
                        </div>
                    </div>
                    <nav className='header_nav'>
                        <ul>
                            <li><a href = "!!!">О нас</a></li>
                            <li><a href = "!!!">Доставка и оплата</a></li>
                            <li><a href = "!!!">Регистрация продукта</a></li>
                            <li><a href = "!!!">Сервис</a></li>
                            <li><a href = "!!!">Сертификаты и лицензии</a></li>
                        </ul>
                    </nav>
                    <div className = "header_right">
                        <img src = {cart} alt = "Cart"></img>
                        <a href = "!!!"></a>
                    </div>
                </div>
            </div>
        </header>
    )
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