import ThemeToggle from "./components/ThemeToggle";
import ThemeDisplay from "./components/ThemeDisplay";

const App = () => {
  return (
    <div>
      <ThemeDisplay />
      <div style={{ position: "absolute", top: "20px", right: "20px" }}>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default App;
