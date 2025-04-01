package com.kidsland.kidsland.data.entity.subcategories;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "toy", schema = "fc")
public class Toy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "item", nullable = false)
    private RelItem item;

    @ColumnDefault("false")
    @Column(name = "is_available")
    private Boolean isAvailable;

    @ColumnDefault("gen_random_uuid()")
    @Column(name = "toy_id", nullable = false)
    private UUID toyId;
}