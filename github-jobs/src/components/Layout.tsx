import React from "react";
import { Container } from "./Container";
import { NavBar } from "./NavBar";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};
