package com.controlfinanzas.Persistencia;

import com.controlfinanzas.Entidades.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaPersistencia extends JpaRepository<Categoria, Integer> {

}