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
public class Passagem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private int pacotePromo;

	@Column(name = "dataViagem", nullable = false)
	@DateTimeFormat(iso = ISO.DATE)
	private LocalDate dataViagem;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "usuario_id_fk", nullable = false)
	private Usuario usuario;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "destino_id_fk", nullable = false)
	private Destino destino;

	@Column(nullable = false)
	@NumberFormat(style = Style.CURRENCY, pattern = "#,##0.00")
	private BigDecimal valorTotal;

	public Passagem() {
		super();
	}

	public Passagem(Long id, int pacotePromo, LocalDate dataViagem, Usuario usuario, Destino destino) {
		super();
		this.id = id;
		this.pacotePromo = pacotePromo;
		this.dataViagem = dataViagem;
		this.usuario = usuario;
		this.destino = destino;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getPacotePromo() {
		return pacotePromo;
	}

	public void setPacotePromo(int pacotePromo) {
		this.pacotePromo = pacotePromo;
	}

	public LocalDate getDataViagem() {
		return dataViagem;
	}

	public void setDataViagem(LocalDate dataViagem) {
		this.dataViagem = dataViagem;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Destino getDestino() {
		return destino;
	}

	public void setDestino(Destino destino) {
		this.destino = destino;
	}

	public BigDecimal getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(BigDecimal valorTotal) {
		this.valorTotal = valorTotal;
	}

	@Override
	public int hashCode() {
		return Objects.hash(dataViagem, destino, id, pacotePromo, usuario, valorTotal);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Passagem other = (Passagem) obj;
		return Objects.equals(dataViagem, other.dataViagem) && Objects.equals(destino, other.destino)
				&& Objects.equals(id, other.id) && pacotePromo == other.pacotePromo
				&& Objects.equals(usuario, other.usuario) && Objects.equals(valorTotal, other.valorTotal);
	}

	@Override
	public String toString() {
		return "Passagem [id=" + id + ", pacotePromo=" + pacotePromo + ", dataViagem=" + dataViagem + ", usuario="
				+ usuario + ", destino=" + destino + ", valorTotal=" + valorTotal + "]";
	}

}
