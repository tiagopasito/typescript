export function domInjector(seletor:string) {
    
    return function(target: any, propertyKey: string) {

        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`)

        let elemento: HTMLElement

        const getter = function() {

            //soh faz a atribuicao do querySelector na primeira vez que chama o get
            if(!elemento){                                              
                elemento = <HTMLElement> document.querySelector(seletor)
                console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`)
            }
            return elemento
        }

        Object.defineProperty(  //define uma propriedade no prototype
            target,             //esse é o prototype
            propertyKey,        //nome da propriedade (inputData, inputQuantidade, inputValor)
            { get: getter }     //sempre que chamar o get, na verdade o getter vai ser chamado
        )
    }
}