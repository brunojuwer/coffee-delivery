import cafeGelado from '../assets/coffee/cafeGelado.svg'
import americano from '../assets/coffee/americano.svg' 
import arabe from '../assets/coffee/arabe.svg' 
import cafeComLeite from '../assets/coffee/cafeComLeite.svg' 
import capuccino from '../assets/coffee/capuccino.svg' 
import chocolateQuente from '../assets/coffee/chocolateQuente.svg' 
import cubano from '../assets/coffee/cubano.svg' 
import expresso from '../assets/coffee/expresso.svg' 
import expressoCremoso from '../assets/coffee/expressoCremoso.svg' 
import havaiano from '../assets/coffee/havaiano.svg' 
import irlandes from '../assets/coffee/irlandes.svg' 
import latte from '../assets/coffee/latte.svg' 
import macchiato from '../assets/coffee/macchiato.svg' 
import mochaccino from '../assets/coffee/mochaccino.svg'


export const cards = [
  {
    id: "expressoTradicional",
    icon: expresso,
    tags: ["TRADICIONAL"],
    title: "Expresso Tradicional",
    content:
      "O tradicional café feito com água quente e grãos moidos",
    price: 9.90,
    amount: 0
  },
  {
    id: "expressoAmericano",
    icon: americano,
    tags: ["TRADICIONAL"],
    title: "Expresso Americano",
    content:
      "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
    amount: 0
  },
  {
    id: "expressoCremoso",
    icon: expressoCremoso,
    tags: ["TRADICIONAL", "GELADO"],
    title: "Expresso Cremoso",
    content:
      "Café expresso tradicional com espuma cremosa",
    price: 9.90,
    amount: 0
  },
  {
    id: "expressoGelado",
    icon: cafeGelado,
    tags: ["TRADICIONAL", "GELADO"],
    title: "Expresso Gelado",
    content:
      "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
    amount: 0
  },
  {
    id: "cafeComLeite",
    icon: cafeComLeite,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Café com Leite",
    content:
      "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
    amount: 0
  },
  {
    id: "latte",
    icon: latte,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Latte",
    content:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
    amount: 0
  },
  {
    id: "capuccino",
    icon: capuccino,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Capuccino",
    content:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90,
    amount: 0
  },
  {
    id: "macchiato",
    icon: macchiato,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Macchiato",
    content:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
    amount: 0
  },
  {
    id: "mochaccino",
    icon: mochaccino,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Mochaccino",
    content:
      "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
    amount: 0
  },
  {
    id: "chocolateQuente",
    icon: chocolateQuente,
    tags: ["ESPECIAL", "COM LEITE"],
    title: "Chocolate Quente",
    content:
      "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.99,
    amount: 0
  },
  {
    id: "cubano",
    icon: cubano,
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    title: "Cubano",
    content:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.99,
    amount: 0
  },
  {
    id: "havaiano",
    icon: havaiano,
    tags: ["ESPECIAL"],
    title: "Havaiano",
    content:
      "Bebida adocicada preparada com café e leite de coco",
    price: 9.99,
    amount: 0
  },
  {
    id: "arabe",
    icon: arabe,
    tags: ["ESPECIAL"],
    title: "Árabe",
    content:
      "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.99,
    amount: 0
  },
  {
    id: "irlandes",
    icon: irlandes,
    tags: ["ESPECIAL", "ALCOÓLICO"],
    title: "Irlândes",
    content:
      "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.99,
    amount: 0
  },
]