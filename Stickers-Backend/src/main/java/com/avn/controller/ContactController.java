package com.avn.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.avn.dto.ContactDto;
import com.avn.service.ContactServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/contacts")
@RequiredArgsConstructor
public class ContactController {
	private final ContactServiceImpl service;
	@PostMapping
	public String saveContactDetails(@RequestBody ContactDto dto) {
		return service.saveContactDetails(dto);
	}

}
