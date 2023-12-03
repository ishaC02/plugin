import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="w-full h-full">
      <Button type="button" onClick={() => console.log('clicked')}>Submit</Button>
    </div>
  );
}

export default App;
