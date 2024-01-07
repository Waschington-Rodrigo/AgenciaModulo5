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

import br.com.viagem.model.Usuario;
import br.com.viagem.repository.UsuarioRepository;

@CrossOrigin(origins =  "http://localhost:3000")

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@GetMapping
	public List<Usuario> listaUsuarios() {
		List<Usuario> listaUsuarios = usuarioRepository.findAll();

		return listaUsuarios;
	}

	@GetMapping("/{id}")
	public Usuario findById(@PathVariable Long id) {
		return usuarioRepository.findById(id).get();
	}
	@GetMapping("/cpf/{cpf}")
	public Usuario findByCpf(@PathVariable String cpf) {
		return usuarioRepository.findByCpf(cpf);
	}

	@PostMapping
	public Usuario createUsuario(@RequestBody Usuario newUsuario) {
		usuarioRepository.save(newUsuario);

		return newUsuario;
	}

	@PutMapping("/{id}")
	public Usuario updateUsuario(@PathVariable Long id, @RequestBody Usuario editUsuario) {
		Usuario usuario = usuarioRepository.findById(id).get();
		usuario.setDataNascimento(editUsuario.getDataNascimento());
		usuario.setNome(editUsuario.getNome());
		usuario.setCpf(editUsuario.getCpf());
		usuario.setEmail(editUsuario.getEmail());
		usuario.setTelefone(editUsuario.getTelefone());
		usuario.setEndereco(editUsuario.getEndereco());
		usuario.setEstado(editUsuario.getEstado());
		usuario.setCidade(editUsuario.getCidade());
		
		usuarioRepository.save(usuario);
		
		return usuario;
	}
	
	@DeleteMapping("/{id}")
	public void deleteUsuario(@PathVariable Long id) {
		usuarioRepository.deleteById(id);
	}

}
