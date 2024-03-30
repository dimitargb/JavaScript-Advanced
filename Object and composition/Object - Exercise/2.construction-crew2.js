function crew(worker) {
    if (worker.dizziness) {
        return {
            ...worker,// това означава всички елемнти от обекта worker след запетайка можем да модефицираме или добавил нови пропъртита
            levelOfHydrated: worker.weight * 0.1 * worker.experience,
            dizziness: false, // това връща чисто нов обект, който е shallow copy на worker
        };
    }
    return {...worker}
}


crew({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true })