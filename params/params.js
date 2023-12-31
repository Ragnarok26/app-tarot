//Las listas dan el acceso a las combinaciones:
//2 -- combinaciones de 14000 Tarot de la pareja
//3 -- combinaciones de 13000 El camino del día
//4 -- combinaciones de 12000 Tirada clásica
const cardsAvailable = {
    1000: { // "Tarot Diario"
        isPurpleTirada: true,
        isShowContentDefault: true,
        min: 0,
        max: 21,
        list: [1, 2, 3, 5],
        herradura: [7],
        piramide: [10],
        cruzCelta: [10],
    },
    2000: { // "Carta del Día"
        showTitleInContent: true,
        isShowDate: true,
        isShowContentDefault: true,
        min: 0,
        max: 21,
        list: [1]
    },
    3000: { // "Tarot Marsella"
        isPurpleTirada: true,
        isShowContentDefault: true,
        min: 0,
        max: 21,
        list: [1, 3, 5],
        herradura: [7],
        piramide: [10],
        cruzCelta: [10],
    },
    4000: { // "Trabajo"
        isPurpleTirada: true,
        isShowContentDefault: true,
        min: 0,
        max: 21,
        list: [1, 3, 5],
        herradura: [7],
        piramide: [10],
        cruzCelta: [10],
    },
    5000: { // "Amor"
        isPurpleTirada: true,
        isShowContentDefault: true,
        min: 0,
        max: 21,
        list: [1, 3, 5],
        herradura: [7],
        piramide: [10],
        cruzCelta: [10],
    },
    6000: { // "Salud"
        isPurpleTirada: true,
        isShowContentDefault: true,
        min: 0,
        max: 21,
        list: [1, 3, 5],
        herradura: [7],
        piramide: [10],
        cruzCelta: [10],
    },
    7000: { // "Dinero"
        isPurpleTirada: true,
        isShowContentDefault: true,
        min: 0,
        max: 21,
        list: [1, 3, 5],
        herradura: [7],
        piramide: [10],
        cruzCelta: [10],
    },
    8000: { // "Carta de Nacimiento"
        showTitleInContent: true,
        isShowContentDefault: true,
        min: 1,
        max: 9,
        list: [1, 3, 5]
    },
    9000: { // "Tarot Sí o No"
        isPurpleTirada: true,
        isShowContentQuestion: true,
        min: 0,
        max: 21,
        list: [1, 3, 5],
        herradura: [7],
        piramide: [10],
        cruzCelta: [10],
    },
    10000: { // "Significado de las cartas"
        isShowContentDefault: true,
        min: 0,
        max: 77,
        list: [1]
    },
    11000: {
        isPurpleTirada: true,
        isShowContentDefault: true,
    },
    12000: { // Tirada clásica
        isPurpleTirada: true,
        isShowDate: true,
        isShowContentCombination: true,
        min: 0,
        max: 21,
        list: [3],
    },
    13000: { // El camino del día
        isPurpleTirada: true,
        isShowDate: true,
        isShowContentCombination: true,
        min: 0,
        max: 21,
        list: [4],
    },
    14000: { // Tarot de la pareja
        isPurpleTirada: true,
        isShowDate: true,
        isShowContentCombination: true,
        min: 0,
        max: 21,
        list: [2],
    },
};

module.exports = {
    cardsAvailable,
};
