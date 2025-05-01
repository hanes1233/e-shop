package com.kidsland.kidsland.service.impl;

import com.kidsland.kidsland.data.repository.UserRepository;
import com.kidsland.kidsland.dto.auth.UserDTO;
import com.kidsland.kidsland.service.api.UserService;
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
