import React,{useState} from 'react';
import Typewriter from 'typewriter-effect'
import "./Home.css";

const Home = () => {
    const [state] = useState({
        title: "Hi,",
        titleTwo: "I'm",
        titleThree: "AnnTech",
        image: "/images/tech-image.png"
    })
  return (
    <div className='home'>
     <div className='home-intro'>
         <h2>
             <div className='title'>{state.title}</div>
             <div className='titleTwo'>{state.titleTwo}</div>
             <div className='titleThree'>{state.titleThree}</div>
         </h2>
         <div className='text'>
         

            <Typewriter
                options={{
                strings: ['I build softwares', 'I am a tech savvy', 'Tech is Life'],
                autoStart: true,
                loop: true,
            }}
            />

            
         </div>
         <div className='contact-me'>
            <button className='button'>Contact me</button>
         </div>
         <div className='home-image'>
            <img className='tech-image' src={state.image} alt='Tech' />
         </div>
     </div>
    </div>
  )
}

export default Home