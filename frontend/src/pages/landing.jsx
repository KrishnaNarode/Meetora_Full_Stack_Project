// import React from 'react'
// import "../App.css"
// import { Link, useNavigate } from 'react-router-dom'
// export default function LandingPage() {


//     const router = useNavigate();

//     return (
//         <div className='landingPageContainer'>
//             <nav>
//                 <div className='navHeader'>
//                     <h2>Meetora Video Call</h2>
//                 </div>
//                 <div className='navlist'>
//                     <p onClick={() => {
//                         router("/aljk23")
//                     }}>Join as Guest</p>
//                     <p onClick={() => {
//                         router("/auth")

//                     }}>Register</p>
//                     <div onClick={() => {
//                         router("/auth")

//                     }} role='button'>
//                         <p>Login</p>
//                     </div>
//                 </div>
//             </nav>


//             <div className="landingMainContainer">
//                 <div>
//                     <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

//                     <p>Cover a distance by Meetora Video Call</p>
//                     <div role='button'>
//                         <Link to={"/auth"}>Get Started</Link>
//                     </div>
//                 </div>
//                 <div>

//                     <img src="/mobile.png" alt="" />

//                 </div>
//             </div>



//         </div>
//     )
// }
import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {

    const router = useNavigate();

    return (
        <div
            className='landingPageContainer'
            style={{
                backgroundImage: `radial-gradient(ellipse 80% 60% at 80% 20%, rgba(108, 92, 231, 0.18), transparent 60%), url(${process.env.PUBLIC_URL}/background.png)`
            }}
        >
            <nav>
                <div className='navHeader'>
                    <span className='logoDot'></span>
                    <h2>Meetora</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")
                    }}>Register</p>
                    <div className='loginBtn' onClick={() => {
                        router("/auth")
                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div className="heroText">
                    <h1><span className='accentWord'>Connect</span> with your loved ones</h1>

                    <p>Cover the distance with sharp, reliable video calls - wherever you are.</p>
                    <div className='ctaBtn' role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div className="heroImage">
                    <div className="glowBlob"></div>
                    <img src="/mobile.png" alt="Two people on a Meetora video call" />
                </div>
            </div>
        </div>
    )
}