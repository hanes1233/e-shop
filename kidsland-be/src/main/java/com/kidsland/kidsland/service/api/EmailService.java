package com.kidsland.kidsland.service.api;

import com.kidsland.kidsland.dto.EmailDTO;

public interface EmailService {
    void saveCommunication(EmailDTO emailDTO);
}
