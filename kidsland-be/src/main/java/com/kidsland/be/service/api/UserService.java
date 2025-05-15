package com.kidsland.be.service.api;

import com.kidsland.be.dto.auth.UserDTO;

import java.util.Optional;

public interface UserService {

    Optional<UserDTO> findByEmail(String email);
}
