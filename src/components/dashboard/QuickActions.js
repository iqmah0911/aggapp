
import React, { Component } from "react";
import Image from "next/image";
import BaseTitle from "../base_components/BaseTitle";
import BaseModal from "../base_components/BaseModal";
import { useState } from "react";
import AirtimeLayout from "./airtime/AirtimeLayout";
import DataLayout from "./data-purchase/DataLayout";

const QuickActions = () => {
  const actions = [
    {
      action: "Airtime",
      icon: "/assets/Untitled/airtime.png",
      component: <AirtimeLayout close={()=>{setModalIsOpen(false)}}/>,
      linkTo: "/airtime",
    },
    {
      action: "Data",
      icon: "/assets/Untitled/data.png",
      component: <DataLayout close={()=>{setModalIsOpen(false)}}/>,
      linkTo: "/data",
    },
    {
      action: "Cable TV",
      icon: "/assets/Untitled/cable.png",
      component: null,
      linkTo: "/cable",
    },
    {
      action: "Electricity",
      icon: "/assets/Untitled/electricity.png",
      component: null,
      linkTo: "/electricity",
    },
    {
      action: "Road Taxes",
      icon: "/assets/Untitled/taxes.png",
      component: null,
      linkTo: "/taxes",
    },
    {
      action: "Education",
      icon: "/assets/Untitled/school.png",
      component: null,
      linkTo: "/education",
    },
    {
      action: "Insurance",
      icon: "/assets/Untitled/insurance.png",
      component: null,
      linkTo: "/insurance",
    },
    {
      action: "Tickets",
      icon: "/assets/Untitled/tickets.png",
      component: null,
      linkTo: "/tickets",
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedActionIndex, setSelectedActionIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedActionIndex(index);
    setModalIsOpen(true);
  };

  const renderModal = () => {
    if (!modalIsOpen || selectedActionIndex === null) {
      return null;
    }

    const selectedAction = actions[selectedActionIndex];

    return <BaseModal>{selectedAction.component}</BaseModal>;
  };


  return (
    <>
       <div className="flex flex-col lg:flex-row lg:justify-between justify-center w-full gap-5 py-5">
        <div className="bg-white px-[35px] py-[25px] lg:w-[100%] md:w-[50%]  rounded-xl shadow-md">
          <BaseTitle title={"Quick Actions"} />
          <div className="grid lg:grid-cols-6 lg:gap-4 grid-cols-2 gap-3 items-center mt-5">
            {actions.map((items, index) => {
              return (
                <div key={index} onClick={() => handleClick(index)} className="cursor-pointer lg:min-w-[100px] min-h-[84px] flex rounded-lg gap-2 lg:p-[20px] p-[10px] items-center bg-gradient-to-r from-[#FF9900] to-[#FFD584]">
                  <Image src={items.icon} width={30} height={30} alt="..." />
                  <p className="font-bold lg:text-lg text-xs leading-5 text-[#333333]">
                    {items.action}
                  </p>
                </div>
              );
            })}
            {renderModal()}
          </div>
        </div>

       
      </div>
    </>
  );
};

export default QuickActions;
