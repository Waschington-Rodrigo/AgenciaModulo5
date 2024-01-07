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

import br.com.viagem.model.Hospedagem;
import br.com.viagem.repository.HospedagemRepository;

@CrossOrigin(origins =  "http://localhost:3000")

@RestController
@RequestMapping("/hospedagens")
public class HospedagemController {

	@Autowired
	private HospedagemRepository hospedagemRepository;

	@GetMapping
	public List<Hospedagem> listaHospedagens() {
		List<Hospedagem> listaHospedagens = hospedagemRepository.findAll();

		return listaHospedagens;
	}

	@GetMapping("/{id}")
	public Hospedagem findById(@PathVariable Long id) {
		return hospedagemRepository.findById(id).get();
	}

	@PostMapping
	public Hospedagem createHospedagem(@RequestBody Hospedagem newHospedagem) {
		hospedagemRepository.save(newHospedagem);

		return newHospedagem;
	}

	@PutMapping("/{id}")
	public Hospedagem updateHospedagem(@PathVariable Long id, @RequestBody Hospedagem editHospedagem) {
		Hospedagem hospedagem = hospedagemRepository.findById(id).get();
		hospedagem.setNome(editHospedagem.getNome());
		hospedagem.setTipo(editHospedagem.getTipo());
		hospedagem.setTelefone(editHospedagem.getTelefone());
		hospedagem.setEndereco(editHospedagem.getEndereco());
		hospedagem.setEstado(editHospedagem.getEstado());
		hospedagem.setCidade(editHospedagem.getCidade());
		hospedagem.setValorDiaria(editHospedagem.getValorDiaria());
		hospedagemRepository.save(hospedagem);
		
		return hospedagem;
	}
	
	@DeleteMapping("/{id}")
	public void deleteHospedagem(@PathVariable Long id) {
		hospedagemRepository.deleteById(id);
	}
}