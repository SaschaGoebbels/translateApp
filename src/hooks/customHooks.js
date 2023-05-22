import React, { useState } from 'react';

export const useMenuHooks = props => {
  const menuInitState = { hideMenu: false };
  const [menuState, setMenuState] = useState(menuInitState);
  return menuState;
};
