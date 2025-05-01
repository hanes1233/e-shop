package com.kidsland.kidsland.data.entity.subcategories;

import com.kidsland.kidsland.constants.Color;
import com.kidsland.kidsland.core.entity.AbstractEntity;
import com.kidsland.kidsland.data.entity.base.Item;
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
@Table(name = "baby", schema = "fc")
public class Baby extends AbstractEntity implements Item {

    @OneToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "item", nullable = false)
    private RelItem item;

    @ColumnDefault("gen_random_uuid()")
    @Column(name = "baby_id", nullable = false)
    private UUID babyId;

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
    @Override
    public Long getCategoryId() {
        if (item == null) {
            return null;
        }
        var category = item.getCategory();
        if (category == null) {
            return null;
        }
        return category.getId();
    }

    @Override
    public Long getSubcategoryId() {
        if (item == null) {
            return null;
        }
        var subcategory = item.getSubcategory();
        if (subcategory == null) {
            return null;
        }
        return subcategory.getId();
    }

    @Override
    public String getItemName() {
        if (item == null) {
            return null;
        }
        return item.getItemName();
    }

    @Override
    public UUID getItemId() {
        return babyId;
    }

    @Override
    public void setItem(RelItem item) {
        this.item = item;
    }
}