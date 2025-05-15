package com.kidsland.be.data.repository.specification;

import com.kidsland.be.data.entity.base.Item;
import jakarta.persistence.criteria.Join;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ItemSpecification {

    public static <ITEM extends Item> Specification<ITEM> hasUrl(String url) {
        return (root, query, cb) -> {
            // Join Accessory -> RelItem
            Join<Object, Object> item = root.join("item");

            // Join RelItem -> Subcategory
            Join<Object, Object> subcategory = item.join("subcategory");

            // Access subcategory.url
            return cb.equal(subcategory.get("url"), url);
        };
    }
}
