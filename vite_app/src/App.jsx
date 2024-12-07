import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import MainPage from "./components/mainPage/mainPage.jsx";
import Upperbar from "./components/upperbar/upperbar.jsx"

import "./App.css"; 

function App() {
  return (
<>
<Navbar />
<Upperbar/>
<Sidebar />

<MainPage />

</>
  );
}

export default App;
