import Image from "next/image";
import Layout from "@/layouts";
import HomeContainer from "@containers/HomeContainer";
import MoreContainer from "../containers/More";

export default function Home() {
  return (
    <>
      <Layout title="Start Fort" description="" showFooter>
        <HomeContainer />
        <MoreContainer />
      </Layout>
    </>
  );
}
