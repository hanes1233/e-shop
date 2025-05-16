--liquibase formatted sql
--changeset pavel:insert-read-column-obj-email
--comment modifying script

ALTER TABLE db.obj_email
    ADD COLUMN read BOOLEAN NOT NULL DEFAULT FALSE;