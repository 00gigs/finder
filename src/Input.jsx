import sendicon from './assests/icons8-eye-30.png'
import { useState } from 'react'



const { GoogleGenerativeAI } = require("@google/generative-ai");

const ai = new GoogleGenerativeAI('AIzaSyBD1bJMpxDgKqgREjWO-lhbm_whRVPP3dA')


function Input(){
const [input, setinput] = useState('')
const [generatedContent, setGeneratedContent] = useState('');

const handleClick = async () =>{
const aimodel = ai.getGenerativeModel({ model: "gemini-pro"});
const result = await aimodel.generateContent(input)
const response = await result.response
const text = response.text()
setGeneratedContent(text)
}

return(
<>
    <div className="inp-box">
       <input type="text" className="inp-val" onChange={(e)=>setinput(e.target.value)}></input><button className="sendBtn" onClick={handleClick}><img src={sendicon} alt="" className="img-inp"></img></button>
    </div>
    <div className="generated-content">
        {generatedContent && <p>{generatedContent}</p>}
      </div>
</>
   
    
)
}
export default Input