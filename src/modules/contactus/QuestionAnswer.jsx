import React, { useState } from 'react';
import  questioAnswer from '../../utils/Accrodian/questioAnswer'
import '../contactus/QuestionAnswer.css'
import { IoIosArrowDown } from "react-icons/io";



function QuestionAnswer () {
  const [openQues, setOpenQues] = useState(null);
  const [isRotated, setIsRotated] = useState(false);

    const handleClick = (index) => {
        setIsRotated(prevIndex => (prevIndex === index ? null : index));
    }

  const toggleQues = (index) => {
    setOpenQues(openQues === index ? null : index);
  };

  return (
     <div className='QuestionAnswer-block'>

      {questioAnswer.map((support, index) => (
        <div className='QuestionAnswer-block-first' key={index}>

          <button className='QuestionAnswer-block-first-button' onClick={() => toggleQues(index)}>
            <span className='QuestionAnswer-block-first-Question'><h2 className='QuestionAnswer-block-first-QuesHeading'>{support.question}</h2><IoIosArrowDown className={`QuestionAnswer-block-icon ${isRotated ===index? 'rotated':''}`} onClick={() => handleClick(index)} /> </span>
            {openQues=== index && <p className='QuestionAnswer-block-first-AnsPara'>{support.answer}</p>}
          </button>

        </div>
      ))}
      </div>
  );
}

export default QuestionAnswer ;