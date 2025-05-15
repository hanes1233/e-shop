package com.kidsland.be.service.impl;

import com.kidsland.be.data.repository.UserRepository;
import com.kidsland.be.dto.auth.UserDTO;
import com.kidsland.be.service.api.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public Optional<UserDTO> findByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }
}
