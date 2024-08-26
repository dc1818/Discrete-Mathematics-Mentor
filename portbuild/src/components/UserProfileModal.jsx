import { Dialog, DialogContent, Avatar, Button, IconButton, Typography, Box } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import Login from '../components-sub/Login';
import {useState} from "react";



const UserProfileModal = ({ open, handleClose, user }) => {
    const [showLogin, setShowLogin] = useState(false);

    const handleClickLogin = ()=>{
        setShowLogin(true);
    }


    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="user-profile-modal">
            <DialogContent sx={{ position: 'relative', padding: 4 }}>
                <IconButton
                    onClick={handleClose}
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                    <CloseIcon />
                </IconButton>
                <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
                    <Avatar

                        sx={{ width: 96, height: 96, marginBottom: 2 }}
                    />
                    <Typography variant="h6" component="h2">Name goes here
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    Job Title goes here
                    </Typography>
                </Box>
                {!showLogin &&
                    <Box display="flex" justifyContent="space-between" mt={4}>
                        <Button onClick={handleClickLogin}
                                variant="contained"
                                color="primary"
                        >
                            Login
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                        >
                            Logout
                        </Button>
                    </Box>
                }
                {showLogin && <Login x={ 500 } y={ 500 }/>}
            </DialogContent>
        </Dialog>

    );
};

export default UserProfileModal;