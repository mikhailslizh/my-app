import React, { FC } from "react";
import styled from "styled-components";
import { Dialog } from "../../components/dialog/Dialog";
import { ListItem } from "../../components/listItem/ListItem";
import { Stack } from "../../components/stack/Stack";
import { theme } from "../../styles/theme";

interface Props {
  closeDialog: () => void;
}

const Scroll = styled.div`
  border-radius: 10px 10px 0px 0px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const IssueDialog: FC<Props> = ({ closeDialog }) => {
  return (
    <Dialog closeDialog={closeDialog}>
      <Scroll>
        <Stack
          direction="column"
          bg={theme.surface}
          radius={10}
          margin="0px 0px 16px 0px"
        >
          {[...Array(20)].map((e, i) => (
            <ListItem key={i} title="ListItem" />
          ))}
        </Stack>
      </Scroll>
    </Dialog>
  );
};
