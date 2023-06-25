const Test = ({ onSetCount }: { onSetCount: () => void }) => {
  console.log('rener');

  return (
    <div>
      <button onClick={onSetCount}>setCount 2</button>
    </div>
  );
};

export default Test;
