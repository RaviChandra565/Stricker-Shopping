package com.avn.service;

import java.time.Instant;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.avn.dto.ContactDto;
import com.avn.model.Contact;
import com.avn.model.MetaData;
import com.avn.repository.ContactRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl {

    private final ContactRepository repo;

    public String saveContactDetails(ContactDto dto) {

        Contact contact = convertToContact(dto);

        Contact savedContact = repo.save(contact);

        return savedContact != null ? "success" : "failed";
    }

    private Contact convertToContact(ContactDto dto) {

        Contact contact = new Contact();

        BeanUtils.copyProperties(dto, contact);

        MetaData data = new MetaData();
        data.setCreatedAt(Instant.now());
        data.setCreatedBy(dto.getName());

        contact.setData(data);

        return contact;
    }

    public ContactDto convertToContactDto(Contact contact) {

        ContactDto dto = new ContactDto();

        BeanUtils.copyProperties(contact, dto);

        return dto;
    }
}