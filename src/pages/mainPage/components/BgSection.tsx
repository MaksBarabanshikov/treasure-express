import React from "react";

export const BgSection = () => {

  const styles = {
    zIndex: -100,
    top: 0
  };

  const  classNames = "main-section position-absolute"

  return (
    <section style={styles} className={classNames}/>
  );
};
