import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

export const Flex = ({ children }: Props) => {
    return (
        <div className="d-flex align-items-center">{ children }</div>
    );
};
