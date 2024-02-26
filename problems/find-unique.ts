// Const arr1=[2,3,2,4,5,6,5,7]

// Output=[3,6,7]

export const findUnique = (arr: number[]): number[] => {
    // const uniqueArr: any[] = [];
    // arr.forEach((e) => {
    //     if (!uniqArr.includes(e)) {
    //         uniqArr.push(e);
    //     }
    // });
    const uniqueArr = arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    return uniqueArr;
};
export const findUniqueNo = (arr: number[]): number[] => {
    //    const arr: number[] = [2, 3, 2, 4, 5, 6, 5, 7];

    // Use a Map to store the count of each element
    const elementCount: Map<number, number> = new Map();

    // Iterate through arr and update the count for each element
    for (const element of arr) {
        if (elementCount.has(element)) {
            elementCount.set(element, elementCount.get(element)! + 1);
        } else {
            elementCount.set(element, 1);
        }
    }

    // Filter elements that appear exactly once
    const output: number[] = arr.filter((element) => elementCount.get(element) === 1);

    return output;
};
