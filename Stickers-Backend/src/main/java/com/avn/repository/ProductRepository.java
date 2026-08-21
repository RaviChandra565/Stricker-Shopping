package com.avn.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.avn.model.Product;
public interface ProductRepository extends JpaRepository<Product, Long> {
	//named query methods
	Boolean existsByName (String name);
	List<Product>
	findAllByPopularityGreaterThan(Integer popularity);
}
