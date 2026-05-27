package com.controlfinanzas.Servicios;

import com.controlfinanzas.Entidades.Presupuesto;
import com.controlfinanzas.Persistencia.PresupuestoPersistencia;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PresupuestoServicioTest {

    @Test
    public void probarGuardarPresupuesto() {

        PresupuestoPersistencia persistencia =
                Mockito.mock(PresupuestoPersistencia.class);

        PresupuestoServicio servicio =
                new PresupuestoServicio(persistencia);

        Presupuesto presupuesto = new Presupuesto();

        presupuesto.setMontoLimite(500000);

        Mockito.when(persistencia.save(presupuesto))
                .thenReturn(presupuesto);

        assertEquals(
                500000,
                servicio.guardarPresupuesto(presupuesto)
                        .getMontoLimite()
        );
    }
}
