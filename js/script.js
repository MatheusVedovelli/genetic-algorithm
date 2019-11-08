let population;

function setup()
{
    createCanvas(800, 600);
    frameRate(15);
    population = new Population(15, 0.7, 0.01);
}

function draw()
{
    background(255);

    population.calcFitness();

    let best = population.getBest();
    if(best)
    {
        textSize(48);
        text(best.toString(), 10, height/2);
    }
    
    if(population.isComplete())
    {
        noLoop();
    }

    population.createMatPool();
    population.nextGen();
    


}