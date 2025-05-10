package com.kidsland.kidsland.service.base;

import com.kidsland.kidsland.core.mapper.AbstractMapper;
import com.kidsland.kidsland.data.entity.KidslandFeedback;
import com.kidsland.kidsland.data.entity.KidslandEmail;
import com.kidsland.kidsland.data.entity.base.Communication;
import com.kidsland.kidsland.data.repository.api.AbstractCommunicationRepository;
import com.kidsland.kidsland.dto.base.CommunicationDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@RequiredArgsConstructor
public class AbstractCommunicationService<
        COMMUNICATION extends Communication, DTO extends CommunicationDTO> {

    private final AbstractCommunicationRepository<COMMUNICATION> communicationRepository;
    private final AbstractMapper<DTO, COMMUNICATION> abstractMapper;

    @Transactional
    public void saveCommunication(DTO dto) {
        if (dto == null) {
            log.warn("Communication is null. Cannot be saved to database.");
            return;
        }
        COMMUNICATION communication = abstractMapper.mapToEntity(dto);
        COMMUNICATION savedCommunication = communicationRepository.save(communication);
        logSendingConfirmation(savedCommunication);
    }

    private void logSendingConfirmation(COMMUNICATION communication) {
        String communicationType = switch (communication) {
            case KidslandFeedback ignored -> "Feedback";
            case KidslandEmail ignored -> "Email";
            default -> "Unknown communication type";
        };
        log.info("{} was saved to database with id {}", communicationType, communication.getId());
    }
}
