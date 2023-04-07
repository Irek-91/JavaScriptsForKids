const min = 0;
const max = 100;
const attCount = 10;

function getUserName() {
    const userName = prompt('Привет, как тебя зовут, друг?');
    return userName;
}
const userName = getUserName();

const getRandomNumber = (maxLimit) => {
    const randomNumber = Math.round(Math.random() * maxLimit );
    return randomNumber;
}
const randomNumber = getRandomNumber(max);

const playGame = (minLimite, maxLimit, attsNumber, number, name ) => {
    alert(`Привет, ${name}!
    Я загадал число в диапозоне от ${minLimite} до ${maxLimit}.
    У тебя ${attsNumber} попыток, чтобы отгадать его. Удачи, бро!`)
    for (let i = 1; i <= attCount; i++) {
        const answer = prompt(`Что думаешь?`);
        if (answer > number) {
            alert(`Число которое я загадал - меньше.
            У тебя осталось ${attsNumber - i} попыток.`)
        } else if (answer < number) {
            alert(`Число которое я загадал - больше.
            У тебя осталось ${attsNumber - i} попыток.`)
        } else {
            alert(`${name}, ты угадал c ${i}-ой попытки!`)
            return;
        }
    }
    alert(`${name}, гейм овер, не твой день`)
}

playGame(min, max, attCount, randomNumber, userName);
