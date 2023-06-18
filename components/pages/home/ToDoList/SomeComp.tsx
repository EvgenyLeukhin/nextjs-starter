import { useState, useCallback, useEffect } from 'react';

const SomeComp = () => {
  const [message, setMessage] = useState<string>('Hi, everyone!!!');
  const [counter, setCounter] = useState<number>(0);

  // плохо: если функция есть в зависимости, то ее ссылка будет всегда не совпадать с той,
  // что указана в useEffect, и даже если функция не менялась, то useEffect будет реагировать
  // const greeting = (message: string) => {
  //   console.log(message);
  // };

  // хорошо - оборачиваем в useCallback
  const greeting = useCallback((message: string) => {
    console.log(message);
  }, []);

  useEffect(() => {
    greeting(message);
  }, [message, greeting]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {message}
      <button onClick={() => setCounter(counter + 1)}>
        Clicked me {counter} times
      </button>
    </div>
  );
};

export default SomeComp;
