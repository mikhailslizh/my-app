import { motion } from "framer-motion";
import React, { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Stick } from "../stick/Stick";

interface Props {
  children: ReactNode;
  closeDialog?: () => void;
}

const Scrim = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.black.scrim};
`;

const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 8px 16px 0px 16px;
  background-color: ${(props) => props.theme.background};
  border-radius: 15px 15px 0px 0px;
  position: absolute;
  top: 32px;
  width: 100vw;
  height: calc(100vh - 32px);
  box-shadow: ${(props) => props.theme.shadow[10]};
`;

const Scroll = styled.div`
  flex: 1;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const scrimVariants = {
  open: {
    opacity: 1
  },
  close: {
    opacity: 0
  }
};

const boxVariants = {
  open: {
    top: 28
  },
  close: {
    top: "100%"
  }
};

// Поискать способы создавать див над рутовым дивом
// в дереве, чтобы рисовать в нём диалог

const dialogRoot: HTMLElement = document.getElementById("dialog")!;

export const Dialog: FC<Props> = ({ children, closeDialog }) => {
  return ReactDOM.createPortal(
    <>
      <Scrim
        variants={scrimVariants}
        initial="close"
        animate="open"
        exit="close"
        transition={theme.transition.spring}
        onClick={closeDialog}
      />
      <Box
        variants={boxVariants}
        initial="close"
        animate="open"
        exit="close"
        transition={theme.transition.spring}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.5 }}
        onDragEnd={closeDialog}
      >
        <Stick />
        <Scroll>{children}</Scroll>
      </Box>
    </>,
    dialogRoot
  );
};
