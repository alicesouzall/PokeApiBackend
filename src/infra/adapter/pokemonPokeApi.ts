import axios from "axios"
import AbilitiesModel from "../../domain/model/AbilitiesModel"
import PokemonModel from "../../domain/model/PokemonModel"
import Pokemon from "../../domain/port/Pokemon"

export default class PokemonPokeApi implements Pokemon {
    async getPokemonByName(name: string): Promise<PokemonModel> {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)

        return new PokemonModel(
            pokemon.data.abilities.sort((a: AbilitiesModel, b: AbilitiesModel) =>
                a.ability.name.localeCompare(b.ability.name)
            ),
            pokemon.data.sprites.front_default,
            pokemon.data.name,
            pokemon.data.height,
            pokemon.data.weight,
        )
    }
}
