import './navbar.scss';
import Logo from './../../../public/logo.png'; 
import Image1 from './../../assets/navbar_icons/1.png';
import Image2 from './../../assets/navbar_icons/2.png';
import Image3 from './../../assets/navbar_icons/3.png';
import Image4 from './../../assets/navbar_icons/4.png';
import Image5 from './../../assets/navbar_icons/5.png';
import SearchIcon from './../../assets/other_icons/search_icon.png';
import Searchbar from '../customComponents/searchbar/Searchbar';

const Navbar = () => {
  const menuItems = [
    {
      "id": 1,
      "src": Image1,
      "alt": "menu_1"
    },
    {
      "id": 2,
      "src": Image2,
      "alt": "menu_2"
    },
    {
      "id": 3,
      "src": Image3,
      "alt": "menu_3"
    },
    {
      "id": 4,
      "src": Image4,
      "alt": "menu_4"
    },
    {
      "id": 5,
      "src": Image5,
      "alt": "menu_5"
    },
  ]
  return (
    <div className='navbar'>
      <div className='container'>
      <div className='logoSearchContainer'>
      <div className='logoContainer'>
        <img src={Logo} alt='ta_logo' className='logo' />
      </div>
      <Searchbar />
      </div>
      {/* Icons */}
      <div className='iconContainer'>
        {menuItems?.map(menu => 
          <div key={menu.id}>
          <img src={menu.src} alt={menu.alt} />
        </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default Navbar