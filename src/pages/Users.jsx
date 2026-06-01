import { useEffect, useState } from "react";

function Users() {

    const [users, setUsers] = useState([]);
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    useEffect(() => {

        fetch("http://localhost:8080/usuarios")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));

    }, []);

    const guardarUsuario = async () => {

        const nuevoUsuario = {
            nombre,
            correo,
            contrasena
        };

        try {

            const respuesta = await fetch(
                "http://localhost:8080/usuarios",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(nuevoUsuario)
                }
            );

            if (respuesta.ok) {

                alert("Usuario guardado correctamente");

                window.location.reload();
            }

        } catch (error) {

            console.error(error);
        }
    };

    return (
        <div className="container mt-4">

            <h2>Users</h2>

            <div className="card p-3 mb-3">

                <h4>Create User</h4>

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />

                <input
                    type="password"
                    className="form-control mb-2"
                    placeholder="Password"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />

                <button
                    className="btn btn-primary"
                    onClick={guardarUsuario}
                >
                    Save User
                </button>

            </div>

            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map(user => (
                        <tr key={user.idUsuario}>
                            <td>{user.idUsuario}</td>
                            <td>{user.nombre}</td>
                            <td>{user.correo}</td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Users;