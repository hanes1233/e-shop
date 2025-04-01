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
@Table(name = "dress", schema = "fc")
public class Dress {
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
    @ColumnDefault("gen_random_uuid()")
    @Column(name = "dress_id", nullable = false)
    private UUID dressId;

    @ElementCollection
    @Enumerated(EnumType.STRING)
    @Column(name = "color")
    private List<Colors> colors;

    @ElementCollection
    @Enumerated(EnumType.STRING)
    @Column(name = "seasons", columnDefinition = "varchar [](30)")
    private List<Seasons> seasons;
}