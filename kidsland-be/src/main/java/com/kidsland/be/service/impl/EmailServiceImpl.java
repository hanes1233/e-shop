package com.kidsland.be.service.impl;

import com.kidsland.be.data.entity.KidslandEmail;
import com.kidsland.be.data.repository.KidslandEmailRepository;
import com.kidsland.be.dto.EmailDTO;
import com.kidsland.be.dto.mapper.mapstruct.communication.EmailMapper;
import com.kidsland.be.service.api.EmailService;
import com.kidsland.be.service.base.AbstractCommunicationService;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl
        extends AbstractCommunicationService<KidslandEmail, EmailDTO> implements EmailService {
    public EmailServiceImpl(
            KidslandEmailRepository kidslandEmailRepository,
            EmailMapper emailMapper) {
        super(kidslandEmailRepository, emailMapper);
    }
}
