package com.controlfinanzas.Entidades;

import jakarta.persistence.*;

@Entity
@Table(name = "presupuestos")
public class Presupuesto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPresupuesto;

    private double montoLimite;

    private String mes;

    public Presupuesto() {
    }

    public int getIdPresupuesto() {
        return idPresupuesto;
    }

    public void setIdPresupuesto(int idPresupuesto) {
        this.idPresupuesto = idPresupuesto;
    }

    public double getMontoLimite() {
        return montoLimite;
    }

    public void setMontoLimite(double montoLimite) {
        this.montoLimite = montoLimite;
    }

    public String getMes() {
        return mes;
    }

    public void setMes(String mes) {
        this.mes = mes;
    }
}