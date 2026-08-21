package com.avn.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.avn.dto.ProductDto;
import com.avn.model.Product;
import com.avn.service.ProductService;
//@Controller + @ResponseBody
@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {
	
	@Autowired
	private final ProductService service;
	public ProductController(ProductService service) {
		super();
		this.service = service;
	}
	// @ResponseBody
	@GetMapping("/home")
	public String getProducts() {
		return "products are loading.....";
	}
	@GetMapping
	public List<ProductDto> getProducts1() {
		return service.getProducts1();
	}
}
