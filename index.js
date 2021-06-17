require("dotenv").config();

const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Searches = require("./models/searches");

const main = async () => {
  let opt = "";

  const searches = new Searches();
  do {
    console.clear();
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        // Show message
        const place = await readInput("City: ");
        console.log(place);
        // Search places
        await searches.searchCity(place);
        // Weather

        // Show results
        console.log("\nCity Info\n".green);
        console.log("City:");
        console.log("Latitude:");
        console.log("Longitude:");
        console.log("Temperature:");
        console.log("Min:");
        console.log("Max:");
        break;

      default:
        break;
    }

    if (opt !== 0) await pause();
  } while (opt !== 0);
};

main();
