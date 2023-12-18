const { sumar } = require("../app/index")

describe('La funcion sumar', () => {
    it("Debe ser una funcion", () => {
        expect(typeof sumar).toBe("function")
        expect(typeof sumar).not.toBe("number")
    })
    it('Debe arrojar un error en caso de recibir algo que no sea un numero', () => {
        expect(sumar("holis", "tukis")),toThrow("Los parametros deben ser numeros")
    });
    it('Debe arrojar un error en caso de recibir algo que no sea un numero', () => {
        expect(sumar("holis", "tukis")),toThrow("Los parametros deben ser numeros")
    });
    
});
