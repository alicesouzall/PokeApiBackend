import { Request, Response } from "express"
import GetPokemon from "../../domain/usecase/GetPokemon"
import PokemonPokeApi from "../../infra/adapter/pokemonPokeApi"

export default class GetPokemonHandler {
    static async handle(req: Request, res: Response) {
        try {
            const { poke_name } = req.params

            if (!poke_name) {
                res.status(500).json({error: "Pokemon name not found."})
                return
            }

            res.status(200).json(await new GetPokemon(new PokemonPokeApi()).call(poke_name as string))

        } catch (err) {
            res.status(500).json({erro: (err as Error).message})
        }
    }
}
