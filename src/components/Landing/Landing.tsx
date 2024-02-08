"use client";

import React, { useState, useEffect } from "react";
import Carousel from "../Gallery/Carousel";
import Image from "next/image";
const VideogamesPi = require("../../img/VideogamesPi.png");
import logo from "../../img/logo.svg";
const landingTFE = require("../../img/landingTFE.PNG");

function Landing() {
  return (
    <div className={`flex flex-col items-center bg-neutral-900 min-h-screen`}>
      <Carousel> 
        <div className=" shadow-lg rounded-lg w-full gap-20 flex flex-col items-center min-[1440px]:flex-row min-[1440px]:justify-evenly">
          <div className="p-8 sm:p-10 rounded-md">
            <Image
              alt="Videogames PI Image"
              src={logo}
              className=" h-56 w-auto "
            />
          </div>

          <div className="w-full max-w-[630px] min-h-full p-4 rounded-md shadow-md bg-gradient-to-b from-red-500 to-yellow-500 ">
            <h2 className="text-2xl font-bold mb-2 text-black">The Fourth Element</h2>
            <p>Curso para deportistas de alto rendimiento</p>
            <ul className="list-disc pl-4">
              <li className="box-content">Videos</li>
              <li>Meditaciones</li>
              <li>Cuestionarios</li>
              <li>Autorregistro</li>



            </ul>
          </div>

            
        </div>
        {/* <Image
          alt="Videogames PI Image"
          src={VideogamesPi}
          className="mx-auto w-full px-20"
        ></Image> */}
        <div className="w-full">Proyecto 3</div>
      </Carousel>

      <section className="contact mt-10">
        <h2>Contacto</h2>
        <p>
          ¡Estoy abierto a nuevas oportunidades y colaboraciones! No dudes en
          ponerte en contacto conmigo a través de [tu dirección de correo
          electrónico] o [tu perfil de LinkedIn / GitHub].
        </p>
      </section>
    </div>
  );
}

export default Landing;
