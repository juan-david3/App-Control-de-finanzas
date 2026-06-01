import { useEffect, useState } from "react";

function Budgets() {

    const [presupuestos, setPresupuestos] = useState([]);

    const [montoLimite, setMontoLimite] = useState("");
    const [mes, setMes] = useState("");

    useEffect(() => {
        cargarPresupuestos();
    }, []);

    const cargarPresupuestos = () => {

        fetch("http://localhost:8080/presupuestos")
            .then(response => response.json())
            .then(data => setPresupuestos(data))
            .catch(error => console.error(error));
    };

    const guardarPresupuesto = async () => {

        const nuevoPresupuesto = {
            montoLimite: parseFloat(montoLimite),
            mes
        };

        try {

            const respuesta = await fetch(
                "http://localhost:8080/presupuestos",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(nuevoPresupuesto)
                }
            );

            if (respuesta.ok) {

                alert("Budget saved successfully");

                setMontoLimite("");
                setMes("");

                cargarPresupuestos();
            }

        } catch (error) {

            console.error(error);
        }
    };

    return (
        <div className="container mt-4">

            <h2>Budgets</h2>

            <div className="card p-3 mb-3">

                <h4>Create Budget</h4>

                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Budget Limit"
                    value={montoLimite}
                    onChange={(e) => setMontoLimite(e.target.value)}
                />

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Month"
                    value={mes}
                    onChange={(e) => setMes(e.target.value)}
                />

                <button
                    className="btn btn-success"
                    onClick={guardarPresupuesto}
                >
                    Save Budget
                </button>

            </div>

            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Limit</th>
                        <th>Month</th>
                    </tr>
                </thead>

                <tbody>

                    {presupuestos.map(presupuesto => (
                        <tr key={presupuesto.idPresupuesto}>
                            <td>{presupuesto.idPresupuesto}</td>
                            <td>{presupuesto.montoLimite}</td>
                            <td>{presupuesto.mes}</td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Budgets;