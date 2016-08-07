import util from 'util'
import PokemonGO from 'pokemon-go-node-api'

const getPokemonList = (username, password) => {
  const pokeio = new PokemonGO.Pokeio()
  const location = {
    type: 'name',
    name: 'Time Square'
  }
  const provider = 'google'

  return new Promise(
    (resolve, reject) => {
      pokeio.init(username, password, location, provider, (err) => {
        if (err) {
          return reject(err)
        }

        pokeio.GetProfile((err) => {
          if (err) {
            return reject(err)
          }

          setTimeout(() => {
            pokeio.GetInventory((err, inv) => {
              if (err) {
                return reject(err)
              }
              const pokemonList = inv.inventory_delta.inventory_items.reduce((prev, element) => {
                const pokemon = element.inventory_item_data.pokemon
                if (pokemon !== null && pokemon.pokemon_id !== null) {
                  const id = Buffer.from(pokemon.id.toString()).toString('base64')
                  const info = pokeio.pokemonlist[pokemon.pokemon_id - 1]
                  const indAttack = nullToZero(pokemon.individual_attack)
                  const indDefense = nullToZero(pokemon.individual_defense)
                  const indStamina = nullToZero(pokemon.individual_stamina)

                  const pokemonObject = {
                    id,
                    indAttack,
                    indDefense,
                    indStamina,
                    info,
                    cp: pokemon.cp,
                    move1: pokemon.move_1,
                    move2: pokemon.move_2,
                    cpMultiplier: pokemon.cp_multiplier
                  }
                  prev[id] = pokemonObject
                }
                return prev
              }, {})
              // console.log(util.inspect(pokemonList, { showHidden: false, depth: 10 }))
              resolve(pokemonList)
            })
          }, 1000)

        })

      })
    }
  )
}

const nullToZero = (object) => {
  if (object === null) {
    return 0
  }
  return object
}

export default getPokemonList
