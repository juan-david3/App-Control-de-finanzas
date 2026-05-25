package com.controlfinanzas.Persistencia;

import com.controlfinanzas.Entidades.Presupuesto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PresupuestoPersistencia extends JpaRepository<Presupuesto, Integer> {

}
