import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

type TState = number;
const initialState = () => -10;

const TestReduxToolkit = () => {
  const [count, setCount] = useState<TState>(initialState);

  useEffect(() => {
    console.info('new counter value: ', count);

    return () => {
      console.info('previos counter value: ', count);
    };
  }, [count]);

  const onButtonClick = () => setCount(count + 1);

  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <h2>PickUpPoints</h2>
      <br />
      {JSON.stringify(themeContext)}
      <br />
      <button onClick={onButtonClick}>Change state</button>
    </div>
  );
};

export default TestReduxToolkit;
