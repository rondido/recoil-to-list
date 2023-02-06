import React from 'react';
import { RecoilRoot } from 'recoil';
import Calendar from './components/Calendar';




function App() {

  return (
    <RecoilRoot>
      <div>        
        <Calendar/>
      </div>
    </RecoilRoot>
  );
}

export default App;
