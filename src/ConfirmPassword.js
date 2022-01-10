import React from 'react';
import {useState} from 'react'
import Modal from './Modal'

const ConfirmPassword=()=> {

const[showmodal,setshowmodal]=useState(false)
const[number,setNumber]=useState()
const [otp, setOtp] = useState(new Array(4).fill(""));
const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
        element.nextSibling.focus();
    }
};

    const openmodalHandler=()=>{
    setshowmodal(true);
}
    const closeModalHandler=()=>{
    setshowmodal(false);
}
    const handleSubmit=(e)=>{
     e.preventDefault();
       }
    return(
            <>
           <div className="container">
               <div className="userInput">
            <form onSubmit={handleSubmit}>
            <h2>Change Credit Card Pin</h2>
            <p>Enter New Pin</p>
            {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="password"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                            
                        );
                    })}        
            <p>Re-Enter New PIN</p>
            {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="password"
                                name="otp"
                                maxLength="1"
                                key={index}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                            
                        );
                    })}        
            <div className="button-div">
                <button type="button" className='cancel-btn' onClick={closeModalHandler}>Cancel</button>
            <button type="Submit" value="submit" className="confirm-btn"onClick={openmodalHandler}>Create Pin</button>
            {showmodal && <Modal/>}
            </div>  
            </form>
               </div>
           </div>
        
            </>
        )   
    }
        export default ConfirmPassword