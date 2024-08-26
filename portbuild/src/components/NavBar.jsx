import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const LogoBox = () => {
    return (
        <Box
            sx={{
                height: '20%',
                backgroundColor: 'black',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
            }}
        >
            <p>Logo Box</p>
        </Box>
    );
};

const MenuItems = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '80%', // Ensures the menu items take up 80% of the parent container's height
                width: '100%',
            }}
        >
            <Button
                sx={{
                    height: '30%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                }}
            >
                Home
            </Button>
            <Button
                sx={{
                    height: '30%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',

                    },
                }}
            >
                Test
            </Button>
            <Button
                sx={{
                    height: '30%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                }}
            >
                Blabla
            </Button>
        </Box>
    );
};

const LeftSideContainer = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh', // Ensure it fills the entire viewport height
                width: '20%', // Adjusted to 20% to match the description
                background: 'linear-gradient(to right, darkslateblue, dimgray)',
                color: 'white',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <LogoBox />
            <MenuItems />
        </Box>
    );
};

const Navbar = () => {
    return (
        <Box
            sx={{
                marginLeft: '20%', // Adjusting marginLeft to 20% to match the LeftSideContainer width
                p: 2,
            }}
        >

            <LeftSideContainer />

        </Box>
    );
};

export default Navbar;