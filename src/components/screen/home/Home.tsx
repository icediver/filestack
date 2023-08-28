import Layout from "@/components/layout/layout/Layout";
import { FC } from "react";
import styles from "./Home.module.scss";
import Folders from "./folders/Folders";
import Properties from "./properties/Properties";
import Files from "./files/Files";
const Home: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <Folders />
        <Files />
      </div>
      <div className={styles.properties}>
        <Properties />
      </div>
    </div>
  );
};
export default Home;
