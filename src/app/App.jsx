import './App.css'
import {Cards} from "../features/cards/Cards.jsx";
import {Provider} from "react-redux";
import {store} from "./store.js";

function App() {

  return (
      <Provider store={store}>
          <div className="App">
              <h1>Mon Carnet de Lecture</h1>
              <Cards />
          </div>
      </Provider>
  )
}

export default App
