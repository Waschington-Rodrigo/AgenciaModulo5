package br.com.viagem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.viagem.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	 
	public Usuario findByCpf(String cpf);
}
