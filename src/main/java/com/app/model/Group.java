package com.app.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="`groups`")
public class Group {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Column(nullable = false)
	    private String groupName;

	    // Other group attributes

	    @ManyToMany(mappedBy = "groups")
	    private List<User> users;

	    @OneToMany(mappedBy = "group")
	    private List<Expense> expenses;

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getGroupName() {
			return groupName;
		}

		public void setGroupName(String groupName) {
			this.groupName = groupName;
		}

		public List<User> getUsers() {
			return users;
		}

		public void setUsers(List<User> users) {
			this.users = users;
		}

		public List<Expense> getExpenses() {
			return expenses;
		}

		public void setExpenses(List<Expense> expenses) {
			this.expenses = expenses;
		}

		@Override
		public String toString() {
			return "Group [id=" + id + ", groupName=" + groupName + ", users=" + users + ", expenses=" + expenses + "]";
		}


	    
	

}
