package com.kidsland.kidsland.service.impl;

import com.kidsland.kidsland.data.entity.KidslandEmail;
import com.kidsland.kidsland.data.repository.KidslandEmailRepository;
import com.kidsland.kidsland.dto.EmailDTO;
import com.kidsland.kidsland.dto.mapper.mapstruct.communication.EmailMapper;
import com.kidsland.kidsland.service.api.EmailService;
import com.kidsland.kidsland.service.base.AbstractCommunicationService;
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
