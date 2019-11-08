class Population
{
    constructor(popSize, fitRate, mutRate)
    {
        this.maxpop = popSize;
        this.population = [];
        this.fitness = fitRate;
        this.mutation = mutRate;
        this.target = "exemplo de texto";
        this.matpool = [];

        for(let i = 0; i < this.maxpop; i++)
        {
            this.population[i] = new DNA(this.target.length, true);
        }
    }

    calcFitness()
    {
        for(let i = 0; i < this.population.length; i++)
        {
            this.population[i].calcFit(this.target);
        }
    }

    getBest()
    {
        let best;
        let fit = 0;
        for(let i = 0; i < this.population.length; i++)
        {
            if(this.population[i].fitness >= fit)
            {
                fit = this.population[i].fitness;
                best = this.population[i].genes;
            }
        }

        return best;
    }

    isComplete()
    {
        for(let i = 0; i < this.population.length; i++)
        {
            if(this.population[i].genes === this.target)
                return true;
        }
        return false;
    }

    createMatPool()
    {
        this.matpool = [];
        for(let i = 0; i < this.population.length; i++)
        {
            let chance = this.population[i].fitness;
            for(let j = 0; j < chance; j++)
            {
                this.matpool.push(this.population[i]);
            }
        }
    }

    nextGen()
    {
        if(this.matpool.length == 0)
            return;
            
        let newpop = [];
        for(let i = 0; i < this.maxpop; i++)
        {
            let dna1 = this.matpool[Math.floor(random(0, this.matpool.length))];
            let dna2 = this.matpool[Math.floor(random(0, this.matpool.length))];
            let mixed = dna1.mix(dna2);
            newpop[i] = mixed;
        }
        this.population = newpop;
    }

}