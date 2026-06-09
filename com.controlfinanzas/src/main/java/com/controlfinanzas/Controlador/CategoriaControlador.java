package com.controlfinanzas.Controlador;

import com.controlfinanzas.Entidades.Categoria;
import com.controlfinanzas.Servicios.CategoriaServicio;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaControlador {

    private final CategoriaServicio categoriaServicio;

    public CategoriaControlador(CategoriaServicio categoriaServicio) {
        this.categoriaServicio = categoriaServicio;
    }

    @GetMapping
    public List<Categoria> obtenerCategorias() {
        return categoriaServicio.obtenerCategorias();
    }

    @PostMapping
    public Categoria guardarCategoria(@RequestBody Categoria categoria) {
        return categoriaServicio.guardarCategoria(categoria);
    }

    @PutMapping("/{id}")
    public Categoria actualizarCategoria(
            @PathVariable int id,
            @RequestBody Categoria categoria) {

        return categoriaServicio.actualizarCategoria(id, categoria);
    }

    @DeleteMapping("/{id}")
    public String eliminarCategoria(@PathVariable int id) {

        return categoriaServicio.eliminarCategoria(id);
    }
}