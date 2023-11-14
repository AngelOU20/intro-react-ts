(() => {
  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(id: string) {
    console.log({ id });
  }

  // Crear una película
  interface MovieOptions {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie({ title, description, rating, cast }: MovieOptions) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  interface ActorOptions {
    fullName: string;
    birthdate: Date;
  }

  async function createActor({
    fullName,
    birthdate,
  }: ActorOptions): Promise<boolean> {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor', fullName, birthdate);
    return true;
  }

  // const getPayAmount = ({
  //   isDead = false,
  //   isSeparated = true,
  //   isRetired = false,
  // }) => {
  //   let result;
  //   if (isDead) {
  //     result = 1500;
  //   } else {
  //     if (isSeparated) {
  //       result = 2500;
  //     } else {
  //       if (isRetired) {
  //         result = 3000;
  //       } else {
  //         result = 4000;
  //       }
  //     }
  //   }

  //   return result;
  // };

  // Ejercicio resuelto

  interface PayAmount {
    isDead: false;
    isSeparated: true;
    isRetired: false;
  }

  const getPayAmount = ({
    isDead,
    isSeparated,
    isRetired,
  }: PayAmount): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
