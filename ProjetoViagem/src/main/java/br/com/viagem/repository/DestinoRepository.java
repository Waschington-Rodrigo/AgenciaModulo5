package br.com.viagem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.viagem.model.Destino;

public interface DestinoRepository extends JpaRepository<Destino, Long> {

}
