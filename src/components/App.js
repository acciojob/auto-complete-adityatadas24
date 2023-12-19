
import React,{useState,useEffect} from "react";
import "./../styles/App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

const App = () => {
  const [fruit, setFruit] = useState("");
  const [fruitsFilter, setFruitsFilter] = useState(fruits);

  useEffect(() => {
    handelSubmit();
  }, [fruit]);

  function handelSubmit(e) {
    setFruitsFilter(
      fruits.filter(
        (item) =>
          item.toLowerCase().includes(fruit.toLowerCase().trim()) == true
      )
    );
  }

  return (
    <div>
      <h1>Search item</h1>
      <form>
        <input
          type="text"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        />
        {/* <button >Submit</button> */}
      </form>

      <ul>
        {fruitsFilter.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
