import { Link } from "react-router-dom";

import {
    FaHome,
    FaUsers,
    FaFolder,
    FaMoneyBill,
    FaWallet,
    FaChartBar
} from "react-icons/fa";

function Sidebar() {

    return (

        <div
            className="sidebar bg-dark text-white p-3 vh-100"
        >

            <h4 className="text-center mb-4">

                💰 Control Finanzas

            </h4>

            <ul className="list-group">

                <li className="list-group-item">

                    <Link
                        to="/"
                        className="text-decoration-none"
                    >
                        <FaHome /> Home
                    </Link>

                </li>

                <li className="list-group-item">

                    <Link
                        to="/usuarios"
                        className="text-decoration-none"
                    >
                        <FaUsers /> Users
                    </Link>

                </li>

                <li className="list-group-item">

                    <Link
                        to="/categorias"
                        className="text-decoration-none"
                    >
                        <FaFolder /> Categories
                    </Link>

                </li>

                <li className="list-group-item">

                    <Link
                        to="/movimientos"
                        className="text-decoration-none"
                    >
                        <FaMoneyBill /> Movements
                    </Link>

                </li>

                <li className="list-group-item">

                    <Link
                        to="/presupuestos"
                        className="text-decoration-none"
                    >
                        <FaWallet /> Budgets
                    </Link>

                </li>

                <li className="list-group-item">

                    <Link
                        to="/reportes"
                        className="text-decoration-none"
                    >
                        <FaChartBar /> Reports
                    </Link>

                </li>

            </ul>

        </div>

    );
}

export default Sidebar;