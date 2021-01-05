package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

	//Query Lookup Strategies - permite usar nomes especificos de metodos
	//que ja fazem as queryes pra nós. Olhar spring jpa documentation
	List<Product> findAllByOrderByNameAsc();
}
