function App() {
    const handleClick = () => {
      console.log("🍗 치킨 부스트 발동!");
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-100">
        <button
          onClick={handleClick}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-transform duration-200 hover:scale-105"
        >
          🍗 치킨 부스트!
        </button>
      </div>
    );
  }
  
  export default App;


  