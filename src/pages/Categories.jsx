import { useEffect, useState } from "react";

function Categories() {

    const [categorias, setCategorias] = useState([]);

    const [nombreCategoria, setNombreCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");

    useEffect(() => {

        cargarCategorias();

    }, []);

    const cargarCategorias = () => {

        fetch("http://localhost:8080/categorias")
            .then(response => response.json())
            .then(data => setCategorias(data))
            .catch(error => console.error(error));
    };

    const guardarCategoria = async () => {

        const nuevaCategoria = {
            nombreCategoria,
            descripcion
        };

        try {

            const respuesta = await fetch(
                "http://localhost:8080/categorias",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(nuevaCategoria)
                }
            );

            if (respuesta.ok) {

                alert("Categoría guardada correctamente");

                setNombreCategoria("");
                setDescripcion("");

                cargarCategorias();
            }

        } catch (error) {

            console.error(error);
        }
    };

    return (
        <div className="container mt-4">

            <h2>Categories</h2>

            <div className="card p-3 mb-3">

                <h4>Create Category</h4>

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Category Name"
                    value={nombreCategoria}
                    onChange={(e) =>
                        setNombreCategoria(e.target.value)
                    }
                />

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Description"
                    value={descripcion}
                    onChange={(e) =>
                        setDescripcion(e.target.value)
                    }
                />

                <button
                    className="btn btn-success"
                    onClick={guardarCategoria}
                >
                    Save Category
                </button>

            </div>

            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>

                    {categorias.map(categoria => (
                        <tr key={categoria.idCategoria}>
                            <td>{categoria.idCategoria}</td>
                            <td>{categoria.nombreCategoria}</td>
                            <td>{categoria.descripcion}</td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Categories;