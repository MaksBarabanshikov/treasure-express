import { ReactNode } from "react";

interface Props {
  children: ReactNode,
  className?: string,
}

export const Flex = ({ children, className }: Props) => {
    return (
        <div className={`d-flex align-items-center ${className}`}>{ children }</div>
    );
};
