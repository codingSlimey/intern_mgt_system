import React from "react";
import styles from "../STUDENT/styles.module.css";
import SideBar from "../../../components/ELEMENTS/Nav/SideBar";
import Navbar from "../../../components/ELEMENTS/Nav/Navbar";
import Resource from "../../../components/CONTAINERS/Resource Library/Resource";
import Header from "../../../components/ELEMENTS/Header/Header";
import { useTranslation } from "react-i18next";
import CoordinatorLayout from "../../../layout/coordinator/layout";

const CoordinatorDash = () => {
  return (
    <CoordinatorLayout>
      <div className="grid grid-cols-5 p-5">
        <div className="col-span-3 flex flex-col">
          <Header
            text={"Overview"}
            fontSize={"20px"}
            fontWeight={"900"}
            color={"#003976"}
          />
          <Header
            text={"Supervisor"}
            fontSize={"16px"}
            fontWeight={"900"}
            color={"#003976"}
          />
        </div>
        <div className="col-span-2">
          <section className={styles.calendar}></section>
        </div>
      </div>
    </CoordinatorLayout>
    // <div className={styles.dash}>
    //   <Navbar />
    //   <SideBar />
    //   <section className={styles.trackerCont}>
    //     {/* <section className={styles.calendarcont}>
    //       <Header
    //         text={t("calendar.cal")}
    //         fontSize={"18px"}
    //         fontWeight={"700"}
    //         color={"#003976"}
    //         margin={"1rem 1.2rem"}
    //       />
    //       <section className={styles.calendar}></section>
    //     </section> */}
    //     <section className="grid grid-cols-4 w-full">
    //       <div className="bg-red-500 col-span-3">yo</div>
    //       <div className="bg-blue-500 col-span-1">yo</div>
    //     </section>
    //   </section>
    // </div>
  );
};

export default CoordinatorDash;
