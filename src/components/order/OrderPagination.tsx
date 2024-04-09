import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const OrderPagination = () => {
  return (
    <Stack
      paddingY={"20px"}
      width={"1258px"}
      borderTop={"1px solid #EAECF0"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack spacing={2}>
        <Pagination count={10} shape="rounded" />
      </Stack>
    </Stack>
  );
};
