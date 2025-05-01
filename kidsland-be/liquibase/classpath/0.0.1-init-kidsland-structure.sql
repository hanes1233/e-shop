--liquibase formatted sql
--changeset pavel:initial_script
--comment Initial script

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE SCHEMA IF NOT EXISTS fc;

CREATE TABLE fc.user_h
(
    email VARCHAR (20) NOT NULL,
    password VARCHAR (250) NOT NULL,
    identity_id UUID NOT NULL,
    administrator BOOLEAN NOT NULL DEFAULT FALSE,
    access_blocked BOOLEAN NOT NULL DEFAULT FALSE,
    read_only BOOLEAN NOT NULL DEFAULT FALSE,
    valid_from TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    valid_to TIMESTAMPTZ NOT NULL DEFAULT NOW() + INTERVAL '8760 hours',
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
);

ALTER TABLE fc.user_h
    ADD CONSTRAINT pk_user PRIMARY KEY (email);

CREATE TABLE fc.category
(
    id BIGSERIAL PRIMARY KEY,
    description VARCHAR (250),
    hidden BOOLEAN NOT NULL DEFAULT FALSE,
    url VARCHAR (50) NOT NULL,
    category_id UUID NOT NULL DEFAULT gen_random_uuid(),
    name VARCHAR (30) NOT NULL,
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
);

CREATE TABLE fc.subcategory
(
    id BIGSERIAL PRIMARY KEY,
    category_id BIGINT NOT NULL,
    description VARCHAR(250),
    url VARCHAR(50) NOT NULL,
    hidden BOOLEAN NOT NULL DEFAULT FALSE,
    subcategory_id UUID NOT NULL DEFAULT gen_random_uuid(),
    name VARCHAR(30) NOT NULL,
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
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
    colors VARCHAR(50) NOT NULL,
    type VARCHAR(30) NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 0,
    is_available BOOLEAN default FALSE,
    item_create_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    description VARCHAR(250),
    size INTEGER,
    item_id UUID NOT NULL DEFAULT gen_random_uuid(),
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
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
    toy_id         UUID NOT NULL DEFAULT gen_random_uuid(),
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
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
    seasons        VARCHAR(50) NOT NULL,
    dress_id       UUID NOT NULL DEFAULT gen_random_uuid(),
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
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
    seasons        VARCHAR(50),
    description    VARCHAR(250),
    shoes_id       UUID NOT NULL DEFAULT gen_random_uuid(),
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
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
    accessories_id UUID NOT NULL DEFAULT gen_random_uuid(),
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
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
  furniture_id UUID NOT NULL DEFAULT gen_random_uuid(),
  tech_create_date TIMESTAMPTZ NOT NULL,
  tech_create_identity_id UUID NOT NULL,
  tech_update_date TIMESTAMPTZ,
  tech_update_identity_id UUID
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
    baby_id UUID NOT NULL DEFAULT gen_random_uuid(),
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
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
    sport_id UUID NOT NULL DEFAULT gen_random_uuid(),
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
);

ALTER TABLE fc.sport
    ADD CONSTRAINT unique_sport UNIQUE (item),
    ADD CONSTRAINT fk_rel_item_sport
        FOREIGN KEY (item)
            REFERENCES fc.rel_item(id)
            ON DELETE CASCADE;

CREATE SCHEMA IF NOT EXISTS db;

CREATE TABLE db.obj_registration_request
(
    id BIGSERIAL PRIMARY KEY,
    item BIGINT NOT NULL,
    processing_status INTEGER,
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
);

CREATE TABLE db.obj_error
(
    id BIGSERIAL PRIMARY KEY,
    error_content VARCHAR(100),
    stack_trace TEXT,
    request_id BIGINT,
    item_id UUID,
    category_id BIGINT,
    subcategory_id BIGINT,
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
);

ALTER TABLE db.obj_error
    ADD CONSTRAINT fk_obj_registration_request_obj_error
        FOREIGN KEY (request_id)
            REFERENCES db.obj_registration_request(id);