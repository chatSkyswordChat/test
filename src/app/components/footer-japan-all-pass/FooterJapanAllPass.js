import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterJapanAllPass() {
  return (
    <footer>
      <section className="w-full bg-primary">
        <div className="container mx-auto px-4 py-8">
          <div className="flex lg:flex-row flex-col lg:gap-16 gap-8">
            <section className="flex lg:justify-start justify-center">
              <div className="flex lg:flex-row flex-col lg:gap-8 gap-4">
                <Link href="/" className="flex items-center justify-center">
                  <Image
                    src="/assets/images/logo-footer.png"
                    width={120}
                    height={120}
                    alt="Logo Japan All Pass"
                  />
                </Link>

                <div className="text-white lg:text-start text-center">
                  <p className="DBHeaventRoundedBold">
                    บริษัท เจแปน ออล พาส จำกัด (Japan All Pass Co., Ltd.)
                  </p>
                  <p>
                    เลขที่ 625 อาคารทัศนียา ห้องเลขที่ ยูนิต ดี ชั้น 5
                    ซอยรามคำแหง 39 ถนนประชาอุทิศ <br />
                    แขวงวังทองหลาง เขตวังทองหลาง กรุงเทพฯ 10310
                  </p>
                  <p>โทร : 02 514 7473</p>
                  <p>แฟกซ์ : 02 514 7400</p>
                  <p>E-mail: info@japanallpass.com</p>
                </div>
              </div>
            </section>

            <section className="flex flex-col lg:items-start items-center gap-4 text-white">
              <div className="flex flex-col gap-4">
                <p className="DBHeaventRoundedMed lg:text-left text-center">
                  ติดตามเราได้ที่
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://www.facebook.com/japanallpass"
                    target="_blank"
                  >
                    <Image
                      src="/assets/icons/social/facebook.svg"
                      width={35}
                      height={35}
                      alt="facebook"
                    />
                  </Link>

                  <Link
                    href="https://www.youtube.com/JAPANALLPASSDOTCOM"
                    target="_blank"
                  >
                    <Image
                      src="/assets/icons/social/youtube.svg"
                      width={35}
                      height={35}
                      alt="youtube"
                    />
                  </Link>

                  <Link
                    href="https://www.tiktok.com/@japanallpass?lang=th-TH"
                    target="_blank"
                  >
                    <Image
                      src="/assets/icons/social/tiktok.svg"
                      width={35}
                      height={35}
                      alt="tiktok"
                    />
                  </Link>

                  <Link
                    href="https://liff.line.me/1645278921-kWRPP32q/?accountId=japanallpass"
                    target="_blank"
                  >
                    <Image
                      src="/assets/icons/social/line.svg"
                      width={35}
                      height={35}
                      alt="line"
                    />
                  </Link>
                </div>
              </div>

              <div>
                <p className="lg:text-left text-center">
                  เปิดทำการ : จันทร์ – วันเสาร์ เวลา 09.00 – 18.00 น.
                </p>
                <p className="lg:text-left text-center text-balance">
                  ช่วงเวลาติดต่อช่องทาง Facebook, E-mail, Line official เวลา
                  09:00 – 18:00 น.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary-hover">
        <div className="container mx-auto py-4">
          <p className="text-center text-white">
            © Copy Right 2024 JapanAllPass.COM
          </p>
        </div>
      </section>
    </footer>
  );
}
