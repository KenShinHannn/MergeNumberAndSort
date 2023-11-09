import merge from "./project/mergeAndSort"
describe("Megre Functinos", () =>{
    it("should merge and sorted array from min to max", () =>{
        const collection1 = [5,6,7,8]
        const collection2 = [1,2,3,4]
        const result = merge(collection1,collection2)
        expect(result).toEqual([1,2,3,4,5,6,7,8])
    })

    it("should handle array are different lengths", () =>{
        const collection1 = [10,1,3,5,7,8,9]
        const collection2 = [20,34,12]
        const result = merge(collection1,collection2)
        expect(result).toEqual([1,3,5,7,8,9,10,12,20,34])
    })

})