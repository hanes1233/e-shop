--liquibase formatted sql
--changeset pavel:modifying_script_0.0.4_add_columns_to_feedback
--comment modifying script

ALTER TABLE db.obj_feedback
    ADD COLUMN tech_update_date TIMESTAMPTZ,
    ADD COLUMN tech_update_identity_id UUID;