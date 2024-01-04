import PokemonModel from "../model/PokemonModel";

export default interface Pokemon {
    getPokemonByName(name: string): Promise<PokemonModel>
}
