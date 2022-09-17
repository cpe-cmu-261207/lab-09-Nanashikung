import React from "react";
import Navbar from "../components/Navbar";

export default function exp() {
  return (
    <div
      class="my-5 mx-auto px-5 bg-light rounded-3"
      style={{ maxWidth: "1200px", fontFamily: "Prompt", fontSize: "36px" }}
    >
      <Navbar />

      <div
        className="text-center mb-3"
        style={{ borderStyle: "groove", borderColor: "cadetblue" }}
      >
        Project Experience
      </div>
      <div className="text-center">
        <p>ประสบการณ์ในด้านเกี่ยวกับ Coding ของผม</p>
        <a
          href="https://scratch.mit.edu/projects/563430994"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/mygamejpg.jpg" class="rounded-5" width="50%" />
        </a>
        <p className="mt-3">
          <a
            href="https://scratch.mit.edu/projects/563430994"
            className="text-decoration-none"
            style={{ color: "navy" }}
            rel="noreferrer"
          >
            The Truth [Scratch Game]
          </a>
        </p>
        <p style={{ fontSize: "24px" }}>
          Project นี้ทำหน้าที่เป็น Debugger คอยหาบัคต่าง ๆในเกม และแก้ไข code
          ในส่วนนั้น
        </p>
        <hr />
        <a
          href="https://github.com/gamxu/CompProj"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/mathgame.png" />
        </a>
        <p>
          <a
            href="https://github.com/gamxu/CompProj"
            className="text-decoration-none"
            style={{ color: "navy" }}
            target="_blank"
            rel="noreferrer"
          >
            Math Game Project [github]
          </a>
        </p>
        <p style={{ fontSize: "24px" }}>
          Project นี้ทำหน้าที่ UI Designer, Debugger ปรับแต่งหน้าตาเกม
          และคอยแจ้ง/แก้ไข bug ที่พบ
        </p>
        <hr />
      </div>
    </div>
  );
}
