import React, { ReactNode } from "react";
import { Box, Container, PaletteMode } from "@mui/material";
import NavBar from "./NavBar";

type LayoutProps = {
  mode: PaletteMode;
  handleThemeChange: () => void;
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({
  mode,
  handleThemeChange,
  children,
}) => {
  return (
    <>
      <NavBar mode={mode} handleThemeChange={handleThemeChange} />
      <Container>
        <Box my={2} sx={{ marginTop: "100px" }}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
