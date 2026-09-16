// import React, { useContext, useState } from 'react'
// import withAuth from '../utils/withAuth'
// import { useNavigate } from 'react-router-dom'
// import "../App.css";
// import { Button, IconButton, TextField } from '@mui/material';
// import RestoreIcon from '@mui/icons-material/Restore';
// import { AuthContext } from '../contexts/AuthContext';

// function HomeComponent() {


//     let navigate = useNavigate();
//     const [meetingCode, setMeetingCode] = useState("");


//     const {addToUserHistory} = useContext(AuthContext);
//     let handleJoinVideoCall = async () => {
//         await addToUserHistory(meetingCode)
//         navigate(`/${meetingCode}`)
//     }

//     return (
//         <>

//             <div className="navBar">

//                 <div style={{ display: "flex", alignItems: "center" }}>

//                     <h2>Apna Video Call</h2>
//                 </div>

//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <IconButton onClick={
//                         () => {
//                             navigate("/history")
//                         }
//                     }>
//                         <RestoreIcon />
//                     </IconButton>
//                     <p>History</p>

//                     <Button onClick={() => {
//                         localStorage.removeItem("token")
//                         navigate("/auth")
//                     }}>
//                         Logout
//                     </Button>
//                 </div>


//             </div>


//             <div className="meetContainer">
//                 <div className="leftPanel">
//                     <div>
//                         <h2>Providing Quality Video Call Just Like Quality Education</h2>

//                         <div style={{ display: 'flex', gap: "10px" }}>

//                             <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
//                             <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

//                         </div>
//                     </div>
//                 </div>
//                 <div className='rightPanel'>
//                     <img srcSet='/logo3.png' alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }


// export default withAuth(HomeComponent)
import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';

const meetoraTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FF9839',
            dark: '#D97500',
            contrastText: '#0A0D1C',
        },
        text: {
            primary: '#F3F1EB',
            secondary: '#9AA1BE',
        },
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
        button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: { borderRadius: 10 },
});

function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const { addToUserHistory } = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <ThemeProvider theme={meetoraTheme}>
            <div className="homePageContainer">
                <div className="homeNavBar">
                    <div className="navHeader">
                        <span className='logoDot'></span>
                        <h2>Meetora</h2>
                    </div>

                    <div className="navRight">
                        <IconButton
                            sx={{ color: '#9AA1BE' }}
                            onClick={() => navigate("/history")}
                        >
                            <RestoreIcon />
                        </IconButton>
                        <p onClick={() => navigate("/history")}>History</p>

                        <Button
                            sx={{ color: '#9AA1BE' }}
                            onClick={() => {
                                localStorage.removeItem("token")
                                navigate("/auth")
                            }}
                        >
                            Logout
                        </Button>
                    </div>
                </div>

                <div className="meetContainer">
                    <div className="leftPanel">
                        <div>
                            <h2>Providing quality video calls, just like quality education</h2>

                            <div style={{ display: 'flex', gap: "12px", marginTop: '1.8rem' }}>
                                <TextField
                                    onChange={e => setMeetingCode(e.target.value)}
                                    id="meeting-code"
                                    label="Meeting Code"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            color: '#F3F1EB',
                                            '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                                            '&:hover fieldset': { borderColor: '#FF9839' },
                                            '&.Mui-focused fieldset': { borderColor: '#FF9839' },
                                        },
                                        '& .MuiInputLabel-root': { color: '#9AA1BE' },
                                        '& .MuiInputLabel-root.Mui-focused': { color: '#FF9839' },
                                    }}
                                />
                                <Button
                                    onClick={handleJoinVideoCall}
                                    variant='contained'
                                    sx={{ px: 3.5 }}
                                >
                                    Join
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='rightPanel'>
                        <div className="glowBlob"></div>
                        <img src='/logo3.png' alt="" />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default withAuth(HomeComponent)