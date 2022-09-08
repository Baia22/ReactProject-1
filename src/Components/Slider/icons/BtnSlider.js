import React from "react";
import "./Slider.css";
import { BiCaretLeft } from "react-icons/bi";
import { BiCaretRight } from "react-icons/bi";

export default function BtnSlider({direction, moveSlide}) {
  return (
    <div>
        <button onClick={moveSlide} className=        {direction==="next" ? "btn-slide next" :    'btn-slide prev'} >
        {direction === 'next' ? <BiCaretRight /> : <BiCaretLeft />}
        </button>
    </div>
  )
}