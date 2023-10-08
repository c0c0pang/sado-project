import './App.css';
import DocButton from './button/DocButton';
import Topbar from './nav/Topbar';
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <RecoilRoot>
      <Topbar />
      <DocButton />
    </RecoilRoot>
  );
}

export default App;
