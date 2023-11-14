//* Función anónima autoinvocada
(() => {
  //! Aplicando el principio de responsabilidad única
  //! Priorizar la composición frente a la herencia
  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  //* Forma corta y además esta aplicando el principio de responsabilidad única
  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  //* Herencia de User con Person
  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  //* Herencia de UserSettings con User
  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  //* Creamos una clase para manejar toda la información
  //* En esta clase priorizamos la composición en vez de la herencia
  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings {
    // Realizando la composición
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/user/home',
    lastOpenFolder: '/home',
    email: 'julioucharima@gmail.com',
    role: 'Admin',
    name: 'Julio',
    gender: 'M',
    birthdate: new Date('2000-03-21'),
  });

  console.log({ userSettings });
})();
