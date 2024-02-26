export default function Step1({ handleNextStep }) {
  return (
    <section className="lg:max-w-[626px] max-w-[100%] w-full lg:order-1 order-2">
      <form action="">
        <p className="font-h5 DBHeaventRoundedMed mb-4">ข้อมูลผู้จอง</p>

        <div className="flex flex-col gap-1 mb-4">
          <label className="flex gap-1" for="firstname">
            ชื่อ (กรอกเป็นภาษาอังกฤษเท่านั้น)
            <span className="text-primary">*</span>
          </label>

          <div id="firstname" className="flex gap-2">
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

        <div className="flex flex-col gap-1 mb-4">
          <label className="flex gap-1" for="lastname">
            นามสกุล (กรอกเป็นภาษาอังกฤษเท่านั้น)
            <span className="text-primary">*</span>
          </label>

          <input
            id="lastname"
            type="text"
            name="นามสกุล"
            placeholder="นามสกุล"
            className="font-body rounded border-black-100 focus:ring-sky-500 focus:border-sky-500 min-h-14 w-full"
          />

          <small className="text-primary">Validate</small>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label className="flex gap-1" for="email">
            อีเมล
            <span className="text-primary">*</span>
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="email"
            className="font-body rounded border-black-100 focus:ring-sky-500 focus:border-sky-500 min-h-14 w-full"
          />

          <small className="text-primary">Validate</small>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label className="flex gap-1" for="tel">
            เบอร์โทร
            <span className="text-primary">*</span>
          </label>

          <input
            id="tel"
            type="tel"
            name="เบอร์โทร"
            placeholder="เบอร์โทร"
            className="font-body rounded border-black-100 focus:ring-sky-500 focus:border-sky-500 min-h-14 w-full"
          />

          <small className="text-primary">Validate</small>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label className="flex gap-1" for="address">
            ที่อยู่
            <span className="text-primary">*</span>
          </label>

          <textarea
            id="address"
            placeholder="ที่อยู่"
            className="font-body rounded border-black-100 focus:ring-sky-500 focus:border-sky-500 w-full min-h-[180px]"
          ></textarea>

          <small className="text-primary">Validate</small>
        </div>
      </form>

      <div className="flex justify-end">
        <button
          className="text-white bg-primary hover:bg-primary-200 ease-in duration-100 rounded-lg min-h-14 sm:max-w-[140px] w-full"
          type="button"
          onClick={handleNextStep}
        >
          <p>ถัดไป</p>
        </button>
      </div>
    </section>
  );
}
