import React, { useState } from 'react';

export const useMenuHook = props => {
  const menuInitState = { hideMenu: true };
  const [menuState, setMenuState] = useState(menuInitState);
  const changeMenuState = state => {
    setMenuState(state);
  };
  return { menuState, changeMenuState };
};
