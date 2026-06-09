package com.controlfinanzas.Servicios;

import com.controlfinanzas.Entidades.Movimiento;
import com.controlfinanzas.Persistencia.MovimientoPersistencia;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ReporteServicioTest {

    @Test
    public void probarCalcularTotalMovimientos() {

        MovimientoPersistencia persistencia =
                Mockito.mock(MovimientoPersistencia.class);

        ReporteServicio servicio =
                new ReporteServicio(persistencia);

        List<Movimiento> movimientos = new ArrayList<>();

        Movimiento movimiento1 = new Movimiento();
        movimiento1.setMonto(100);

        Movimiento movimiento2 = new Movimiento();
        movimiento2.setMonto(200);

        movimientos.add(movimiento1);
        movimientos.add(movimiento2);

        Mockito.when(persistencia.findAll())
                .thenReturn(movimientos);

        assertEquals(
                300,
                servicio.calcularTotalMovimientos()
        );
    }
}
