package com.kidsland.kidsland;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.kidsland")
public class KidslandApplication {

	public static void main(String[] args) {
		SpringApplication.run(KidslandApplication.class, args);
	}

}
