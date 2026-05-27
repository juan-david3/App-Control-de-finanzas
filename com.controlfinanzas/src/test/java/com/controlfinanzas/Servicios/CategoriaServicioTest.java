package com.controlfinanzas.Servicios;

import com.controlfinanzas.Entidades.Categoria;
import com.controlfinanzas.Persistencia.CategoriaPersistencia;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CategoriaServicioTest {

    @Test
    public void probarGuardarCategoria() {

        CategoriaPersistencia persistencia =
                Mockito.mock(CategoriaPersistencia.class);

        CategoriaServicio servicio =
                new CategoriaServicio(persistencia);

        Categoria categoria = new Categoria();

        categoria.setNombreCategoria("Ingresos");

        Mockito.when(persistencia.save(categoria))
                .thenReturn(categoria);

        assertEquals(
                "Ingresos",
                servicio.guardarCategoria(categoria)
                        .getNombreCategoria()
        );
    }
}