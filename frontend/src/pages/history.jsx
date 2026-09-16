// import React, { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '../contexts/AuthContext'
// import { useNavigate } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import Box from '@mui/material/Box';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import HomeIcon from '@mui/icons-material/Home';

// import { IconButton } from '@mui/material';
// export default function History() {


//     const { getHistoryOfUser } = useContext(AuthContext);

//     const [meetings, setMeetings] = useState([])


//     const routeTo = useNavigate();

//     useEffect(() => {
//         const fetchHistory = async () => {
//             try {
//                 const history = await getHistoryOfUser();
//                 setMeetings(history);
//             } catch {
//                 // IMPLEMENT SNACKBAR
//             }
//         }

//         fetchHistory();
//     }, [])

//     let formatDate = (dateString) => {

//         const date = new Date(dateString);
//         const day = date.getDate().toString().padStart(2, "0");
//         const month = (date.getMonth() + 1).toString().padStart(2, "0")
//         const year = date.getFullYear();

//         return `${day}/${month}/${year}`

//     }

//     return (
//         <div>

//             <IconButton onClick={() => {
//                 routeTo("/home")
//             }}>
//                 <HomeIcon />
//             </IconButton >
//             {
//                 (meetings.length !== 0) ? meetings.map((e, i) => {
//                     return (

//                         <>


//                             <Card key={i} variant="outlined">


//                                 <CardContent>
//                                     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                                         Code: {e.meetingCode}
//                                     </Typography>

//                                     <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                                         Date: {formatDate(e.date)}
//                                     </Typography>

//                                 </CardContent>


//                             </Card>


//                         </>
//                     )
//                 }) : <></>

//             }

//         </div>
//     )
// }
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { IconButton, Snackbar, CircularProgress } from '@mui/material';
import "../App.css";

export default function History() {

    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [snackOpen, setSnackOpen] = useState(false);

    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history || []);
            } catch {
                setSnackOpen(true);
            } finally {
                setLoading(false);
            }
        }

        fetchHistory();
    }, [])

    let formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();
        return `${day}/${month}/${year}`
    }

    return (
        <div className="historyPageContainer">
            <div className="historyNavBar">
                <IconButton
                    sx={{ color: '#F3F1EB' }}
                    onClick={() => routeTo("/home")}
                >
                    <HomeIcon />
                </IconButton>
                <h2>Meeting History</h2>
            </div>

            <div className="historyList">
                {loading ? (
                    <div className="historyStateMsg">
                        <CircularProgress sx={{ color: '#FF9839' }} size={28} />
                    </div>
                ) : meetings.length !== 0 ? (
                    meetings.map((e, i) => (
                        <Card key={i} className="historyCard" variant="outlined">
                            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <VideocamOutlinedIcon sx={{ color: '#FF9839' }} />
                                <div>
                                    <Typography sx={{ fontWeight: 600, color: '#F3F1EB' }}>
                                        {e.meetingCode}
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.85rem', color: '#9AA1BE' }}>
                                        {formatDate(e.date)}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="historyStateMsg">
                        <Typography sx={{ color: '#9AA1BE' }}>
                            No meetings yet — your joined calls will show up here.
                        </Typography>
                    </div>
                )}
            </div>

            <Snackbar
                open={snackOpen}
                autoHideDuration={4000}
                onClose={() => setSnackOpen(false)}
                message="Couldn't load your meeting history"
            />
        </div>
    )
}