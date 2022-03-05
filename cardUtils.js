const progressToRipeningDays = [2, 7, 30, 90, 300];
const PROGRESS_FOR_COMPLETION = progressToRipeningDays.length;

function daysToRipe(progress) {
    if (progress >= PROGRESS_FOR_COMPLETION) {
        throw new Error("What are you doing?");
    } else {
        return progressToRipeningDays[progress];
    }
}

function daysToMs(days) {
    return days * 1000 * 60 * 60 * 24;
}

function cardRipeAt(progress) {
    const daysToWait = daysToRipe(progress);
    const msToWait = daysToMs(daysToWait);
    return Date.now() + msToWait;
}

function getValuesAfterMark(progress, correct) {
    let newProgress = correct ? progress + 1 : Math.max(progress - 1, 0);
    if (newProgress >= PROGRESS_FOR_COMPLETION) {
        return [newProgress, 999999];
    }
    newRipe = cardRipeAt(newProgress);
    return [newProgress, newRipe];
}

module.exports = { cardRipeAt, getValuesAfterMark, PROGRESS_FOR_COMPLETION };
