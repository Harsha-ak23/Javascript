const marval_heros = ["spiderman", "Ironman", "thor"]
const dc_heros = ["superman", "flash", "batman"]
// marval_heros.push(dc_heros)
// const myn1 = marval_heros.concat(dc_heros)
// console.log(myn1)
const all_new_heros = [...marval_heros, ...dc_heros];
console.log(all_new_heros);