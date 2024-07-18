import React from "react";
import styles from "./Pushpak.module.css";
import Logo from "../../images/newlogo.png";

function Pushpak() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={Logo} className={styles.logo} alt="Logo" />
        <span className={styles.title}>Pushpak Bus Availability</span>
        <div className={styles.info}>
          <div className={`${styles["update-time"]}`}>
            Last updated on 10:10
          </div>
          <div className={styles.weather}>
            <span>18°C / 24°C</span>
            <span>Light Rain</span>
          </div>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>To</th>
            <th>Via</th>
            <th>Next 3 Schedule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GACHIBOWLI</td>
            <td>Via ORR</td>
            <td className={styles.nextsch}>10:20 | 11:00 | 11:30</td>
          </tr>
          <tr>
            <td>MIYAPUR</td>
            <td>Gachibowli, Hitech City, JNTU.</td>
            <td className={styles.nextsch}>10:15 | 10:35 | 10:45</td>
          </tr>
          <tr>
            <td>J B S</td>
            <td>LB Nagar, Uppal, Sangeeth.</td>
            <td className={styles.nextsch}>10:20 | 10:45 | 10:55</td>
          </tr>
          <tr>
            <td>SECUNDERABAD</td>
            <td>AramGhar, Medhipatnam, Secretariat.</td>
            <td className={styles.nextsch}>10:25 | 11:25 | 12:25</td>
          </tr>
          <tr>
            <td>J B S</td>
            <td>Aramghar, NMDC, Punjagutta.</td>
            <td className={styles.nextsch}>10:00 | 10:30 | 11:00</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.footer}>
        <p className={styles.highlight}>
          Boarding point - Arrival Ramp at <span>Pillar No 12</span>
        </p>
        <p>For more details login to TSRTC Gamyam App</p>
        <div className={`${styles["qr-codes"]}`}>
          <div>
            <p>Apple</p>
            <img src="apple_qr.png" alt="Apple QR Code" />
          </div>
          <div>
            <p>Android</p>
            <img src="android_qr.png" alt="Android QR Code" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pushpak;
