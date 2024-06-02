import { useEffect } from "react";

export default function UseKey(key, action) {
  //LISTENING TO KEYPRESS EVENTS//
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
