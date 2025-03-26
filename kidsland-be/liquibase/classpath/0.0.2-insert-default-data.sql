--liquibase formatted sql
--changeset pavel:initial_script
--comment Initial script

INSERT INTO fc.category (name, is_gender_specific, is_special_offer)
VALUES ( 'Toys', false, false),
       ( 'Dress', true, true),
       ( 'Shoes', true, true),
       ( 'Accessories', false, false),
       ( 'Furniture', false, true),
       ( 'For babies', false, false),
       ( 'Sport', true, true);

INSERT INTO fc.subcategory (category_id, name)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Cars'),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Dolls'),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Plushies'),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Building blocks'),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Educational'),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'LEGO');

INSERT INTO fc.subcategory (category_id, name)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Dress'), 'Boys'),
    ((SELECT id FROM fc.category WHERE name = 'Dress'), 'Girls'),
    ((SELECT id FROM fc.category WHERE name = 'Dress'), 'Special offer');

INSERT INTO fc.subcategory (category_id, name)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Shoes'), 'Boys'),
    ((SELECT id FROM fc.category WHERE name = 'Shoes'), 'Girls'),
    ((SELECT id FROM fc.category WHERE name = 'Shoes'), 'Special offer');

INSERT INTO fc.subcategory (category_id, name)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Accessories'), 'School'),
    ((SELECT id FROM fc.category WHERE name = 'Accessories'), 'Party'),
    ((SELECT id FROM fc.category WHERE name = 'Accessories'), 'Creative'),
    ((SELECT id FROM fc.category WHERE name = 'Accessories'), 'Tech');

INSERT INTO fc.subcategory (category_id, name)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Playroom'),
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Bedroom'),
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Outdoor'),
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Wardrobes'),
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Special offer');

INSERT INTO fc.subcategory (category_id, name)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Strollers'),
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Clothing & Apparel'),
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Toys & Games'),
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Feeding'),
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Bath & Skincare');
