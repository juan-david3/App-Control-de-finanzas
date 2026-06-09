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
    public double obtenerTotal() {
        return reporteServicio.calcularTotalMovimientos();
    }

    @GetMapping("/estado")
    public String estado() {
        return "Reporte funcionando";
    }

    @GetMapping("/version")
    public String version() {
        return "1.0";
    }
}
