import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  return (
    <div>
      <ExpenseItem date={new Date(1995, 10, 24)} />
    </div>
  );
}

export default App;
