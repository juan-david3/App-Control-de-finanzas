package com.controlfinanzas.Persistencia;

import com.controlfinanzas.Entidades.Movimiento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovimientoPersistencia extends JpaRepository<Movimiento, Integer> {

}
