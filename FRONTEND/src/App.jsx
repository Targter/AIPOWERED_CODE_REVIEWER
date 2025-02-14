import React, { useState } from "react";
import Page from "./component/Page";
import Navbar from "./component/Navbar";

function App() {
  const [selectedLanguage, setSelectedLanguagefinal] = useState("");

  return (
    <>
      <div className="w-[100%] h-[100%] overflow-hidden">
        <Navbar setSelectedLanguagefinal={setSelectedLanguagefinal} />
        <Page selectedLanguage={selectedLanguage} />
      </div>
    </>
  );
}

export default App;
