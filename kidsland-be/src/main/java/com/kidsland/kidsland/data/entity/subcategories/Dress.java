package com.kidsland.kidsland.data.entity.subcategories;

import com.kidsland.kidsland.constants.Color;
import com.kidsland.kidsland.data.entity.ItemEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity
@Accessors(chain = true)
@Table(name = "dress", schema = "fc")
public class Dress implements ItemEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "item", nullable = false)
    private RelItem item;

    @Column(name = "seasons", nullable = false, length = 50)
    private String seasons;

    @ColumnDefault("gen_random_uuid()")
    @Column(name = "dress_id", nullable = false)
    private UUID dressId;

    @Transient
    private List<Color> colors;

    public void setColors(List<Color> colors) {
        StringBuilder stringBuilder = new StringBuilder();
        colors.forEach(color -> stringBuilder.append(color.name()).append(";"));
        if (!stringBuilder.isEmpty()) {
            stringBuilder.deleteCharAt(stringBuilder.length() - 1);
        }
        this.item.setColors(stringBuilder.toString());
    }
}