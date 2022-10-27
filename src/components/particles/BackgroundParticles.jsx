import React from 'react'
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import particlesOptions from "./backgroundparticles.json";
import Particles from "react-particles";
import "./backgroundparticles.css";


const BackgroundParticles = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 144,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 }
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              attract: { distance: 200, duration: 0.4, factor: 5 },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
              bounce: false,
              direction: "none",
              enable: true,
              out_mode: "out",
              random: false,
              speed: 2,
              straight: false
            },
            number: {
              density: { enable: true, value_area: 800 }, value: 80
            },

            opacity: {
              anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
              random: false,
              value: 0.5
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400"
              },
              polygon: { nb_sides: 5 },
              stroke: { color: "#000000", width: 0 },
              type: "circle"
            },
            size: {
              anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
              random: true,
              value: 5
            },
          },
          polygon: {
            draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
            move: { radius: 10 },
            scale: 1,
            type: "none",
            url: ""
          },
          detectRetina: true,
        }}
      />
    );
}

export default BackgroundParticles