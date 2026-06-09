package com.controlfinanzas.Servicios;

import com.controlfinanzas.Entidades.Presupuesto;
import com.controlfinanzas.Persistencia.PresupuestoPersistencia;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PresupuestoServicio {

    private final PresupuestoPersistencia presupuestoPersistencia;

    public PresupuestoServicio(PresupuestoPersistencia presupuestoPersistencia) {
        this.presupuestoPersistencia = presupuestoPersistencia;
    }

    public List<Presupuesto> obtenerPresupuestos() {
        return presupuestoPersistencia.findAll();
    }

    public Presupuesto guardarPresupuesto(Presupuesto presupuesto) {
        return presupuestoPersistencia.save(presupuesto);
    }

    public Presupuesto actualizarPresupuesto(int id, Presupuesto presupuestoNuevo) {

        Presupuesto presupuesto = presupuestoPersistencia.findById(id).orElse(null);

        if (presupuesto != null) {

            presupuesto.setMontoLimite(
                    presupuestoNuevo.getMontoLimite());

            presupuesto.setMes(
                    presupuestoNuevo.getMes());

            return presupuestoPersistencia.save(presupuesto);
        }

        return null;
    }

    public String eliminarPresupuesto(int id) {

        presupuestoPersistencia.deleteById(id);

        return "Presupuesto eliminado correctamente";
    }
}