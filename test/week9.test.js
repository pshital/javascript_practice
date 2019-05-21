const {
    sumMultiples,
     isValidDNA,
     getComplementaryDNA,
    /* createMatrix,*/
     isItPrime,
     areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("it throws an error if not passed an array ", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required")
    });
    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });
    test("it returns the sum of any decimal numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 11, 12]);
        const expected = 20;
        expect(result).toBe(expected);
    });
    test("returns 0 if there are no multiple of 3 or 5", () => {
        expect(sumMultiples([1, 2, 4])).toBe(0);
    });
});
describe("isItPrime", () => {
        test("returns false if number is not prime", () => {
            expect(isItPrime(1)).toBe(false);
        
        });
        test("returns true if number is prime", () => {
           expect(isItPrime(13)).toBe(true);
        });
        test("returns true if number is prime", () => {
            expect(isItPrime(1)).toBe(false);
        });
        test("returns true if number is prime", () => {
            expect(isItPrime(2)).toBe(true);
        });            
});
describe("areWeCovered", () => {
        test("it returns false if there are no staff at all", () => {
                        expect(areWeCovered([], "Sunday")).toBe(false);
                        expect(areWeCovered([], "Monday")).toBe(false);
                        expect(areWeCovered([], "Tuesday")).toBe(false);
                        expect(areWeCovered([], "Wednesday")).toBe(false);
                        expect(areWeCovered([], "Thursday")).toBe(false);
                        expect(areWeCovered([], "Friday")).toBe(false);
                        expect(areWeCovered([], "Saturday")).toBe(false);
     });
});  
describe("isValidDNA", () => {
    test("returns false if str is not valid DNA string", () => {
        expect(isValidDNA("ahhsjklkjkk jkkl")).toBe(false);
    
    });
    test("returns true if string is valid DNA ", () => {
       expect(isValidDNA("AAGATGCCGT")).toBe(true);
    });
});
describe("getComplementaryDNA", () => {
    test("returns false if str is not valid DNA string", () => {
        expect(getComplementaryDNA("ACTG")).toBe("CAGT");
    
    });
    test("returns true if string is valid DNA ", () => {
       expect(getComplementaryDNA("AAGATGCCGT")).toBe("CCTCGTAATG");
    });
});