import Infoblock from "./components/Infoblock.jsx"
import Navbar from "./components/Navbar.jsx"
import TopBar from "./components/TopBar.jsx"
function App() {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 ">
        <TopBar/>
        <Infoblock/>
      </main>
    </div>
  )
}

export default App