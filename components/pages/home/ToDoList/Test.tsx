const Test = ({ onSetCount }: { onSetCount: () => void }) => {
  console.log('Test render');

  return (
    <div>
      <button onClick={onSetCount}>Update count2</button>
    </div>
  );
};

export default Test;
