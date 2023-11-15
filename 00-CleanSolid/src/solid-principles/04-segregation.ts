(() => {
  interface Bird {
    eat(): void;
  }

  //* Segregación
  interface FlyingBird {
    fly(): number;
  }

  interface RunningBird {
    run(): void;
  }

  interface SwimmerBird {
    swin(): void;
  }

  class Tucan implements Bird, FlyingBird {
    public fly() {
      return 100;
    }
    public eat() {}
  }

  class Hummingbird implements Bird, FlyingBird {
    public fly() {
      return 200;
    }
    public eat() {}
  }

  class Ostrich implements Bird, RunningBird {
    public eat() {}
    public run() {}
  }

  class Penguin implements Bird, SwimmerBird {
    public eat() {}
    public swin() {}
  }

  class flamingos implements Bird, FlyingBird, RunningBird {
    public fly() {
      return 200;
    }
    public eat() {}
    public run() {}
  }
})();
