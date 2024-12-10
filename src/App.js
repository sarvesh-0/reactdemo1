
import './App.css';
import FirstHello from './First';
import Welcome from './PropsDemo';

function App() {
  let employee={'empname':'Roronova Zoro','empid':1,'salary':15000000}
  return (
    <> 
    {/* this is root tag for jsx */}
      <h1>My React app</h1>
      <FirstHello></FirstHello>
      <Welcome name="Usumaki Naruto" h="7th Hokage" emp={employee}></Welcome>
    </>
  );
}

export default App;
