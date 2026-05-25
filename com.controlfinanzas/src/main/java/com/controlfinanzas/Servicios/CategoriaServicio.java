package com.controlfinanzas.Servicios;

import com.controlfinanzas.Entidades.Categoria;
import com.controlfinanzas.Persistencia.CategoriaPersistencia;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaServicio {

    private final CategoriaPersistencia categoriaPersistencia;

    public CategoriaServicio(CategoriaPersistencia categoriaPersistencia) {
        this.categoriaPersistencia = categoriaPersistencia;
    }

    public List<Categoria> obtenerCategorias() {
        return categoriaPersistencia.findAll();
    }

    public Categoria guardarCategoria(Categoria categoria) {
        return categoriaPersistencia.save(categoria);
    }

    public Categoria actualizarCategoria(int id, Categoria categoriaNueva) {

        Categoria categoria = categoriaPersistencia.findById(id).orElse(null);

        if (categoria != null) {

            categoria.setNombreCategoria(categoriaNueva.getNombreCategoria());

            categoria.setDescripcion(categoriaNueva.getDescripcion());

            return categoriaPersistencia.save(categoria);
        }

        return null;
    }

    public String eliminarCategoria(int id) {

        categoriaPersistencia.deleteById(id);

        return "Categoria eliminada correctamente";
    }
}
