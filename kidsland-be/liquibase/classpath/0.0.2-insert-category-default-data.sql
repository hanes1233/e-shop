--liquibase formatted sql
--changeset pavel:fill_data_script
--comment fill_data script

INSERT INTO fc.category (name, url)
VALUES ( 'Toys', '/toys'),
       ( 'Dress', '/dress'),
       ( 'Shoes', '/shoes'),
       ( 'Accessories', '/accessories'),
       ( 'Furniture', '/furniture'),
       ( 'For babies', '/baby'),
       ( 'Sport', '/sport');

INSERT INTO fc.subcategory (category_id, name, url)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Cars', 'cars'),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Dolls', 'dolls'),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Plushies', 'plushies'),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Building blocks', 'building'),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'Educational', 'educational'),
    ((SELECT id FROM fc.category WHERE name = 'Toys'), 'LEGO', 'lego');

INSERT INTO fc.subcategory (category_id, name, url)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Dress'), 'Boys', 'boys'),
    ((SELECT id FROM fc.category WHERE name = 'Dress'), 'Girls', 'girls'),
    ((SELECT id FROM fc.category WHERE name = 'Dress'), 'Special offer', 'special');

INSERT INTO fc.subcategory (category_id, name, url)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Shoes'), 'Boys', 'boys'),
    ((SELECT id FROM fc.category WHERE name = 'Shoes'), 'Girls', 'girls'),
    ((SELECT id FROM fc.category WHERE name = 'Shoes'), 'Special offer', 'special');

INSERT INTO fc.subcategory (category_id, name, url)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Accessories'), 'School', 'school'),
    ((SELECT id FROM fc.category WHERE name = 'Accessories'), 'Party', 'party'),
    ((SELECT id FROM fc.category WHERE name = 'Accessories'), 'Creative', 'creative'),
    ((SELECT id FROM fc.category WHERE name = 'Accessories'), 'Tech', 'tech');

INSERT INTO fc.subcategory (category_id, name, url)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Playroom', 'playroom'),
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Bedroom', 'bedroom'),
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Outdoor', 'outdoor'),
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Wardrobes', 'wardrobes'),
    ((SELECT id FROM fc.category WHERE name = 'Furniture'), 'Special offer', 'special');

INSERT INTO fc.subcategory (category_id, name, url)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Strollers', 'strollers'),
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Clothing & Apparel', 'clothing'),
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Toys & Games', 'entertainment'),
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Feeding', 'feeding'),
    ((SELECT id FROM fc.category WHERE name = 'For babies'), 'Bath & Skincare', 'bath');

INSERT INTO fc.subcategory (category_id, name, url)
VALUES
    ((SELECT id FROM fc.category WHERE name = 'Sport'), 'Boys', 'boys'),
    ((SELECT id FROM fc.category WHERE name = 'Sport'), 'Girls', 'girls'),
    ((SELECT id FROM fc.category WHERE name = 'Sport'), 'Special offer', 'special');