CREATE DATABASE ecommerce;

CREATE TABLE "user" (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name character varying(25),
    last_name character varying(25),
    email character varying(25),
    password character varying(25),
    registered boolean
);

CREATE TABLE "order" (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    total money,
    status character varying(25),
    created date,
    user_id integer UNIQUE REFERENCES "user"(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE product (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name character varying(25),
    price money,
    description text,
    created date,
    stock_qty integer
);

CREATE TABLE order_product (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    quantity integer,
    price money,
    order_id integer UNIQUE REFERENCES "order"(id),
    product_id integer UNIQUE REFERENCES product(id)
);

