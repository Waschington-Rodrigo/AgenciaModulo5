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

@Table
@Entity
public class Hospedagem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
    @Column(nullable = false)
	private String nome;
    
    @Column(nullable = false)
	private String cidade;
    
    @Column(nullable = false)
	private String estado;
    
    @Column(nullable = false)
	private String endereco;
    
    @Column(nullable = false)
	private String tipo;
    
    @Column(nullable = false)
	private String telefone;
    
    @Column(nullable = false)
    @NumberFormat(style = Style.CURRENCY, pattern = "#,##0.00")
	private BigDecimal valorDiaria;

	public Hospedagem() {
		super();
	}

	public Hospedagem(Long id, String nome, String cidade, String estado, String endereco, String tipo, String telefone,
			BigDecimal valorDiaria) {
		super();
		this.id = id;
		this.nome = nome;
		this.cidade = cidade;
		this.estado = estado;
		this.endereco = endereco;
		this.tipo = tipo;
		this.telefone = telefone;
		this.valorDiaria = valorDiaria;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
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

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public BigDecimal getValorDiaria() {
		return valorDiaria;
	}

	public void setValorDiaria(BigDecimal valorDiaria) {
		this.valorDiaria = valorDiaria;
	}

	@Override
	public int hashCode() {
		return Objects.hash(cidade, endereco, estado, id, nome, telefone, tipo, valorDiaria);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Hospedagem other = (Hospedagem) obj;
		return Objects.equals(cidade, other.cidade) && Objects.equals(endereco, other.endereco)
				&& Objects.equals(estado, other.estado) && Objects.equals(id, other.id)
				&& Objects.equals(nome, other.nome) && Objects.equals(telefone, other.telefone)
				&& Objects.equals(tipo, other.tipo) && Objects.equals(valorDiaria, other.valorDiaria);
	}

	@Override
	public String toString() {
		return "Hospedagem [id=" + id + ", nome=" + nome + ", cidade=" + cidade + ", estado=" + estado + ", endereco="
				+ endereco + ", tipo=" + tipo + ", telefone=" + telefone + ", valorDiaria=" + valorDiaria + "]";
	}
    
    
}
