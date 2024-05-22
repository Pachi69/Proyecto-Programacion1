import Body from "./components/Body";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>

      <Navbar/>
      <Carousel/>
      <div class='row' style={{maxWidth: '100%', margin: '0'}}>
        <div class='col'>
          <Card

          />
        </div>
        <div class='col'>
          <Card

          />
        </div>
        <div class='col'>
          <Card

          />
        </div>
      </div>
    </div>
  );
}

export default App;
