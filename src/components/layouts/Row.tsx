import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Row = ({ children }:Props) => {
    return (
        <div className="row align-items-center justify-content-between">{ children }</div>
    );
};
