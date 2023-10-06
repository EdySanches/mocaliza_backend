CREATE TABLE users (
                user_id BIGINT NOT NULL,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                updated_at TIMESTAMP NOT NULL,
                created_at TIMESTAMP NOT NULL,
                active BOOLEAN NOT NULL,
                CONSTRAINT users_pk PRIMARY KEY (user_id)
);


CREATE TABLE brands (
                brand_id BIGINT NOT NULL,
                name VARCHAR(255) NOT NULL,
                updated_at TIMESTAMP NOT NULL,
                created_at TIMESTAMP NOT NULL,
                active BOOLEAN NOT NULL,
                CONSTRAINT brands_pk PRIMARY KEY (brand_id)
);


CREATE TABLE models (
                model_id BIGINT NOT NULL,
                name VARCHAR(255) NOT NULL,
                brand_id BIGINT NOT NULL,
                year INTEGER NOT NULL,
                accessories VARCHAR(255) NOT NULL,
                updated_at TIMESTAMP NOT NULL,
                created_at TIMESTAMP NOT NULL,
                active BOOLEAN NOT NULL,
                CONSTRAINT models_pk PRIMARY KEY (model_id)
);


CREATE TABLE categories (
                category_id BIGINT NOT NULL,
                name VARCHAR(255) NOT NULL,
                updated_at TIMESTAMP NOT NULL,
                created_at TIMESTAMP NOT NULL,
                active BOOLEAN NOT NULL,
                CONSTRAINT categories_pk PRIMARY KEY (category_id)
);


CREATE TABLE Vehicles (
                vehicle_id BIGINT NOT NULL,
                model_id BIGINT NOT NULL,
                category_id BIGINT NOT NULL,
                daily_cost FLOAT NOT NULL,
                stock INTEGER NOT NULL,
                updated_at TIMESTAMP NOT NULL,
                created_at TIMESTAMP NOT NULL,
                active BOOLEAN NOT NULL,
                CONSTRAINT Vehicles_pk PRIMARY KEY (vehicle_id)
);


CREATE TABLE orders (
                order_id BIGINT NOT NULL,
                date_begin TIMESTAMP NOT NULL,
                date_end TIMESTAMP NOT NULL,
                vehicle_id BIGINT NOT NULL,
                user_id BIGINT NOT NULL,
                updated_at TIMESTAMP NOT NULL,
                created_at TIMESTAMP NOT NULL,
                active BOOLEAN NOT NULL,
                CONSTRAINT orders_pk PRIMARY KEY (order_id)
);


ALTER TABLE orders ADD CONSTRAINT users_orders_fk
FOREIGN KEY (user_id)
REFERENCES users (user_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE models ADD CONSTRAINT brands_models_fk
FOREIGN KEY (brand_id)
REFERENCES brands (brand_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE Vehicles ADD CONSTRAINT models_Vehicles_fk
FOREIGN KEY (model_id)
REFERENCES models (model_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE Vehicles ADD CONSTRAINT categories_Vehicles_fk
FOREIGN KEY (category_id)
REFERENCES categories (category_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE orders ADD CONSTRAINT Vehicles_orders_fk
FOREIGN KEY (vehicle_id)
REFERENCES Vehicles (vehicle_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;