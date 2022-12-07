interface IRomanos{
    
}

class Romanos{

    dicionario
    romanos
    arabicos
    constructor(){
        this.dicionario = [
            '',
            'I',
            'II',
            'III',
            'IV',
            'V',
            'VI',
            'VII',
            'VIII',
            'IX',
            'X'
        ]

        this.arabicos = [
            0,
            1,
            5,
            10,
            50,
            100,
            500
        ]

        this.romanos = [
            '',
            'I',
            'V',
            'X',
            'L',
            'C',
            'D'
        ]
    }


    /*isUnitario(numero: number): boolean{
        return (numero === 1);
    }
*/
    convert(numero: number): string{
        if(numero < this.dicionario.length && numero>=0){
            return this.dicionario[numero];
        }
        const indice = this.arabicos.indexOf(numero); 
        if(indice >= 0){
            return this.romanos[indice];
        }
        
        throw new Error("numero invalido");
        
    }
}

export { IRomanos, Romanos }