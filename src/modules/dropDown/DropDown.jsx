import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import'../dropDown/DropDown.css'

const DropDown= () => {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (value) {
            navigate(value);
        }
    };

    return (
        <div >
            <select  className='dropdown-cont' onChange={handleChange} value={selectedOption}>
                <option value="/">Collections Page</option>
                <option value="/ContactUs">Contact us</option>
            </select>
        </div>
    );
};

export default DropDown;
