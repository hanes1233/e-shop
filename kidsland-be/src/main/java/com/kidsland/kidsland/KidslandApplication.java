package com.kidsland.kidsland;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication(scanBasePackages = "com.kidsland")
@EnableJpaAuditing(dateTimeProviderRef = "auditingDateTimeProvider")
public class KidslandApplication {

	public static void main(String[] args) {
		SpringApplication.run(KidslandApplication.class, args);
	}

}
