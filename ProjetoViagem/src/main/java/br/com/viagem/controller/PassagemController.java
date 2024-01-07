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

import br.com.viagem.model.Passagem;
import br.com.viagem.repository.PassagemRepository;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/passagens")
public class PassagemController {
	@Autowired
	private PassagemRepository passagemRepository;

	@GetMapping
	public List<Passagem> listaPassagens() {
		List<Passagem> listaPassagems = passagemRepository.findAll();

		return listaPassagems;
	}

	@GetMapping("/{id}")
	public Passagem findById(@PathVariable Long id) {
		return passagemRepository.findById(id).get();
	}

	@PostMapping
	public Passagem createPassagem(@RequestBody Passagem passagem) {

		passagemRepository.save(passagem);

		return passagem;
	}

	@PutMapping("/{id}")
	public Passagem updatePassagem(@PathVariable Long id, @RequestBody Passagem editPassagem) {
		Passagem passagem = passagemRepository.findById(id).get();

		passagem.setDataViagem(editPassagem.getDataViagem());
		passagem.setDestino(editPassagem.getDestino());
		passagem.setPacotePromo(editPassagem.getPacotePromo());
		passagem.setUsuario(editPassagem.getUsuario());
		passagem.setValorTotal(editPassagem.getValorTotal());
		return passagemRepository.save(passagem);

	}

	@DeleteMapping("/{id}")
	public void deletePassagem(@PathVariable Long id) {
		passagemRepository.deleteById(id);
	}
}
