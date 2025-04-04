package com.kidsland.kidsland.data.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.UUID;

@Getter
@Setter
@Entity
@Accessors(chain = true)
@Table(name = "obj_error", schema = "db")
public class ObjError {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "error_content", length = 100)
    private String errorContent;

    @Column(name = "stack_trace", length = Integer.MAX_VALUE)
    private String stackTrace;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "request_id")
    private ObjRegistrationRequest request;

    @Column(name = "item_id")
    private UUID itemId;

    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "subcategory_id")
    private Long subcategoryId;

}