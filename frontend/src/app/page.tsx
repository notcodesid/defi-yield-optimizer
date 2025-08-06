import Image from "next/image";
import Layout from "../components/Layout";
import { appData } from "../data/appData";

import DashboardSection from "../components/DashboardSection";

export default function Home() {
  return (
    <Layout>
      <DashboardSection />
    </Layout>
  );
}
