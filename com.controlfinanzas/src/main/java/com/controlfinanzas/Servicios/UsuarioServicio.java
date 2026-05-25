package com.controlfinanzas.Servicios;

import com.controlfinanzas.Entidades.Usuario;
import com.controlfinanzas.Persistencia.UsuarioPersistencia;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServicio {

    private final UsuarioPersistencia usuarioPersistencia;

    public UsuarioServicio(UsuarioPersistencia usuarioPersistencia) {
        this.usuarioPersistencia = usuarioPersistencia;
    }

    public List<Usuario> obtenerUsuarios() {
        return usuarioPersistencia.findAll();
    }

    public Usuario guardarUsuario(Usuario usuario) {
        return usuarioPersistencia.save(usuario);
    }

    public Usuario actualizarUsuario(int id, Usuario usuarioNuevo) {

        Usuario usuario = usuarioPersistencia.findById(id).orElse(null);

        if (usuario != null) {

            usuario.setNombre(usuarioNuevo.getNombre());

            usuario.setCorreo(usuarioNuevo.getCorreo());

            usuario.setContrasena(usuarioNuevo.getContrasena());

            return usuarioPersistencia.save(usuario);
        }

        return null;
    }

    public String eliminarUsuario(int id) {

        usuarioPersistencia.deleteById(id);

        return "Usuario eliminado correctamente";
    }
}