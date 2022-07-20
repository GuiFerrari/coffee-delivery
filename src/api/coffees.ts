import expressoTradicional from '../assets/coffees/expresso-tradicional.png'
import expressoAmericano from '../assets/coffees/expresso-americano.png'
import expressoCremoso from '../assets/coffees/expresso-cremoso.png'
import expressoGelado from '../assets/coffees/expresso-gelado.png'
import cafeComLeite from '../assets/coffees/cafe-com-leite.png'
import latte from '../assets/coffees/latte.png'
import capuccino from '../assets/coffees/capuccino.png'
import macchiato from '../assets/coffees/macchiato.png'
import mocaccino from '../assets/coffees/mocaccino.png'
import chocolateQuente from '../assets/coffees/chocolate-quente.png'
import cubano from '../assets/coffees/cubano.png'
import havaiano from '../assets/coffees/havaiano.png'
import arabe from '../assets/coffees/arabe.png'
import irlandes from '../assets/coffees/irlandes.png'

export const coffess = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.99,
    tags: ['Tradicional'],
    image: expressoTradicional,
  },
  {
    id: '2',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.99,
    tags: ['Tradicional'],
    image: expressoAmericano,
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.99,
    tags: ['Tradicional'],
    image: expressoCremoso,
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.99,
    tags: ['Tradicional', 'Gelado'],
    image: expressoGelado,
  },
  {
    id: '5',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.99,
    tags: ['Tradicional', 'Com leite'],
    image: cafeComLeite,
  },
  {
    id: '6',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.99,
    tags: ['Tradicional', 'Com leite'],
    image: latte,
  },
  {
    id: '7',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.99,
    tags: ['Tradicional', 'Com leite'],
    image: capuccino,
  },
  {
    id: '8',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.99,
    tags: ['Tradicional', 'Com leite'],
    image: macchiato,
  },
  {
    id: '9',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.99,
    tags: ['Tradicional', 'Com leite'],
    image: mocaccino,
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.99,
    tags: ['Especial', 'Com leite'],
    image: chocolateQuente,
  },
  {
    id: '11',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.99,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    image: cubano,
  },
  {
    id: '12',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.99,
    tags: ['Especial'],
    image: havaiano,
  },
  {
    id: '13',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.99,
    tags: ['Especial'],
    image: arabe,
  },
  {
    id: '14',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.99,
    tags: ['Especial', 'Alcoólico'],
    image: irlandes,
  },
]
