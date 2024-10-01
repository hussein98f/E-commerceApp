import { Button, useColorMode } from "@chakra-ui/react";

import { RxSun } from "react-icons/rx";
import { BsMoonStars } from "react-icons/bs";

const ColorSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "dark" ? <RxSun /> : <BsMoonStars />}
    </Button>
  );
};

export default ColorSwitcher;
