--liquibase formatted sql
--changeset pavel:initial_script
--comment Initial script

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE SCHEMA IF NOT EXISTS fc;

CREATE TABLE fc.user_h
(
    username VARCHAR (20) NOT NULL,
    password VARCHAR (250) NOT NULL,
    identity_id UUID NOT NULL,
    administrator BOOLEAN NOT NULL DEFAULT FALSE,
    access_blocked BOOLEAN NOT NULL DEFAULT FALSE,
    read_only BOOLEAN NOT NULL DEFAULT FALSE,
    valid_from TIMESTAMPTZ NOT NULL DEFAULT '1900-01-01 00:00:00.000 +01:00',
    valid_to TIMESTAMPTZ NOT NULL DEFAULT '2999-12-31 00:00:00.000 +01:00',
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
);

ALTER TABLE fc.user_h
    ADD CONSTRAINT pk_user PRIMARY KEY (username);

CREATE TABLE fc.category
(
    id BIGSERIAL PRIMARY KEY,
    description VARCHAR (250),
    hidden BOOLEAN NOT NULL DEFAULT FALSE,
    url VARCHAR (50) NOT NULL,
    category_id UUID NOT NULL DEFAULT gen_random_uuid(),
    name VARCHAR (30) NOT NULL
);

CREATE TABLE fc.subcategory
(
    id BIGSERIAL PRIMARY KEY,
    category_id BIGINT NOT NULL,
    description VARCHAR(250),
    url VARCHAR(50) NOT NULL,
    hidden BOOLEAN NOT NULL DEFAULT FALSE,
    subcategory_id UUID NOT NULL DEFAULT gen_random_uuid(),
    name VARCHAR(30) NOT NULL
);

ALTER TABLE fc.subcategory
    ADD CONSTRAINT fk_category_subcategory
        FOREIGN KEY (category_id)
            REFERENCES fc.category(id)
            ON DELETE CASCADE;

CREATE TABLE fc.rel_item
(
    id BIGSERIAL PRIMARY KEY,
    subcategory_id BIGINT NOT NULL,
    category_id BIGINT NOT NULL,
    item_name VARCHAR(30) NOT NULL,
    brand VARCHAR(30) NOT NULL,
    reserved INTEGER NOT NULL DEFAULT 0,
    quantity INTEGER NOT NULL DEFAULT 0,
    is_available BOOLEAN default FALSE,
    item_create_date TIMESTAMPTZ NOT NULL DEFAULT '2025-03-03 00:00:00.000 +01:00',
    description VARCHAR(250),
    size INTEGER,
    item_id UUID NOT NULL DEFAULT gen_random_uuid()
);

ALTER TABLE fc.rel_item
    ADD CONSTRAINT  fk_category_rel_item
        FOREIGN KEY (category_id)
            REFERENCES fc.category(id)
            ON DELETE CASCADE,
    ADD CONSTRAINT  fk_subcategory_rel_item
        FOREIGN KEY (subcategory_id)
            REFERENCES fc.subcategory(id)
            ON DELETE CASCADE;

CREATE TABLE fc.toy
(
    id             BIGSERIAL PRIMARY KEY,
    item           BIGINT NOT NULL,
    is_available   BOOLEAN default FALSE,
    toy_id         UUID NOT NULL DEFAULT gen_random_uuid()
);

ALTER TABLE fc.toy
    ADD CONSTRAINT unique_toy UNIQUE (item),
    ADD CONSTRAINT  fk_rel_item_toy
        FOREIGN KEY (item)
            REFERENCES fc.rel_item(id)
            ON DELETE CASCADE;

CREATE TABLE fc.dress
(
    id             BIGSERIAL PRIMARY KEY,
    item           BIGINT NOT NULL,
    colors         VARCHAR(30)[],
    type           VARCHAR(30) NOT NULL,
    seasons        VARCHAR(30)[],
    dress_id       UUID NOT NULL DEFAULT gen_random_uuid()
);

ALTER TABLE fc.dress
    ADD CONSTRAINT unique_dress UNIQUE (item),
    ADD CONSTRAINT  fk_rel_item_dress
        FOREIGN KEY (item)
            REFERENCES fc.rel_item(id)
            ON DELETE CASCADE;

CREATE TABLE fc.shoes
(
    id             BIGSERIAL PRIMARY KEY,
    item           BIGINT NOT NULL,
    colors         VARCHAR(30)[],
    type           VARCHAR(30) NOT NULL,
    seasons        VARCHAR(30)[],
    description    VARCHAR(250),
    shoes_id       UUID NOT NULL DEFAULT gen_random_uuid()
);

ALTER TABLE fc.shoes
    ADD CONSTRAINT unique_shoes UNIQUE (item),
    ADD CONSTRAINT  fk_rel_item_shoes
        FOREIGN KEY (item)
            REFERENCES fc.rel_item(id)
            ON DELETE CASCADE;

CREATE TABLE fc.accessories
(
    id BIGSERIAL PRIMARY KEY,
    item BIGINT NOT NULL,
    colors VARCHAR(30)[],
    type VARCHAR(30) NOT NULL,
    accessories_id UUID NOT NULL DEFAULT gen_random_uuid()
);

ALTER TABLE fc.accessories
    ADD CONSTRAINT unique_accessories UNIQUE (item),
    ADD CONSTRAINT  fk_rel_item_accessories
        FOREIGN KEY (item)
            REFERENCES fc.rel_item(id)
            ON DELETE CASCADE;

CREATE TABLE fc.furniture
(
  id BIGSERIAL PRIMARY KEY,
  item BIGINT NOT NULL,
  colors VARCHAR(30)[],
  type VARCHAR(30) NOT NULL,
  furniture_id UUID NOT NULL DEFAULT gen_random_uuid()
);

ALTER TABLE fc.furniture
    ADD CONSTRAINT unique_furniture UNIQUE (item),
    ADD CONSTRAINT fk_rel_item_furniture
        FOREIGN KEY (item)
            REFERENCES fc.rel_item(id)
            ON DELETE CASCADE;

CREATE TABLE fc.baby
(
    id BIGSERIAL PRIMARY KEY,
    item BIGINT NOT NULL,
    colors VARCHAR(30)[],
    type VARCHAR(30) NOT NULL,
    baby_id UUID NOT NULL DEFAULT gen_random_uuid()
);

ALTER TABLE fc.baby
    ADD CONSTRAINT unique_baby UNIQUE (item),
    ADD CONSTRAINT fk_rel_item_baby
        FOREIGN KEY (item)
            REFERENCES fc.rel_item(id)
            ON DELETE CASCADE;

CREATE TABLE fc.sport
(
    id BIGSERIAL PRIMARY KEY,
    item BIGINT NOT NULL,
    colors VARCHAR(30)[],
    type VARCHAR(30),
    sport_id UUID NOT NULL DEFAULT gen_random_uuid()
);

ALTER TABLE fc.sport
    ADD CONSTRAINT unique_sport UNIQUE (item),
    ADD CONSTRAINT fk_rel_item_sport
        FOREIGN KEY (item)
            REFERENCES fc.rel_item(id)
            ON DELETE CASCADE;