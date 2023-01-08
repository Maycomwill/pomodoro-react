import React, { useState } from "react";
import { FaPlay, FaPause, FaUndoAlt } from "react-icons/fa";
import { Button } from "./Button";

let timer: any = undefined;

export function Cronometro() {
  const playButton = document.querySelector("#start") as HTMLInputElement
  const [inputTime, setInputTime] = useState<number>(0);
  const minutes = Math.floor(inputTime / 60);
  const seconds = inputTime % 60;
  console.log(inputTime);

  function settingMode(mode: string) {
    console.log("mode selected:", mode);
    if (mode === "easy") {
      return (
        setInputTime(300), clearInterval(timer),
        playButton.removeAttribute('disabled')
      );
    } else if (mode === "medium") {
      return (
        setInputTime(600), clearInterval(timer),
        playButton.removeAttribute('disabled')
      );
    } else if (mode === "hard") {
      return (
        setInputTime(900), clearInterval(timer),
        playButton.removeAttribute('disabled')
      );
    } else if (mode === "superhard") {
      return (
        setInputTime(1500), clearInterval(timer),
        playButton.removeAttribute('disabled')
      );
    }
  }

  function startTimer() {
    if (inputTime != 0) {
      timer = setInterval(contdownTimer, 1000);
      playButton.setAttribute('disabled', "true")
    } else {
      alert("Selecione um modo para começar!");
    }
  }

  function contdownTimer() {
    if (inputTime != 0) {
      setInputTime((seconds) => (seconds >= 1 ? seconds - 1 : 0));
    } else if (inputTime === 0){
      alert('Acabou o tempo')
    }
  }

  function pauseTimer() {
    console.log("timer paused");
    playButton.removeAttribute('disabled')
    clearInterval(timer);
  }

  function resetTimer() {
    console.log("timer reseted");
    playButton.removeAttribute('disabled')
    clearInterval(timer);
    setInputTime(0);
  }

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div>
        <span className="text-white flex items-center justify-center flex-wrap text-xl text-center sm:text-2xl">Selecione um modo antes de iniciar o cronômetro!</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
      <div className="w-full flex mt-4 flex-col items-center justify-center gap-4">
        <div className="text-white text-8xl tracking-widest">
          <span>{String(minutes).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(seconds).padStart(2, "0")}</span>
        </div>
        <div className="flex items-center justify-center gap-4 px-2 mt-8">
          <Button id="start" version="SECONDARY" onClick={() => startTimer()}>
            <FaPlay />
          </Button>
          <Button version="SECONDARY" onClick={() => pauseTimer()}>
            <FaPause />
          </Button>
          <Button version="SECONDARY" onClick={() => resetTimer()}>
            <FaUndoAlt />
          </Button>
        </div>
      </div>
      <div className="w-full flex mt-12 flex-col items-center justify-center">
        <span className="text-white text-xl sm:text-2xl">Modes:</span>
        <div className="w-full grid grid-flow-row grid-cols-2 place-items-center mt-4 px-4 items-center justify-center gap-4 sm:w-[50%]">
          <Button version="PRIMARY" onClick={() => settingMode("easy")}>
            <span>5 minutos</span>
          </Button>
          <Button version="PRIMARY" onClick={() => settingMode("medium")}>
            <span>10 minutos</span>
          </Button>
          <Button version="PRIMARY" onClick={() => settingMode("hard")}>
            <span>15 minutos</span>
          </Button>
          <Button version="PRIMARY" onClick={() => settingMode("superhard")}>
            <span>25 minutos</span>
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
}
