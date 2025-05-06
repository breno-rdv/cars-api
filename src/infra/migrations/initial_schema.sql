--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.2)
-- Dumped by pg_dump version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cars; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cars (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    model character varying(255) NOT NULL,
    maker character varying(255) NOT NULL,
    year integer NOT NULL,
    price numeric(12,2) NOT NULL,
    color character varying(50) NOT NULL,
    type character varying(20) NOT NULL,
    engine_size numeric(4,1) NOT NULL,
    fuel_type character varying(20) NOT NULL,
    transmission character varying(20) NOT NULL,
    horsepower integer NOT NULL,
    last_service_date timestamp with time zone,
    mileage integer DEFAULT 0 NOT NULL,
    license_plate character varying(20) NOT NULL,
    location jsonb NOT NULL,
    status character varying(20) DEFAULT 'AVAILABLE'::character varying NOT NULL,
    pictures text[] DEFAULT ARRAY[]::text[],
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cars_engine_size_check CHECK ((engine_size >= (0)::numeric)),
    CONSTRAINT cars_fuel_type_check CHECK (((fuel_type)::text = ANY ((ARRAY['GASOLINE'::character varying, 'DIESEL'::character varying, 'ELECTRIC'::character varying, 'HYBRID'::character varying, 'PLUG_IN_HYBRID'::character varying])::text[]))),
    CONSTRAINT cars_horsepower_check CHECK ((horsepower > 0)),
    CONSTRAINT cars_mileage_check CHECK ((mileage >= 0)),
    CONSTRAINT cars_price_check CHECK ((price > (0)::numeric)),
    CONSTRAINT cars_status_check CHECK (((status)::text = ANY ((ARRAY['AVAILABLE'::character varying, 'RENTED'::character varying, 'MAINTENANCE'::character varying, 'SOLD'::character varying])::text[]))),
    CONSTRAINT cars_transmission_check CHECK (((transmission)::text = ANY ((ARRAY['MANUAL'::character varying, 'AUTOMATIC'::character varying, 'CVT'::character varying])::text[]))),
    CONSTRAINT cars_type_check CHECK (((type)::text = ANY ((ARRAY['SEDAN'::character varying, 'SUV'::character varying, 'HATCHBACK'::character varying, 'TRUCK'::character varying, 'VAN'::character varying, 'COUPE'::character varying, 'WAGON'::character varying, 'CONVERTIBLE'::character varying])::text[]))),
    CONSTRAINT cars_year_check CHECK (((year >= 1900) AND ((year)::double precision <= (date_part('year'::text, CURRENT_DATE) + (1)::double precision))))
);


--
-- Name: cars cars_license_plate_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_license_plate_key UNIQUE (license_plate);


--
-- Name: cars cars_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

