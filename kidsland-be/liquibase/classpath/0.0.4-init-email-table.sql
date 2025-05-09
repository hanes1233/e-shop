--liquibase formatted sql
--changeset pavel:init_email_table_script
--comment modifying script

CREATE TABLE db.obj_email (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    subject VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL,
    tech_update_date TIMESTAMPTZ,
    tech_update_identity_id UUID
);