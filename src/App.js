import "./App.css";
import LandingPage from "./pages/LandingPage";
import Form from "./pages/Form";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <LandingPage scroll={isFormOpen} openFormModal={setIsFormOpen}/>
      { isFormOpen && <Form setIsFormOpen={setIsFormOpen} />}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
