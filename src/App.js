import "./App.css";
import sampleData from "./assets/sampleData";
import Row from "./components/Row";

/**
 * We are going to create a Row component,
 * which will hold all the row logic, data and animations!
 */

/**
 * How do we allow for dynamically converting views from web
 * to mobile? I would think its done by first accessing the stateof the
 * system we are on, are we on any popular phone type or computer OS?
 * Passing this state down to the children components will allow us to
 * develop two sets of frontend components --> one for web and one for mobile.
 */
function App() {
  return (
    <div className="App">
      <Row data={sampleData} />
    </div>
  );
}

export default App;
