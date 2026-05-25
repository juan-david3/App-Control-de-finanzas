package com.controlfinanzas.Persistencia;

import com.controlfinanzas.Entidades.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioPersistencia extends JpaRepository<Usuario, Integer> {

}