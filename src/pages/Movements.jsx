import { useEffect, useState } from "react";
import API_URL from "../services/Api";

function Movements() {

    const [movimientos, setMovimientos] = useState([]);

    const [tipo, setTipo] = useState("");
    const [monto, setMonto] = useState("");
    const [fecha, setFecha] = useState("");

    useEffect(() => {
        cargarMovimientos();
    }, []);

    const cargarMovimientos = () => {

        fetch(`${API_URL}/movimientos`)
            .then(response => response.json())
            .then(data => setMovimientos(data))
            .catch(error => console.error(error));
    };

    const guardarMovimiento = async () => {

        const nuevoMovimiento = {
            tipo,
            monto: parseFloat(monto),
            fecha
        };

        try {

            const respuesta = await fetch(
                `${API_URL}/movimientos`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(nuevoMovimiento)
                }
            );

            if (respuesta.ok) {

                alert("Movimiento guardado correctamente");

                setTipo("");
                setMonto("");
                setFecha("");

                cargarMovimientos();
            }

        } catch (error) {

            console.error(error);
        }
    };

    return (
        <div className="container mt-4">

            <h2>Movements</h2>

            <div className="card p-3 mb-3">

                <h4>Create Movement</h4>

                <select
                    className="form-control mb-2"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                >
                    <option value="">Select Type</option>
                    <option value="Ingreso">Ingreso</option>
                    <option value="Gasto">Gasto</option>
                </select>

                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Amount"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                />

                <input
                    type="date"
                    className="form-control mb-2"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />

                <button
                    className="btn btn-success"
                    onClick={guardarMovimiento}
                >
                    Save Movement
                </button>

            </div>

            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>

                    {movimientos.map(movimiento => (
                        <tr key={movimiento.idMovimiento}>
                            <td>{movimiento.idMovimiento}</td>
                            <td>{movimiento.tipo}</td>
                            <td>{movimiento.monto}</td>
                            <td>{movimiento.fecha}</td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Movements;