import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ColorPicker from "./components/colorPicker.jsx";
import SimpleCounter from "./components/simpleCounter.jsx";
import ToDoList from "./components/toDoList/toDoList.jsx";
import PasswordStrengthChecker from "./components/passwordStrengthChecker.jsx";

createRoot(document.getElementById('root')).render(

  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route path="/list" element={<ToDoList />} />
                  <Route path="/counter" element={<SimpleCounter />} />
                  <Route path="/color-picker" element={<ColorPicker />} />
                  <Route path="/password-strength-checker" element={<PasswordStrengthChecker />} />
              </Route>

          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
