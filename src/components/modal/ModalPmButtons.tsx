import { Button, Stack, Typography } from "@mui/material";

export const ModalPmButtons = ({
  subHandle,
  value,
  sumHandle,
}: {
  subHandle: () => void;
  value: number;
  sumHandle: () => void;
}) => {
  return (
    <Stack width={"384px"} justifyContent={"space-between"} direction={"row"}>
      <Stack>
        <Button
          sx={{
            width: "45px",
            height: "40px",
            padding: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "#18BA51",
            color: "white",
            fontSize: "14px",
          }}
          onClick={subHandle}
        >
          -
        </Button>
      </Stack>
      <Stack
        width={"254px"}
        padding={"8px 30px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography>{value} </Typography>
      </Stack>
      <Stack>
        <Button
          sx={{
            width: "45px",
            height: "40px",
            padding: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "#18BA51",
            color: "white",
            fontSize: "14px",
          }}
          onClick={sumHandle}
        >
          +
        </Button>
      </Stack>
    </Stack>
  );
};

export const BagModalPmButtons = ({
  subHandle,
  value,
  sumHandle,
}: {
  subHandle: () => void;
  value: number;
  sumHandle: () => void;
}) => {
  return (
    <Stack width={"150px"} direction={"row"} gap={"8px"}>
      <Stack width={"45px"} height={"40px"}>
        <Button
          sx={{
            width: "45px",
            height: "40px",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "#18BA51",
            color: "white",
            fontSize: "14px",
          }}
          onClick={subHandle}
        >
          -
        </Button>
      </Stack>
      <Stack
        width={"45px"}
        padding={"8px 10px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography>{value}</Typography>
      </Stack>
      <Stack width={"45px"} height={"40px"}>
        <Button
          sx={{
            width: "45px",
            height: "40px",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "#18BA51",
            color: "white",
            fontSize: "14px",
          }}
          onClick={sumHandle}
        >
          +
        </Button>
      </Stack>
    </Stack>
  );
};
