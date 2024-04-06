import { InputBase, Stack, Typography } from "@mui/material";
import { AddresseInput } from "../../../../food-devlivery/src/components/inputs";
import Checkbox from "@mui/material/Checkbox";
import { zipCode } from "@/utils/zipcode-data";

export const OrderAdresse = () => {
  console.log("zipcode", zipCode);
  return (
    <Stack
      padding={"24px"}
      borderRadius={"16px"}
      bgcolor={"#FFF"}
      boxShadow={"0px 0px 20px 0px rgba(0, 0, 0, 0.05)"}
      gap={"40px"}
      width={"432px"}
    >
      <Stack gap={"16px"} width={"384px"}>
        <Typography fontSize={"14px"} fontWeight={400} color={"#000"}>
          Хаяг аа оруулна уу
        </Typography>
        <AddresseInput
          text={"Дүүрэг сонгоно уу"}
          data={zipCode.zipcode}
          stat={"capital"}
        />
        <AddresseInput
          text={"Хороо сонгоно уу"}
          data={zipCode.zipcode}
          stat={"district"}
        />
        <AddresseInput
          text={"Байр, гудамж сонгоно уу"}
          data={zipCode.zipcode}
          stat={"district"}
        />
      </Stack>
      <Stack gap={"32px"}>
        <Stack gap={"4px"}>
          <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
            Нэмэлт мэдээлэл
          </Typography>
          <Stack
            height={"112px"}
            borderRadius={"4px"}
            border={"1px solid #ECEDF0"}
            bgcolor={"#F7F7F8"}
            padding={"8px 16px"}
          >
            <InputBase placeholder="Орц, давхар, орцны код ..."></InputBase>
          </Stack>
        </Stack>
        <Stack gap={"4px"}>
          <Stack>
            <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
              Утасны дугаар*
            </Typography>
            <Stack
              height={"48px"}
              borderRadius={"4px"}
              border={"1px solid #ECEDF0"}
              bgcolor={"#F7F7F8"}
              padding={"8px 16px"}
            >
              <InputBase placeholder="Утасны дугаараа оруулна уу"></InputBase>
            </Stack>
          </Stack>
        </Stack>
        <Stack gap={"8px"}>
          <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
            Төлбөр төлөх
          </Typography>
          <Stack gap={"33px"} direction={"row"}>
            <Stack gap={"8px"} direction={"row"} alignItems={"center"}>
              <Checkbox />
              <Stack>
                <Typography
                  fontSize={"16px"}
                  fontWeight={400}
                  color={"#8B8E95"}
                >
                  Бэлнээр
                </Typography>
              </Stack>
            </Stack>
            <Stack gap={"8px"} direction={"row"} alignItems={"center"}>
              <Checkbox />
              <Stack>
                <Typography
                  fontSize={"16px"}
                  fontWeight={400}
                  color={"#8B8E95"}
                >
                  Картаар
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
