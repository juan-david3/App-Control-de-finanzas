package com.controlfinanzas.Controlador;

import com.controlfinanzas.Entidades.Presupuesto;
import com.controlfinanzas.Servicios.PresupuestoServicio;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/presupuestos")
public class PresupuestoControlador {

    private final PresupuestoServicio presupuestoServicio;

    public PresupuestoControlador(PresupuestoServicio presupuestoServicio) {
        this.presupuestoServicio = presupuestoServicio;
    }

    @GetMapping
    public List<Presupuesto> obtenerPresupuestos() {
        return presupuestoServicio.obtenerPresupuestos();
    }

    @PostMapping
    public Presupuesto guardarPresupuesto(@RequestBody Presupuesto presupuesto) {
        return presupuestoServicio.guardarPresupuesto(presupuesto);
    }

    @PutMapping("/{id}")
    public Presupuesto actualizarPresupuesto(
            @PathVariable int id,
            @RequestBody Presupuesto presupuesto) {

        return presupuestoServicio.actualizarPresupuesto(id, presupuesto);
    }

    @DeleteMapping("/{id}")
    public String eliminarPresupuesto(@PathVariable int id) {

        return presupuestoServicio.eliminarPresupuesto(id);
    }
}