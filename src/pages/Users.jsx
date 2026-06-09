import { useEffect, useState } from "react";
import API_URL from "../services/Api";

function Users() {

    const [users, setUsers] = useState([]);
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const [editando, setEditando] = useState(false);
    const [idUsuarioEditar, setIdUsuarioEditar] = useState(null);

    const [busqueda, setBusqueda] = useState("");

    const [mensaje, setMensaje] = useState("");
    const [tipoMensaje, setTipoMensaje] = useState("");

    const cargarUsuarios = () => {

        fetch(`${API_URL}/usuarios`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    };

    useEffect(() => {

        cargarUsuarios();

    }, []);

    const validarCorreo = (correo) => {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(correo);
    };

    const mostrarMensaje = (texto, tipo) => {

        setMensaje(texto);
        setTipoMensaje(tipo);

        setTimeout(() => {
            setMensaje("");
            setTipoMensaje("");
        }, 3000);
    };

    const guardarUsuario = async () => {

        if (!nombre.trim()) {
            mostrarMensaje("Debe ingresar el nombre", "danger");
            return;
        }

        if (!correo.trim()) {
            mostrarMensaje("Debe ingresar el correo", "danger");
            return;
        }

        if (!validarCorreo(correo)) {
            mostrarMensaje("Debe ingresar un correo válido", "danger");
            return;
        }

        if (!contrasena.trim()) {
            mostrarMensaje("Debe ingresar la contraseña", "danger");
            return;
        }

        const nuevoUsuario = {
            nombre,
            correo,
            contrasena
        };

        try {

            const respuesta = await fetch(
                `${API_URL}/usuarios`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(nuevoUsuario)
                }
            );

            if (respuesta.ok) {

                mostrarMensaje(
                    "Usuario guardado correctamente",
                    "success"
                );

                limpiarFormulario();

                cargarUsuarios();
            }

        } catch (error) {

            console.error(error);

            mostrarMensaje(
                "Error al guardar usuario",
                "danger"
            );
        }
    };

    const editarUsuario = (user) => {

        setIdUsuarioEditar(user.idUsuario);

        setNombre(user.nombre);
        setCorreo(user.correo);

        setContrasena("");

        setEditando(true);
    };

    const actualizarUsuario = async () => {

        if (!nombre.trim()) {
            mostrarMensaje("Debe ingresar el nombre", "danger");
            return;
        }

        if (!correo.trim()) {
            mostrarMensaje("Debe ingresar el correo", "danger");
            return;
        }

        if (!validarCorreo(correo)) {
            mostrarMensaje("Debe ingresar un correo válido", "danger");
            return;
        }

        const usuarioActualizado = {
            nombre,
            correo,
            contrasena
        };

        try {

            const respuesta = await fetch(
                `${API_URL}/usuarios/${idUsuarioEditar}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(usuarioActualizado)
                }
            );

            if (respuesta.ok) {

                mostrarMensaje(
                    "Usuario actualizado correctamente",
                    "warning"
                );

                cancelarEdicion();

                cargarUsuarios();
            }

        } catch (error) {

            console.error(error);

            mostrarMensaje(
                "Error al actualizar usuario",
                "danger"
            );
        }
    };

    const eliminarUsuario = async (id) => {

        const confirmar = window.confirm(
            "¿Desea eliminar este usuario?"
        );

        if (!confirmar) {
            return;
        }

        try {

            const respuesta = await fetch(
                `${API_URL}/usuarios/${id}`,
                {
                    method: "DELETE"
                }
            );

            if (respuesta.ok) {

                mostrarMensaje(
                    "Usuario eliminado correctamente",
                    "danger"
                );

                cargarUsuarios();
            }

        } catch (error) {

            console.error(error);

            mostrarMensaje(
                "Error al eliminar usuario",
                "danger"
            );
        }
    };

    const limpiarFormulario = () => {

        setNombre("");
        setCorreo("");
        setContrasena("");
    };

    const cancelarEdicion = () => {

        setEditando(false);
        setIdUsuarioEditar(null);

        limpiarFormulario();
    };

    const usuariosFiltrados = [...users]
        .sort((a, b) => b.idUsuario - a.idUsuario)
        .filter(
            (user) =>
                user.nombre
                    .toLowerCase()
                    .includes(busqueda.toLowerCase()) ||
                user.correo
                    .toLowerCase()
                    .includes(busqueda.toLowerCase())
        );

    return (
        <div className="container mt-4">

            <h2 className="mb-3">
                👤 User Management
            </h2>

            {
                mensaje && (
                    <div
                        className={`alert alert-${tipoMensaje}`}
                    >
                        {mensaje}
                    </div>
                )
            }

            <p className="text-muted">
                Total users: {users.length}
            </p>

            <div className="card shadow p-4 mb-4">

                <h4>
                    {
                        editando
                            ? "Edit User"
                            : "Create User"
                    }
                </h4>

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name"
                    value={nombre}
                    onChange={(e) =>
                        setNombre(e.target.value)
                    }
                />

                <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    value={correo}
                    onChange={(e) =>
                        setCorreo(e.target.value)
                    }
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={contrasena}
                    onChange={(e) =>
                        setContrasena(e.target.value)
                    }
                />

                <div className="d-flex gap-2">

                    <button
                        className="btn btn-primary"
                        onClick={
                            editando
                                ? actualizarUsuario
                                : guardarUsuario
                        }
                    >
                        {
                            editando
                                ? "Update User"
                                : "Save User"
                        }
                    </button>

                    <button
                        className="btn btn-outline-secondary"
                        onClick={limpiarFormulario}
                    >
                        Clear
                    </button>

                    {
                        editando && (
                            <button
                                className="btn btn-secondary"
                                onClick={cancelarEdicion}
                            >
                                Cancel
                            </button>
                        )
                    }

                </div>

            </div>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="🔍 Search user..."
                value={busqueda}
                onChange={(e) =>
                    setBusqueda(e.target.value)
                }
            />

            <table className="table table-striped table-hover">

                <thead className="table-dark">

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        usuariosFiltrados.map((user) => (

                            <tr key={user.idUsuario}>

                                <td>{user.idUsuario}</td>
                                <td>{user.nombre}</td>
                                <td>{user.correo}</td>

                                <td>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() =>
                                            editarUsuario(user)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            eliminarUsuario(
                                                user.idUsuario
                                            )
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default Users;