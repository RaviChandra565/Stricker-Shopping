package com.avn.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactDto {
	private Long id;
	private String name;
	private String email;
	private Long mobileNo;
	private String massage;

}
