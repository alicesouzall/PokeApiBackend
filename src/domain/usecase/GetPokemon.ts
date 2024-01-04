import PokemonModel from "../model/PokemonModel";
import Pokemon from "../port/Pokemon";

export default class GetPokemon {
    private pokemon: Pokemon

    constructor(
        pokemon: Pokemon
    ) {
        this.pokemon = pokemon
    }

    async call(name: string): Promise<PokemonModel> {
        return await this.pokemon.getPokemonByName(name)
    }
}
