import { useEffect, useState } from "react";
import API_URL from "../services/Api";
function Home() {

    const [usuarios, setUsuarios] = useState(0);
    const [categorias, setCategorias] = useState(0);
    const [movimientos, setMovimientos] = useState(0);
    const [presupuestos, setPresupuestos] = useState(0);

        useEffect(() => {
                const cargarDashboard = async () => {

        try {

            const usuariosRes =
                await fetch(`${API_URL}/usuarios`);

            const categoriasRes =
                await fetch(`${API_URL}/categorias`);

            const movimientosRes =
                await fetch(`${API_URL}/movimientos`);

            const presupuestosRes =
                await fetch(`${API_URL}/presupuestos`);

            const usuariosData =
                await usuariosRes.json();

            const categoriasData =
                await categoriasRes.json();

            const movimientosData =
                await movimientosRes.json();

            const presupuestosData =
                await presupuestosRes.json();

            setUsuarios(usuariosData.length);
            setCategorias(categoriasData.length);
            setMovimientos(movimientosData.length);
            setPresupuestos(presupuestosData.length);

        } catch (error) {

            console.error(
                "Error cargando dashboard:",
                error
            );

        }

    };

        cargarDashboard();

    }, []);

    return (

        <div>

            <h2>Financial Control Dashboard</h2>

            <div className="row mt-4">

                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5>Users</h5>
                            <h3>{usuarios}</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5>Categories</h5>
                            <h3>{categorias}</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5>Movements</h5>
                            <h3>{movimientos}</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5>Budgets</h5>
                            <h3>{presupuestos}</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Home;