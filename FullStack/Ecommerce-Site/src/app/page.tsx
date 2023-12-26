import Navigations from "./Components/Navigations"
import Menu from "./Components/Menu"
import Slide1 from "./Components/Slide1"
import Slide2 from "./Components/Slide2"
import Slide3 from "./Components/Slide3"
import LeftSlider from "./Components/leftSliderBtn"
import RightSlider from "./Components/rightSliderBtn"

export default function Home() {
  return (
    <div className="w-full">
      <nav className="fixed w-full z-10 " ><Navigations/></nav>
      <menu className="fixed z-20 bottom-8 right-8"><Menu/></menu>
      <div>
        <LeftSlider />
        <RightSlider />
        <div id="page1" className="h-[100vh] overflow-hidden flex " >
          <div><Slide1 /></div>
          <div><Slide2 /></div>
          <div><Slide3 /></div>
        </div>
      </div>
    </div>
  )
}
