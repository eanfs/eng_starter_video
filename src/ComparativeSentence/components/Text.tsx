import React from "react";

export const Text: React.FC<{
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ style, children }) => (
  <span style={style}>{children}</span>
);
