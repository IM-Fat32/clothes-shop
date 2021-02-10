import React, {useState} from 'react';

import { Icon } from '@iconify/react';
import navbarIcon from '@iconify-icons/heroicons-solid/menu-alt-2';
import exitNavbarIcon from '@iconify-icons/bi/x';

import Categories from "./Categories/Categories.jsx"

import "./TopMenu.sass";
 
const TopMenu : React.FC = () => {

  const [isActive, setIsActive] = useState<boolean>(false);

  function handleClickActivator () {
    setIsActive((prevState) => prevState = !prevState)
  }

  return (
    <nav>
       
      <div className="top-menu__wrapper">
        <div className="top-menu__activator">
          {isActive ? 
            <div className="icon" id="exit__activator" onClick={handleClickActivator} >
              <Icon icon={exitNavbarIcon} />
            </div>
            
            :
            <div className="icon" onClick={handleClickActivator} >
              <Icon icon={navbarIcon} />
            </div>
          }
        </div>
      </div>
      {
        isActive ? <Categories/>
        :
        null
      }
    </nav>
  );
}
 
export default TopMenu ;