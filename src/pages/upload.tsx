/* eslint-disable @next/next/no-img-element */
import { CircularProgress, Stack, Typography } from "@mui/material";
import { useState } from "react";
// import Image from "next/image";

const CLOUD_NAME = "dzgomjjhe";
const UPLOAD_PRESET = "w0rub0ag";

const Page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files) {
      setFile(event.target.files[0]);
    }
  };
  const uploadHandler = async () => {
    if (file) {
      setLoading(true);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", UPLOAD_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      console.log(res);
      const resJson = await res.json();
      console.log(resJson);
      if (resJson.url) {
        setImageUrl(resJson.url);
      }
      setLoading(false);
    }
  };

  return (
    <Stack
      padding={"250px"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"50px"}
    >
      {loading && (
        <Stack
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Typography>Loading..</Typography>
          <CircularProgress />
        </Stack>
      )}
      <Stack direction={"row"}>
        <input type="file" onChange={fileChangeHandler} />
        <button onClick={uploadHandler}>Add image</button>
      </Stack>
      <Stack>
        {imageUrl && (
          <img src={imageUrl} alt="uploaded" width={700} height={700} />
        )}
      </Stack>
    </Stack>
  );
};

export default Page;
