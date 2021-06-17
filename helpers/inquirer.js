const inquirer = require("inquirer");
require("colors");

const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "What do you want to do?",
    choices: [
      { value: 1, name: `${"1.".green} Search city ` },
      { value: 2, name: `${"2.".green} History` },
      { value: 0, name: `${"3.".green} Exit` },
    ],
  },
];

const inquirerMenu = async () => {
  //   console.clear();
  console.log("=============================".green);
  console.log("=============================".green);
  console.log("==== Select an option :  ====".green);
  console.log("=============================".green);
  console.log("=============================\n".green);

  const { opcion } = await inquirer.prompt(menuOpts);
  return opcion;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Insert a value please";
        }

        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, index) => {
    const n = `${index + 1}`.green;
    return { value: tarea.id, name: `${n}. ${tarea.desc}` };
  });

  choices.unshift({ value: "0", name: "0.".green + "Cancelar" });

  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices: choices,
    },
  ];

  const { id } = await inquirer.prompt(preguntas);
  return id;
};
const confirmar = async (mensaje) => {
  const pregunta = [{ type: "confirm", name: "ok", message: mensaje }];
  const { ok } = await inquirer.prompt(pregunta);
  return ok;
};

const mostrarListadoCheckList = async (tareas = []) => {
  const choices = tareas.map((tarea, index) => {
    const n = `${index + 1}`.green;
    return {
      value: tarea.id,
      name: `${n}. ${tarea.desc}`,
      checked: tarea.completadoEn ? true : false,
    };
  });

  const pregunta = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices: choices,
    },
  ];

  const { ids } = await inquirer.prompt(pregunta);
  return ids;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList,
};
