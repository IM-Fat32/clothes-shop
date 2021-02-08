import React from 'react';

import BottomUserPanel from "./BottomUserPanel/BottomUserPanel";
import TopMenu from "./TopMenu/TopMenu";

const MobileMenu: React.FC = () => {
  return ( 
    <header>
      <TopMenu/>
      <BottomUserPanel/>
    </header>
    );
}
 
export default MobileMenu;
