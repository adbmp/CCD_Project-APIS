class Individual {
    constructor(genotype, fitness = 0) {
        this.genotype = genotype;
        this.fitness = fitness;

        this.pg = createGraphics(100, 100);
    }

    getPhenotype() {
        //adaptar À criação de icones
        this.genotype[0].bgColor(this.pg);
        for (let i = 0; i < this.genotype.length; i++) {
            this.genotype[i].logoMaker(this.pg);
        }
        return this.pg;
    }

    getGenotype() {
        return this.genotype;
    }

    crossover(birthGiver1) {
        const child = new Individual(this.genotype, 0);
        let crossoverPoint = int(random(1, this.genotype.length - 1));

        for (let i = 0; crossoverPoint; i++) {
            if (i < crossoverPoint) {
                child.genotype[i] = birthGiver1.genotype[i];
            }
        }
        return child;
    }

    mutation() {
        for (let i = 0; i < this.genotype.length; i++) {
            //Condições para gerar novos logos a partir dos selecionados
            //Seleciona um icon aletório entre os logos selecionados
            //Seleciona uma fonte aleatória entre os logos selecionados
            //Faz mix das fontes e icones
            if(random(1) <= mutRate){
            let randIcon = int(random(0, this.genotype[i]));
            this.genotype[i] = this.genotype[i] + randIcon;
            print('Mutation happened');
            }
        }
    }

    setFitness(fitness){
        this.fitness = fitness;
    }

    getFitness(){
        return this.fitness;
    }

    getCopy(){
        let copyPaste;

        for(let i = 0; i< this.genotype.length; i++){
            copyPaste = new Individual(this.genotype[i], this.fitness);
        }
        return copyPaste;
    }
}
