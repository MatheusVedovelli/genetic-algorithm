String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

class DNA
{
    constructor(length, startup)
    {
        this.length = length;
        this.genes = "";
        this.fitness = 0;

        if(startup)
        {
            for(let i = 0; i < this.length; i++)
            {
                this.genes += this.pickChar(1);
            }
        }
    }

    pickChar(length) 
    {
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz0123456789';
        return characters.charAt(Math.floor(random(0, characters.length)));
    }

    calcFit(target)
    {
        let score = 0;
        for(let i = 0; i < target.length; i++)
        {
            if(this.genes[i] === target[i])
                score++;
        }

        this.fitness = Math.floor((score/target.length) * 100);
    }

    mix(other)
    {
        let cut = random(0, this.length);
        let newdna = new DNA(this.length);
        for(let i = 0; i < this.length; i++)
        {
            if(i <= cut)
                newdna.genes += this.genes[i];
            else
                newdna.genes += other.genes[i];
        }

        console.log(newdna.genes);
        return newdna;
    }

    mutate(chance)
    {
        for(let i = 0; i < this.genes.length; i++)
        {
            if(random(1) <= chance)
            {
                this.genes.replaceAt(i, this.pickChar(1));
            }
        }
    }
}