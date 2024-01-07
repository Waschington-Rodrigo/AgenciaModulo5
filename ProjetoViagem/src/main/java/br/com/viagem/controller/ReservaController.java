package br.com.viagem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.viagem.model.Reserva;
import br.com.viagem.repository.ReservaRepository;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/reservas")
public class ReservaController {
	@Autowired
	private ReservaRepository reservaRepository;

	@GetMapping
	public List<Reserva> listaReservas() {
		List<Reserva> listaReservas = reservaRepository.findAll();

		return listaReservas;
	}

	@GetMapping("/{id}")
	public Reserva findById(@PathVariable Long id) {
		return reservaRepository.findById(id).get();
	}

	@PostMapping
	public Reserva createReserva(@RequestBody Reserva reserva) {

		reservaRepository.save(reserva);

		return reserva;
	}

	@PutMapping("/{id}")
	public Reserva updateReserva(@PathVariable Long id, @RequestBody Reserva editReserva) {
		Reserva reserva = reservaRepository.findById(id).get();
		
		reserva.setQtdDias(editReserva.getQtdDias());
		reserva.setDataReserva(editReserva.getDataReserva());
		reserva.setHospedagem(editReserva.getHospedagem());
		reserva.setPacotePromo(editReserva.getPacotePromo());
		reserva.setUsuario(editReserva.getUsuario());
		reserva.setValorTotal(editReserva.getValorTotal());
		
		return reservaRepository.save(reserva);

	}

	@DeleteMapping("/{id}")
	public void deleteReserva(@PathVariable Long id) {
		reservaRepository.deleteById(id);
	}
}
