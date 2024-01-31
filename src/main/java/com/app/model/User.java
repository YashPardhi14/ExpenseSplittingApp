package com.app.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User {
	
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Column(nullable = false)
	    private String username;

	    // Other user attributes

	    @ManyToMany
	    @JoinTable(
	            name = "user_group",
	            joinColumns = @JoinColumn(name = "user_id"),
	            inverseJoinColumns = @JoinColumn(name = "group_id")
	    )
	    private List<Group> groups;

	    @OneToMany(mappedBy = "user")
	    private List<Expense> expenses;

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public List<Group> getGroups() {
			return groups;
		}

		public void setGroups(List<Group> groups) {
			this.groups = groups;
		}

		public List<Expense> getExpenses() {
			return expenses;
		}

		public void setExpenses(List<Expense> expenses) {
			this.expenses = expenses;
		}

		@Override
		public String toString() {
			return "User [id=" + id + ", username=" + username + ", groups=" + groups + ", expenses=" + expenses + "]";
		}
	    
	    
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
