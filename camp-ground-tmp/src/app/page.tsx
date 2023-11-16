import Banner from "@/components/Banner";
import PromoteCard from "@/components/PromoteCard";
import styles from "./page.module.css";
import { FaHeartbeat, FaQuestionCircle, FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className="pt-6 pl-[40px] font-bold text-[40px]">
        <span className="flex">
          <span>Vaccinating Process</span>
          <span className="pl-4 pt-2">
            <FaHeartbeat />{" "}
            </span>
        </span>
      </div>
      <PromoteCard />
      <div className={`${styles.questionSpan}`}>
        <span className="flex">
          <span className="mr-4 pl-[20px] text-[40px]">
            ข้อมูลที่ควรรู้ก่อนมาฉีด Pfizer
          </span>
          <span className="pt-5">
            <FaHeartbeat />{" "}
          </span>
        </span>
      </div>
      <div className={styles.cardSection}>
        <div className={`${styles.pfizerInfo} mt-[60px] h-[740px]`}>
          <div className="leading-9">
            <div className={`${styles.cardTopic}`}>
              <h2 className="flex font-bold text-3xl">
                Pfizer คืออะไร{" "}
                <span className="pl-3">
                  <FaQuestionCircle />
                </span>
              </h2>
            </div>
            <p className={styles.paragraph}>
              วัคซีนโควิดไฟเซอร์ (Pfizer) มีชื่อทางการว่า BNT162b2
              เป็นวัคซีนป้องกันโรคโควิด 19 ชนิด mRNA ที่คิดค้นโดยบริษัทไฟเซอร์
              (Pfizer) ร่วมกับบริษัทสัญชาติเยอรมันชื่อไอโบเอ็นเท็ค (BioNTech)
            </p>
            <p className={styles.paragraph}>
              วัคซีนชนิด mRNA
              เป็นการสังเคราะห์สารพันธุกรรมเลียนแบบเชื้อไวรัสขึ้นมา
              ดังนั้นในวัคซีนจึงไม่ได้มีอนุภาคของเชื้อไวรัส
              หรือแบคทีเรียที่ตายแล้วอยู่ภายในเลย
            </p>
            <p className={styles.paragraph}>
              เมื่อ mRNA ถูกฉีดเข้าไปในร่างกาย
              จะกระตุ้นให้เกิดการสร้างโปรตีนส่วนหนาม (Spike protein)
              เหมือนกับโคโรนาไวรัส
              ซึ่งเป็นส่วนที่ทำให้เกิดการติดเชื้อจนเป็นโควิด 19
              เมื่อร่างกายเห็นโปรตีนส่วนหนามของไวรัสแล้ว
              จึงสามารถสร้างภูมิคุ้มกันไว้สำหรับป้องกันไวรัสจริงๆ ที่จะเข้ามาได้
            </p>
            <p className={styles.paragraph}>
              วัคซีนไฟเซอร์ได้รับการอนุมัติให้ใช้ในกรณีฉุกเฉินจากองค์การอาหารและยาสหรัฐ
              (Food and Drug Administration: FDA) เพื่อป้องกันโรคโควิด 19
              สำหรับผู้ที่อายุ 12 ปีขึ้นไป
            </p>
            <p className={styles.paragraph}>
              ล่าสุด 24 มิถุนายน 2564 สำนักงานคณะกรรมการอาหารและยา (อย.)
              อนุมัติทะเบียนวัคซีนวัคซีนโควิดไฟเซอร์ (Pfizer) แล้ว
              นับเป็นวัคซีนโควิดรายที่ 6 ที่ผ่านการอนุมัติจาก อย.
            </p>
          </div>
        </div>
        <div className={`${styles.pfizerInfo} mt-[60px] h-[740px]`}>
          <div className={`${styles.cardTopic}`}>
            <h2 className="flex font-bold text-3xl">
              ผลข้างเคียงของตัววัคซีน{" "}
              <span className="pl-3">
                <FaHeartbeat />
              </span>
            </h2>
          </div>
          <div style={{ marginBottom: 10 }}>
            <p>ผลข้างเคียงที่อาจพบได้หลังได้รับวัคซีนไฟเซอร์ ได้แก่</p>
            <ul className="list-disc">
              <li>ปวด บวม แดง คัน หรือช้ำในจุดที่ฉีด</li>
              <li>มีไข้ หนาวสั่น</li>
              <li>อ่อนเพลีย ไม่สบายตัว ครั่นเนื้อครั่นตัว</li>
              <li>ปวดศีรษะ</li>
              <li>ปวดเมื่อยตามข้อ และปวดเมื่อยกล้ามเนื้อ</li>
              <li>คลื่นไส้ อาเจียน</li>
              <li>ท้องเสีย</li>
            </ul>
          </div>
          <div>
            <div className={`${styles.cardTopic}`}>
              <h2 className="flex font-bold text-3xl">
                วัคซีน Pfizer เหมาะกับใคร{" "}
                <span className="pl-3">
                  <FaQuestionCircle />
                </span>
              </h2>
            </div>
            <ul className="list-disc">
              <li>ผู้ที่อายุ 16 ปีขึ้นไป</li>
              <li>
                ผู้ที่อายุเกิน 65 ปีขึ้นไป{" "}
                <span style={{ color: "red" }}>
                  ควรปรึกษาแพทย์ก่อนรับวัคซีน
                </span>
              </li>
              <li>ผู้ที่ทำงานด้านสาธารณสุข</li>
              <li>
                ผู้ที่มีโรคประจำตัวที่อาจส่งผลให้อาการรุนแรงหากติดเชื้อ
                <br />
                โควิด-19 เช่น ความดันโลหิตสูง เบาหวาน โรคหอบหืด โรคปอด โรคตับ
                โรคไต และโรคติดเชื้อเรื้อรังอื่นๆ
              </li>
              <li>ผู้ป่วยติดเชื้อ HIV</li>
              <li>
                สตรีที่กำลังอยู่ระหว่างให้นมบุตร <br />
                <span style={{ color: "red" }}>
                  ควรปรึกษาแพทย์ก่อนรับวัคซีน
                </span>
              </li>
              <li>
                สตรีมีครรภ์{" "}
                <span style={{ color: "red" }}>
                  ควรปรึกษาแพทย์ก่อนรับวัคซีน
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1
          className="text-3xl my-7 font-bold"
          style={{ display: "flex", justifyContent: "center" }}
        >
          พบข้อสงสัยเกี่ยวกับการบริการฉีดวัคซีนครั้งนี้ โปรดติดต่อ{" "}
          <span style={{ marginLeft: 10, paddingTop: 5 }}>
            <FaPhoneAlt />
          </span>
          <span style={{ marginLeft: 10, color: "magenta" }}>09X-XXX-XXXX</span>
        </h1>
      </div>
    </main>
  );
}
