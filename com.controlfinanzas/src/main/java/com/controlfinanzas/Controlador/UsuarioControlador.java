package com.controlfinanzas.Controlador;

import com.controlfinanzas.Entidades.Usuario;
import com.controlfinanzas.Servicios.UsuarioServicio;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioControlador {

    private final UsuarioServicio usuarioServicio;

    public UsuarioControlador(UsuarioServicio usuarioServicio) {
        this.usuarioServicio = usuarioServicio;
    }

    @GetMapping
    public List<Usuario> obtenerUsuarios() {
        return usuarioServicio.obtenerUsuarios();
    }

    @PostMapping
    public Usuario guardarUsuario(@RequestBody Usuario usuario) {
        return usuarioServicio.guardarUsuario(usuario);
    }

    @PutMapping("/{id}")
    public Usuario actualizarUsuario(
            @PathVariable int id,
            @RequestBody Usuario usuario) {

        return usuarioServicio.actualizarUsuario(id, usuario);
    }

    @DeleteMapping("/{id}")
    public String eliminarUsuario(@PathVariable int id) {

        return usuarioServicio.eliminarUsuario(id);
    }
}