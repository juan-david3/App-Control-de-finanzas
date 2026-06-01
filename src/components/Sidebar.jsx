import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="bg-light p-3 vh-100">

            <h5>Menu</h5>

            <ul className="list-group">

                <li className="list-group-item">
                    <Link to="/" className="text-decoration-none">
                        Home
                    </Link>
                </li>

                <li className="list-group-item">
                    <Link to="/usuarios" className="text-decoration-none">
                        Users
                    </Link>
                </li>

                <li className="list-group-item">
                    <Link to="/categorias" className="text-decoration-none">
                        Categories
                    </Link>
                </li>

                <li className="list-group-item">
                    <Link to="/movimientos" className="text-decoration-none">
                        Movements
                    </Link>
                </li>

                <li className="list-group-item">
                    <Link to="/presupuestos" className="text-decoration-none">
                        Budgets
                    </Link>
                </li>

                <li className="list-group-item">
                    <Link to="/reportes" className="text-decoration-none">
                        Reports
                    </Link>
                </li>

            </ul>

        </div>
    );
}

export default Sidebar;