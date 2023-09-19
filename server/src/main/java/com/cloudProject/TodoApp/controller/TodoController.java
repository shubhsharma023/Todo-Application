package com.cloudProject.TodoApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cloudProject.TodoApp.model.Todo;
import com.cloudProject.TodoApp.repository.TodoRepo;

@RestController
@CrossOrigin
public class TodoController {

	@Autowired
	TodoRepo repo;
	
	@GetMapping("/home")
	public String home() {
		return "Hi there! This is Shubhankar. Welcome to my Todo Application.";
	}
	
	@GetMapping("/all")
	public List<Todo>getAllList(){
		return repo.findAll();
	}
	
	
	
	@PostMapping("/add")
	public Todo save (@RequestBody Todo todo) {
		return repo.save(todo);
	}
	
	@PutMapping("/update/{id}")
	public Todo update(@RequestBody Todo todo) {
		return repo.save(todo);
	}
	
	@DeleteMapping(value="delete/{id}")
	public void delete(@PathVariable Long id) {
		repo.deleteById(id);
	}
	
}
