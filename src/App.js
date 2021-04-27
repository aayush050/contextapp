import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";
import "./index.css";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
