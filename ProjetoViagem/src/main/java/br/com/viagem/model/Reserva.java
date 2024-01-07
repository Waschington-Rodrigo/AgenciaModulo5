package br.com.viagem.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.format.annotation.NumberFormat;
import org.springframework.format.annotation.NumberFormat.Style;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class Reserva {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private int qtdDias;
	
	@Column(name = "dataReserva", nullable = false)
    @DateTimeFormat(iso = ISO.DATE)
	private LocalDate dataReserva;
	
	@Column(nullable = false)
	private int pacotePromo;
	
	@Column(nullable = false)
    @NumberFormat(style = Style.CURRENCY, pattern = "#,##0.00")
	private BigDecimal valorTotal;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "hospedagem_id_fk", nullable = false)
	private Hospedagem hospedagem;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "usuario_id_fk", nullable = false)
	private Usuario usuario;

	public Reserva() {
		super();
	}

	public Reserva(Long id, int qtdDias, LocalDate dataReserva, int pacotePromo, BigDecimal valorTotal,
			Hospedagem hospedagem, Usuario usuario) {
		super();
		this.id = id;
		this.qtdDias = qtdDias;
		this.dataReserva = dataReserva;
		this.pacotePromo = pacotePromo;
		this.valorTotal = valorTotal;
		this.hospedagem = hospedagem;
		this.usuario = usuario;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getQtdDias() {
		return qtdDias;
	}

	public void setQtdDias(int qtdDias) {
		this.qtdDias = qtdDias;
	}

	public LocalDate getDataReserva() {
		return dataReserva;
	}

	public void setDataReserva(LocalDate dataReserva) {
		this.dataReserva = dataReserva;
	}

	public int getPacotePromo() {
		return pacotePromo;
	}

	public void setPacotePromo(int pacotePromo) {
		this.pacotePromo = pacotePromo;
	}

	public BigDecimal getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(BigDecimal valorTotal) {
		this.valorTotal = valorTotal;
	}

	public Hospedagem getHospedagem() {
		return hospedagem;
	}

	public void setHospedagem(Hospedagem hospedagem) {
		this.hospedagem = hospedagem;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	@Override
	public int hashCode() {
		return Objects.hash(dataReserva, hospedagem, id, pacotePromo, qtdDias, usuario, valorTotal);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Reserva other = (Reserva) obj;
		return Objects.equals(dataReserva, other.dataReserva) && Objects.equals(hospedagem, other.hospedagem)
				&& Objects.equals(id, other.id) && pacotePromo == other.pacotePromo && qtdDias == other.qtdDias
				&& Objects.equals(usuario, other.usuario) && Objects.equals(valorTotal, other.valorTotal);
	}

	@Override
	public String toString() {
		return "Reserva [id=" + id + ", qtdDias=" + qtdDias + ", dataReserva=" + dataReserva + ", pacotePromo="
				+ pacotePromo + ", valorTotal=" + valorTotal + ", hospedagem=" + hospedagem + ", usuario=" + usuario
				+ "]";
	}
	
	
}
