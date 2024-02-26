export const minMatchTrueFalse = (arr: boolean[]): number => {
    const valMap = new Map();
    arr.forEach(function (element) {
        if (valMap.has(element)) {
            valMap.set(element, valMap.get(element) + 1);
        } else {
            valMap.set(element, 1);
        }
    });
    const trueCount = valMap.get(true);
    const falseCount = valMap.get(false);
    let diff = 0;
    if (trueCount !== undefined || falseCount !== undefined) {
        if (trueCount > falseCount) {
            diff = trueCount - falseCount;
            return trueCount - diff === falseCount ? trueCount - diff : 0;
        } else {
            diff = falseCount - trueCount;
            return falseCount - diff === trueCount ? falseCount - diff : 0;
        }
    }
    return valMap.get(true) ? valMap.get(true) : 0;

    //  methoed : 2

    //     let trueCount = arr.filter((value) => value === true).length;
    //      let falseCount = arr.filter((value) => value === false).length;
    //      return Math.min(trueCount, falseCount);
};
