import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Booklist = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (  
    <div className="book-list" style = {{ background: theme.bg, color: theme.syntax}}>
        <ul>
          <li style = {{ background: theme.ui}}>book1</li>
          <li style = {{ background: theme.ui}}>book2</li>
          <li style = {{ background: theme.ui}}>book3</li>
        </ul>
      </div>
  );
}
 
export default Booklist;
