package com.kidsland.kidsland.data.repository;

import com.kidsland.kidsland.data.entity.User;
import com.kidsland.kidsland.dto.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    @Query("SELECT new com.kidsland.kidsland.dto.UserDTO(u.email, u.administrator, u.accessBlocked, u.readOnly, u.validTo) FROM User u WHERE u.email = ?1")
    Optional<UserDTO> findUserByEmail(String email);
}
