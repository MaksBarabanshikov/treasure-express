import React from "react";

export const BgSection = () => {

  const styles = {
    zIndex: -1,
    top: '-20%'
  };

  const  classNames = "main-section position-absolute"

  return (
    <section style={styles} className={classNames}/>
  );
};
