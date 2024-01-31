package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.repository.GroupRepository;

@Service
public class GroupService {
	
	
	@Autowired
	
	private GroupRepository groupRepository;
	
	

}
