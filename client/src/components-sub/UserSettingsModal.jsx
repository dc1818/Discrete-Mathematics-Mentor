import { useState } from 'react';
import { Box, Button, Typography, TextField, List, ListItem, ListItemText, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


// Updated list of settings
const settings = [
    { text: 'Edit Firstname', value: 'firstname' },
    { text: 'Edit Lastname', value: 'lastname' },
    { text: 'Edit Password', value: 'password' },
    { text: 'Edit Email', value: 'email' },
    { text: 'Edit State', value: 'state' },
    { text: 'Edit Profile Pic', value: 'profilePic' },
    { text: 'Edit Bio', value: 'bio' },
    { text: 'Edit Work History', value: 'workHistory' },
    { text: 'Edit Education', value: 'education' },
    { text: 'Edit LinkedIn URL', value: 'linkedinUrl' },
    { text: 'Edit GitHub URL', value: 'githubUrl' },
    { text: 'Edit Twitter URL', value: 'twitterUrl' },
    { text: 'Edit Certifications', value: 'certifications' },
];

// Function to get the session storage key for 'username'
function getSessionStorageKey() {

    return sessionStorage.getItem('userid');
}

const UserSettingsModal = ({onClose}) => {
    const [selectedSetting, setSelectedSetting] = useState('password');
    const [userInfo, setUserInfo] = useState({
        firstname: '',
        lastname: '',
        email: '',
        theme: '',
        state: '',
        password: '',
        propic: '',
        bio: '',
        workhistory: '',
        education: '',
        linkedin: '',
        github: '',
        twitterx: '',
        certifications: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    //console.log(checkUser);
// Function to update user information
    async function updateUser(id, userInfo) {
        const url = `http://localhost:5001/users/users/${id}`;
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${errorData.error}`);
            }

            const updatedUser = await response.json();
            console.log('User updated successfully:', updatedUser);
        } catch (error) {
            console.error('Failed to update user:', error);
        }
    }

    const handleSave = async () => {
        const userId = getSessionStorageKey();
        if (userId) {
            // Only include the fields that have been modified
            const updatedInfo = {};
            Object.keys(userInfo).forEach(key => {
                if (userInfo[key]) {
                    updatedInfo[key] = userInfo[key];
                }
            });
            console.log(updatedInfo);
            await updateUser(userId, updatedInfo);

        } else {
            console.error('No user ID found in session storage.');
        }
    };

    const handleDeleteProfile = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete your profile?");
        const userId = getSessionStorageKey();

        if (!confirmDelete) return;

        try {
            const response = await fetch(`/users/users/${userId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // Handle successful deletion (e.g., redirect to a different page)
                alert("Profile deleted successfully.");
                // Redirect or update the UI as necessary
            } else {
                alert("Failed to delete profile.");
            }
        } catch (error) {
            console.error("Error deleting profile:", error);
            alert("An error occurred while deleting the profile.");
        }
    };

    const renderContent = () => {
        switch (selectedSetting) {
            case 'firstname':
                return (
                    <Box>
                        <Typography variant="h6">Edit Firstname</Typography>
                        <TextField name="firstname" label="Firstname" value={userInfo.firstname} onChange={handleInputChange} fullWidth margin="normal" />
                    </Box>
                );
            case 'lastname':
                return (
                    <Box>
                        <Typography variant="h6">Edit Lastname</Typography>
                        <TextField name="lastname" label="Lastname" value={userInfo.lastname} onChange={handleInputChange} fullWidth margin="normal" />
                    </Box>
                );
            case 'password':
                return (
                    <Box>
                        <Typography variant="h6">Edit Password</Typography>
                        <TextField name="password" label="Current Password" type="password" value={userInfo.password} onChange={handleInputChange} fullWidth margin="normal" />
                        <TextField name="newPassword" label="New Password" type="password" fullWidth margin="normal" />
                        <TextField name="confirmPassword" label="Confirm New Password" type="password" fullWidth margin="normal" />
                    </Box>
                );
            case 'email':
                return (
                    <Box>
                        <Typography variant="h6">Edit Email</Typography>
                        <TextField name="email" label="Email" type="email" value={userInfo.email} onChange={handleInputChange} fullWidth margin="normal" />
                    </Box>
                );
            case 'state':
                return (
                    <Box>
                        <Typography variant="h6">Edit State</Typography>
                        <TextField name="state" label="State" value={userInfo.state} onChange={handleInputChange} fullWidth margin="normal" />
                    </Box>
                );
            case 'profilePic':
                return (
                    <Box>
                        <Typography variant="h6">Edit Profile Pic</Typography>
                        <TextField name="profilePic" label="Profile Pic URL" value={userInfo.profilePic} onChange={handleInputChange} fullWidth margin="normal" />
                    </Box>
                );
            case 'bio':
                return (
                    <Box>
                        <Typography variant="h6">Edit Bio</Typography>
                        <TextField name="bio" label="Bio" value={userInfo.bio} onChange={handleInputChange} fullWidth margin="normal" multiline rows={4} />
                    </Box>
                );
            case 'workHistory':
                return (
                    <Box>
                        <Typography variant="h6">Edit Work History</Typography>
                        <TextField name="workHistory" label="Work History" value={userInfo.workHistory} onChange={handleInputChange} fullWidth margin="normal" multiline rows={4} />
                    </Box>
                );
            case 'education':
                return (
                    <Box>
                        <Typography variant="h6">Edit Education</Typography>
                        <TextField name="education" label="Education" value={userInfo.education} onChange={handleInputChange} fullWidth margin="normal" multiline rows={4} />
                    </Box>
                );
            case 'linkedinUrl':
                return (
                    <Box>
                        <Typography variant="h6">Edit LinkedIn URL</Typography>
                        <TextField name="linkedinUrl" label="LinkedIn URL" value={userInfo.linkedinUrl} onChange={handleInputChange} fullWidth margin="normal" />
                    </Box>
                );
            case 'githubUrl':
                return (
                    <Box>
                        <Typography variant="h6">Edit GitHub URL</Typography>
                        <TextField name="githubUrl" label="GitHub URL" onChange={handleInputChange} fullWidth margin="normal" />
                    </Box>
                );
            case 'twitterUrl':
                return (
                    <Box>
                        <Typography variant="h6">Edit Twitter URL</Typography>
                        <TextField name="twitterUrl" label="Twitter URL" value={userInfo.twitterUrl} onChange={handleInputChange} fullWidth margin="normal" />
                    </Box>
                );
            case 'certifications':
                return (
                    <Box>
                        <Typography variant="h6">Edit Certifications</Typography>
                        <TextField name="certifications" label="Certifications" value={userInfo.certifications} onChange={handleInputChange} fullWidth margin="normal" multiline rows={4} />
                    </Box>
                );

            default:
                return null;
        }
    };

    const handleOverlayClick = (event) =>{
        if(event.target === event.currentTarget){
            onClose();
        }
    }

    return (
        <>
            <Box className="fixed inset-0 bg-black/50 z-40" onClick={handleOverlayClick}></Box>

            <Box className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-md w-11/12 md:w-[1200px] z-50">
                <Box
                    sx={{
                        width: { xs: '100%', md: '30%' },
                        bgcolor: 'grey.200',
                        borderRadius: 1,
                        mr: { md: 2 },
                        mb: { xs: 2, md: 0 },
                        overflow: 'auto',
                    }}
                >
                    <List>
                        {settings.map((setting) => (
                            <ListItem button key={setting.value} onClick={() => setSelectedSetting(setting.value)}>
                                <ListItemText primary={setting.text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box
                    sx={{
                        width: { xs: '100%', md: '70%' },
                        bgcolor: 'white',
                        borderRadius: 1,
                        p: 2,
                        boxShadow: 1,
                        overflow: 'auto',
                    }}
                >
                    {renderContent()}


                    <Box>
                        <Typography variant="h6">Delete Profile</Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            onClick={handleDeleteProfile}
                        >
                            Delete Profile
                        </Button>
                    </Box>

                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained" onClick={handleSave}>
                            Save
                        </Button>
                    </Box>
                </Box>
            </Box>

        </>
    );
};

export default UserSettingsModal;
