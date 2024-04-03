import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { FoodContextProvider } from "@/components/context/Context";
import { BagItemContextProvider } from "@/components/context/BagContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <BagItemContextProvider>
      <FoodContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FoodContextProvider>
    </BagItemContextProvider>
  );
};

export default App;
