import React, {useState} from 'react';

import { Icon } from '@iconify/react';
import navbarIcon from '@iconify-icons/heroicons-solid/menu-alt-2';

import "./TopMenu.sass";
 
const TopMenu : React.FC = () => {

  const [isActive, setIsActive] = useState<boolean>(false);

  function handleClickActivator () {
    setIsActive((prevState) => prevState = !prevState)
  }

  return (
    <nav>
      <div className="top-menu__wrapper" onClick={handleClickActivator}>
        <div className="top-menu__activator" >
          <Icon icon={navbarIcon} />
        </div>
        <div className="top-menu__container">
        </div>
      </div>
    </nav>
  );
}
 
export default TopMenu ;