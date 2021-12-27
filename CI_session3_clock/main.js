import Counter from "./counter.js";

const c1 = new Counter.Counter("c1", "btn-primary", "btn-danger");
const c2 = new Counter.Counter("c2", "btn-success", "btn-secondary");
const c3 = new Counter.Counter("c3", "btn-warning", "btn-info");
const c4 = new Counter.Counter("c4", "btn-light", "btn-dark");

const a1 = new Counter.StartAll("a1");
const a2 = new Counter.StopAll("a2");
const a3 = new Counter.Pause("a3");

let app = document.getElementById("app");
document.getElementById("app").append(c1.render(), c2.render(), c3.render(), c4.render(), a1.render(), a2.render(), a3.render());