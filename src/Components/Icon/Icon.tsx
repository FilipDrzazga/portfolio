import { useCallback } from "react";
import { IoIosClose } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { IconContainer } from "./Icon.style";

interface IconProps {
  iconType: "close" | "dot";
}

const Icon = ({ iconType }: IconProps) => {
  const rederIcon = useCallback(() => {
    switch (iconType) {
      case "close":
        return <IoIosClose fontSize="1rem" />;
      case "dot":
        return <GoDotFill fontSize="1rem" />;
      default:
        return;
    }
  }, [iconType]);

  return <IconContainer>{rederIcon()}</IconContainer>;
};

export default Icon;
