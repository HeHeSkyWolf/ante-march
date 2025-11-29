import { prevBut, currentBut, showByClassName, hideByClassName, showByID, hideByID } from "./modules/button.js";

var carsCurrentBut = "cars-all-but";
var bossesCurrentBut = "bosses-all-but";
var monstersCurrentBut = "monsters-all-but";

document.getElementById('cars-all-but').addEventListener('click', () => {
    prevBut(carsCurrentBut);
    currentBut('cars-all-but');
    carsCurrentBut = "cars-all-but";

    showByClassName('cars-normal');
    showByClassName('cars-rare');
    showByClassName('cars-unknown');

    document.getElementById('jcars').scrollIntoView();
});

document.getElementById('cars-normal-but').addEventListener('click', () => {
    prevBut(carsCurrentBut);
    currentBut('cars-normal-but');
    carsCurrentBut = "cars-normal-but";

    hideByClassName('cars-rare');
    showByClassName('cars-normal');
    hideByClassName('cars-unknown');

    document.getElementById('jcars').scrollIntoView();
});

document.getElementById('cars-rare-but').addEventListener('click', () => {
    prevBut(carsCurrentBut);
    currentBut('cars-rare-but');
    carsCurrentBut = "cars-rare-but";

    showByClassName('cars-rare');
    hideByClassName('cars-normal');
    hideByClassName('cars-unknown');

    document.getElementById('jcars').scrollIntoView();
});

document.getElementById('cars-unknown-but').addEventListener('click', () => {
    prevBut(carsCurrentBut);
    currentBut('cars-unknown-but');
    carsCurrentBut = "cars-unknown-but";

    showByClassName('cars-unknown');
    hideByClassName('cars-normal');
    hideByClassName('cars-rare');

    document.getElementById('jcars').scrollIntoView();
});

document.getElementById('cars-hide-but').addEventListener('click', () => {
    prevBut(carsCurrentBut);
    currentBut('cars-hide-but');
    carsCurrentBut = "cars-hide-but";

    hideByClassName('cars-rare');
    hideByClassName('cars-normal');
    hideByClassName('cars-unknown');

    document.getElementById('jcars').scrollIntoView();
});

document.getElementById('bosses-all-but').addEventListener('click', () => {
    prevBut(bossesCurrentBut);
    currentBut('bosses-all-but');
    bossesCurrentBut = 'bosses-all-but';

    showByID('bosses-illustration');

    document.getElementById('jbosses').scrollIntoView();
});

document.getElementById('bosses-hide-but').addEventListener('click', () => {
    prevBut(bossesCurrentBut);
    currentBut('bosses-hide-but');
    bossesCurrentBut = 'bosses-hide-but';

    hideByID('bosses-illustration');

    document.getElementById('jbosses').scrollIntoView();
});

document.getElementById('monsters-all-but').addEventListener('click', () => {
    prevBut(monstersCurrentBut);
    currentBut('monsters-all-but');
    monstersCurrentBut = 'monsters-all-but';

    showByID('monsters-illustration');

    document.getElementById('jmonsters').scrollIntoView();
});

document.getElementById('monsters-hide-but').addEventListener('click', () => {
    prevBut(monstersCurrentBut);
    currentBut('monsters-hide-but');
    monstersCurrentBut = 'monsters-hide-but';

    hideByID('monsters-illustration');

    document.getElementById('jmonsters').scrollIntoView();
});