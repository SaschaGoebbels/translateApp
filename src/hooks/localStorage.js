import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const localItem = localStorage.getItem(key);
      return localItem ? JSON.parse(localItem) : initialValue;
    } catch (err) {
      console.log('❌', err);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      setStoredValue(value);
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (err) {
      console.log('❌', err);
    }
  };
  return [storedValue, setValue];
};
