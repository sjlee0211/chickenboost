import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const App = () => {
  const [message, setMessage] = useState("치킨 부스트!");

  const handleClick = () => {
    setMessage("치킨 부스트 발동! ⚡");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded"
    >
        {message}
      </button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
