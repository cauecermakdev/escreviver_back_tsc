import Joi from "joi";

export const textoSchema  = Joi.object({
    date: Joi.date(),
    title: Joi.string().max(50).required(),
    description: Joi.string().required(),
    tagName: Joi.string().max(50).required() 
})

/*
CREATE TABLE "textos" (
    "id" SERIAL PRIMARY KEY,
    "date" TIMESTAMP NOT NULL DEFAULT NOW(),
    "title" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "tagName" VARCHAR(50) NOT NULL, 

    CONSTRAINT "FK_tag" FOREIGN KEY ("tagName")
        REFERENCES tags("name")
);

*/