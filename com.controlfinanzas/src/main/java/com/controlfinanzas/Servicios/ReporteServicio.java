package com.controlfinanzas.Servicios;

import com.controlfinanzas.Entidades.Movimiento;
import com.controlfinanzas.Persistencia.MovimientoPersistencia;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReporteServicio {

    private final MovimientoPersistencia movimientoPersistencia;

    public ReporteServicio(MovimientoPersistencia movimientoPersistencia) {
        this.movimientoPersistencia = movimientoPersistencia;
    }

    public double calcularTotalMovimientos() {

        List<Movimiento> movimientos =
                movimientoPersistencia.findAll();

        double total = 0;

        for (Movimiento movimiento : movimientos) {

            total += movimiento.getMonto();
        }

        return total;
    }
}