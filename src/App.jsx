import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Users from "./pages/Users";
import Categories from "./pages/Categories";
import Movements from "./pages/Movements";
import Budgets from "./pages/Budgets";
import Reports from "./pages/Reports";
import Home from "./pages/Home";

function App() {

    const [darkMode, setDarkMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {

        const temaGuardado =
            localStorage.getItem("darkMode");

        if (temaGuardado === "true") {
            setDarkMode(true);
            document.body.classList.add("dark-mode");
        }

    }, []);

    const toggleDarkMode = () => {

        const nuevoModo = !darkMode;

        setDarkMode(nuevoModo);

        localStorage.setItem(
            "darkMode",
            nuevoModo
        );

        if (nuevoModo) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    };

    return (

        <div>

            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                toggleSidebar={() =>
                    setSidebarOpen(!sidebarOpen)
                }
            />

            <div className="container-fluid">

                <div className="row">

                    {
                        sidebarOpen &&
                        (
                            <div className="col-md-2">
                                <Sidebar />
                            </div>
                        )
                    }

                    <div
                        className={
                            sidebarOpen
                                ? "col-md-10 p-4"
                                : "col-md-12 p-4"
                        }
                    >

                        <Routes>

                            <Route
                                path="/"
                                element={<Home />}
                            />

                            <Route
                                path="/usuarios"
                                element={<Users />}
                            />

                            <Route
                                path="/categorias"
                                element={<Categories />}
                            />

                            <Route
                                path="/movimientos"
                                element={<Movements />}
                            />

                            <Route
                                path="/presupuestos"
                                element={<Budgets />}
                            />

                            <Route
                                path="/reportes"
                                element={<Reports />}
                            />

                        </Routes>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default App;