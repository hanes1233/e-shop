package com.kidsland.kidsland.data.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "obj_error", schema = "db")
public class ObjError {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "error_content", length = 100)
    private String errorContent;

    @Column(name = "stack_trace", length = Integer.MAX_VALUE)
    private String stackTrace;

    @Column(name = "item_id")
    private UUID itemId;

    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "subcategory_id")
    private Long subcategoryId;
}