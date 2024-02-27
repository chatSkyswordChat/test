import "./css/sige.css";
export default function sige() {
  return (
    <section className="lg:max-w-[366px] max-w-[100%] w-full lg:order-2 order-1">
      <div className="shadow-1 p-4 space-y-6 rounded-lg sticky top-4 z-10">
        <div className="detail-order">
          <p className="DBHeaventRoundedBold font-h6">
            บัตร JR Pass สำหรับทุกภูมิภาคในญี่ปุ่น
          </p>

          <div className="flex flex-wrap items-baseline gap-2">
            <p> อายุการใช้งาน :</p>
            <span className="DBHeaventRoundedBold">14วัน</span>
          </div>

          <div className="flex flex-wrap items-baseline gap-2">
            <p>ชั้นที่นั่ง :</p>
            <span className="DBHeaventRoundedBold">รถไฟขบวนพิเศษ (ชั้น 1)</span>
          </div>

          <div className="flex flex-wrap items-baseline gap-2">
            <p>ผู้ใหญ่ :</p>
            <span className="DBHeaventRoundedBold">21,500 x 2</span>
          </div>

          <div className="flex flex-wrap items-baseline gap-2">
            <p> เด็ก :</p>
            <span className="DBHeaventRoundedBold">6500 x 1</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-2 mt-6">
          <p>ทั้งหมด</p>
          <p className="DBHeaventRoundedBold flex items-center gap-1">
            ราคา
            <span className="text-primary font-h3 DBHeaventRoundedBold">
              54,500
            </span>
            บาท
          </p>
        </div>
      </div>
    </section>
  );
}
