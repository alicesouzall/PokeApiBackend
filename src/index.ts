import express from "express";
import cors from "cors";
import { PokemonRouter } from "./entrypoint/router/PokemonRouter";

const main = async () => {
    const port = 3001;
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/api/pokemons/", PokemonRouter);

    app.listen(port, () => {
        console.log(`Server started at ${port}`);
    });
}

main();
