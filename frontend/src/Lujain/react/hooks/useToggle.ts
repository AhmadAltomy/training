import { useState } from 'react';

type ToggleHookResult = [boolean, () => void, () => void, () => void, () => void];

const useToggle = (initialState: boolean = false): ToggleHookResult => {
  const [isOn, setIsOn] = useState<boolean>(initialState);

  const toggle = () => {
    setIsOn(prevState => !prevState);
  };

  const setOn = () => {
    setIsOn(true);
  };

  const setOff = () => {
    setIsOn(false);
  };

  return [isOn, toggle, setOn, setOff];
};

export default useToggle;
