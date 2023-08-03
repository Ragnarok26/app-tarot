
export const getValidCards = (cardNumberFromUrl, listCardsFromContent, optionsCard, tirada) => {
    if (!cardNumberFromUrl) {
        return {
            displayCards: [],
            totalYes: 0,
            totalNo: 0,
            hasErrorCard: false,
        };
    }

    let hasErrorCard = false;
    const cartNumbersToArray = cardNumberFromUrl?.split(',') || []
    const cardSanity = cartNumbersToArray
        .filter((card, index) => {
            return cartNumbersToArray.indexOf(card) === index;
        })
        .map(card => {
            const id = +card.split('x')[0]
            const answer = card.split('x')[1]
            hasErrorCard = answer && !['0', '1'].includes(answer)
            return { id, answer }
        });

    const displayCards = cardSanity
        .map(e => {
            const cardExist = listCardsFromContent.find(c => c.id === e.id);
            return cardExist ? { ...cardExist, answer: e.answer } : null;
        })
        .filter(e => e)
        .filter(e => e.id >= optionsCard?.min && e.id <= optionsCard?.max)

    const totalYes = cardSanity.map(e => e.answer).filter(e => e === '1');
    const totalNo = cardSanity.map(e => e.answer).filter(e => e === '0');

    if (cartNumbersToArray.length !== displayCards.length) {
        hasErrorCard = true
    }

    const isOkCountCard = optionsCard && optionsCard[tirada || 'list']?.includes(displayCards.length);
    if (!isOkCountCard) {
        hasErrorCard = true
    }

    return {
        displayCards,
        totalYes,
        totalNo,
        hasErrorCard,
    };
}

export const getZodiac = (zodiacFromUrl, listZodiacFromContent) => {
    if (!zodiacFromUrl) {
        return {
            displayZodiac: null,
            hasErrorZodiac: false,
        };
    } else {
        const displayZodiac = listZodiacFromContent?.[zodiacFromUrl];
        return {
            displayZodiac,
            hasErrorZodiac: !displayZodiac,
        }
    }
}
