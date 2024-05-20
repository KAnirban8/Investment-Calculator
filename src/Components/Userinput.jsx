import React, { useState } from 'react'

const Userinput = () => {
    const [userInput,setUserinput] = useState({
        initialInvestment : 10000,
        annualInvestment : 1200,
        expectedReturn : 6,
        duration : 10
    })
  return (
   <div>
    <section id='userinput'>
        <div>
            <p>
                <label>Initial Investment</label>
                <input type='number' required/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type='number' required/>
            </p>
        </div>
        <div>
            <p>
                <label>Expected Return</label>
                <input type='number' required/>
            </p>
            <p>
                <label>Duration</label>
                <input type='number'/>
            </p>
        </div>
    </section>
   </div>
  )
}

export default Userinput