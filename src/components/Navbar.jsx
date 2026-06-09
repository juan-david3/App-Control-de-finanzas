import {
    FaMoon,
    FaSun,
    FaBars
} from "react-icons/fa";

function Navbar({
    darkMode,
    toggleDarkMode,
    toggleSidebar
}) {

    return (

        <nav className="navbar navbar-dark bg-primary shadow">

            <div className="container-fluid">

                <button
                    className="btn btn-light"
                    onClick={toggleSidebar}
                >
                    <FaBars />
                </button>

                <span
                    className="navbar-brand fw-bold"
                >
                    💰 Control Finanzas
                </span>

                <button
                    className="btn btn-light"
                    onClick={toggleDarkMode}
                >
                    {
                        darkMode
                            ? <FaSun />
                            : <FaMoon />
                    }
                </button>

            </div>

        </nav>

    );
}

export default Navbar;