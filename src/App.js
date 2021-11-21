import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  const [count, incCount] = useState(0);

  const onClickCountUp = () => incCount(count + 1)

  return (
    <div>
      <h1>Clicking Me {count}</h1>
      <button onClick={onClickCountUp}>Click Me</button>
    </div>
  )
}

export default App;
