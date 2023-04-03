import arnaldo from '../assets/itens/arnaldo.jpg';
import churrasco from '../assets/itens/churrasco.png';
import parmegiana from '../assets/itens/parmegiana.png';
import spaten from '../assets/itens/spaten.jpg';
import bonarabe from '../assets/itens/bonarabe.png';
import esfira from '../assets/itens/esfiha.jpg';
import esfiraCalabresa from '../assets/itens/esfiha_calabresa.jpg';
import esfiraCalabresaCreamChease from '../assets/itens/esfiha_calabresa_creamchease.jpg';
import mc from '../assets/itens/MC.jpg';
import doisclassicos from '../assets/itens/2classicos.png';
import comboclassico from '../assets/itens/comboclassico.png';
import quatropequenos from '../assets/itens/4pequenos.png';

export const mockStores = [
    {
        id: 1,
        name: 'Churrascaria do arnaldo',
        note: 5.0,
        timeToDeliver: 30,
        category: 'Brasileira',
        image: arnaldo,
        items: [
            {
                id: 321321,
                name: 'Combo mistão (serve 4 pessoas) + Guaraná 2litros',
                description: 'Carne, frango e linguiça. Acompanha arroz de leite, feijão verde, farofa, Vinagrete, macaxeira cozida, macarrão, pirão de queijo.',
                price: 138.00,
                image: churrasco
            },
            {
                id: 123187,
                name: 'Combo parmegiana (serve 4 pessoas) + Guaraná 2 litros',
                description: 'Filé de carne ou frango empanado. Acompanha macarrão ao molho de tomate.',
                price: 128.00,
                image: parmegiana
            },
            {
                id: 7182919,
                name: 'Spaten log nek 10 unidade',
                description: 'Spaten',
                price: 10.00,
                image: spaten
            },
        ]
    },
    {
        id: 2,
        name: 'Bonárabe - Parnamirim',
        note: 5.0,
        timeToDeliver: 40,
        category: 'Árabe',
        image: bonarabe,
        items: [
            {
                id: 12311211,
                name: 'ESFIHA DE BACON C/ CHEDDAR',
                description: '',
                price: 5.99,
                image: esfira
            },
            {
                id: 3123211,
                name: 'ESFIHAS DE CALABRESA',
                description: '',
                price: 3.99,
                image: esfiraCalabresa
            },
            {
                id: 656756757657,
                name: 'ESFIHA DE CALABRESA C/ CREAM CHEESE',
                description: '',
                price: 3.99,
                image: esfiraCalabresaCreamChease
            }
        ]
    },
    {
        id: 3,
        name: 'Mcdonalds - Nova Parnamirim',
        note: 4.4,
        timeToDeliver: 50,
        category: 'Lanche',
        image: mc,
        items: [
            {
                id: 88789897,
                name: '2 CLÁSSICOS PELO PREÇO DE 1',
                description: '',
                price: 23.99,
                image: doisclassicos
            },
            {
                id: 8878989564,
                name: 'COMBO DOS CLÁSSICOS',
                description: '',
                price: 38.99,
                image: comboclassico
            },
            {
                id: 8878989743,
                name: '4 PEQUENOS PREÇOS',
                description: '',
                price: 32.99,
                image: quatropequenos
            }
        ]
    }
]