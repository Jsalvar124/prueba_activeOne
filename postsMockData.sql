SELECT * FROM posts_db.posts;
select * from categorias;
-- Inserting 2 comments associated with category 1
INSERT INTO posts (titulo, contenido, fecha_creacion, fecha_actualizacion, category_id)
VALUES
    ('titulo1','Comment 1 for Category 1', NOW(),NOW(), 1),
    ('titulo2','Comment 1 for Category 2', NOW(),NOW(), 2);

-- Inserting 2 comments associated with category 2
INSERT INTO comentarios (contenido, fecha_creacion, fecha_actualizacion, post_Id)
VALUES
    ('Comment 1 for post1', NOW(), NOW(), 1 ),
    ('Comment 2 for post2', NOW(), NOW(), 2);

select * from comentarios;

INSERT INTO categorias (nombre)
VALUES
    ('Category 1'),
    ('Category 2');