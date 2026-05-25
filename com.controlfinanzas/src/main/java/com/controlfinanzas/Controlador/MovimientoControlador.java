package com.controlfinanzas.Controlador;

import com.controlfinanzas.Entidades.Movimiento;
import com.controlfinanzas.Servicios.MovimientoServicio;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movimientos")
public class MovimientoControlador {

    private final MovimientoServicio movimientoServicio;

    public MovimientoControlador(MovimientoServicio movimientoServicio) {
        this.movimientoServicio = movimientoServicio;
    }

    @GetMapping
    public List<Movimiento> obtenerMovimientos() {
        return movimientoServicio.obtenerMovimientos();
    }

    @PostMapping
    public Movimiento guardarMovimiento(@RequestBody Movimiento movimiento) {
        return movimientoServicio.guardarMovimiento(movimiento);
    }

    @PutMapping("/{id}")
    public Movimiento actualizarMovimiento(
            @PathVariable int id,
            @RequestBody Movimiento movimiento) {

        return movimientoServicio.actualizarMovimiento(id, movimiento);
    }

    @DeleteMapping("/{id}")
    public String eliminarMovimiento(@PathVariable int id) {

        return movimientoServicio.eliminarMovimiento(id);
    }
}