// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { AuthContext } from '../contexts/AuthContext';
// import { Snackbar } from '@mui/material';



// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function Authentication() {

    

//     const [username, setUsername] = React.useState();
//     const [password, setPassword] = React.useState();
//     const [name, setName] = React.useState();
//     const [error, setError] = React.useState();
//     const [message, setMessage] = React.useState();


//     const [formState, setFormState] = React.useState(0);

//     const [open, setOpen] = React.useState(false)


//     const { handleRegister, handleLogin } = React.useContext(AuthContext);

//     let handleAuth = async () => {
//         try {
//             if (formState === 0) {

//                 let result = await handleLogin(username, password)


//             }
//             if (formState === 1) {
//                 let result = await handleRegister(name, username, password);
//                 console.log(result);
//                 setUsername("");
//                 setMessage(result);
//                 setOpen(true);
//                 setError("")
//                 setFormState(0)
//                 setPassword("")
//             }
//         } catch (err) {

//             console.log(err);
//             let message = (err.response.data.message);
//             setError(message);
//         }
//     }


//     return (
//         <ThemeProvider theme={defaultTheme}>
//             <Grid container component="main" sx={{ height: '100vh' }}>
//                 <CssBaseline />
//                 <Grid
//                     item
//                     xs={false}
//                     sm={4}
//                     md={7}
//                     sx={{
//                         backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundColor: (t) =>
//                             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                 />
//                 <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//                     <Box
//                         sx={{
//                             my: 8,
//                             mx: 4,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                             <LockOutlinedIcon />
//                         </Avatar>


//                         <div>
//                             <Button variant={formState === 0 ? "contained" : ""} onClick={() => { setFormState(0) }}>
//                                 Sign In
//                             </Button>
//                             <Button variant={formState === 1 ? "contained" : ""} onClick={() => { setFormState(1) }}>
//                                 Sign Up
//                             </Button>
//                         </div>

//                         <Box component="form" noValidate sx={{ mt: 1 }}>
//                             {formState === 1 ? <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="username"
//                                 label="Full Name"
//                                 name="username"
//                                 value={name}
//                                 autoFocus
//                                 onChange={(e) => setName(e.target.value)}
//                             /> : <></>}

//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="username"
//                                 label="Username"
//                                 name="username"
//                                 value={username}
//                                 autoFocus
//                                 onChange={(e) => setUsername(e.target.value)}

//                             />
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 value={password}
//                                 type="password"
//                                 onChange={(e) => setPassword(e.target.value)}

//                                 id="password"
//                             />

//                             <p style={{ color: "red" }}>{error}</p>

//                             <Button
//                                 type="button"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                                 onClick={handleAuth}
//                             >
//                                 {formState === 0 ? "Login " : "Register"}
//                             </Button>

//                         </Box>
//                     </Box>
//                 </Grid>
//             </Grid>

//             <Snackbar

//                 open={open}
//                 autoHideDuration={4000}
//                 message={message}
//             />

//         </ThemeProvider>
//     );
// }

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';

const meetoraTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FF9839',
            dark: '#D97500',
            contrastText: '#0A0D1C',
        },
        background: {
            default: '#0A0D1C',
            paper: '#12162A',
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

export default function Authentication() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [error, setError] = React.useState('');
    const [message, setMessage] = React.useState('');

    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                await handleLogin(username, password);
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                setUsername('');
                setName('');
                setPassword('');
                setMessage(result);
                setOpen(true);
                setError('');
                setFormState(0);
            }
        } catch (err) {
            console.log(err);
            let msg = err?.response?.data?.message || 'Something went wrong';
            setError(msg);
        }
    };

    return (
        <ThemeProvider theme={meetoraTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />

                {/* Branding panel */}
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        background: '#0A0D1C',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            width: 480,
                            height: 480,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(255,152,57,0.25), transparent 70%)',
                            filter: 'blur(10px)',
                            top: '15%',
                            left: '10%',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            width: 420,
                            height: 420,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(108,92,231,0.25), transparent 70%)',
                            filter: 'blur(10px)',
                            bottom: '10%',
                            right: '5%',
                        }}
                    />
                    <Box sx={{ position: 'relative', textAlign: 'center', px: 4 }}>
                        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#F3F1EB' }}>
                            Meet<Box component="span" sx={{ color: '#FF9839' }}>ora</Box>
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#9AA1BE', maxWidth: 380, mx: 'auto', fontWeight: 400 }}>
                            Sharp, reliable video calls that keep you close to the people who matter.
                        </Typography>
                    </Box>
                </Grid>

                {/* Form panel */}
                <Grid item xs={12} sm={8} md={6} component={Paper} elevation={0} square>
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            px: 4,
                        }}
                    >
                        <Box sx={{ width: '100%', maxWidth: 380 }}>
                            <Avatar sx={{ m: '0 auto 1rem', bgcolor: 'primary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>

                            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 600, mb: 3 }}>
                                {formState === 0 ? 'Welcome back' : 'Create your account'}
                            </Typography>

                            {/* Segmented toggle */}
                            <Stack
                                direction="row"
                                sx={{
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: 999,
                                    p: 0.5,
                                    mb: 3,
                                }}
                            >
                                <Button
                                    fullWidth
                                    onClick={() => setFormState(0)}
                                    sx={{
                                        borderRadius: 999,
                                        py: 1,
                                        color: formState === 0 ? '#0A0D1C' : '#9AA1BE',
                                        background: formState === 0 ? 'primary.main' : 'transparent',
                                        '&:hover': {
                                            background: formState === 0 ? '#D97500' : 'rgba(255,255,255,0.08)',
                                        },
                                    }}
                                >
                                    Sign In
                                </Button>
                                <Button
                                    fullWidth
                                    onClick={() => setFormState(1)}
                                    sx={{
                                        borderRadius: 999,
                                        py: 1,
                                        color: formState === 1 ? '#0A0D1C' : '#9AA1BE',
                                        background: formState === 1 ? 'primary.main' : 'transparent',
                                        '&:hover': {
                                            background: formState === 1 ? '#D97500' : 'rgba(255,255,255,0.08)',
                                        },
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </Stack>

                            <Box component="form" noValidate>
                                {formState === 1 && (
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="fullname"
                                        label="Full Name"
                                        name="fullname"
                                        value={name}
                                        autoFocus
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                )}

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    value={username}
                                    autoFocus={formState === 0}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    value={password}
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                {error && (
                                    <Typography sx={{ color: '#FF6B6B', fontSize: '0.85rem', mt: 1 }}>
                                        {error}
                                    </Typography>
                                )}

                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 1, py: 1.3, fontSize: '1rem' }}
                                    onClick={handleAuth}
                                >
                                    {formState === 0 ? 'Login' : 'Register'}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={() => setOpen(false)}
                message={message}
            />
        </ThemeProvider>
    );
}