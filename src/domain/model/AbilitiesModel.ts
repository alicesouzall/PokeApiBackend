import AbilityModel from "./AbilityModel"

export default class AbilitiesModel {
    ability: AbilityModel
    isHidden: boolean
    slot: number

    constructor(ability: AbilityModel, isHidden: boolean, slot: number) {
        this.ability = ability
        this.isHidden = isHidden
        this.slot = slot
    }
}
