alter table empresas modify cnpj varchar(14)

insert into empresas (nome, cnpj)
values 
    ('Bradesco', 95691486000132),
    ('Vale', 27887148000148),
    ('Cielo', 0159831700134)

desc empresas;
desc prefeitos;

insert into empresas_unidades (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1)