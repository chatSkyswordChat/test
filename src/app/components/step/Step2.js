import "./css/order.css";
import { Datepicker } from "flowbite-react";

export default function Step2({ handleNextStep, handlePrevStep }) {
  return (
    <section className="lg:max-w-[626px] max-w-[100%] w-full lg:order-1 order-2">
      <p className="font-h5 DBHeaventRoundedMed mb-4">
        ข้อมูลผู้เริ่มเดินทาง (รวมผู้จองด้วย)
      </p>
      <p className="font-h6 mb-4">ผู้ใหญ่จำนวน 2 คน</p>

      <div className="">
        <div className="text-white bg-primary min-h-8 max-w-[60px] rounded flex items-center justify-center mb-4">
          คนที่ 1
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label className="flex gap-1">
            ชื่อ (กรอกเป็นภาษาอังกฤษเท่านั้น)
            <span className="text-primary">*</span>
          </label>

          <div className="flex gap-2">
            <select
              id=""
              name=""
              placeholder="คำนำหน้าชื่อ"
              className="font-body rounded border-black-100 focus:ring-sky-500 focus:border-sky-500 min-h-14"
            >
              <option selected="selected">คำนำหน้าชื่อ</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Ch">Ch</option>
            </select>

            <input
              type="text"
              name="ชื่อ"
              placeholder="ชื่อ"
              className="font-body rounded border-black-100 focus:ring-sky-500 focus:border-sky-500 min-h-14 w-full"
            />
          </div>
          <small className="text-primary">Validate</small>
        </div>

        <Datepicker />

        <div className="flex flex-col gap-1 mb-4">
          <label className="flex gap-1">
            นามสกุล (กรอกเป็นภาษาอังกฤษเท่านั้น)
            <span className="text-primary">*</span>
          </label>

          <input
            type="text"
            name="นามสกุล"
            placeholder="นามสกุล"
            className="font-body rounded border-black-100 focus:ring-sky-500 focus:border-sky-500 min-h-14 w-full"
          />

          <small className="text-primary">Validate</small>
        </div>

        <div>
          <label>วันเดือนปีเกิด</label>
          <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          <input type="text" placeholder="วันเดือนปีเกิด" className="w-full" />
        </div>

        <div>
          {" "}
          <label>หมายเลขบัครประชาชน / พาสปอร์ตเดินทาง</label>
          <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          <input type="text" placeholder="วันเดือนปีเกิด" className="w-full" />
        </div>

        <div>
          <div>
            <label>เพศ</label>
            <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          </div>
          <input type="radio" name="ชาย" value="ชาย" />
          <label for="ชาย"> ชาย </label>
          <input type="radio" name="หญิง" value="หญิง" />
          <label for="หญิง"> หญิง </label>
        </div>

        <div>
          <label>สัญชาติผู้ถือพาสปอร์ต</label>
          <input
            type="text"
            placeholder="สัญชาติผู้ถือพาสปอร์ต"
            value={""}
            className="w-full"
          />
        </div>

        <div
          style={{
            width: "61px",
            height: "32px",
            borderRadius: "4px",
          }}
          className="container-in text-white bg-primary"
        >
          คนที่ 2
        </div>

        <div>
          <div>
            <label>ชื่อ (กรอกเป็นภาษาอังกฤษเท่านั้น)</label>
            <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          </div>
          <div>
            <select id="" name="" placeholder="คำนำหน้าชื่อ">
              <option selected="selected">คำนำหน้าชื่อ</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Ch">Ch</option>
            </select>
            <input type="text" placeholder="ชื่อ" className="w-full"></input>
          </div>
        </div>

        <div>
          <label>นามสกุล (กรอกเป็นภาษาอังกฤษเท่านั้น)</label>
          <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          <input
            type="text"
            name="นามสกุล"
            placeholder="นามสกุล"
            className="w-full"
          />
        </div>

        <div>
          <label>วันเดือนปีเกิด</label>
          <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          <input type="text" placeholder="วันเดือนปีเกิด" className="w-full" />
        </div>

        <div>
          <label>หมายเลขบัครประชาชน / พาสปอร์ตเดินทาง</label>
          <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          <input
            type="text"
            placeholder="หมายเลขบัครประชาชน / พาสปอร์ตเดินทาง"
            className="w-full"
          />
        </div>

        <div>
          <label>เพศ</label>
          <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          <br />
          <input type="radio" name="หญิง" value="ชาย" />
          <label for="ชาย"> ชาย </label>
          <input type="radio" name="หญิง" value="หญิง" />
          <label for="หญิง"> หญิง </label>
        </div>

        <div>
          <label>สัญชาติผู้ถือพาสปอร์ต</label>
          <input
            type="text"
            placeholder="สัญชาติผู้ถือพาสปอร์ต"
            value={""}
            className="w-full"
          />
        </div>
        <h6>เด็กจำนวน 1 คน (อายุ 6 - 11 ปี)</h6>
        <div
          style={{
            width: "61px",
            height: "32px",
            backgroundColor: "#D9042B",
            borderRadius: "4px",
          }}
          className="container-in text-white bg-primary"
        >
          คนที่ 1
        </div>
        <div>
          <div>
            <label>ชื่อ (กรอกเป็นภาษาอังกฤษเท่านั้น)</label>
            <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          </div>
          <div>
            <select id="" name="" placeholder="คำนำหน้าชื่อ">
              <option selected="selected">คำนำหน้าชื่อ</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Ch">Ch</option>
            </select>
            <input type="text" placeholder="ชื่อ" className="w-full"></input>
          </div>
        </div>

        <div>
          <label>นามสกุล (กรอกเป็นภาษาอังกฤษเท่านั้น)</label>
          <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          <input
            type="text"
            name="นามสกุล"
            placeholder="นามสกุล"
            className="w-full"
          />
        </div>

        <div>
          <label>วันเดือนปีเกิด</label>
          <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          <input type="text" placeholder="วันเดือนปีเกิด" className="w-full" />
        </div>

        <div>
          <label>หมายเลขบัครประชาชน / พาสปอร์ตเดินทาง</label>
          <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          <input
            type="text"
            placeholder="หมายเลขบัครประชาชน / พาสปอร์ตเดินทาง"
            className="w-full"
          />
        </div>

        <div>
          <label>เพศ</label>
          <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          <br />
          <input type="radio" name="หญิง" value="ชาย" />
          <label for="ชาย"> ชาย </label>
          <input type="radio" name="หญิง" value="หญิง" />
          <label for="หญิง"> หญิง </label>
        </div>

        <div>
          <label>สัญชาติผู้ถือพาสปอร์ต</label>
          <label style={{ color: "red", marginLeft: "4px" }}>*</label>
          <input
            type="text"
            placeholder="สัญชาติผู้ถือพาสปอร์ต"
            value={""}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <button onClick={handlePrevStep}>ย้อนกลับ</button>{" "}
        <button
          className="text-white bg-primary-100 hover:bg-primary-200 rounded-lg w-[140px] h-[52px] "
          onClick={handleNextStep}
        >
          ถัดไป
        </button>
      </div>
    </section>
  );
}
