import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Users from "./pages/Users";
import Categories from "./pages/Categories";
import Movements from "./pages/Movements";
import Budgets from "./pages/Budgets";
import Reports from "./pages/Reports";
import Home from "./pages/Home";

function App() {

    return (
        <div>

            <Navbar />

            <div className="container-fluid">

                <div className="row">

                    <div className="col-md-2">
                        <Sidebar />
                    </div>

                    <div className="col-md-10 p-4">

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