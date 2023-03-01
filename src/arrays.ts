/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArray: number[] = [];
    if (numbers.length === 1) {
        newArray = [numbers[0], numbers[0]];
    } else if (numbers.length >= 2) {
        newArray = [numbers[0], numbers[numbers.length - 1]];
    }
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((numbers: number): number => numbers * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let intArray = numbers.map((num: string): number => Number(num));
    intArray = intArray.map((num: number): number =>
        isNaN(num) ? (num = 0) : num
    );

    return intArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noSymbol = amounts.map((amount: string): string =>
        amount.includes("$")
            ? (amount = amount.slice(1, amount.length))
            : amount
    );

    const toNumber = noSymbol.map((amount: string): number => Number(amount));

    const answer = toNumber.map((amount: number): number =>
        isNaN(amount) ? (amount = 0) : amount
    );

    return answer;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newMessages = messages.filter(
        (message: string): boolean => !message.includes("?")
    );

    console.log(newMessages);

    newMessages = newMessages.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message
    );

    return newMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let total = 0;
    words.map((word: string): number =>
        word.length < 4 ? (total += 1) : (total += 0)
    );
    return total;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let result = false;
    if (colors.length === 0) {
        result = true;
    }

    colors.every((color: string): boolean =>
        color === "red" || color == "green" || color === "blue"
            ? (result = true)
            : (result = false)
    );

    return result;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let total = 0;
    let answer = "";

    addends.map((addend: number): number => (total += addend));
    answer = total.toString() + "=";
    addends.map((addend: number): string =>
        addend === addends[0]
            ? (answer += addend.toString())
            : (answer += "+" + addend.toString())
    );

    if (addends.length === 0) {
        answer = "0=0";
    }

    return answer;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    const negIndex = values.findIndex((value: number): boolean => value < 0);
    const beforeNeg = values.slice(0, negIndex);

    const final = values.map((value: number): number => value);
    if (negIndex === -1) {
        sum = values.reduce(
            (total: number, value: number): number => (total += value),
            0
        );
        final.splice(values.length, 0, sum);
    } else if (negIndex === 0) {
        final.splice(negIndex + 1, 0, 0);
    } else {
        sum = beforeNeg.reduce(
            (total: number, value: number): number => (total += value),
            0
        );
        final.splice(negIndex + 1, 0, sum);
    }

    return final;
}
