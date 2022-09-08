import React, {useState} from 'react'
import "./Slider.css"
import dataSlider from "./dataSlider"
import BtnSlider from "./BtnSlider"

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

  return (
    <div className='container-slider'>
        {dataSlider.map((el, index) =>{
            return (
                <div className={slideIndex === index +1 ? "slide moveSlide" : "slide"} key={el.id} > 
                    <img 
                        src={process.env.PUBLIC_URL + `/Photos/img${index + 1}.jpeg`} 
                        alt=""/>
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
    </div>
  )
}
