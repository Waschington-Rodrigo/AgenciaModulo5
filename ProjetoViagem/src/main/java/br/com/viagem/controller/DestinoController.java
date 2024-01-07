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

import br.com.viagem.model.Destino;
import br.com.viagem.repository.DestinoRepository;

@CrossOrigin(origins =  "http://localhost:3000")

@RestController
@RequestMapping("/destinos")
public class DestinoController {

	@Autowired
	private DestinoRepository destinoRepository;

	@GetMapping
	public List<Destino> listaDestinos() {
		List<Destino> listaDestinos = destinoRepository.findAll();

		return listaDestinos;
	}

	@GetMapping("/{id}")
	public Destino findById(@PathVariable Long id) {
		return destinoRepository.findById(id).get();
	}

	@PostMapping
	public Destino createDestino(@RequestBody Destino newDestino) {
		destinoRepository.save(newDestino);

		return newDestino;
	}

	@PutMapping("/{id}")
	public Destino updateDestino(@PathVariable Long id, @RequestBody Destino editDestino) {
		Destino destino = destinoRepository.findById(id).get();
		
		destino.setLocalDestino(editDestino.getLocalDestino());
		destino.setValor(editDestino.getValor());
		destino.setEstado(editDestino.getEstado());
		destino.setCidade(editDestino.getCidade());
		
		destinoRepository.save(destino);
		
		return destino;
	}
	
	@DeleteMapping("/{id}")
	public void deleteDestino(@PathVariable Long id) {
		destinoRepository.deleteById(id);
	}
}
