package com.controlfinanzas.Servicios;

import com.controlfinanzas.Entidades.Usuario;
import com.controlfinanzas.Persistencia.UsuarioPersistencia;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UsuarioServicioTest {

    @Test
    public void probarObtenerUsuarios() {

        UsuarioPersistencia usuarioPersistencia =
                Mockito.mock(UsuarioPersistencia.class);

        UsuarioServicio usuarioServicio =
                new UsuarioServicio(usuarioPersistencia);

        List<Usuario> usuarios = new ArrayList<>();

        Usuario usuario = new Usuario();

        usuario.setNombre("Juan");

        usuarios.add(usuario);

        Mockito.when(usuarioPersistencia.findAll())
                .thenReturn(usuarios);

        List<Usuario> resultado =
                usuarioServicio.obtenerUsuarios();

        assertEquals(1, resultado.size());

    }
    @Test
    public void probarGuardarUsuario() {

        UsuarioPersistencia persistencia =
                Mockito.mock(UsuarioPersistencia.class);

        UsuarioServicio servicio =
                new UsuarioServicio(persistencia);

        Usuario usuario = new Usuario();
        usuario.setNombre("Juan");

        Mockito.when(persistencia.save(usuario))
                .thenReturn(usuario);

        assertEquals(
                "Juan",
                servicio.guardarUsuario(usuario).getNombre()
        );
    }

    @Test
    public void probarEliminarUsuario() {

        UsuarioPersistencia persistencia =
                Mockito.mock(UsuarioPersistencia.class);

        UsuarioServicio servicio =
                new UsuarioServicio(persistencia);

        servicio.eliminarUsuario(1);

        Mockito.verify(persistencia)
                .deleteById(1);
    }

    @Test
    public void probarActualizarUsuario() {

        UsuarioPersistencia persistencia =
                Mockito.mock(UsuarioPersistencia.class);

        UsuarioServicio servicio =
                new UsuarioServicio(persistencia);

        Usuario usuario = new Usuario();

        usuario.setNombre("Pedro");

        Mockito.when(persistencia.save(usuario))
                .thenReturn(usuario);

        Usuario resultado =
                servicio.guardarUsuario(usuario);

        assertEquals(
                "Pedro",
                resultado.getNombre()
        );
    }
}