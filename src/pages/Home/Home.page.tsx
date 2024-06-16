import React, { useEffect } from "react";
import baffle from "baffle";
import "./home.page.css";
import { Navbar } from "../../components";

function reveal() {
  const b = baffle("#sanjog-gaihre-title", {
    characters: "▒▒░ ▒>█▒░ <▒/▓░ ▒▒▓ ▒<▒▓█ ▓▓▒▒ █>█ >/░▒ █>▓░",
    speed: 150,
  });
  b.start();
  setTimeout(() => {
    b.stop();
    b.reveal(1000);
  }, 2000);
}

export function HomePage() {
  useEffect(() => {
    reveal();
  }, []);
  return (
    <>
      <Navbar />
      <div className="home-page-wrapper">
        <h1 id="sanjog-gaihre-title">Sanjog Gaihre</h1>
      </div>
    </>
  );
}
