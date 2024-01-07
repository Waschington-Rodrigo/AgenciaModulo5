package br.com.viagem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.viagem.model.Hospedagem;

public interface HospedagemRepository extends JpaRepository<Hospedagem, Long> {

}
