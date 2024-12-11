
import './App.css';
import ConditionTest from './ConditionTest';
import ConditionTest1 from './ConditionTest1';
import FirstHello from './First';
import { ListDemo2 } from './ListDemo2';
import { ListDemoComponent } from './ListDemoComponent';
import Welcome from './PropsDemo';

function App() {
  let employee={'empname':'Roronova Zoro','empid':1,'salary':15000000}
  return (
    <> 
    {/* this is root tag for jsx */}
      <h1>My React app</h1>
      <FirstHello></FirstHello>
      <Welcome name="Usumaki Naruto" h="7th Hokage" emp={employee}></Welcome>
      <ConditionTest var1="t1"></ConditionTest>
      <ConditionTest1 var2="t2"></ConditionTest1>
      <ListDemoComponent></ListDemoComponent>
      <ListDemo2></ListDemo2>
    </>
  );
}

export default App;
