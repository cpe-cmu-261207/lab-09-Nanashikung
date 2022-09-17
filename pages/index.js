import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div
      className="bg-dark"
      height=""
      style={{
        fontSize: "36px",
        fontFamily: "Prompt",
      }}
    >
      <div
        className="mx-auto mt-5 px-5 bg-light rounded-3"
        style={{ maxWidth: "1200px", marginTop: "5px" }}
      >
        <Navbar />
        <center>
          <img
            src="/myfacehome.JPG"
            width="300"
            height="300"
            style={{ objectFit: "cover" }}
            className="p-3 rounded-circle"
          />
        </center>
        <hr />
        <div>
          <p style={{ fontSize: "30px" }}>
            สวัสดีครับ ผมนายปราชญ์ชยา กรณิศทิศารัศม์
            <br />
            ตอนนี้กำลังศึกษาอยู่ที่มหาลัยเชียงใหม่ คณะ วิศวกรรมศาสตร์ <br />
            สาขา Computer Engineering <br />
            ผมรู้จักการเขียนโปรแกรมครั้งแรกตอน ม.2 ทำให้ผมสนใจในการ Coding
            เป็นอย่างมาก <br />
            แต่พอเข้ามาศึกษาต่อในระดับอุดมศึกษา ทำให้รู้ตัวว่า ผมยังเป็นเพียง
            &quot;มือใหม่&quot; เท่านั้น <br />
            เพราะฉะนั้น ขอฝากเนื้อฝากตัวด้วยครับ
          </p>
        </div>
        <hr />
        <div>
          <center>
            <h1
              className="mb-3"
              style={{ borderStyle: "double", width: "500px" }}
            >
              My Programming Skills
            </h1>
            <img src="/c-.png" width="100" />
            <img src="/html-5.png" width="100" />
            <img src="/js.png" width="100" />
            <img src="/python.png" width="100" />

            <hr />
            <h1
              className="mb-3"
              style={{ borderStyle: "double", width: "300px" }}
            >
              Gaming Skills
            </h1>
            <p>Valorant Rank: Platinum</p>
            <img src="/rank.jpeg" width="150" />
            <p>Teamfight Tactics Rank: Platinum</p>
            <img src="/tft.png" width="200" />
          </center>
        </div>
        <hr />
        <hr />
      </div>
    </div>
  );
}
