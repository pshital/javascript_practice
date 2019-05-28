const {sumDigits,
  createRange,
  hexToRGB,
 /* getScreentimeAlertList,*/
  findWinner }= require("../challenges/week10");
describe("sumDigits", () => {
    test("it throws an error if not passed a number ", () => {
        expect(() => {
            sumDigits();
        }).toThrow("number is required");
        expect(() => {
            sumDigits();
        }).toThrow("number is required")
    });
    test("it returns the sum of all digits of the numbers ", () => {
        const result = sumDigits(156);
        const expected = 12;
        expect(result).toBe(expected);
    });
    test("it returns the sum of any decimal numbers that are a multiple of 3 or 5", () => {
        const result = sumDigits(350211);
        const expected = 12;
        expect(result).toBe(expected);
    });
    test("returns 0 if there are no multiple of 3 or 5", () => {
        expect(sumDigits([1, 2, 4])).toBe(0);
    });
});
describe("createRange", () => {
    test("it throws an error if start and end are not passed ", () => {
        expect(() => {
            createRange(5);
        }).toThrow("start is required");
        expect(() => {
            createRange(4);
        }).toThrow("end is required")
    });
    test("creates a range of numbers as an array.", () => {
        const result = createRange(4,10,2);
        const expected = [4,6,8,10];
        expect(result).toEqual(expected);
    });
    test("creates a range of numbers as an array.", () => {
        const result = createRange(1,5);
        const expected = [1,2,3,4,5];
        expect(result).toEqual(expected);
    });
    
});

describe("hexToRGB", () => {
    test("it throws an error if hex string is not passed ", () => {
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required");
        
    });
    test("creates a range of numbers as an array.", () => {
        const result = hexToRGB("#FF1133");
        const expected = "rgb(255,17,51)";
        expect(result).toEqual(expected);
    });
     
    
});
describe("findWinner", () => {
    test("it throws an error if hex string is not passed ", () => {
        expect(() => {
            findWinner();
        }).toThrow("board is required");
        
    });
    test("return X if player X has won,", () => {
        const result = findWinner([
                "X", "O", null,
                "X", null, "O",
                "X", null, "O"
            
            ])
        const expected ="X has won" ;
        expect(result).toEqual(expected);
    });
    test("return O if player O has won,", () => {
        const result = findWinner([
            "O", "O", "O",
            "X", null, "X",
             "X", null, "X"
            ]);
        const expected ="O has won" ;
        expect(result).toEqual(expected);
    });
    test("", () => {
        const result = findWinner([
            "O", "O", null,
            "X", "O", "X",
             "X", null, "O"
            ]);
        const expected ="O has won" ;
        expect(result).toEqual(expected);
    });
});   
