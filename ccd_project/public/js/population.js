//Adaptado do algoritmo interativo feito em Processing
// https://github.com/mrjgsantos/ccd


class Population {
    constructor() {
        this.pop = [];
        this.popSize = 20;
        this.generations;
        this.newGeneration = [];
    }

    //inicializar
    initialize(url) {
        //Para cada elemento desta população
        for (let i = 0; i < this.popSize; i++) {
            let individual = [];
            const icon = {
                url: url,
                posX: 0,
                posY: 0,
                width: 1,
                height: 1,
            }


            const brandName = {
                str: "BrandName",
                posX: 0,
                posY: 0,
                size: 30
            }
            
            let createdLogo = new logo(icon, brandName);
            
            individual.push(createdLogo);
            individual.length;
            this.pop.push(new Individual(individual,0));
        }
        this.generations = 0;
    }

    //busca do individuo
    getIndividual(i) {
        return this.pop[i];
    }

    //evolução
    evolve() {

        this.sortIndividualsByFtiness();

        for (let i = 0; i < eliteSize; i++) {
            this.newGeneration[i] = this.pop[i].getCopy(i);
        }

        print(this.pop.length);
        for (let i = 0; i < this.pop.length; i++) {
            if (random(1) <= crossRate) {
                let birthGiver1 = this.tournamentSelection();
                let birthGiver2 = this.tournamentSelection();
                let child = birthGiver1.crossover(birthGiver2);

                this.newGeneration[i] = child;
                print(this.newGeneration);
            } else {
                this.newGeneration[i] = this.tournamentSelection().getCopy();
            }
        }

        for(let i = eliteSize; i < this.newGeneration.length; i++){
            this.newGeneration[i].mutation();
        }

        for(let i = 0; i < this.pop.length; i++){
            this.pop[i] = this.newGeneration[i];
        }

        for(let i=0; this.pop.length; i++){
            this.pop[i].setFitness(0);
        }

        this.generations++;
    }

    tournamentSelection(){
        let tournament = [];

        for(let i = 0; i < tournamentSize; i++){
            let randomInd = int(random(0, this.pop.length));
            tournament[i] = this.pop[randomInd];
        }

        let fittest = tournament[0];
        for(let i = 0; i < tournamentSize; i++){
            if(tournament[i].getFitness() < fittest.getFitness()){
                fittest = tournament[i];
            }
        }
        return fittest;
    }

    sortIndividualsByFtiness(){
        this.pop.sort((a,b) => b.getFitness - a.getFitness());
    }

    getNewGeneration(){
        return this.newGeneration;
    }
}
