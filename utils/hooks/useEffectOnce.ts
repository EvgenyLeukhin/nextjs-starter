import { useEffect } from 'react';

export default (callback: React.EffectCallback) => useEffect(callback, []);
