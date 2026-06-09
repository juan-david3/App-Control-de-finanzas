package com.controlfinanzas.Servicios;

import com.controlfinanzas.Entidades.Movimiento;
import com.controlfinanzas.Persistencia.MovimientoPersistencia;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class MovimientoServicioTest {

    @Test
    public void probarGuardarMovimiento() {

        MovimientoPersistencia persistencia =
                Mockito.mock(MovimientoPersistencia.class);

        MovimientoServicio servicio =
                new MovimientoServicio(persistencia);

        Movimiento movimiento = new Movimiento();

        movimiento.setTipo("Ingreso");

        Mockito.when(persistencia.save(movimiento))
                .thenReturn(movimiento);

        assertEquals(
                "Ingreso",
                servicio.guardarMovimiento(movimiento)
                        .getTipo()
        );
    }
}