export function escapar(
    target: any, 
    propertyKey: string, 
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value

    descriptor.value = function(...args: any[]) {

        let retorno = metodoOriginal.apply(this, args)

        if(typeof retorno === "string"){

            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');        //troca a string '<script>' por uma string vazia por segurança (impedir que um usuario mau intensionado coloque um script)
        }

        return retorno
    }

    return descriptor
}