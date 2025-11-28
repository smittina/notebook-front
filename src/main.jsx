import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ReadingDetail} from "./features/readingDetail/ReadingDetail.jsx";
import {NewReading} from "./features/newReading/NewReading.jsx";
import {Header} from "./common/component/Header.jsx";
import {Provider} from "react-redux";
import {store} from "./app/store.js";
import {Error} from "./common/component/Error.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <Router>
              <Header />
              <Routes>
                  <Route path="/" element={<App />}/>
                  <Route path="/reading/:id" element={<ReadingDetail />} />
                  <Route path="/new" element={<NewReading />} />
                  <Route path="*" element={<Error />} />
              </Routes>
          </Router>
      </Provider>
  </StrictMode>,
)
