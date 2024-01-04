import express from "express";
import GetPokemonHandler from "../handler/GetPokemonHandler";

export const PokemonRouter = express.Router();

PokemonRouter.get("/:poke_name", GetPokemonHandler.handle)
