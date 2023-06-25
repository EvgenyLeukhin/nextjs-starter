import React, { useMemo } from 'react';

type TProps = {
  count: number;
  name: string;
};

const Memo = ({ count, name }: TProps) => {
  console.log('B - Memo render');

  const returnCount = useMemo(() => {
    console.log('B - returnCount');

    return (
      <div>
        <span>Count:&nbsp;</span>
        <b>{count}</b>
      </div>
    );
  }, [count]);

  const returnName = useMemo(() => {
    console.log('B - returnName');

    return (
      <div>
        <span>Name:&nbsp;</span>
        <b>{name}</b>
      </div>
    );
  }, [name]);

  return (
    <div>
      <h2>Memo</h2>

      {returnCount}
      {returnName}
    </div>
  );
};

export default Memo;
