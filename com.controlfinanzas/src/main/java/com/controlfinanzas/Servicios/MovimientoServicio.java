package com.controlfinanzas.Servicios;

import com.controlfinanzas.Entidades.Movimiento;
import com.controlfinanzas.Persistencia.MovimientoPersistencia;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovimientoServicio {

    private final MovimientoPersistencia movimientoPersistencia;

    public MovimientoServicio(MovimientoPersistencia movimientoPersistencia) {
        this.movimientoPersistencia = movimientoPersistencia;
    }

    public List<Movimiento> obtenerMovimientos() {
        return movimientoPersistencia.findAll();
    }

    public Movimiento guardarMovimiento(Movimiento movimiento) {
        return movimientoPersistencia.save(movimiento);
    }

    public Movimiento actualizarMovimiento(int id, Movimiento movimientoNuevo) {

        Movimiento movimiento = movimientoPersistencia.findById(id).orElse(null);

        if (movimiento != null) {

            movimiento.setTipo(movimientoNuevo.getTipo());

            movimiento.setMonto(movimientoNuevo.getMonto());

            movimiento.setFecha(movimientoNuevo.getFecha());

            return movimientoPersistencia.save(movimiento);
        }

        return null;
    }

    public String eliminarMovimiento(int id) {

        movimientoPersistencia.deleteById(id);

        return "Movimiento eliminado correctamente";
    }
}