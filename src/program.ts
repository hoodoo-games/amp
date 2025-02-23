// compile-time representation of program
export interface Program {
  root: string;
  elements: Record<string, Element>;
}

interface Element {
  name: string;
  public: boolean;
  comments: string[];
}

type Type =
  | { kind: "none" }
  | { kind: "int" }
  | { kind: "uint" }
  | { kind: "num" }
  | { kind: "bool" }
  | { kind: "array"; type: Type; len: number }
  | { kind: "sum"; def: Type[] }
  | { kind: "product"; def: Type[] };

//TODO type comparisons (subset/superset)

interface NamedType extends Element {
  fields: { name: string; type: Type }[];
}

export interface Node extends Element {
  export: boolean;
  inputs: Port[];
  outputs: Port[];
  impl: NodeImpl;
}

interface Port {
  name: string;
  type: Type;
}

type NodeImpl =
  | { kind: "core" }
  | { kind: "import" }
  | { kind: "graph"; graph: NodeGraph };

interface NodeGraph {
  nodes: string[];
  links: Record<string, string>; // "node/port": "node/port"
}

export class ProgramBuilder {
  root: Node;
  nodes: Record<string, Node> = {};
  types: Record<string, NamedType> = {};

  constructor(name: string) {
    this.root = {
      name,
      public: true,
      comments: [],
      export: false,
      inputs: [],
      outputs: [],
      impl: { kind: "graph", graph: { nodes: [], links: {} } },
    };
  }

  build(): Program {
    const p = { root: this.root.name, elements: {} };

    //TODO validate program
    //TODO check for element name conflicts
    //TODO check for invalid node impls
    //TODO check for invalid links

    return p;
  }

  node(n: Node): ProgramBuilder {
    //TODO check for name conflict
    this.nodes[n.name] = n;
    return this;
  }

  type(t: NamedType): ProgramBuilder {
    //TODO check for name conflict
    this.types[t.name] = t;
    return this;
  }
}
