import { OrderHeader, OrderList, OrderPagination } from "@/components/order";
import { Container, Stack } from "@mui/material";

const Order = () => {
  return (
    <Stack
      width={"100%"}
      alignItems={"flex-start"}
      paddingTop={"100px"}
      bgcolor={"#F7F7F8"}
      height={"content"}
    >
      <Container maxWidth={"xl"} sx={{ width: "1306px" }}>
        <Stack gap={"32px"}>
          <Stack border={"1px solid var(--Border-BorderSubtle00, #ECEDF0)"}>
            <OrderHeader />
            <OrderList />
          </Stack>
          <OrderPagination />
        </Stack>
      </Container>
    </Stack>
  );
};
export default Order;
