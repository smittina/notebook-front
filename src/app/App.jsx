import './App.css'
import {Cards} from "../features/cards/Cards.jsx";
import {Provider} from "react-redux";
import {store} from "./store.js";
import {ReadingsList} from "../features/readings/ReadingsList.jsx";

function App() {

  return (
      <Provider store={store}>
          <div className="App">
              <h1>Mon Carnet de Lecture</h1>
              <Cards />
          <ReadingsList />
          </div>
      </Provider>
  )
}

export default App
