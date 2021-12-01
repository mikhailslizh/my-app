import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { IssuePage } from "./features/issuePage/IssuePage";
import { useAppSelector } from "./app/hooks";
import { AppMenu } from "./features/appMenu/AppMenu";
import { FC } from "hoist-non-react-statics/node_modules/@types/react";

const Box = styled(motion.div)`
  background-color: ${theme.background};
  height: 100vh;
  overflow: hidden;
  position: absolute;
`;

const boxVariants: any = {
  default: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0
  },
  squeeze: {
    top: 16,
    bottom: 16,
    left: 16,
    right: 16,
    borderRadius: 15,
    pointerEvents: "none"
  }
};

export const App: FC = () => {
  const dialogIsOpen = useAppSelector((state) => state.app.dialogIsOpen);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IconContext.Provider value={{ size: "24px", color: "inherit" }}>
        <Box
          variants={boxVariants}
          initial="default"
          animate={dialogIsOpen ? "squeeze" : "default"}
          transition={theme.transition.spring}
        >
          <Router>
            <Routes>
              <Route path="/*" element={<AppMenu />} />
              <Route path="/issues" element={<IssuePage />} />
            </Routes>
          </Router>
        </Box>
      </IconContext.Provider>
    </ThemeProvider>
  );
}
