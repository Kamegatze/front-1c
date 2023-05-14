
import { Route, Routes } from 'react-router-dom';
import './App.css';
import InitProject from './init-project';
import Header from './header';
import CreateEntity from './create-entity';
import CreateController from './create-controller/create-controller';

function App() {
  return <div>
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route path='/create-project' element={<InitProject/>}/>
        <Route path='/create-entity' element={<CreateEntity/>}/>
        <Route path='/create-controller' element={<CreateController/>}/>
      </Route>
    </Routes>
  </div>;
}

export default App;
