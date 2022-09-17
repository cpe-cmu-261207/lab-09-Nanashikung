import Navbar from "../components/Navbar";

import React from "react";

export default function contact() {
  return (
    <div
      class="my-5 mx-auto px-5 bg-light rounded-3"
      style={{ maxWidth: "1200px", fontFamily: "Prompt", fontSize: "36px" }}
    >
      <Navbar />

      <div
        className="text-center mb-5"
        style={{ borderStyle: "groove", borderColor: "cadetblue" }}
      >
        Contact Me
      </div>
      <div className="hstack pb-5">
        <img
          src="/myface.JPG"
          width="250"
          height="250"
          style={{ objectFit: "cover" }}
          className="mx-5 rounded-circle "
        />

        <table style={{ width: "70%", fontSize: "24px", marginLeft: "auto" }}>
          <tr>
            <td>Name:</td>
            <td>Praschaya Kornnittisarat</td>
          </tr>
          <tr>
            <td>Nickname:</td>
            <td>Ryuta</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>6/9 NorKom 3 D. NaiWiang Sub. Muang P. Nan 55000</td>
          </tr>
          <tr>
            <td>Facebook:</td>
            <td>
              <a
                href="https://web.facebook.com/nata.prach/"
                className="text-decoration-none"
                rel="noreferrer"
              >
                https://web.facebook.com/nata.prach/
              </a>
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <a
                href="mailto:praschaya_k@cmu.ac.th"
                className="text-decoration-none"
                rel="noreferrer"
              >
                praschaya_k@cmu.ac.th
              </a>
            </td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>063-815-5712</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>Single 🤣, University Student</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
