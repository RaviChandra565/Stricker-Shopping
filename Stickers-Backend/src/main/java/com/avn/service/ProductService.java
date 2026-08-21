package com.avn.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.avn.dto.ProductDto;
import com.avn.model.Product;
import com.avn.repository.ProductRepository;

import ch.qos.logback.core.joran.util.beans.BeanUtil;

@Service
public class ProductService {
	
	private final ProductRepository repo;
	private List<ProductDto> dtoList;
	
	public ProductService(ProductRepository repo) {
		super();
		this.repo = repo;
	}
	
	public List<ProductDto> getProducts1() {
		List<Product> products = repo.findAll();
		//List<ProductDto> dto = new ArrayList<ProductDto>();
		List<ProductDto> dtoList = products.stream().map(this::convertToDto).collect(Collectors.toList());
		return dtoList;
//		for(Product prod : products) {
//			ProductDto dto = convertToDto(prod);
//			dtoList.add(dto);
//			
//		}
		//return dtoList;
	}
	public ProductDto convertToDto(Product product) {
		ProductDto dto = new ProductDto();
		BeanUtils.copyProperties(product,dto);
//		dto.setProduct_id(product.getProduct_id());
//		dto.setName(product.getName());
//		dto.setDescription(product.getDescription());
//		dto.setPrice(product.getPrice());
//		dto.setImageUrl(product.getImageUrl());
//		dto.setPopularity(product.getPopularity());
		return dto;
		
	}

	
}