export class AmpProgram {
  src: string[] = [];

  constructor(src: string[]) {
    this.src = src;
  }

  run() {}
}

interface Namespace {
  name: string;
}

interface Type {
  name: string;
}

interface Node {
  name?: string;
}

interface Attribute {
  name: string;
}
