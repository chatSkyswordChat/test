import'./css/order.css'
export default function Step3({ handlePrevStep, handleSubmitFormData }) {
  return (
    <div style={{ width: "" }}>
      <h5 className="">ตรวจสอบความถูกต้อง</h5>
      <br />

      <div>
        <h6>ข้อมูลผู้จอง</h6>
        <p>
          Firstname:<label>Mr. Chatthong</label>
        </p>
        <p>
          Lastname:<label>Hongwisuthikul</label>
        </p>
        <p>
          Emailname:<label>dynastystrike@gmail.com</label>
        </p>
        <p>
          Tel:<label>08-9762-1234</label>
        </p>
      </div>
      <div>
        <h6>ข้อมูลผู้ร่วมเดินทาง (ร่วมผู้จองด้วย)</h6>
        <h6>ผู้ใหญ่ จำนวน 2 คน</h6>
        <div
          style={{
            width: "61px",
            height: "32px",
            backgroundColor: "#D9042B",
            borderRadius: "4px",
          }}
          className="container-in text-white"
        >
          คนที่ 1
        </div>
        <p>
          Firstname:<label>Mr. Chatthong</label>
        </p>
        <p>
          Lastname:<label>Hongwisuthikul</label>
        </p>
        <p>
          Emailname:<label>dynastystrike@gmail.com</label>
        </p>
        <p>
          Tel:<label>08-9762-1234</label>
        </p>
        <hr />
        <div
          style={{
            width: "61px",
            height: "32px",
            backgroundColor: "#D9042B",
            borderRadius: "4px",
          }}
          className="container-in text-white"
        >
          คนที่ 2
        </div>

        <p>
          Firstname:<label>Mr. Patarapon</label>
        </p>
        <p>
          Lastname:<label>Wichaison</label>
        </p>
        <p>
          Emailname:<label>poompomm@gmail.com</label>
        </p>
        <p>
          Tel:<label>08-9762-7896</label>
        </p>
        <hr />
        <h6>เด็ก จำนวน 1 คน (อายุ 6-11 ปี)</h6>
        <div
          style={{
            width: "61px",
            height: "32px",
            backgroundColor: "#D9042B",
            borderRadius: "4px",
          }}
          className="container-in text-white"
        >
          คนที่ 1
        </div>

        <p>
          Firstname:<label>Mr. Patarapon</label>
        </p>
        <p>
          Lastname:<label>Wichaison</label>
        </p>
        <p>
          Emailname:<label>poompomm@gmail.com</label>
        </p>
        <p>
          Tel:<label>08-9762-7896</label>
        </p>
      </div>
      <div className="flex justify-between">
        <button onClick={handlePrevStep}>ย้อนกลับ</button>
        <button
          style={{ width: "140px", height: "52px" }}
          className="text-white bg-primary rounded-lg "
        >
          ไปชำระเงิน
        </button>
      </div>
    </div>
  );
}
