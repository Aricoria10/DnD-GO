import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">D&D-GO</h1>
          </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {/* TODO: display the user's username */} Create Character
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {/* TODO: display the user's username */} Choose Character
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/about">
                About Us {/* Add "About Us" link */}
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/about">
                About Us {/* Add "About Us" link */}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
