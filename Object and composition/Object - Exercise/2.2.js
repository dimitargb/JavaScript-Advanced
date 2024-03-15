function modifyPropertys(worker){

    if(worker.dizziness === true){
        worker.levelOfHydrated = worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;
    }
    console.log(worker);
}
modifyPropertys({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });
modifyPropertys({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false });