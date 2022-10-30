import { CloseIcon } from "../Icons/closeIcon";
import { Flex } from "../layouts/Flex";
import { Link } from "react-router-dom";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode
  className?: string;
  title: string;
}

export const PopupWrap = ({ children, className, title }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleChangeVisible = () => setIsVisible(!isVisible);

};
