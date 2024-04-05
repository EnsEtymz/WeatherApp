import { GlobalProvider } from "./context/GlobalState";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="h-screen">
        <Home />
      </div>
    </GlobalProvider>
  );
}

export default App;
