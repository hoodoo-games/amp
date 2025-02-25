import { Interpreter } from "./interpreter";
import { Element, Program } from "./program";
import "./style.css";

function init() {
  const program = new Program("app").element({} as Element);
  const interpreter = new Interpreter(program);
  interpreter.run();
}

init();
