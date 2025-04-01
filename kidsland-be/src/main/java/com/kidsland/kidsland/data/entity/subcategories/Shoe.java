package com.kidsland.kidsland.data.entity.subcategories;

import com.kidsland.kidsland.constants.Colors;
import com.kidsland.kidsland.constants.Seasons;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "shoes", schema = "fc")
public class Shoe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "item", nullable = false)
    private RelItem item;

    @Column(name = "type", nullable = false, length = 30)
    private String type;
    @Column(name = "description", length = 250)
    private String description;

    @ColumnDefault("gen_random_uuid()")
    @Column(name = "shoes_id", nullable = false)
    private UUID shoesId;

    @ElementCollection
    @Enumerated(EnumType.STRING)
    @Column(name = "color")
    private List<Colors> colors;

    @ElementCollection
    @Enumerated(EnumType.STRING)
    @Column(name = "seasons", columnDefinition = "varchar [](30)")
    private List<Seasons> seasons;
}