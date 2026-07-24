import { Box } from "lucide-react";
import React from "react";
import Button from "../Button/Button";
import { useOutletContext } from "react-router";

const Navbar = () => {
  const { isSignedIn, userName, signOut, signIn } =
    useOutletContext<AuthContext>();
  const handleSubmit = async () => {
    // Handle form submission logic here
    if (isSignedIn) {
      try {
        await signOut();
      } catch (e) {
        console.error(`puter sign out failed, ${e}`);
      }
      return;
    }

    try {
      await signIn();
    } catch (e) {
      console.error(`error puter signIn failed ${e}`);
    }
  };
  return (
    <div>
      <header className="navbar">
        <nav className="inner">
          <div className="left">
            <div className="brand">
              <Box className="Logo" />
              <span className="name">Roomify</span>
            </div>
            <ul className="links">
              <a href="#">Product</a>
              <a href="#">Pricing</a>
              <a href="#">Community</a>
              <a href="#">Enterprise</a>
            </ul>
          </div>

          <div className="actions">
            {isSignedIn ? (
              <>
                <span className="greeting">
                  {userName ? `Hi, ${userName}` : "Signed in"}
                </span>
                <Button size="sm" onClick={handleSubmit} className="btn">
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button size="sm" onClick={handleSubmit} variant="ghost">
                  Login
                </Button>
                <a href="#upload" className="cta">
                  Get Started
                </a>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
