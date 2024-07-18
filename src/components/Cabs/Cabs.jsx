import React, { useEffect, useState } from "react";
import dark from "./CabsDark.module.css";
import light from "./CabsLight.module.css";
import Logo from "../../images/newlogo.png";

function Cabs({ cabsimgs }) {
  const [isRotated, setIsRotated] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    setIsRotated(!isRotated);
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  const [connection, setConnection] = useState(null);
  const [data, setData] = useState([]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:7000");

    ws.onopen = () => {
      setConnection(ws);
      console.log("Connected to WebSocket server!");
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setTime(new Date().toLocaleTimeString());
      console.log("[Client]:...");
      console.log(event.data);
      setData(message);
    };

    // Handle potential errors and closing
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      setConnection(null);
      console.log("WebSocket connection closed.");
    };

    return () => {};
  }, []);

  return (
    <>
      {connection === null ? (
        <>
          <p>Connecting...</p>
        </>
      ) : (
        <div>
          <div
            className={`${theme === "dark" ? dark.container : light.container}`}
          >
            <div className={theme === "dark" ? dark.header : light.header}>
              <img
                src={Logo}
                className={theme === "dark" ? dark.logo : light.logo}
                alt="Logo"
              />
              <span>Cabs/Taxi Availability</span>
              <button
                onClick={toggleTheme}
                className={`${isRotated ? dark["toggle-btn-animation"] : ""} ${
                  theme === "dark" ? dark["toggle-btn"] : light["toggle-btn"]
                }`}
              >
                {theme === "dark" ? (
                  <span className="icon-fire"></span>
                ) : (
                  <span className="icon-ghost"></span>
                )}
              </button>
            </div>
            <span className={theme === "dark" ? dark.updates : light.updates}>
              <span className="icon-reload"></span> Last Updated on {time}
            </span>
            {/* <span
              className={`icon-bell ${
                theme === "dark" ? dark.bellicon : light.bellicon
              }`}
            ></span> */}

            <table
              className={
                theme === "dark" ? dark["table-data"] : light["table-data"]
              }
            >
              <thead>
                <tr>
                  <th>Cab Type</th>
                  <th className={dark["avl-cabs-th"]}>Available Cabs</th>
                  <th>Booking Type</th>
                  <th>Fare</th>
                </tr>
              </thead>

              {data.map((cab, id) => (
                <tbody key={id}>
                  <tr>
                    <td id="img-data">
                      <img
                        src={cabsimgs[cab.name]}
                        className={dark["cabs-logo"]}
                        alt={cab.name}
                      />
                    </td>
                    <td className={dark["avl-cabs-th"]}>{cab.cabsnumber}</td>
                    <td>{cab.bookingtype}</td>
                    <td>{cab.fare}</td>
                  </tr>
                </tbody>
              ))}
            </table>

            <div className={theme === "dark" ? dark.footer : light.footer}>
              <p
                className={theme === "dark" ? dark.highlight : light.highlight}
              >
                <span className="icon-location-pin"></span> Boarding location
                for Ola & Uber at level C, car park
              </p>
              <p
                className={theme === "dark" ? dark.highlight : light.highlight}
              >
                <span className="icon-map"></span> All rental cabs at arrival
                ramp & car park
              </p>
            </div>
            <p className={theme === "dark" ? dark.highlight : light.highlight}>
              No Cancellation fee for Ola & Uber in the event of Unavailability
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cabs;
