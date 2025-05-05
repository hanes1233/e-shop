--liquibase formatted sql
--changeset pavel:init_feedback_table_script
--comment modifying script

CREATE TABLE db.obj_feedback
(
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    star INTEGER,
    name VARCHAR(50),
    tech_create_date TIMESTAMPTZ NOT NULL,
    tech_create_identity_id UUID NOT NULL
);