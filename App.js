import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import StateComp from '../src/Components/StateComp'

function App() {
  return (
    <div className="App">     
        <div className="container">
            <div className="row">
              <StateComp name="Shyamala.Amith.Deshpande" city="Muddanayakanpalya"/>
            </div>
        </div>
    </div>
  );
}

export default App;
