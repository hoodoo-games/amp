// compile-time representation of program
export class AmpProgram {
  name: string;
  elements: Record<string, Element> = {};
  root: Node;

  constructor(name: string) {
    this.name = name;
    this.root = { name, inputs: {}, outputs: {}, impl: {} };
  }
}

// an element is a named
interface Element {
  public: boolean;
}

type TypeKind =
  | { kind: "none" }
  | { kind: "num" }
  | { kind: "sum"; def: SumType }
  | { kind: "product"; def: ProductType };

class Type {
  t: TypeKind = { kind: "none" };
  nullable: boolean = false;
  length: number = 1;
}

interface SumType {
  variants: Type[];
}

interface ProductType {
  fields: Record<string, Type>;
}

// compile-time primitive value
type Constant =
  | { kind: "numeric"; val: number }
  | { kind: "boolean"; val: boolean }
  | { kind: "string"; val: string }
  | { kind: "array"; val: Constant[] };

// type literal for product types or arrays
// identifier value pairs where values can be constants or runtime values
// identifiers can be relative order or field name
interface Literal {}

export interface Node {
  name: string;
  inputs: Record<string, Type>;
  outputs: Record<string, Type>;
  impl: Record<string, NodeInstance>;
}

interface NodeInstance {
  name: string;
  kind: Node;
  edges: Record<string, Port>;
}

interface Port {
  node: Node;
  name: string;
}

interface Comment {
  content: string;
  //TODO element binding
}

export class AmpProgramBuilder {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  build(): AmpProgram {
    //TODO resolve references and validate program
    return new AmpProgram("app");
  }

  //TODO construction methods
  //TODO use only string references (order independence)
  //TODO intermediate representations of program elements
}
