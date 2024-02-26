"use client";
import Link from "next/link";
import SimpleStepForm from "../components/step/SimpleStepForm";

export default function formstep() {
  return (
    <div className="mx-auto max-w-5xl">
      <div>
        <div className="flex justify-between flex-wrap gap-4 mb-8">
          <h2>กรอกข้อมูลการสั่งซื้อ</h2>
          <Link href="" className="text-link">
            ย้อนกลับ
          </Link>
        </div>
        <div>
          <SimpleStepForm showStepNumber={true} />
        </div>
      </div>
    </div>
  );
}
