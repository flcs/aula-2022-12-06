import { Romanos } from "./romanos";

test ("Testando", ()=>{
    expect(3+1).toBe(4)
})

class SomeClass{
    getTemplateName() {
        throw new Error('foo');
    }
}


describe("Conversão para números romanos", ()=> {
    test ("Espero que 1 seja convertido para I ", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = sut.convert(1);
        //expectativa
        expect(retorno).toEqual("I");
    })

    test ("Espero que 4 seja convertido para IV", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = sut.convert(4);
        //expectativa
        expect(retorno).toEqual("IV");
    })

    test ("Espero que 10 seja convertido para X", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = sut.convert(10);
        //expectativa
        expect(retorno).toEqual("X");
    })

    test ("Espero que -1 apresente mensagem de erro", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = () => {sut.convert(-1) };
        //expectativa
        expect(retorno).toThrow(new Error("numero invalido"));
    })
    
    test('contains a method that will throw an exception', () => {
        var sc = new SomeClass();
        expect(() => { sc.getTemplateName() }).toThrow(new Error('foo'));
    });

    test('50 should generate: L', () => {
        //arrange
        const sut = new Romanos();
        //act
        const retorno = sut.convert(50);
        //assert
        expect(retorno).toEqual('L');
    });

    test('100 should generate: C', () => {
        //arrange
        const sut = new Romanos();
        //act
        const retorno = sut.convert(100);
        //assert
        expect(retorno).toEqual('C');
    });

    test('500 should generate: D', () => {
        //arrange
        const sut = new Romanos();
        //act
        const retorno = sut.convert(500);
        //assert
        expect(retorno).toEqual('D');
    });

})