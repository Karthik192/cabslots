import Cabs from "./components/Cabs/Cabs";
import Pushpak from "./components/Pushpak/Pushpak";
import { CabsImgs } from "./data/Cabsdata";

function App() {
  // useEffect(() => {
  //   setInterval(() => {
  //     setCabsdata(Cabsdata2);
  //   }, 5000);
  // }, []);

  return (
    <div className="App">
      <Cabs cabsimgs={CabsImgs} />
      {/* <button onClick={}>Next</button> */}
      {/* <Pushpak /> */}
    </div>
  );
}

export default App;
