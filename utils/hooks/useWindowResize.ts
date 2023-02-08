import { useState, useEffect } from 'react';
import { breakpoints } from '@/consts/breakpoints';
import { DeviceList } from '@/types/common';

export default function useWindowSize(
  returnWidth?: boolean,
): DeviceList | number {
  const { MOBILE, TABLET, LAPTOP } = breakpoints;
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

  function handleResize(): void {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function returnType(): DeviceList {
    if (windowSize) {
      if (windowSize < MOBILE) return DeviceList.MOBILE;
      if (windowSize < TABLET) return DeviceList.TABLET;
      if (windowSize < LAPTOP) return DeviceList.LAPTOP;
    }
    return DeviceList.DESKTOP;
  }

  return returnWidth && windowSize ? windowSize : returnType();
}

// how to use
// import useWindowSize from "utils/customHooks/useWindowResize";
// import { DeviceList } from "types/device";
// ...

// const screenType = useWindowSize();

// // save to consts
// const isLaptop = screenType === DeviceList.LAPTOP;
// const isTablet = screenType === DeviceList.TABLET;
// const isMobile = screenType === DeviceList.MOBILE;
