import { useMemo } from 'react';

const Test = ({ name, count }: { name: string; count: number }) => {
  // returnTitle
  const returnTitle = () => {
    return (
      <span>
        Hello, <b>{name}!</b>
      </span>
    );
  };

  // useCallback - doesn't work
  // const returnTitle2 = useCallback(() => {
  //   console.log('returnTitle2');
  //   return (
  //     <span>
  //       Hello, <b>{name}!</b>
  //     </span>
  //   );
  // }, [name]);

  // use memo - works
  const title = useMemo(() => returnTitle(), [name]);

  return (
    <div>
      <div>{title}</div>
      <div>
        Count: <b>{count}</b>
      </div>
    </div>
  );
};

export default Test;
