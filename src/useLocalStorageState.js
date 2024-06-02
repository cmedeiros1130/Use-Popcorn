import { useState, useEffect } from "react";

export default function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key); //STORING THE ADDED MOVIES TO LIST TO STAY IN THE LIST//
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  //LOCAL DATA//
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
