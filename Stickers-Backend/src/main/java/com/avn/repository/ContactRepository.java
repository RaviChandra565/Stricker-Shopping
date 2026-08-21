package com.avn.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.avn.model.Contact;

public interface ContactRepository extends JpaRepository<Contact,Long>{

}