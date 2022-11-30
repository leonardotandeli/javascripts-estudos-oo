import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";



const novoAdmin = new Admin("Rodrigo", "teste2@g.com", "2003-01-01")

const novoUser = new User("Rodrigo2", "teste2@g.com", "2003-01-01")

console.log(novoUser.exibirInfos())