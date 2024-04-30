const read = require('./index.js')

chocolate_div()

function chocolate_div() {
    let chocolates = 0;
    let colegas = 0;
        // inserção de dados
        chocolates = read.question("Insira o numero de chocolates comprados: ");
        colegas = read.question("Insira o numero de colegas existente: ");
        resto = chocolates % colegas;

    try {
        if (chocolates < colegas) {
            throw new Error ("Quantidade de chocolate menor que numero de colegas.");
        }

        else if (resto == 0) {
            console.log("Nao eh necessario chocolates extras, ja eh possivel a divisao igual.")
        }

        else {
            chocolates_extra = colegas - resto;
            console.log("Sao necessarios " + chocolates_extra + " chocolates extras.");
        }
    }
    catch (error) {
        console.log(error.message);
    }
}