package com.kidsland.kidsland.data.entity.subcategories;

import com.kidsland.kidsland.constants.Colors;
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
@Table(name = "sport", schema = "fc")
public class Sport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "item", nullable = false)
    private RelItem item;

    @Column(name = "type", length = 30)
    private String type;
    @ColumnDefault("gen_random_uuid()")
    @Column(name = "sport_id", nullable = false)
    private UUID sportId;

    @ElementCollection
    @Enumerated(EnumType.STRING)
    @Column(name = "color")
    private List<Colors> colors;
}