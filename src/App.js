
import { createContext } from 'react';
import './App.css';
import Calculator from './Calculator';
import CalculatorHistory from './CalculatorHistory';
import ChangeStateDemo from './ChangeStateDemo';
import ConditionTest from './ConditionTest';
import ConditionTest1 from './ConditionTest1';
import DemoEvent from './EventDemos/DemoEvent';
import DemoEventState from './EventDemos/DemoEventState';
import FirstHello from './First';
import HelloWorld from './HelloWorld';
import ChildOne from './HooksDemos/ChildOne';
import UseEffectDemo from './HooksDemos/UseEffectDemo';
import UseStateDemo from './HooksDemos/UseStateDemo';
import { ListDemo2 } from './ListDemo2';
import { ListDemoComponent } from './ListDemoComponent';
import Welcome from './PropsDemo';
import StateDemo from './StateDemo';
import CCExternal from './StyleDemo/CCExternal';
import CCInline from './StyleDemo/ClassCInline';
import FCExternal from './StyleDemo/FCExternal';
import FCInline from './StyleDemo/FunCinline';
import ModuleDemo from './StyleDemo/ModuleCssDemo';
import StyledFC from './StyleDemo/StyledFC';
import UseRefDemo from './HooksDemos/UseRefDemo';
import UseMyCounterHook from './HooksDemos/UseMyCounterHook';
import UseStateDemo2 from './HooksDemos/UseStateDemo2';
import NumberAnalysis from './HooksDemos/UseEffectDemo2';
import UseRefCalculator from './HooksDemos/UseRefDemo2';
import UseStringHook from './HooksDemos/UseStringHook';
import CompanyParent from './HooksDemos/CompanyParent';
import ControlledFormCC from './FormDemo/ControledFormCC';
import ControlledFormFC from './FormDemo/ControlledFormFC';
import UncontrolledFormCC from './FormDemo/UnControlledFormCC';
import UncontrolledFc from './FormDemo/UnControlledFormFC';
import ControlledForm from './FormDemo/FormDemo';
import NoPage from './RoutingDemo/nopage';
import Home from './RoutingDemo/Home';
import Layout from './RoutingDemo/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Context =createContext();
function App() {
  let employee={'empname':'Roronova Zoro','empid':1,'salary':15000000}
  let stud={'studname':'abc','rollno':1}
  let studlist = ["Sarvesh","Tejas","Varad","Yash","Aditya","Rushi"]
  return (
    <> 
    {/* this is root tag for jsx */}
      {/* <h1>My React app</h1>
      <hr/>
      <Context.Provider value ={{data:"This is Global Data from APP"}}>
        <ChildOne></ChildOne>
      </Context.Provider>

      <FirstHello></FirstHello>
      <Welcome name="Usumaki Naruto" h="7th Hokage" emp={employee}></Welcome>
      <ConditionTest var1="t1"></ConditionTest>
      <ConditionTest1 var2="t2"></ConditionTest1>
      <ListDemoComponent></ListDemoComponent>
      <ListDemo2></ListDemo2>
      <HelloWorld firstname="Sarvesh" student={stud} studinput={studlist}></HelloWorld>
      <StateDemo></StateDemo>
      <ChangeStateDemo></ChangeStateDemo>
      
      <FCInline></FCInline>
      <CCInline></CCInline>
      <FCExternal></FCExternal>
      <CCExternal></CCExternal>
      <ModuleDemo></ModuleDemo>
      <StyledFC></StyledFC>
      <DemoEventState></DemoEventState>
      <DemoEvent></DemoEvent>
      <Calculator></Calculator>
      <CalculatorHistory></CalculatorHistory>
      <UseStateDemo></UseStateDemo>
      <UseEffectDemo></UseEffectDemo>
      <UseRefDemo></UseRefDemo>
      <UseMyCounterHook></UseMyCounterHook>
      <UseStateDemo2></UseStateDemo2>
      <NumberAnalysis></NumberAnalysis>
      <UseRefCalculator></UseRefCalculator>
      <UseStringHook></UseStringHook>
      <CompanyParent></CompanyParent>
      <ControlledFormCC></ControlledFormCC>
      <ControlledFormFC></ControlledFormFC>
      <UncontrolledFormCC></UncontrolledFormCC>
      <UncontrolledFc></UncontrolledFc> */}
      <ControlledForm></ControlledForm>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path='home' element={<Home/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
