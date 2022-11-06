import { IPortFolio } from '../interface/IPortFolio'

export const portFolioItem: IPortFolio[] = [
    { 
        title: '포켓몬도감',
        item: {
                img: ['orange', 'purple', 'blue'],
                text: 'poke api를 활용한 포켓몬 도감',
                content: ''
        },
    },
    { 
        title: 'Jistargram',
        item: {
                img: ['red', 'pink', 'yellow'],
                text: 'nextJS 기반 instargram 클론코딩 사이트',
                content: ''
        },
    },
    { 
        title: 'ToDo-List',
        item: {
                img: ['navy', 'black', 'green'],
                text: 'typescript 공부용 간단한 ToDo-List 웹앱',
                content: ''
        },
    },
]