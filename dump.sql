--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Homebrew)
-- Dumped by pg_dump version 14.6 (Homebrew)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: textos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.textos (
    id integer NOT NULL,
    date timestamp without time zone DEFAULT now() NOT NULL,
    title character varying(50) NOT NULL,
    description text NOT NULL,
    "tagName" character varying(50) NOT NULL
);


--
-- Name: escreviver_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.escreviver_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: escreviver_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.escreviver_id_seq OWNED BY public.textos.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Name: textos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.textos ALTER COLUMN id SET DEFAULT nextval('public.escreviver_id_seq'::regclass);


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tags VALUES (1, 'brahmaviharas');
INSERT INTO public.tags VALUES (2, 'metta');
INSERT INTO public.tags VALUES (7, 'dana');
INSERT INTO public.tags VALUES (3, 'Mudita');


--
-- Data for Name: textos; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.textos VALUES (2, '1993-07-12 00:00:00', 'Feliz sqn2', 'A vida nem sempre é simples! Mas é simples sempre!Mande metta e tudo ficará simples.', 'metta');
INSERT INTO public.textos VALUES (3, '1993-07-12 00:00:00', 'Feliz sqn2', 'A vida nem sempre é simples! Mas é simples sempre!Mande metta e tudo ficará simples.', 'metta');
INSERT INTO public.textos VALUES (6, '1999-02-03 00:00:00', 'Feliz teste', 'A vida nem sempre é simples! Mas é simples sempre!Mande metta e tudo ficará simples.', 'metta');
INSERT INTO public.textos VALUES (7, '1999-02-03 00:00:00', 'Feliz teste', 'A vida nem sempre é simples! Mas é simples sempre!Mande metta e tudo ficará simples.', 'metta');


--
-- Name: escreviver_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.escreviver_id_seq', 8, true);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tags_id_seq', 7, true);


--
-- Name: textos escreviver_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.textos
    ADD CONSTRAINT escreviver_pkey PRIMARY KEY (id);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (name);


--
-- Name: textos FK_tag; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.textos
    ADD CONSTRAINT "FK_tag" FOREIGN KEY ("tagName") REFERENCES public.tags(name);


--
-- PostgreSQL database dump complete
--

