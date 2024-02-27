"use client";

import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Sige from "../sige/Sige";

import "./css/order.css";
export default function SimpleStepForm({ showStepNumber }) {
  const [step, setStep] = useState("รายละเอียดผู้ที่ทำการจอง");
  // var step = "รายละเอียดผู้ที่ทำการจอง" ;
  const stepsArray = [
    "รายละเอียดผู้ที่ทำการจอง",
    "รายละเอียดผู้ร่วมเดินทาง",
    "ตรวจสอบความถูกต้อง",
  ];
  // กดNext
  const handleNextStep = () => {
    console.log("test", step);
    if (step === "รายละเอียดผู้ที่ทำการจอง")
      setStep("รายละเอียดผู้ร่วมเดินทาง");
    else if (step === "รายละเอียดผู้ร่วมเดินทาง") setStep("ตรวจสอบความถูกต้อง");
  };

  // กดกลับ
  const handlePrevStep = () => {
    if (step === "ตรวจสอบความถูกต้อง") setStep("รายละเอียดผู้ร่วมเดินทาง");
    else if (step === "รายละเอียดผู้ร่วมเดินทาง")
      setStep("รายละเอียดผู้ที่ทำการจอง");
  };
  //แทบ Stepด้านบน
  const renderTopstep = () => {
    return (
      <div>
        {/* สีแดง */}
        <section className="flex flex-warp gap-8">
          {stepsArray.map((item, i) => (
            <div
              key={i}
              className={`flex justify-center items-center flex-col w-1/3 min-h-28 rounded-lg gap-3 p-4 ${
                item === step ? "bg-red-50 border border-red-500" : " "
              }`}
            >
              <div
                className={`flex justify-center items-center w-10 h-10 rounded-full  ${
                  item === step ? "bg-primary" : "border border-black-500"
                }`}
              >
                <p
                  className={`${
                    item === step ? "text-white" : "text-black-500"
                  } font-h4`}
                >
                  {i + 1}
                </p>
              </div>
              <div>
                <p
                  className={`${
                    item === step ? "text-primary" : "text-black-1"
                  } DBHeaventRoundedMed`}
                >
                  {item}
                </p>
              </div>
            </div>
          ))}
        </section>
        {/* กรอบว่าง */}
        <br />
      </div>
    );
  };
  return (
    <div>
      {renderTopstep()}
      <h1 className="font-h4 my-8">บัตร JR Pass สำหรับทุกภูมิภาคในญี่ปุ่น</h1>
      <div className="flex lg:flex-row flex-col gap-8">
        {step === "รายละเอียดผู้ที่ทำการจอง" ? (
          <Step1 handleNextStep={handleNextStep} />
        ) : null}

        {step === "รายละเอียดผู้ร่วมเดินทาง" ? (
          <Step2
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        ) : null}
        {step === "ตรวจสอบความถูกต้อง" ? (
          <Step3
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        ) : null}
        <Sige />
      </div>
    </div>
  );
}
