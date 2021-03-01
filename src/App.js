import React from 'react';
import { Provider } from "react-redux";
import {store} from "./redux/store.js";
import './App.css';
import BoilerPlateLayout from './components/BoilerPlateLayout';

function App() {
  return (
    <Provider store={store}>
      <BoilerPlateLayout />
    </Provider>
  );
}

export default App;
