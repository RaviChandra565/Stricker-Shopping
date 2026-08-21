package com.avn.model;

import java.math.BigDecimal;
import java.time.Instant;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
@Embeddable
@Getter
@Setter
public class MetaData {
	//@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	private Long product_id;
//	@Column(nullable = false)
//	private String name;
//	@Column(nullable = false)
//	private String description;
//	@Column(nullable = false)
//	private BigDecimal price;
//	@Column(nullable = false)
//	private Integer popularity;
//	private String imageUrl;
	@ColumnDefault("CURRENT_TIMESTAMP")
	private Instant createdAt;
	@Column(nullable = false)
	private String createdBy;
	@ColumnDefault("null")
	private Instant updatedAt;
	@ColumnDefault("null")
	private String updatedBy;
	
	

}
