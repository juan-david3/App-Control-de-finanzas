package com.controlfinanzas.Controlador;

import com.controlfinanzas.Servicios.ReporteServicio;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reportes")
public class ReporteControlador {

    private final ReporteServicio reporteServicio;

    public ReporteControlador(ReporteServicio reporteServicio) {
        this.reporteServicio = reporteServicio;
    }

    @GetMapping("/total")
    public double obtenerTotalMovimientos() {

        return reporteServicio.calcularTotalMovimientos();
    }
}
