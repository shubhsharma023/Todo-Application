package com.cloudProject.TodoApp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="all")
public class Todo {

	@Id
	private Long id;
	
	private String title;
	private String done;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDone() {
		return done;
	}
	public void setDone(String done) {
		this.done = done;
	}
	public Todo() {
		super();
	}
	@Override
	public String toString() {
		return "Todo [id=" + id + ", title=" + title + ", done=" + done + "]";
	}
	
	
}
