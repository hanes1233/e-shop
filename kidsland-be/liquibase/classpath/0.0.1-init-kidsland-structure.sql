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
    is_gender_specific BOOLEAN DEFAULT FALSE,
    is_special_offer BOOLEAN DEFAULT FALSE,
    category_id UUID NOT NULL DEFAULT gen_random_uuid(),
    name VARCHAR (30) NOT NULL
);

CREATE TABLE fc.subcategory
(
    id BIGSERIAL PRIMARY KEY,
    category_id BIGINT NOT NULL,
    description VARCHAR(250),
    hidden BOOLEAN NOT NULL DEFAULT FALSE,
    subcategory_id UUID NOT NULL DEFAULT gen_random_uuid(),
    name VARCHAR(30) NOT NULL
);

ALTER TABLE fc.subcategory
    ADD CONSTRAINT fk_category_subcategory
        FOREIGN KEY (category_id)
            REFERENCES fc.category(id)
            ON DELETE CASCADE;
