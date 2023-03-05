type TArray = unknown[];

// для свойства order, чтобы порядок был не слева-направо, а сверху-вниз
// нужно чтобы сначала шли нечетные, а потом четные
const sortOddEven = (array: TArray): number[] => {
  const oddArray = [];
  const evenArray = [];

  for (let i = 1; i <= array.length; i++) {
    const sortCondition = (i + 1) % 2 === 1;
    sortCondition ? evenArray.push(i) : oddArray.push(i);
  }

  return [...oddArray, ...evenArray];
};

export default sortOddEven;
