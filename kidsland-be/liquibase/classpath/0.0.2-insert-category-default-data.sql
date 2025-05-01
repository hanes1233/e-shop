--liquibase formatted sql
--changeset pavel:fill_data_script
--comment fill_data script

INSERT INTO fc.category (name, url, tech_create_date, tech_create_identity_id)
VALUES ( 'Toys', '/toys', NOW(), gen_random_uuid()),
       ( 'Dress', '/dress', NOW(), gen_random_uuid()),
       ( 'Shoes', '/shoes', NOW(), gen_random_uuid()),
       ( 'Accessories', '/accessories', NOW(), gen_random_uuid()),
       ( 'Furniture', '/furniture', NOW(), gen_random_uuid()),
       ( 'For babies', '/baby', NOW(), gen_random_uuid()),
       ( 'Sport', '/sport', NOW(), gen_random_uuid());

INSERT INTO fc.subcategory (category_id, name, url, tech_create_date, tech_create_identity_id)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Cars', 'cars', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Dolls', 'dolls', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Plushies', 'plushies', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Building blocks', 'building', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Educational', 'educational', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'LEGO', 'lego', NOW(), gen_random_uuid());

INSERT INTO fc.subcategory (category_id, name, url, tech_create_date, tech_create_identity_id)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Dress'), 'Boys', 'boys', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Dress'), 'Girls', 'girls', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Dress'), 'Special offer', 'special', NOW(), gen_random_uuid());

INSERT INTO fc.subcategory (category_id, name, url, tech_create_date, tech_create_identity_id)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Shoes'), 'Boys', 'boys', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Shoes'), 'Girls', 'girls', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Shoes'), 'Special offer', 'special', NOW(), gen_random_uuid());

INSERT INTO fc.subcategory (category_id, name, url, tech_create_date, tech_create_identity_id)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Accessories'), 'School', 'school', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Accessories'), 'Party', 'party', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Accessories'), 'Creative', 'creative', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Accessories'), 'Tech', 'tech', NOW(), gen_random_uuid());

INSERT INTO fc.subcategory (category_id, name, url, tech_create_date, tech_create_identity_id)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Playroom', 'playroom', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Bedroom', 'bedroom', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Outdoor', 'outdoor', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Wardrobes', 'wardrobes', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Special offer', 'special', NOW(), gen_random_uuid());

INSERT INTO fc.subcategory (category_id, name, url, tech_create_date, tech_create_identity_id)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Strollers', 'strollers', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Clothing & Apparel', 'clothing', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Toys & Games', 'entertainment', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Feeding', 'feeding', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Bath & Skincare', 'bath', NOW(), gen_random_uuid());

INSERT INTO fc.subcategory (category_id, name, url, tech_create_date, tech_create_identity_id)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Sport'), 'Boys', 'boys', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Sport'), 'Girls', 'girls', NOW(), gen_random_uuid()),
    ((SELECT id FROM fc.category WHERE name = 'Sport'), 'Special offer', 'special', NOW(), gen_random_uuid());