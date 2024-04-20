import './leftbar.scss';
import Icon1 from "../../assets/sidebar_icons/1.png";
import Icon2 from "../../assets/sidebar_icons/2.png";
import Icon3 from "../../assets/sidebar_icons/3.png";
import Icon4 from "../../assets/sidebar_icons/4.png";
import Icon5 from "../../assets/sidebar_icons/5.png";
import Icon6 from "../../assets/sidebar_icons/6.png";
import Icon7 from "../../assets/sidebar_icons/7.png";
import Icon8 from "../../assets/sidebar_icons/8.png";
import Icon9 from "../../assets/sidebar_icons/9.png";

const Leftbar = () => {
  const sideMenuItems = [
    {
      "id": 1,
      "src": Icon1,
      "alt": "sideMenu1"
    },
    {
      "id": 2,
      "src": Icon2,
      "alt": "sideMenu2"
    },
    {
      "id": 3,
      "src": Icon3,
      "alt": "sideMenu3"
    },
    {
      "id": 4,
      "src": Icon4,
      "alt": "sideMenu4"
    },
    {
      "id": 5,
      "src": Icon5,
      "alt": "sideMenu5"
    },
    {
      "id": 6,
      "src": Icon6,
      "alt": "sideMenu6"
    },
    {
      "id": 7,
      "src": Icon7,
      "alt": "sideMenu7"
    },
    {
      "id": 8,
      "src": Icon8,
      "alt": "sideMenu8"
    },
    {
      "id": 9,
      "src": Icon9,
      "alt": "sideMenu9"
    },
  ]
  return (
    <div className='leftbar'>
        <div className='container'>
          <div className='iconContainer'>
            {sideMenuItems?.map(sideMenu => 
            <div key={sideMenu.id} className='icon'>
              <img src={sideMenu.src} alt={sideMenu.alt} />
            </div>
            )}
                </div>
        </div>
    </div>
  )
}

export default Leftbar