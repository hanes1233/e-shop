--liquibase formatted sql
--changeset pavel:update_table field
--comment update_table script

ALTER TABLE fc.user_h
    ALTER COLUMN valid_to
        SET DEFAULT (NOW() + INTERVAL '8760 hours');