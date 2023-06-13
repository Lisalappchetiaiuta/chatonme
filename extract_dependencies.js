var fs = require('fs');

// Leggi il contenuto del file package.json
var packageJson = fs.readFileSync('package.json', 'utf8');

// Analizza il contenuto in un oggetto JavaScript
var packageData = JSON.parse(packageJson);

// Estrai le dipendenze e le devDependencies
var dependencies = packageData.dependencies;
var devDependencies = packageData.devDependencies;

console.log('Dipendenze:');
console.log(dependencies);

console.log('Dev dipendenze:');
console.log(devDependencies);
