import './App.css'
import Social from "./sections/Social";
import bg_top from "./assets/bg-pattern-top-desktop.svg";
import bg_bottom from "./assets/bg-pattern-bottom-desktop.svg"
function App() {

  return (
    <>
      <div className="h-screen">
        <img className="absolute -z-1" src={bg_top} alt="background top"/>
      <Social/>

        <img className="bottom-0 -z-1 right-0 absolute hidden lg:block" src={bg_bottom} alt="background bottom"/>
      </div>
    </>
  )
}

export default App
