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
    ((SELECT id FROM fc.category WHERE name = 'Dress'), 'Special offer')
