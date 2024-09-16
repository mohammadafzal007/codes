import viteLogo from '/vite.svg'
// import Todo from './components/todo1';
// import FaqComp from "./components/faqs/FaqComp"
import AutoSug from "./components/autosug"
// import Filter from './components/filter'
// import DragnDrop from './components/dragndrop'
// import InfinteScroll from './components/infinitescroll'
// import ModalShow from './components/modalshow'
import ImageCarousel from './components/imagecarousel'


function App() {
  const vdom=<h1>Hello</h1>;
  console.log(vdom);
  const rdom=document.createElement("h1");
  console.dir(rdom)
    return (
    <>
      <div>
        {/* <Todo /> */}
      {/* <FaqComp /> */}
      <AutoSug />
      {/* <Filter /> */}
      {/* <DragnDrop /> */}
      {/* <InfinteScroll /> */}
{/* <ModalShow/> */}
{/* <ImageCarousel/> */}
{/* <h1>hello</h1> */}
        </div>
    </>
  )
  
  
}

export default App
