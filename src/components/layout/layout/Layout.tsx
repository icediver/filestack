import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";
import Sidebar from "./sidebar/Sidebar";
import Header from "./sidebar/header/Header";
const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <section className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.children}>{children}</div>
    </section>
  );
};
export default Layout;