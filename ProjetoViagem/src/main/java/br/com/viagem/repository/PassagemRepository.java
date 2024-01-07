package br.com.viagem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.viagem.model.Passagem;

public interface PassagemRepository extends JpaRepository<Passagem, Long> {

}
