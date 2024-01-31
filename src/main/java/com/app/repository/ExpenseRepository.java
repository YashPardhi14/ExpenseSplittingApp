package com.app.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {

	
 
}
