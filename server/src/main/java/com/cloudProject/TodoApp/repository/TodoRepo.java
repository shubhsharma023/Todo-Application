package com.cloudProject.TodoApp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cloudProject.TodoApp.model.Todo;

public interface TodoRepo extends MongoRepository <Todo, Long> {

}
