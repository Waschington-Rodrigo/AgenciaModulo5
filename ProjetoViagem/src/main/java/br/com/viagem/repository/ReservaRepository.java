package br.com.viagem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.viagem.model.Reserva;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {

}
