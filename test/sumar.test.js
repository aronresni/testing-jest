const { sumar } = require("../app/index")

describe('La funcion sumar', () => {
    it("Debe ser una funcion", () => {
        expect(typeof sumar).toBe("function")
        expect(typeof sumar).not.toBe("number")
    })
});
