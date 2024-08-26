import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import websitelogo from '../assets/websitelogo.jpg';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';

const LogoBox = () => {
  return (
      <Box
          sx={{
              height: "40%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white"
          }}
      >
          <div className={"flex flex-col items-center logodiv"} style={{background: 'var(--Primary-Background)'}}>
              <img
                  src={websitelogo}
                  alt="Website Logo"
                  className="w-32 rounded-lg"
                  style={{paddingBottom: '16px'}}
              />
              <h1 className="text-4xl text-white font-bold text-center mb-8 relative" style={{
                  textShadow: `
                  2px 4px 0 #000, 
                  -2px -2px 0 #000, 
                  2px -2px 0 #000, 
                  -2px 2px 0 #000
                `
              }}>

                  <span className="relative z-10">Capstone Project</span>
                  <span
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-md opacity-5 transform scale-110"
                      aria-hidden="true"
                  ></span>
              </h1>

          </div>

      </Box>
  );
};


const MenuItems = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "80%", // Ensures the menu items take up 80% of the parent container's height
                width: "100%",
            }}
        >
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button
                    sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "10px",
                        color: "white",
                        fontSize: "20px",
                        border: "0.5px dotted white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)"
                        },
                    }}
                >
                    Home
                </Button>
            </Link>
            <Link to="/VerifiedUserHome" style={{ textDecoration: 'none' }}>
                <Button
                    sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "10px",
                        color: "white",
                        fontSize: "20px",
                        border: "0.5px dotted white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                        },
                    }}
                >
                    Profile
                </Button>
            </Link>
            <Link to="/linkedin-profile" style={{ textDecoration: 'none' }}>
                <Button
                    sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "10px",
                        color: "white",
                        fontSize: "20px",
                        border: "0.5px dotted white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                        },
                    }}
                >
                    <LinkedIn sx={{ mr: 1 }} />
                    LinkedIn
                </Button>
            </Link>
            <Link to="/github-profile" style={{ textDecoration: 'none' }}>
                <Button
                    sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "10px",
                        color: "white",
                        fontSize: "20px",
                        border: "0.5px dotted white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                        },
                    }}
                >
                    <GitHub sx={{ mr: 1 }} />
                    GitHub
                </Button>
            </Link>
            <Link to="/twitter-profile" style={{ textDecoration: 'none' }}>
                <Button
                    sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "10px",
                        color: "white",
                        fontSize: "20px",
                        border: "0.5px dotted white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                        },
                    }}
                >
                    <Twitter sx={{ mr: 1 }} />
                    Twitter/X
                </Button>
            </Link>
        </Box>
    );
};
const LeftSideContainer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        height: "85%", // Ensure it fills the entire viewport height
        width: "20%", // Adjusted to 20% to match the description
        background: "linear-gradient(to right, darkslateblue, dimgray)",
        color: "white",
        p: 2,
        display: "flex",
        flexDirection: "column",
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
        marginLeft: "20%", // Adjusting marginLeft to 20% to match the LeftSideContainer width
        p: 2,
      }}
    >
      <LeftSideContainer />
    </Box>
  );
};

export default Navbar;
