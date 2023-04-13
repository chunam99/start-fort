import Image from "next/image";
import Layout from "@/layouts";
import HomeContainer from "@containers/HomeContainer";

export default function Home() {
  return (
    <>
      <Layout title="Start Fort" description="" showFooter>
        <HomeContainer />
      </Layout>
    </>
  );
}
