import React, { FC } from "react";
import { AppBar } from "../../components/appBar/AppBar";
import styled from "styled-components";
import { FiCommand, FiMenu } from "react-icons/fi";
import { ListItem } from "../../components/listItem/ListItem";
import { Stack } from "../../components/stack/Stack";
import { theme } from "../../styles/theme";
import { IssueDialog } from "../issueDialog/IssueDialog";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closeDialog, openDialog } from "../../components/dialog/dialogSlice";
import { AnimatePresence } from "framer-motion";

const Box = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
`;

const Scroll = styled.div`
  flex: 1;
  margin: 8px 16px 0px 16px;
  border-radius: 10px 10px 0px 0px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const IssuePage: FC = () => {
  const dialogIsOpen = useAppSelector((state) => state.app.dialogIsOpen);
  const dispatch = useAppDispatch();

  const handleRightButtonClick = () => {
    dispatch(openDialog());
  };

  const handleDialogDragEnd = () => {
    dispatch(closeDialog());
  };

  return (
    <Box>
      <AnimatePresence>
        {dialogIsOpen && <IssueDialog closeDialog={handleDialogDragEnd} />}
      </AnimatePresence>
      <AppBar
        title="Замечания"
        leftIcon={<FiMenu />}
        rightIcon={<FiCommand />}
        onRightButtonClick={handleRightButtonClick}
      />
      <Scroll>
        <Stack
          direction="column"
          margin="0px 0px 16px 0px"
          bg={theme.white.high}
          radius={10}
        >
          {[...Array(20)].map((e, i) => (
            <ListItem
              key={i}
              title="ListItem"
              leftIcon={<FiCommand color={theme.black.medium} />}
            />
          ))}
        </Stack>
      </Scroll>
    </Box>
  );
};
