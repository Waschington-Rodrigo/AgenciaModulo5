package br.com.viagem.model;

import java.math.BigDecimal;
import java.util.Objects;

import org.springframework.format.annotation.NumberFormat;
import org.springframework.format.annotation.NumberFormat.Style;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Destino {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;


	@Column(nullable = false)
	private String cidade;

	@Column(nullable = false)
	private String estado;
	
	@Column(nullable = false)
	private String localDestino;
	
	@Column(nullable = false)
	@NumberFormat(style = Style.CURRENCY, pattern = "#,##0.00")
	private BigDecimal valor;

	public Destino() {
		super();
	}

	public Destino(long id, String cidade, String estado, String localDestino, BigDecimal valor) {
		super();
		this.id = id;
		this.cidade = cidade;
		this.estado = estado;
		this.localDestino = localDestino;
		this.valor = valor;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getLocalDestino() {
		return localDestino;
	}

	public void setLocalDestino(String localDestino) {
		this.localDestino = localDestino;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}

	

	@Override
	public int hashCode() {
		return Objects.hash(cidade, estado, id, localDestino, valor);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destino other = (Destino) obj;
		return Objects.equals(cidade, other.cidade) && Objects.equals(estado, other.estado) && id == other.id
				&& Objects.equals(localDestino, other.localDestino) && Objects.equals(valor, other.valor);
	}

	@Override
	public String toString() {
		return "Destino [id=" + id + ", cidade=" + cidade + ", estado=" + estado + ", localDestino=" + localDestino
				+ ", valor=" + valor + "]";
	}


	
	
	
	
}
