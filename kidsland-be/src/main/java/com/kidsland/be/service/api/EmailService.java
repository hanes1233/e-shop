package com.kidsland.be.service.api;

import com.kidsland.be.dto.EmailDTO;

public interface EmailService {
    void saveCommunication(EmailDTO emailDTO);
}
