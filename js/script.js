let population;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    population = new Population(1000, 0.01, "Ser ou nao ser eis a questao");
}

let gencount = 0;

function draw()
{
    background(255);

    population.calcFitness();

    let best = population.getBest();
    if(best)
    {
        textSize(48);
        text(best.toString(), 10, height/2);
        
        textSize(32);
        text("Gen: " + gencount, 10, height/2 + 50);
    }
    
    if(population.isComplete())
    {
        noLoop();
    }

    population.createMatPool();
    population.nextGen();
    population.mutGen();
    gencount++;
}