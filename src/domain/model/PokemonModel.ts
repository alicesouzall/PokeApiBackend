import AbilitiesModel from "./AbilitiesModel"

export default class PokemonModel {
    abilities: AbilitiesModel[]
    image: string
    name: string
    height: number
    weight: number

    constructor(
        abilities: AbilitiesModel[], image: string, name: string,
        height: number, weight: number
    ) {
        this.abilities = abilities
        this.image = image
        this.name = name
        this.height = height
        this.weight = weight
    }
}
