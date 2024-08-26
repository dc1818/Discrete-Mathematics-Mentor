import {
  Dialog,
  DialogContent,
  Avatar,
  Button,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import Login from "./Login.jsx";
import UserForm from "./UserForm.jsx";
import Link from "../Link.jsx";

// eslint-disable-next-line react/prop-types
const UserProfileModal = ({handleClose}) => {

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

                    </Typography>
                </Box>
                  <Box display="flex" justifyContent="space-between" mt={4}>
                        <Button
                                variant="contained"
                                color="primary"
                        >
                            Login
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                        >
                            Register
                        </Button>
                    </Box>

                 <Login x={ 500 } y={ 500 }/>
            <UserForm/>
            </DialogContent>

                <Link to={'/userForm'}>Register</Link>

        </Dialog>

    );
};

export default UserProfileModal;