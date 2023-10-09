import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RecoilRoot } from 'recoil';
import Main from './Main';
import DocsMain from './docFiles/DocsMain';
function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/doc/:category' element={<DocsMain />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
