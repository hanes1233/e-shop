package com.kidsland.kidsland.service.api;

import com.kidsland.kidsland.dto.UserDTO;

import java.util.Optional;

public interface UserService {

    Optional<UserDTO> findByEmail(String email);
}
