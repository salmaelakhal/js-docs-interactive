// Documentation data structure
const documentation = {
    variables: {
        title: "Variables",
        icon: "fas fa-code",
        description: "Les variables sont des conteneurs pour stocker des valeurs de données. En JavaScript, vous pouvez déclarer des variables en utilisant var, let ou const.",
        topics: [
            {
                title: "var",
                type: "Déclaration",
                icon: "fas fa-var",
                description: "La déclaration var définit une variable globale ou locale à une fonction, sans tenir compte du bloc. Elle peut être redéclarée et mise à jour.",
                code: `// Déclaration avec var
var nom = "Jean";  // Déclaration globale
var age = 30;      // Déclaration avec initialisation

// Redéclaration possible
var nom = "Marie"; // Redéclaration autorisée

// Mise à jour de la valeur
age = 31;

// Portée de var
function testVar() {
    var localVar = "Je suis locale";
    if (true) {
        var autreVar = "Je suis accessible en dehors du bloc";
        console.log(localVar); // Accessible
    }
    console.log(autreVar); // Accessible (hoisting)
}`,
                output: "",
                runCode: function() {
                    var nom = "Jean";
                    var age = 30;
                    var nom = "Marie";
                    age = 31;
                    
                    let output = "Déclarations avec var:\\n";
                    output += `nom = "${nom}"\\n`;
                    output += `age = ${age}\\n\\n`;
                    
                    function testVar() {
                        var localVar = "Je suis locale";
                        if (true) {
                            var autreVar = "Je suis accessible en dehors du bloc";
                            output += `Dans le bloc: ${localVar}\\n`;
                        }
                        output += `En dehors du bloc: ${autreVar}\\n`;
                    }
                    
                    testVar();
                    output += "\\nvar a une portée fonction, pas de portée bloc!";
                    return output;
                }
            },
            {
                title: "let",
                type: "Déclaration",
                icon: "fas fa-let",
                description: "La déclaration let permet de définir une variable dont la portée est limitée au bloc, à l'instruction ou à l'expression dans laquelle elle est utilisée. Elle peut être mise à jour mais pas redéclarée dans la même portée.",
                code: `// Déclaration avec let
let prenom = "Alice";  // Déclaration avec initialisation
let compteur = 0;      // Initialisation d'un compteur

// Mise à jour possible
compteur = 1;
prenom = "Bob";

// Redéclaration dans la même portée -> ERREUR
// let prenom = "Charlie"; // SyntaxError

// Portée de bloc
if (true) {
    let variableBloc = "Je suis dans un bloc";
    console.log(variableBloc); // Accessible ici
}
// console.log(variableBloc); // ERREUR: variableBloc n'est pas définie

// let dans les boucles
for (let i = 0; i < 3; i++) {
    console.log(i); // Chaque itération a son propre i
}`,
                output: "",
                runCode: function() {
                    let prenom = "Alice";
                    let compteur = 0;
                    
                    let output = "Déclarations avec let:\\n";
                    output += `prenom = "${prenom}"\\n`;
                    output += `compteur = ${compteur}\\n\\n`;
                    
                    compteur = 1;
                    prenom = "Bob";
                    output += `Après mise à jour:\\n`;
                    output += `prenom = "${prenom}"\\n`;
                    output += `compteur = ${compteur}\\n\\n`;
                    
                    if (true) {
                        let variableBloc = "Je suis dans un bloc";
                        output += `Dans le bloc: ${variableBloc}\\n`;
                    }
                    
                    output += "\\nlet a une portée bloc!";
                    output += "\\nExemple avec boucle:\\n";
                    for (let i = 0; i < 3; i++) {
                        output += `Itération ${i}: i = ${i}\\n`;
                    }
                    
                    return output;
                }
            },
            {
                title: "const",
                type: "Déclaration",
                icon: "fas fa-lock",
                description: "La déclaration const crée une référence en lecture seule vers une valeur. La variable ne peut pas être réaffectée, mais si c'est un objet, ses propriétés peuvent être modifiées.",
                code: `// Déclaration avec const
const PI = 3.14159;           // Constante mathématique
const SITE_URL = "https://example.com";
const PERSONNE = {            // Objet constant
    nom: "Alice",
    age: 30
};

// Ne peut pas être réaffectée
// PI = 3.14; // TypeError: Assignment to constant variable
// SITE_URL = "https://new.com"; // Erreur

// Mais les propriétés d'un objet peuvent être modifiées
PERSONNE.age = 31;           // Valide
PERSONNE.ville = "Paris";    // Valide

// Tableau constant
const NOMBRES = [1, 2, 3];
NOMBRES.push(4);             // Valide
// NOMBRES = [5, 6, 7];       // Erreur

// Const doit être initialisée
// const MA_CONST;            // SyntaxError: Missing initializer
const MA_CONST = "valeur";   // Correct`,
                output: "",
                runCode: function() {
                    const PI = 3.14159;
                    const SITE_URL = "https://example.com";
                    const PERSONNE = {
                        nom: "Alice",
                        age: 30
                    };
                    
                    let output = "Déclarations avec const:\\n";
                    output += `PI = ${PI}\\n`;
                    output += `SITE_URL = "${SITE_URL}"\\n`;
                    output += `PERSONNE = ${JSON.stringify(PERSONNE, null, 2)}\\n\\n`;
                    
                    // Modification des propriétés de l'objet
                    PERSONNE.age = 31;
                    PERSONNE.ville = "Paris";
                    
                    output += `Après modification de PERSONNE:\\n`;
                    output += `PERSONNE = ${JSON.stringify(PERSONNE, null, 2)}\\n\\n`;
                    
                    // Tableau constant
                    const NOMBRES = [1, 2, 3];
                    NOMBRES.push(4);
                    
                    output += `Tableau NOMBRES après push: [${NOMBRES.join(', ')}]\\n\\n`;
                    output += "Note: const empêche la réassignation, pas la mutation!";
                    
                    return output;
                }
            }
        ]
    },
    
    "data-types": {
        title: "Types de données",
        icon: "fas fa-list",
        description: "JavaScript est un langage dynamiquement typé. Il existe plusieurs types de données primitifs et non primitifs.",
        topics: [
            {
                title: "String",
                type: "Primitif",
                icon: "fas fa-quote-right",
                description: "Une chaîne de caractères (string) représente des données textuelles. Les chaînes peuvent être créées avec des guillemets simples, doubles ou des backticks.",
                code: `// Création de strings
let nom = "Alice";          // Guillemets doubles
let prenom = 'Bob';         // Guillemets simples
let message = \`Bonjour \${nom}\`; // Template literal

// Propriétés et méthodes
let longueur = nom.length;  // Longueur de la chaîne
let majuscules = nom.toUpperCase();
let minuscules = nom.toLowerCase();
let extrait = nom.substring(0, 3); // "Ali"

// Concaténation
let complet = nom + " " + prenom;
let complet2 = \`\${nom} \${prenom}\`;

// Caractères spéciaux
let citation = "Il a dit: \\"Bonjour!\\"";
let sautLigne = "Ligne 1\\nLigne 2";
let tabulation = "Col1\\tCol2";

// Méthodes utiles
let contient = nom.includes("lic"); // true
let commence = nom.startsWith("Al"); // true
let termine = nom.endsWith("ce"); // true
let position = nom.indexOf("i"); // 1`,
                output: "",
                runCode: function() {
                    let nom = "Alice";
                    let prenom = 'Bob';
                    let message = `Bonjour ${nom}`;
                    
                    let output = "Strings en JavaScript:\\n\\n";
                    output += `nom = "${nom}"\\n`;
                    output += `prenom = '${prenom}'\\n`;
                    output += `message = \`${message}\`\\n\\n`;
                    
                    output += `nom.length = ${nom.length}\\n`;
                    output += `nom.toUpperCase() = "${nom.toUpperCase()}"\\n`;
                    output += `nom.toLowerCase() = "${nom.toLowerCase()}"\\n`;
                    output += `nom.substring(0, 3) = "${nom.substring(0, 3)}"\\n\\n`;
                    
                    let complet = nom + " " + prenom;
                    let complet2 = `${nom} ${prenom}`;
                    output += `Concaténation: "${complet}"\\n`;
                    output += `Template literal: "${complet2}"\\n\\n`;
                    
                    let citation = "Il a dit: \"Bonjour!\"";
                    let sautLigne = "Ligne 1\\nLigne 2";
                    output += `Citation: ${citation}\\n`;
                    output += `Saut de ligne: ${sautLigne}\\n\\n`;
                    
                    output += `nom.includes("lic") = ${nom.includes("lic")}\\n`;
                    output += `nom.startsWith("Al") = ${nom.startsWith("Al")}\\n`;
                    output += `nom.endsWith("ce") = ${nom.endsWith("ce")}\\n`;
                    output += `nom.indexOf("i") = ${nom.indexOf("i")}`;
                    
                    return output;
                }
            },
            {
                title: "Number",
                type: "Primitif",
                icon: "fas fa-hashtag",
                description: "Le type Number représente à la fois des nombres entiers et des nombres à virgule flottante. JavaScript utilise le format double précision 64 bits (IEEE 754).",
                code: `// Nombres entiers et décimaux
let entier = 42;
let decimal = 3.14;
let negatif = -15;

// Notation scientifique
let scientifique = 5.2e3;  // 5200
let petit = 1.5e-3;        // 0.0015

// Valeurs spéciales
let infini = Infinity;
let negInfini = -Infinity;
let pasUnNombre = NaN;     // Not a Number

// Opérations arithmétiques
let somme = 10 + 5;        // 15
let produit = 10 * 5;      // 50
let division = 10 / 3;     // 3.333...
let modulo = 10 % 3;       // 1

// Méthodes Number
let str = "123.45";
let nombre = Number(str);  // Conversion
let estEntier = Number.isInteger(42); // true
let estNaN = Number.isNaN(NaN); // true

// Méthodes sur les nombres
let fixed = decimal.toFixed(1); // "3.1"
let precision = decimal.toPrecision(3); // "3.14"

// Limites
let max = Number.MAX_SAFE_INTEGER; // 9007199254740991
let min = Number.MIN_SAFE_INTEGER; // -9007199254740991`,
                output: "",
                runCode: function() {
                    let output = "Nombres en JavaScript:\\n\\n";
                    
                    let entier = 42;
                    let decimal = 3.14;
                    let negatif = -15;
                    
                    output += `entier = ${entier}\\n`;
                    output += `decimal = ${decimal}\\n`;
                    output += `negatif = ${negatif}\\n\\n`;
                    
                    let scientifique = 5.2e3;
                    let petit = 1.5e-3;
                    output += `5.2e3 = ${scientifique}\\n`;
                    output += `1.5e-3 = ${petit}\\n\\n`;
                    
                    let infini = Infinity;
                    let pasUnNombre = NaN;
                    output += `Infinity = ${infini}\\n`;
                    output += `NaN = ${pasUnNombre}\\n`;
                    output += `typeof NaN = ${typeof pasUnNombre}\\n\\n`;
                    
                    let somme = 10 + 5;
                    let produit = 10 * 5;
                    let division = 10 / 3;
                    let modulo = 10 % 3;
                    
                    output += `10 + 5 = ${somme}\\n`;
                    output += `10 * 5 = ${produit}\\n`;
                    output += `10 / 3 = ${division}\\n`;
                    output += `10 % 3 = ${modulo}\\n\\n`;
                    
                    let str = "123.45";
                    let nombre = Number(str);
                    output += `Number("123.45") = ${nombre}\\n`;
                    output += `Number.isInteger(42) = ${Number.isInteger(42)}\\n`;
                    output += `Number.isNaN(NaN) = ${Number.isNaN(NaN)}\\n\\n`;
                    
                    output += `decimal.toFixed(1) = "${decimal.toFixed(1)}"\\n`;
                    output += `decimal.toPrecision(3) = "${decimal.toPrecision(3)}"\\n\\n`;
                    
                    output += `Number.MAX_SAFE_INTEGER = ${Number.MAX_SAFE_INTEGER}\\n`;
                    output += `Number.MIN_SAFE_INTEGER = ${Number.MIN_SAFE_INTEGER}`;
                    
                    return output;
                }
            },
            {
                title: "Boolean",
                type: "Primitif",
                icon: "fas fa-check-circle",
                description: "Le type Boolean représente une valeur logique et peut être soit true (vrai) soit false (faux). Il est souvent utilisé dans les structures de contrôle.",
                code: `// Valeurs booléennes
let vrai = true;
let faux = false;

// Conversion en booléen
let boolFromNumber = Boolean(1);      // true
let boolFromZero = Boolean(0);        // false
let boolFromString = Boolean("hello");// true
let boolFromEmpty = Boolean("");      // false

// Opérateurs de comparaison retournent des booléens
let egalite = (5 == 5);          // true
let inegalite = (5 != 3);        // true
let strictEgal = (5 === "5");    // false
let superieur = (10 > 5);        // true

// Opérateurs logiques
let et = (true && false);        // false
let ou = (true || false);        // true
let non = !true;                 // false

// Valeurs truthy et falsy
let values = [false, 0, "", null, undefined, NaN];
// Toutes ces valeurs sont falsy (équivalentes à false)

// Utilisation pratique
let age = 18;
let estMajeur = age >= 18;       // true

// Court-circuit
let nom = "Alice";
let message = nom || "Invité";   // "Alice" (car nom est truthy)`,
                output: "",
                runCode: function() {
                    let output = "Booléens en JavaScript:\\n\\n";
                    
                    let vrai = true;
                    let faux = false;
                    output += `vrai = ${vrai}\\n`;
                    output += `faux = ${faux}\\n\\n`;
                    
                    output += "Conversions en booléen:\\n";
                    output += `Boolean(1) = ${Boolean(1)}\\n`;
                    output += `Boolean(0) = ${Boolean(0)}\\n`;
                    output += `Boolean("hello") = ${Boolean("hello")}\\n`;
                    output += `Boolean("") = ${Boolean("")}\\n\\n`;
                    
                    output += "Opérateurs de comparaison:\\n";
                    output += `5 == 5 = ${5 == 5}\\n`;
                    output += `5 != 3 = ${5 != 3}\\n`;
                    output += `5 === "5" = ${5 === "5"}\\n`;
                    output += `10 > 5 = ${10 > 5}\\n\\n`;
                    
                    output += "Opérateurs logiques:\\n";
                    output += `true && false = ${true && false}\\n`;
                    output += `true || false = ${true || false}\\n`;
                    output += `!true = ${!true}\\n\\n`;
                    
                    output += "Valeurs falsy en JavaScript:\\n";
                    let falsyValues = [false, 0, "", null, undefined, NaN];
                    falsyValues.forEach(val => {
                        output += `Boolean(${val}) = ${Boolean(val)}\\n`;
                    });
                    
                    output += "\\nExemple pratique:\\n";
                    let age = 18;
                    let estMajeur = age >= 18;
                    output += `age = ${age}, estMajeur = ${estMajeur}\\n`;
                    
                    let nom = "Alice";
                    let message = nom || "Invité";
                    output += `nom || "Invité" = "${message}"`;
                    
                    return output;
                }
            },
            {
                title: "Object",
                type: "Non-primitif",
                icon: "fas fa-cube",
                description: "Un objet est une collection de propriétés sous forme de paires clé-valeur. Les objets sont utilisés pour stocker des données structurées.",
                code: `// Création d'objet
let personne = {
    nom: "Alice",
    age: 30,
    ville: "Paris",
    saluer: function() {
        return \`Bonjour, je m'appelle \${this.nom}\`;
    }
};

// Accès aux propriétés
console.log(personne.nom);       // "Alice"
console.log(personne["age"]);    // 30

// Modification
personne.age = 31;
personne.metier = "Développeur";

// Suppression
delete personne.ville;

// Vérification
let aNom = "nom" in personne;    // true
let aVille = "ville" in personne;// false

// Parcours des propriétés
for (let cle in personne) {
    if (typeof personne[cle] !== 'function') {
        console.log(\`\${cle}: \${personne[cle]}\`);
    }
}

// Méthodes d'objet
let cles = Object.keys(personne);
let valeurs = Object.values(personne);
let entrees = Object.entries(personne);

// Objet imbriqué
let compte = {
    titulaire: {
        nom: "Bob",
        prenom: "Martin"
    },
    solde: 1000,
    devise: "EUR"
};`,
                output: "",
                runCode: function() {
                    let output = "Objets en JavaScript:\\n\\n";
                    
                    let personne = {
                        nom: "Alice",
                        age: 30,
                        ville: "Paris",
                        saluer: function() {
                            return `Bonjour, je m'appelle ${this.nom}`;
                        }
                    };
                    
                    output += `personne = ${JSON.stringify(personne, null, 2)}\\n\\n`;
                    
                    output += "Accès aux propriétés:\\n";
                    output += `personne.nom = "${personne.nom}"\\n`;
                    output += `personne["age"] = ${personne["age"]}\\n\\n`;
                    
                    output += "Appel de méthode:\\n";
                    output += `personne.saluer() = "${personne.saluer()}"\\n\\n`;
                    
                    personne.age = 31;
                    personne.metier = "Développeur";
                    output += "Après modification:\\n";
                    output += `personne.age = ${personne.age}\\n`;
                    output += `personne.metier = "${personne.metier}"\\n\\n`;
                    
                    delete personne.ville;
                    output += "Après suppression de 'ville':\\n";
                    output += `"ville" in personne = ${"ville" in personne}\\n\\n`;
                    
                    output += "Parcours des propriétés:\\n";
                    for (let cle in personne) {
                        if (typeof personne[cle] !== 'function') {
                            output += `${cle}: ${personne[cle]}\\n`;
                        }
                    }
                    output += "\\n";
                    
                    output += "Méthodes d'objet:\\n";
                    output += `Object.keys(personne) = [${Object.keys(personne)}]\\n`;
                    output += `Object.values(personne) = [${Object.values(personne).filter(v => typeof v !== 'function')}]\\n\\n`;
                    
                    let compte = {
                        titulaire: {
                            nom: "Bob",
                            prenom: "Martin"
                        },
                        solde: 1000,
                        devise: "EUR"
                    };
                    
                    output += "Objet imbriqué:\\n";
                    output += JSON.stringify(compte, null, 2);
                    
                    return output;
                }
            },
            {
                title: "Array",
                type: "Non-primitif",
                icon: "fas fa-layer-group",
                description: "Un tableau (Array) est une structure de données qui permet de stocker une collection ordonnée d'éléments. Les tableaux sont dynamiques et peuvent contenir différents types de données.",
                code: `// Création de tableaux
let fruits = ["pomme", "banane", "orange"];
let nombres = [1, 2, 3, 4, 5];
let mixte = ["texte", 42, true, null];

// Accès aux éléments
let premier = fruits[0];      // "pomme"
let dernier = fruits[fruits.length - 1]; // "orange"

// Modification
fruits[1] = "kiwi";          // Remplace "banane" par "kiwi"
fruits.push("mangue");       // Ajoute à la fin
fruits.unshift("fraise");    // Ajoute au début

// Suppression
let dernierFruit = fruits.pop();     // Supprime et retourne le dernier
let premierFruit = fruits.shift();   // Supprime et retourne le premier

// Longueur
let nbFruits = fruits.length;        // Nombre d'éléments

// Parcours
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Méthode forEach
fruits.forEach(function(fruit, index) {
    console.log(\`\${index}: \${fruit}\`);
});

// Tableaux multidimensionnels
let matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let element = matrice[1][2]; // 6`,
                output: "",
                runCode: function() {
                    let output = "Tableaux en JavaScript:\\n\\n";
                    
                    let fruits = ["pomme", "banane", "orange"];
                    let nombres = [1, 2, 3, 4, 5];
                    let mixte = ["texte", 42, true, null];
                    
                    output += `fruits = [${fruits}]\\n`;
                    output += `nombres = [${nombres}]\\n`;
                    output += `mixte = ${JSON.stringify(mixte)}\\n\\n`;
                    
                    output += "Accès aux éléments:\\n";
                    output += `fruits[0] = "${fruits[0]}"\\n`;
                    output += `fruits[fruits.length - 1] = "${fruits[fruits.length - 1]}"\\n\\n`;
                    
                    fruits[1] = "kiwi";
                    fruits.push("mangue");
                    fruits.unshift("fraise");
                    
                    output += "Après modifications:\\n";
                    output += `fruits = [${fruits}]\\n\\n`;
                    
                    let dernierFruit = fruits.pop();
                    let premierFruit = fruits.shift();
                    
                    output += "Après suppression:\\n";
                    output += `fruits.pop() a retourné: "${dernierFruit}"\\n`;
                    output += `fruits.shift() a retourné: "${premierFruit}"\\n`;
                    output += `fruits = [${fruits}]\\n\\n`;
                    
                    output += "Parcours avec forEach:\\n";
                    fruits.forEach(function(fruit, index) {
                        output += `${index}: ${fruit}\\n`;
                    });
                    output += "\\n";
                    
                    let matrice = [
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]
                    ];
                    
                    output += "Tableau multidimensionnel:\\n";
                    output += JSON.stringify(matrice, null, 2);
                    output += `\\nmatrice[1][2] = ${matrice[1][2]}`;
                    
                    return output;
                }
            },
            {
                title: "Null",
                type: "Primitif",
                icon: "fas fa-ban",
                description: "Null est une valeur primitive qui représente l'absence intentionnelle de valeur. C'est une valeur assignée explicitement pour indiquer 'aucune valeur' ou 'vide'.",
                code: `// Déclaration null
let valeurNull = null;

// Utilisation typique
let utilisateur = null; // Pas d'utilisateur connecté

// Vérification de null
if (utilisateur === null) {
    console.log("Aucun utilisateur");
}

// Comparaisons
console.log(null == undefined);   // true (égalité abstraite)
console.log(null === undefined);  // false (égalité stricte)

// typeof null (particularité JavaScript)
console.log(typeof null);         // "object" (c'est un bug historique)

// Utilisation pratique
function trouverUtilisateur(id) {
    // Si l'utilisateur n'existe pas
    if (id < 0) {
        return null;
    }
    return { id: id, nom: "Alice" };
}

let user = trouverUtilisateur(-1);
if (user === null) {
    console.log("Utilisateur non trouvé");
}

// Différence avec undefined
let nonDefini;
console.log(nonDefini);  // undefined
console.log(valeurNull); // null`,
                output: "",
                runCode: function() {
                    let output = "Null en JavaScript:\\n\\n";
                    
                    let valeurNull = null;
                    let utilisateur = null;
                    
                    output += `valeurNull = ${valeurNull}\\n`;
                    output += `utilisateur = ${utilisateur}\\n\\n`;
                    
                    if (utilisateur === null) {
                        output += "Aucun utilisateur (vérification avec === null)\\n\\n";
                    }
                    
                    output += "Comparaisons:\\n";
                    output += `null == undefined = ${null == undefined}\\n`;
                    output += `null === undefined = ${null === undefined}\\n`;
                    output += `typeof null = "${typeof null}"\\n\\n`;
                    
                    function trouverUtilisateur(id) {
                        if (id < 0) {
                            return null;
                        }
                        return { id: id, nom: "Alice" };
                    }
                    
                    output += "Exemple pratique:\\n";
                    let user1 = trouverUtilisateur(-1);
                    output += `trouverUtilisateur(-1) = ${user1}\\n`;
                    
                    if (user1 === null) {
                        output += "Utilisateur non trouvé\\n\\n";
                    }
                    
                    let user2 = trouverUtilisateur(1);
                    output += `trouverUtilisateur(1) = ${JSON.stringify(user2)}\\n\\n`;
                    
                    let nonDefini;
                    output += "Différence avec undefined:\\n";
                    output += `nonDefini = ${nonDefini}\\n`;
                    output += `valeurNull = ${valeurNull}`;
                    
                    return output;
                }
            },
            {
                title: "Undefined",
                type: "Primitif",
                icon: "fas fa-question-circle",
                description: "Undefined est une valeur primitive qui représente une variable déclarée mais non initialisée. C'est la valeur par défaut des variables non assignées.",
                code: `// Variables non initialisées
let nonDefini;
console.log(nonDefini); // undefined

// Paramètres non fournis
function afficher(param) {
    console.log(param); // undefined si aucun argument
}
afficher();

// Propriétés inexistantes
let objet = {};
console.log(objet.propriete); // undefined

// Retour de fonction sans valeur
function sansRetour() {
    // pas de return
}
let resultat = sansRetour();
console.log(resultat); // undefined

// Vérification
if (nonDefini === undefined) {
    console.log("La variable n'est pas définie");
}

// typeof avec undefined
console.log(typeof nonDefini); // "undefined"

// Différences null vs undefined
let varNull = null;
let varUndefined;

console.log(varNull == varUndefined);   // true
console.log(varNull === varUndefined);  // false

// Opérateur de coalescence nulle
let valeur = nonDefini ?? "valeur par défaut";
console.log(valeur); // "valeur par défaut"`,
                output: "",
                runCode: function() {
                    let output = "Undefined en JavaScript:\\n\\n";
                    
                    let nonDefini;
                    output += `let nonDefini;\\n`;
                    output += `nonDefini = ${nonDefini}\\n\\n`;
                    
                    function afficher(param) {
                        return `param = ${param}`;
                    }
                    output += `afficher() sans argument: ${afficher()}\\n\\n`;
                    
                    let objet = {};
                    output += `objet.proprieteInexistante = ${objet.proprieteInexistante}\\n\\n`;
                    
                    function sansRetour() {
                        // pas de return
                    }
                    let resultat = sansRetour();
                    output += `sansRetour() retourne: ${resultat}\\n\\n`;
                    
                    if (nonDefini === undefined) {
                        output += "La variable n'est pas définie (vérification réussie)\\n\\n";
                    }
                    
                    output += `typeof nonDefini = "${typeof nonDefini}"\\n\\n`;
                    
                    let varNull = null;
                    let varUndefined;
                    
                    output += "Comparaison null vs undefined:\\n";
                    output += `null == undefined = ${null == undefined}\\n`;
                    output += `null === undefined = ${null === undefined}\\n\\n`;
                    
                    let valeur = nonDefini ?? "valeur par défaut";
                    output += `nonDefini ?? "valeur par défaut" = "${valeur}"\\n`;
                    output += `null ?? "valeur par défaut" = "${null ?? "valeur par défaut"}"`;
                    
                    return output;
                }
            }
        ]
    },
    
    operators: {
        title: "Opérateurs",
        icon: "fas fa-calculator",
        description: "Les opérateurs permettent de manipuler des valeurs et des variables. JavaScript possède différents types d'opérateurs : arithmétiques, d'affectation, de comparaison, logiques, etc.",
        topics: [
            {
                title: "Arithmetic",
                type: "Opérateur",
                icon: "fas fa-plus",
                description: "Les opérateurs arithmétiques effectuent des opérations mathématiques sur des nombres.",
                code: `// Opérateurs arithmétiques de base
let a = 10, b = 3;

let addition = a + b;        // 13
let soustraction = a - b;    // 7
let multiplication = a * b;  // 30
let division = a / b;        // 3.333...
let modulo = a % b;          // 1 (reste de la division)
let exposant = a ** b;       // 1000 (10 puissance 3)

// Incrémentation et décrémentation
let compteur = 5;
compteur++;     // Incrémentation postfixée: retourne 5 puis devient 6
++compteur;     // Incrémentation prefixée: devient 7 puis retourne 7

compteur--;     // Décrémentation postfixée
--compteur;     // Décrémentation prefixée

// Négation unaire
let positif = 10;
let negatif = -positif;      // -10

// Opérateur de concaténation (avec strings)
let nom = "Alice";
let age = 30;
let presentation = nom + " a " + age + " ans"; // "Alice a 30 ans"

// Conversions implicites
let resultat = "10" + 5;     // "105" (concaténation)
let resultat2 = "10" - 5;    // 5 (soustraction)
let resultat3 = "10" * "2";  // 20 (multiplication)

// Arrondi avec division
let arrondi = Math.floor(a / b);  // 3 (division entière)`,
                output: "",
                runCode: function() {
                    let output = "Opérateurs arithmétiques:\\n\\n";
                    
                    let a = 10, b = 3;
                    
                    output += `a = ${a}, b = ${b}\\n\\n`;
                    output += `Addition: a + b = ${a + b}\\n`;
                    output += `Soustraction: a - b = ${a - b}\\n`;
                    output += `Multiplication: a * b = ${a * b}\\n`;
                    output += `Division: a / b = ${a / b}\\n`;
                    output += `Modulo: a % b = ${a % b}\\n`;
                    output += `Exposant: a ** b = ${a ** b}\\n\\n`;
                    
                    let compteur = 5;
                    output += `compteur = ${compteur}\\n`;
                    output += `compteur++ = ${compteur++} (puis compteur = ${compteur})\\n`;
                    output += `++compteur = ${++compteur} (compteur = ${compteur})\\n`;
                    output += `compteur-- = ${compteur--} (puis compteur = ${compteur})\\n`;
                    output += `--compteur = ${--compteur} (compteur = ${compteur})\\n\\n`;
                    
                    let positif = 10;
                    let negatif = -positif;
                    output += `Négation: -${positif} = ${negatif}\\n\\n`;
                    
                    let nom = "Alice";
                    let age = 30;
                    let presentation = nom + " a " + age + " ans";
                    output += `Concaténation: "${presentation}"\\n\\n`;
                    
                    output += "Conversions implicites:\\n";
                    output += `"10" + 5 = "${"10" + 5}"\\n`;
                    output += `"10" - 5 = ${"10" - 5}\\n`;
                    output += `"10" * "2" = ${"10" * "2"}\\n\\n`;
                    
                    output += `Division entière: Math.floor(${a} / ${b}) = ${Math.floor(a / b)}`;
                    
                    return output;
                }
            },
            {
                title: "Assignment",
                type: "Opérateur",
                icon: "fas fa-equals",
                description: "Les opérateurs d'affectation assignent des valeurs aux variables. Ils peuvent être combinés avec d'autres opérateurs pour des affectations plus complexes.",
                code: `// Affectation simple
let x = 10;
let y = 5;

// Affectation avec opération
x += y;     // équivaut à: x = x + y  (15)
x -= y;     // équivaut à: x = x - y  (10)
x *= y;     // équivaut à: x = x * y  (50)
x /= y;     // équivaut à: x = x / y  (10)
x %= y;     // équivaut à: x = x % y  (0)
x **= y;    // équivaut à: x = x ** y (0)

// Affectation avec décalage de bits
let bits = 5; // 0101 en binaire
bits <<= 1;   // Décalage à gauche: 1010 (10 en décimal)
bits >>= 2;   // Décalage à droite: 0010 (2 en décimal)

// Affectation avec opérateurs bit à bit
let a = 5, b = 3; // 0101 et 0011
a &= b;     // ET bit à bit: 0001 (1)
a |= b;     // OU bit à bit: 0111 (7)
a ^= b;     // XOR bit à bit: 0110 (6)

// Affectation logique
let valeur = null;
valeur ||= "valeur par défaut"; // Si valeur est falsy, assigne
valeur &&= "modifié";          // Si valeur est truthy, assigne
valeur ??= "autre valeur";     // Si valeur est null/undefined, assigne

// Affectation par décomposition
let [premier, deuxieme] = [1, 2];
let {nom, age} = {nom: "Alice", age: 30};`,
                output: "",
                runCode: function() {
                    let output = "Opérateurs d'affectation:\\n\\n";
                    
                    let x = 10;
                    let y = 5;
                    output += `x = ${x}, y = ${y}\\n\\n`;
                    
                    x += y;
                    output += `x += y → x = ${x}\\n`;
                    x -= y;
                    output += `x -= y → x = ${x}\\n`;
                    x *= y;
                    output += `x *= y → x = ${x}\\n`;
                    x /= y;
                    output += `x /= y → x = ${x}\\n`;
                    x %= y;
                    output += `x %= y → x = ${x}\\n\\n`;
                    
                    let bits = 5;
                    output += `bits = ${bits} (${bits.toString(2)} en binaire)\\n`;
                    bits <<= 1;
                    output += `bits <<= 1 → ${bits} (${bits.toString(2)} en binaire)\\n`;
                    bits >>= 2;
                    output += `bits >>= 2 → ${bits} (${bits.toString(2)} en binaire)\\n\\n`;
                    
                    let a = 5, b = 3;
                    output += `a = ${a} (${a.toString(2)}), b = ${b} (${b.toString(2)})\\n`;
                    a &= b;
                    output += `a &= b → ${a} (${a.toString(2)})\\n`;
                    a = 5; // Reset
                    a |= b;
                    output += `a |= b → ${a} (${a.toString(2)})\\n`;
                    a = 5; // Reset
                    a ^= b;
                    output += `a ^= b → ${a} (${a.toString(2)})\\n\\n`;
                    
                    let valeur = null;
                    output += `valeur = ${valeur}\\n`;
                    valeur ||= "valeur par défaut";
                    output += `valeur ||= "valeur par défaut" → "${valeur}"\\n`;
                    valeur &&= "modifié";
                    output += `valeur &&= "modifié" → "${valeur}"\\n`;
                    valeur = null;
                    valeur ??= "autre valeur";
                    output += `valeur ??= "autre valeur" → "${valeur}"\\n\\n`;
                    
                    output += "Affectation par décomposition:\\n";
                    let [premier, deuxieme] = [1, 2];
                    let {nom, age} = {nom: "Alice", age: 30};
                    output += `[premier, deuxieme] = [1, 2] → premier=${premier}, deuxieme=${deuxieme}\\n`;
                    output += `{nom, age} = {nom: "Alice", age: 30} → nom="${nom}", age=${age}`;
                    
                    return output;
                }
            },
            {
                title: "Comparison",
                type: "Opérateur",
                icon: "fas fa-less-than-equal",
                description: "Les opérateurs de comparaison comparent deux valeurs et retournent un booléen (true ou false). Ils sont utilisés dans les structures de contrôle comme les conditions et les boucles.",
                code: `// Opérateurs de comparaison
let a = 10, b = 5, c = "10";

// Égalité simple (==) - vérifie la valeur avec conversion de type
console.log(a == 10);    // true
console.log(a == c);     // true (conversion de type: "10" → 10)

// Égalité stricte (===) - vérifie la valeur ET le type
console.log(a === 10);   // true
console.log(a === c);    // false (types différents: number vs string)

// Inégalité simple (!=)
console.log(a != 5);     // true
console.log(a != c);     // false (conversion de type)

// Inégalité stricte (!==)
console.log(a !== 5);    // true
console.log(a !== c);    // true (types différents)

// Comparaisons numériques
console.log(a > b);      // true (supérieur à)
console.log(a < b);      // false (inférieur à)
console.log(a >= 10);    // true (supérieur ou égal)
console.log(a <= 9);     // false (inférieur ou égal)

// Comparaison de chaînes (ordre lexicographique)
console.log("a" < "b");      // true
console.log("apple" < "banana"); // true
console.log("10" < "2");     // true (comparaison de chaînes)

// Comparaison avec null et undefined
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(null >= 0);          // true (null devient 0)
console.log(undefined >= 0);     // false (undefined devient NaN)

// Comparaisons spéciales
console.log(NaN == NaN);         // false (toujours!)
console.log(isNaN(NaN));         // true (utiliser isNaN)
console.log(Object.is(NaN, NaN)); // true (méthode ES6)`,
                output: "",
                runCode: function() {
                    let output = "Opérateurs de comparaison:\\n\\n";
                    
                    let a = 10, b = 5, c = "10";
                    output += `a = ${a}, b = ${b}, c = "${c}"\\n\\n`;
                    
                    output += "Égalité simple (==):\\n";
                    output += `a == 10 = ${a == 10}\\n`;
                    output += `a == c = ${a == c}\\n`;
                    output += `null == undefined = ${null == undefined}\\n\\n`;
                    
                    output += "Égalité stricte (===):\\n";
                    output += `a === 10 = ${a === 10}\\n`;
                    output += `a === c = ${a === c}\\n`;
                    output += `null === undefined = ${null === undefined}\\n\\n`;
                    
                    output += "Inégalité simple (!=):\\n";
                    output += `a != 5 = ${a != 5}\\n`;
                    output += `a != c = ${a != c}\\n\\n`;
                    
                    output += "Inégalité stricte (!==):\\n";
                    output += `a !== 5 = ${a !== 5}\\n`;
                    output += `a !== c = ${a !== c}\\n\\n`;
                    
                    output += "Comparaisons numériques:\\n";
                    output += `a > b = ${a > b}\\n`;
                    output += `a < b = ${a < b}\\n`;
                    output += `a >= 10 = ${a >= 10}\\n`;
                    output += `a <= 9 = ${a <= 9}\\n\\n`;
                    
                    output += "Comparaison de chaînes:\\n";
                    output += `"a" < "b" = ${"a" < "b"}\\n`;
                    output += `"apple" < "banana" = ${"apple" < "banana"}\\n`;
                    output += `"10" < "2" = ${"10" < "2"} (comparaison lexicographique)\\n\\n`;
                    
                    output += "Comparaisons avec null et undefined:\\n";
                    output += `null >= 0 = ${null >= 0}\\n`;
                    output += `undefined >= 0 = ${undefined >= 0}\\n\\n`;
                    
                    output += "Comparaisons spéciales avec NaN:\\n";
                    output += `NaN == NaN = ${NaN == NaN}\\n`;
                    output += `isNaN(NaN) = ${isNaN(NaN)}\\n`;
                    output += `Object.is(NaN, NaN) = ${Object.is(NaN, NaN)}`;
                    
                    return output;
                }
            },
            {
                title: "Logical",
                type: "Opérateur",
                icon: "fas fa-code-branch",
                description: "Les opérateurs logiques permettent de combiner des expressions booléennes. Ils sont souvent utilisés dans les structures conditionnelles.",
                code: `// Opérateurs logiques de base
let vrai = true, faux = false;

// ET logique (&&) - retourne vrai si les deux opérandes sont vrais
console.log(vrai && faux);   // false
console.log(vrai && true);   // true

// OU logique (||) - retourne vrai si au moins un opérande est vrai
console.log(vrai || faux);   // true
console.log(faux || faux);   // false

// NON logique (!) - inverse la valeur booléenne
console.log(!vrai);          // false
console.log(!faux);          // true

// Court-circuit (short-circuit evaluation)
let user = { name: "Alice" };
let displayName = user && user.name;  // "Alice" (si user existe)
let defaultName = user || "Invité";   // user (car truthy)

// Opérateurs logiques avec valeurs non booléennes
let a = 5, b = 10;
let resultat = a && b;       // 10 (retourne la dernière valeur truthy)
let resultat2 = a || b;      // 5 (retourne la première valeur truthy)
let resultat3 = !a;          // false (car a est truthy)

// Chaînage d'opérateurs
let age = 25;
let peutConduire = age >= 18 && age <= 90;  // true
let estEnfantOuSenior = age < 18 || age > 65; // false

// Combinaisons complexes
let estAdulte = true;
let aPermis = false;
let peutLouerVoiture = estAdulte && (aPermis || age > 21);

// Opérateur nullish coalescing (??)
let valeur = null;
let resultat4 = valeur ?? "défaut";  // "défaut" (si null ou undefined)
let zero = 0;
let resultat5 = zero || "défaut";    // "défaut" (car 0 est falsy)
let resultat6 = zero ?? "défaut";    // 0 (car pas null/undefined)`,
                output: "",
                runCode: function() {
                    let output = "Opérateurs logiques:\\n\\n";
                    
                    let vrai = true, faux = false;
                    output += `vrai = ${vrai}, faux = ${faux}\\n\\n`;
                    
                    output += "ET logique (&&):\\n";
                    output += `vrai && faux = ${vrai && faux}\\n`;
                    output += `vrai && true = ${vrai && true}\\n\\n`;
                    
                    output += "OU logique (||):\\n";
                    output += `vrai || faux = ${vrai || faux}\\n`;
                    output += `faux || faux = ${faux || faux}\\n\\n`;
                    
                    output += "NON logique (!):\\n";
                    output += `!vrai = ${!vrai}\\n`;
                    output += `!faux = ${!faux}\\n\\n`;
                    
                    output += "Court-circuit:\\n";
                    let user = { name: "Alice" };
                    let displayName = user && user.name;
                    let defaultName = user || "Invité";
                    output += `user && user.name = "${displayName}"\\n`;
                    output += `user || "Invité" = ${JSON.stringify(defaultName)}\\n\\n`;
                    
                    let a = 5, b = 10;
                    output += "Avec valeurs non booléennes:\\n";
                    output += `5 && 10 = ${a && b}\\n`;
                    output += `5 || 10 = ${a || b}\\n`;
                    output += `!5 = ${!a}\\n\\n`;
                    
                    let age = 25;
                    output += "Exemples pratiques:\\n";
                    let peutConduire = age >= 18 && age <= 90;
                    let estEnfantOuSenior = age < 18 || age > 65;
                    output += `age = ${age}\\n`;
                    output += `age >= 18 && age <= 90 = ${peutConduire}\\n`;
                    output += `age < 18 || age > 65 = ${estEnfantOuSenior}\\n\\n`;
                    
                    let valeur = null;
                    let zero = 0;
                    output += "Opérateur nullish coalescing (??):\\n";
                    output += `null ?? "défaut" = "${valeur ?? "défaut"}"\\n`;
                    output += `0 || "défaut" = "${zero || "défaut"}"\\n`;
                    output += `0 ?? "défaut" = ${zero ?? "défaut"}`;
                    
                    return output;
                }
            },
            {
                title: "Unary",
                type: "Opérateur",
                icon: "fas fa-minus",
                description: "Les opérateurs unaires nécessitent un seul opérande. Ils peuvent être placés avant ou après l'opérande selon leur fonction.",
                code: `// Opérateurs unaires de base
let x = 10;

// Négation unaire (-)
let negatif = -x;        // -10
let positif = +"5";      // 5 (conversion en nombre)

// Incrémentation/Décrémentation
let a = 5;
let b = a++;    // b = 5, a = 6 (post-incrémentation)
let c = ++a;    // c = 7, a = 7 (pré-incrémentation)

let d = 10;
let e = d--;    // e = 10, d = 9 (post-décrémentation)
let f = --d;    // f = 8, d = 8 (pré-décrémentation)

// Opérateur logique NOT (!)
let vrai = true;
let nonVrai = !vrai;     // false
let doubleNeg = !!vrai;  // true (force la conversion en booléen)

// Opérateur typeof
console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (bug historique)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"

// Opérateur void
let resultat = void 0;           // undefined
void console.log("Bonjour");     // Exécute mais retourne undefined

// Opérateur delete
let objet = { a: 1, b: 2 };
delete objet.a;                  // Supprime la propriété a
console.log(objet.a);            // undefined
console.log("a" in objet);       // false

// delete sur les tableaux
let tableau = [1, 2, 3];
delete tableau[1];               // Supprime l'élément à l'index 1
console.log(tableau);            // [1, empty, 3]
console.log(tableau.length);     // 3 (la longueur ne change pas)

// Opérateur await (asynchrone)
async function fetchData() {
    let data = await fetch('https://api.example.com');
    // Attend la résolution de la promesse
}`,
                output: "",
                runCode: function() {
                    let output = "Opérateurs unaires:\\n\\n";
                    
                    let x = 10;
                    output += `x = ${x}\\n`;
                    output += `-x = ${-x}\\n`;
                    output += `+"5" = ${+"5"}\\n\\n`;
                    
                    let a = 5;
                    output += `a = ${a}\\n`;
                    let b = a++;
                    output += `b = a++ → b = ${b}, a = ${a}\\n`;
                    let c = ++a;
                    output += `c = ++a → c = ${c}, a = ${a}\\n\\n`;
                    
                    let vrai = true;
                    output += `vrai = ${vrai}\\n`;
                    output += `!vrai = ${!vrai}\\n`;
                    output += `!!vrai = ${!!vrai}\\n\\n`;
                    
                    output += "Opérateur typeof:\\n";
                    output += `typeof 42 = "${typeof 42}"\\n`;
                    output += `typeof "hello" = "${typeof "hello"}"\\n`;
                    output += `typeof true = "${typeof true}"\\n`;
                    output += `typeof undefined = "${typeof undefined}"\\n`;
                    output += `typeof null = "${typeof null}"\\n`;
                    output += `typeof {} = "${typeof {}}"\\n`;
                    output += `typeof [] = "${typeof []}"\\n`;
                    output += `typeof function(){} = "${typeof function(){}}"\\n\\n`;
                    
                    output += "Opérateur void:\\n";
                    output += `void 0 = ${void 0}\\n`;
                    output += `void console.log("test") = ${void console.log("test")}\\n\\n`;
                    
                    let objet = { a: 1, b: 2 };
                    output += "Opérateur delete:\\n";
                    output += `Avant delete: objet = ${JSON.stringify(objet)}\\n`;
                    delete objet.a;
                    output += `Après delete objet.a: objet = ${JSON.stringify(objet)}\\n`;
                    output += `"a" in objet = ${"a" in objet}\\n\\n`;
                    
                    let tableau = [1, 2, 3];
                    delete tableau[1];
                    output += `Tableau après delete tableau[1]: [${tableau}]\\n`;
                    output += `Longueur du tableau: ${tableau.length}`;
                    
                    return output;
                }
            },
            {
                title: "Ternary",
                type: "Opérateur",
                icon: "fas fa-question",
                description: "L'opérateur ternaire (conditionnel) est le seul opérateur JavaScript qui prend trois opérandes. Il est souvent utilisé comme raccourci pour les instructions if-else.",
                code: `// Syntaxe basique
// condition ? expressionSiVrai : expressionSiFaux

let age = 18;
let statut = age >= 18 ? "majeur" : "mineur";
console.log(statut); // "majeur"

// Alternative à if-else
let heure = 14;
let salutation = heure < 12 ? "Bonjour" : "Bon après-midi";
console.log(salutation); // "Bon après-midi"

// Ternaires imbriqués
let note = 85;
let mention = note >= 90 ? "Excellent" :
              note >= 80 ? "Très bien" :
              note >= 70 ? "Bien" :
              note >= 60 ? "Passable" : "Insuffisant";
console.log(mention); // "Très bien"

// Affectation conditionnelle
let estConnecte = true;
let message = estConnecte ? "Bienvenue" : "Veuillez vous connecter";
console.log(message); // "Bienvenue"

// Ternaire avec fonctions
function afficherMessage(estAdmin) {
    return estAdmin ? "Accès admin autorisé" : "Accès limité";
}
console.log(afficherMessage(true)); // "Accès admin autorisé"

// Ternaire pour les valeurs par défaut
let utilisateur = null;
let nomUtilisateur = utilisateur ? utilisateur.nom : "Invité";
console.log(nomUtilisateur); // "Invité"

// Ternaire avec opérations
let a = 10, b = 5;
let max = a > b ? a : b;
console.log(max); // 10

// Ternaire dans les templates strings
let produit = { nom: "Laptop", prix: 999 };
let affichage = \`\${produit.nom}: \${produit.prix > 1000 ? "Cher" : "Abordable"}\`;
console.log(affichage); // "Laptop: Abordable"

// Attention: ternaires complexes peuvent être difficiles à lire
let x = 10, y = 20, z = 30;
let resultat = x > y ? (x > z ? x : z) : (y > z ? y : z);
console.log(resultat); // 30 (la plus grande valeur)`,
                output: "",
                runCode: function() {
                    let output = "Opérateur ternaire (conditionnel):\\n\\n";
                    
                    output += "Syntaxe: condition ? expressionSiVrai : expressionSiFaux\\n\\n";
                    
                    let age = 18;
                    let statut = age >= 18 ? "majeur" : "mineur";
                    output += `age = ${age}\\n`;
                    output += `statut = age >= 18 ? "majeur" : "mineur" → "${statut}"\\n\\n`;
                    
                    let heure = 14;
                    let salutation = heure < 12 ? "Bonjour" : "Bon après-midi";
                    output += `heure = ${heure}\\n`;
                    output += `salutation = heure < 12 ? "Bonjour" : "Bon après-midi" → "${salutation}"\\n\\n`;
                    
                    let note = 85;
                    let mention = note >= 90 ? "Excellent" :
                                  note >= 80 ? "Très bien" :
                                  note >= 70 ? "Bien" :
                                  note >= 60 ? "Passable" : "Insuffisant";
                    output += `note = ${note}\\n`;
                    output += `mention = note >= 90 ? "Excellent" : ... → "${mention}"\\n\\n`;
                    
                    let estConnecte = true;
                    let message = estConnecte ? "Bienvenue" : "Veuillez vous connecter";
                    output += `estConnecte = ${estConnecte}\\n`;
                    output += `message = estConnecte ? "Bienvenue" : "Veuillez vous connecter" → "${message}"\\n\\n`;
                    
                    function afficherMessage(estAdmin) {
                        return estAdmin ? "Accès admin autorisé" : "Accès limité";
                    }
                    output += `afficherMessage(true) = "${afficherMessage(true)}"\\n`;
                    output += `afficherMessage(false) = "${afficherMessage(false)}"\\n\\n`;
                    
                    let utilisateur = null;
                    let nomUtilisateur = utilisateur ? utilisateur.nom : "Invité";
                    output += `utilisateur = ${utilisateur}\\n`;
                    output += `nomUtilisateur = utilisateur ? utilisateur.nom : "Invité" → "${nomUtilisateur}"\\n\\n`;
                    
                    let a = 10, b = 5;
                    let max = a > b ? a : b;
                    output += `a = ${a}, b = ${b}\\n`;
                    output += `max = a > b ? a : b → ${max}\\n\\n`;
                    
                    let produit = { nom: "Laptop", prix: 999 };
                    let affichage = `${produit.nom}: ${produit.prix > 1000 ? "Cher" : "Abordable"}`;
                    output += `Template string avec ternaire: "${affichage}"\\n\\n`;
                    
                    let x = 10, y = 20, z = 30;
                    let resultat = x > y ? (x > z ? x : z) : (y > z ? y : z);
                    output += `x = ${x}, y = ${y}, z = ${z}\\n`;
                    output += `Plus grande valeur: ${resultat}`;
                    
                    return output;
                }
            }
        ]
    },
    
    "control-flow": {
        title: "Structures de contrôle",
        icon: "fas fa-project-diagram",
        description: "Les structures de contrôle dirigent le flux d'exécution du programme. Elles permettent d'exécuter du code conditionnellement ou de manière répétitive.",
        topics: [
            {
                title: "If / Else",
                type: "Conditionnel",
                icon: "fas fa-code-branch",
                description: "L'instruction if exécute une instruction si une condition spécifiée est vraie. Si la condition est fausse, une autre instruction peut être exécutée avec else.",
                code: `// Structure if-else basique
let heure = 14;

if (heure < 12) {
    console.log("Bonjour !");
} else if (heure < 18) {
    console.log("Bon après-midi !");
} else {
    console.log("Bonsoir !");
}

// Conditions imbriquées
let estConnecte = true;
let aDesDroits = false;

if (estConnecte) {
    if (aDesDroits) {
        console.log("Accès autorisé au panneau admin");
    } else {
        console.log("Accès utilisateur standard");
    }
} else {
    console.log("Veuillez vous connecter");
}

// Valeurs Truthy et Falsy
// Falsy: false, 0, "", null, undefined, NaN
// Truthy: tout le reste

let message = "";
if (message) {
    console.log("Message non vide");
} else {
    console.log("Message vide (falsy)");
}`,
                output: "",
                runCode: function() {
                    let output = "Structures If / Else:\n\n";
                    
                    let heure = 14;
                    output += `heure = ${heure}\n`;
                    if (heure < 12) {
                        output += "Résultat: Bonjour !\n";
                    } else if (heure < 18) {
                        output += "Résultat: Bon après-midi !\n";
                    } else {
                        output += "Résultat: Bonsoir !\n";
                    }
                    output += "\n";
                    
                    let estConnecte = true;
                    let aDesDroits = false;
                    output += `estConnecte = ${estConnecte}, aDesDroits = ${aDesDroits}\n`;
                    if (estConnecte) {
                        if (aDesDroits) {
                            output += "Résultat: Accès autorisé au panneau admin\n";
                        } else {
                            output += "Résultat: Accès utilisateur standard\n";
                        }
                    } else {
                        output += "Résultat: Veuillez vous connecter\n";
                    }
                    output += "\n";
                    
                    let message = "";
                    output += `message = "${message}" (falsy)\n`;
                    if (message) {
                        output += "Résultat: Message non vide";
                    } else {
                        output += "Résultat: Message vide";
                    }
                    
                    return output;
                }
            },
            {
                title: "Switch",
                type: "Conditionnel",
                icon: "fas fa-toggle-on",
                description: "L'instruction switch évalue une expression et fait correspondre la valeur de l'expression à une clause case.",
                code: `// Structure switch
let fruit = "Banane";

switch (fruit) {
    case "Orange":
        console.log("Les oranges sont à 1.50€ le kilo.");
        break;
    case "Pomme":
        console.log("Les pommes sont à 1.20€ le kilo.");
        break;
    case "Banane":
        console.log("Les bananes sont à 0.90€ le kilo.");
        break;
    case "Cerise":
        console.log("Les cerises sont à 3.00€ le kilo.");
        break;
    default:
        console.log("Désolé, nous n'avons plus de " + fruit + ".");
}

// Groupement de cases
let jour = 6; // Samedi
let typeJour;

switch (jour) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        typeJour = "Semaine";
        break;
    case 6:
    case 7:
        typeJour = "Week-end";
        break;
    default:
        typeJour = "Jour invalide";
}
console.log("Jour " + jour + " est un " + typeJour);`,
                output: "",
                runCode: function() {
                    let output = "Structure Switch:\n\n";
                    
                    let fruit = "Banane";
                    output += `fruit = "${fruit}"\n`;
                    
                    switch (fruit) {
                        case "Orange":
                            output += "Les oranges sont à 1.50€ le kilo.\n";
                            break;
                        case "Pomme":
                            output += "Les pommes sont à 1.20€ le kilo.\n";
                            break;
                        case "Banane":
                            output += "Les bananes sont à 0.90€ le kilo.\n";
                            break;
                        case "Cerise":
                            output += "Les cerises sont à 3.00€ le kilo.\n";
                            break;
                        default:
                            output += "Désolé, nous n'avons plus de " + fruit + ".\n";
                    }
                    output += "\n";
                    
                    let jour = 6;
                    let typeJour;
                    
                    switch (jour) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            typeJour = "Semaine";
                            break;
                        case 6:
                        case 7:
                            typeJour = "Week-end";
                            break;
                        default:
                            typeJour = "Jour invalide";
                    }
                    output += `Jour ${jour} est un ${typeJour}`;
                    
                    return output;
                }
            },
            {
                title: "Boucles",
                type: "Itération",
                icon: "fas fa-sync",
                description: "Les boucles permettent de répéter un bloc de code tant qu'une condition est vraie.",
                code: `// Boucle For
console.log("--- Boucle For ---");
for (let i = 0; i < 3; i++) {
    console.log("Itération " + i);
}

// Boucle While
console.log("--- Boucle While ---");
let j = 0;
while (j < 3) {
    console.log("While " + j);
    j++;
}

// Boucle Do...While (exécutée au moins une fois)
console.log("--- Boucle Do...While ---");
let k = 0;
do {
    console.log("Do...While " + k);
    k++;
} while (k < 3);

// Break et Continue
console.log("--- Break et Continue ---");
for (let i = 0; i < 5; i++) {
    if (i === 1) continue; // Saute l'itération 1
    if (i === 3) break;    // Arrête la boucle à 3
    console.log("i = " + i);
}`,
                output: "",
                runCode: function() {
                    let output = "Boucles:\n\n";
                    
                    output += "--- Boucle For ---\n";
                    for (let i = 0; i < 3; i++) {
                        output += "Itération " + i + "\n";
                    }
                    output += "\n";
                    
                    output += "--- Boucle While ---\n";
                    let j = 0;
                    while (j < 3) {
                        output += "While " + j + "\n";
                        j++;
                    }
                    output += "\n";
                    
                    output += "--- Boucle Do...While ---\n";
                    let k = 0;
                    do {
                        output += "Do...While " + k + "\n";
                        k++;
                    } while (k < 3);
                    output += "\n";
                    
                    output += "--- Break et Continue ---\n";
                    for (let i = 0; i < 5; i++) {
                        if (i === 1) {
                            output += "(Continue à i=1)\n";
                            continue;
                        }
                        if (i === 3) {
                            output += "(Break à i=3)\n";
                            break;
                        }
                        output += "i = " + i + "\n";
                    }
                    
                    return output;
                }
            }
        ]
    },

    "functions": {
        title: "Fonctions",
        icon: "fas fa-function",
        description: "Une fonction est un bloc de code conçu pour effectuer une tâche particulière. Elle est exécutée lorsque quelque chose l'invoque (l'appelle).",
        topics: [
            {
                title: "Déclaration",
                type: "Fonction",
                icon: "fas fa-scroll",
                description: "La manière standard de définir une fonction avec le mot-clé function.",
                code: `// Déclaration de fonction
function saluer(nom) {
    return "Bonjour " + nom + " !";
}

console.log(saluer("Alice"));

// Fonction avec paramètres par défaut
function multiplier(a, b = 1) {
    return a * b;
}

console.log(multiplier(5, 2)); // 10
console.log(multiplier(5));    // 5 (b utilise la valeur par défaut)

// Fonction anonyme (expression de fonction)
const additionner = function(a, b) {
    return a + b;
};

console.log(additionner(3, 4)); // 7`,
                output: "",
                runCode: function() {
                    let output = "Déclaration de fonctions:\n\n";
                    
                    function saluer(nom) {
                        return "Bonjour " + nom + " !";
                    }
                    output += `saluer("Alice") → "${saluer("Alice")}"\n\n`;
                    
                    function multiplier(a, b = 1) {
                        return a * b;
                    }
                    output += `multiplier(5, 2) → ${multiplier(5, 2)}\n`;
                    output += `multiplier(5) → ${multiplier(5)} (paramètre par défaut)\n\n`;
                    
                    const additionner = function(a, b) {
                        return a + b;
                    };
                    output += `Expression de fonction additionner(3, 4) → ${additionner(3, 4)}`;
                    
                    return output;
                }
            },
            {
                title: "Fonctions Fléchées",
                type: "ES6",
                icon: "fas fa-arrow-right",
                description: "Une syntaxe plus courte pour écrire des expressions de fonction, introduite dans ES6.",
                code: `// Syntaxe classique
const carreClassique = function(x) {
    return x * x;
};

// Fonction fléchée
const carre = (x) => {
    return x * x;
};

// Syntaxe concise (si une seule instruction return)
const carreConcis = x => x * x;

// Avec plusieurs paramètres
const addition = (a, b) => a + b;

// Sans paramètres
const direBonjour = () => "Bonjour !";

// Avec un corps de fonction complexe
const calculComplexe = (a, b) => {
    let resultat = a + b;
    return resultat * 2;
};

console.log(carreConcis(5)); // 25
console.log(addition(3, 7)); // 10`,
                output: "",
                runCode: function() {
                    let output = "Fonctions Fléchées:\n\n";
                    
                    const carreConcis = x => x * x;
                    output += `x => x * x (avec 5) → ${carreConcis(5)}\n`;
                    
                    const addition = (a, b) => a + b;
                    output += `(a, b) => a + b (avec 3, 7) → ${addition(3, 7)}\n`;
                    
                    const direBonjour = () => "Bonjour !";
                    output += `() => "Bonjour !" → "${direBonjour()}"\n`;
                    
                    const calculComplexe = (a, b) => {
                        let resultat = a + b;
                        return resultat * 2;
                    };
                    output += `calculComplexe(2, 3) → ${calculComplexe(2, 3)}`;
                    
                    return output;
                }
            },
            {
                title: "Paramètres Rest & Spread",
                type: "ES6",
                icon: "fas fa-ellipsis-h",
                description: "Le paramètre du reste (...) permet de représenter un nombre indéfini d'arguments sous forme d'un tableau. L'opérateur de décomposition (spread) permet d'étendre un itérable.",
                code: `// Paramètres du reste (Rest Parameters)
function somme(...nombres) {
    return nombres.reduce((total, n) => total + n, 0);
}

console.log(somme(1, 2, 3)); // 6
console.log(somme(10, 20, 30, 40)); // 100

// Rest avec d'autres paramètres
function afficherInfos(prenom, nom, ...hobbies) {
    console.log("Nom complet: " + prenom + " " + nom);
    console.log("Hobbies: " + hobbies.join(", "));
}

afficherInfos("Jean", "Dupont", "Tennis", "Lecture", "Voyage");

// Opérateur de décomposition (Spread Operator)
let tab1 = [1, 2, 3];
let tab2 = [4, 5, 6];

// Combiner des tableaux
let combine = [...tab1, ...tab2]; // [1, 2, 3, 4, 5, 6]

// Copier un tableau
let copie = [...tab1];

// Passer un tableau comme arguments
function maximum(a, b, c) {
    return Math.max(a, b, c);
}

console.log(maximum(...tab1)); // 3`,
                output: "",
                runCode: function() {
                    let output = "Rest & Spread:\n\n";
                    
                    function somme(...nombres) {
                        return nombres.reduce((total, n) => total + n, 0);
                    }
                    output += `somme(1, 2, 3) → ${somme(1, 2, 3)}\n`;
                    output += `somme(10, 20, 30, 40) → ${somme(10, 20, 30, 40)}\n\n`;
                    
                    function afficherInfos(prenom, nom, ...hobbies) {
                        return `Nom: ${prenom} ${nom}, Hobbies: ${hobbies.join(", ")}`;
                    }
                    output += `${afficherInfos("Jean", "Dupont", "Tennis", "Lecture")}\n\n`;
                    
                    let tab1 = [1, 2, 3];
                    let tab2 = [4, 5, 6];
                    let combine = [...tab1, ...tab2];
                    output += `[...[1,2,3], ...[4,5,6]] → ${JSON.stringify(combine)}\n`;
                    output += `Math.max(...[1, 2, 3]) → ${Math.max(...tab1)}`;
                    
                    return output;
                }
            },
            {
                title: "Expressions & Anonymes",
                type: "Fonction",
                icon: "fas fa-mask",
                description: "Les fonctions peuvent être définies comme des expressions et assignées à des variables. Elles peuvent aussi être anonymes (sans nom).",
                code: `// Expression de fonction nommée
const factorielle = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(factorielle(5)); // 120

// Fonction anonyme dans une variable
const direSalut = function() {
    console.log("Salut !");
};

// Fonction anonyme comme argument (Callback)
setTimeout(function() {
    console.log("Exécuté après 1 seconde");
}, 1000);

// IIFE (Immediately Invoked Function Expression)
(function() {
    let secret = "Je suis caché";
    console.log("IIFE exécutée immédiatement");
})();
// console.log(secret); // Erreur`,
                output: "",
                runCode: function() {
                    let output = "Expressions & Anonymes:\n\n";
                    
                    const factorielle = function fact(n) {
                        if (n <= 1) return 1;
                        return n * fact(n - 1);
                    };
                    output += `factorielle(5) → ${factorielle(5)}\n\n`;
                    
                    output += "IIFE:\n";
                    (function() {
                        output += "Cette fonction s'est exécutée toute seule !\n";
                    })();
                    
                    return output;
                }
            },
            {
                title: "Callbacks & Higher-Order",
                type: "Avancé",
                icon: "fas fa-cogs",
                description: "Une fonction d'ordre supérieur est une fonction qui prend une fonction en argument ou en retourne une. La fonction passée est appelée 'callback'.",
                code: `// Fonction d'ordre supérieur (prend un callback)
function operation(a, b, callback) {
    return callback(a, b);
}

function addition(x, y) { return x + y; }
function multiplication(x, y) { return x * y; }

console.log(operation(5, 3, addition));       // 8
console.log(operation(5, 3, multiplication)); // 15

// Fonction d'ordre supérieur (retourne une fonction)
function createurDeMultiplicateur(facteur) {
    return function(nombre) {
        return nombre * facteur;
    };
}

const doubler = createurDeMultiplicateur(2);
const tripler = createurDeMultiplicateur(3);

console.log(doubler(5)); // 10
console.log(tripler(5)); // 15

// Callbacks dans les méthodes de tableau
let nombres = [1, 2, 3, 4];
let carres = nombres.map(function(n) { // Callback anonyme
    return n * n;
});
console.log(carres); // [1, 4, 9, 16]`,
                output: "",
                runCode: function() {
                    let output = "Callbacks & Higher-Order:\n\n";
                    
                    function operation(a, b, callback) {
                        return callback(a, b);
                    }
                    function addition(x, y) { return x + y; }
                    function multiplication(x, y) { return x * y; }
                    
                    output += `operation(5, 3, addition) → ${operation(5, 3, addition)}\n`;
                    output += `operation(5, 3, multiplication) → ${operation(5, 3, multiplication)}\n\n`;
                    
                    function createurDeMultiplicateur(facteur) {
                        return function(nombre) {
                            return nombre * facteur;
                        };
                    }
                    const doubler = createurDeMultiplicateur(2);
                    output += "const doubler = createurDeMultiplicateur(2);\n";
                    output += `doubler(5) → ${doubler(5)}\n\n`;
                    
                    let nombres = [1, 2, 3];
                    let carres = nombres.map(n => n * n);
                    output += `[1, 2, 3].map(n => n * n) → ${JSON.stringify(carres)}`;
                    
                    return output;
                }
            }
        ]
    },

    "scope": {
        title: "Portée (Scope)",
        icon: "fas fa-expand-alt",
        description: "La portée détermine l'accessibilité (visibilité) des variables. En JavaScript, il existe la portée globale, la portée de fonction et la portée de bloc.",
        topics: [
            {
                title: "Global Scope",
                type: "Concept",
                icon: "fas fa-globe",
                description: "Une variable déclarée en dehors de toute fonction est globale. Elle est accessible partout.",
                code: `const appName = "MyApp";

function showApp() {
    console.log(appName); // Accessible ici
}

showApp();
console.log(appName); // Accessible ici aussi

// ⚠️ À éviter autant que possible → risque de conflits.`,
                output: "",
                runCode: function() {
                    return executeCode(`const appName = "MyApp";
function showApp() {
    console.log("Dans la fonction:", appName);
}
showApp();
console.log("En dehors:", appName);`);
                }
            },
            {
                title: "Function Scope",
                type: "Concept",
                icon: "fas fa-box",
                description: "Les variables déclarées dans une fonction n’existent que dans cette fonction.",
                code: `function test() {
    const x = 10;
    console.log("Dans la fonction:", x); // 10
}

test();

try {
    console.log(x); // ❌ ReferenceError
} catch (e) {
    console.log("Erreur:", e.message);
}`,
                output: "",
                runCode: function() {
                    return executeCode(`function test() {
    const x = 10;
    console.log("Dans la fonction:", x);
}
test();
// Note: executeCode capture les erreurs
console.log(x);`);
                }
            },
            {
                title: "Block Scope",
                type: "Concept",
                icon: "fas fa-th-large",
                description: "let et const ont une portée de bloc (bornée par {}). var n'a PAS de block scope.",
                code: `if (true) {
    let a = 5;
    const b = 10;
    var c = 15; // var ignore le bloc !
}

try {
    console.log(c); // 15 (OK car var)
    console.log(a); // ❌ ReferenceError
} catch (e) {
    console.log("Erreur a:", e.message);
}

try {
    console.log(b); // ❌ ReferenceError
} catch (e) {
    console.log("Erreur b:", e.message);
}`,
                output: "",
                runCode: function() {
                    return executeCode(`if (true) {
    let a = 5;
    const b = 10;
    var c = 15;
}
console.log("c (var):", c);
console.log("Tentative d'accès à a (let)...");
console.log(a);`);
                }
            },
            {
                title: "Nested Functions",
                type: "Avancé",
                icon: "fas fa-boxes",
                description: "Une fonction définie dans une autre fonction a accès aux variables de la fonction parente.",
                code: `// Exemple 1
let a = 10;
function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a, b, c);
    }
    inner();
}
outer();

// Exemple 2
function outer2() {
    const outerVar = "I am outside";
    function inner2() {
        console.log(outerVar);
    }
    inner2();
}
outer2();`,
                output: "",
                runCode: function() {
                    return executeCode(`let a = 10;
function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log("a, b, c:", a, b, c);
    }
    inner();
}
outer();

function outer2() {
    const outerVar = "I am outside";
    function inner2() {
        console.log(outerVar);
    }
    inner2();
}
outer2();`);
                }
            },
            {
                title: "Lexical Scope",
                type: "Avancé",
                icon: "fas fa-eye",
                description: "Une fonction accède aux variables là où elle est écrite, pas là où elle est appelée.",
                code: `function outer() {
    const x = 10;

    function inner() {
        console.log(x);
    }

    return inner;
}

const fn = outer();
fn(); // 10`,
                output: "",
                runCode: function() {
                    return executeCode(`function outer() {
    const x = 10;
    function inner() {
        console.log("Valeur de x:", x);
    }
    return inner;
}
const fn = outer();
fn();`);
                }
            },
            {
                title: "Scope Chain",
                type: "Avancé",
                icon: "fas fa-link",
                description: "Quand JS cherche une variable, il remonte la chaîne : Scope Local -> Scope Parent -> Scope Global.",
                code: `const x = 1;

function a() {
    const x = 2;

    function b() {
        const x = 3;
        console.log(x); // Trouve le x le plus proche
    }

    b();
}

a(); // 3`,
                output: "",
                runCode: function() {
                    return executeCode(`const x = 1;
function a() {
    const x = 2;
    function b() {
        const x = 3;
        console.log("Valeur trouvée:", x);
    }
    b();
}
a();`);
                }
            }
        ]
    },

    "closures": {
        title: "Closures",
        icon: "fas fa-lock",
        description: "Une closure est une fonction qui se souvient de son environnement lexical (variables) même après que la fonction parente a fini de s'exécuter.",
        topics: [
            {
                title: "Concept de Base",
                type: "Concept",
                icon: "fas fa-key",
                description: "Une fonction retournée par une autre fonction conserve l'accès aux variables de cette dernière.",
                code: `function outer() {
    const secret = "Je suis un secret";
    
    function inner() {
        console.log(secret);
    }
    
    return inner; // On retourne la fonction, on ne l'appelle pas !
}

const maClosure = outer(); // outer a fini de s'exécuter ici
maClosure(); // "Je suis un secret" (Toujours accessible !)

// Sans closure, 'secret' aurait été détruit à la fin de outer()`,
                output: "",
                runCode: function() {
                    return executeCode(`function outer() {
    const secret = "Je suis un secret";
    function inner() {
        console.log("Secret révélé:", secret);
    }
    return inner;
}
console.log("Appel de outer()...");
const maClosure = outer();
console.log("outer() terminé.");
console.log("Appel de maClosure()...");
maClosure();`);
                }
            },
            {
                title: "Closure vs Nested Function Scope",
                type: "Comparaison",
                icon: "fas fa-balance-scale",
                description: "La différence clé est le TEMPS : Nested Scope = accès PENDANT l'exécution parente. Closure = accès APRÈS l'exécution parente.",
                code: `// 1. Nested Function Scope
function nestedDemo() {
    const x = "Nested";
    function inner() {
        console.log(x); // Accès immédiat
    }
    inner(); // Appelé DANS la fonction parente
}
nestedDemo();

// 2. Closure
function closureDemo() {
    const y = "Closure";
    function inner() {
        console.log(y); // Accès différé
    }
    return inner; // Retourné pour être appelé PLUS TARD
}
const fn = closureDemo();
fn(); // Appelé EN DEHORS de la fonction parente`,
                output: "",
                runCode: function() {
                    return executeCode(`console.log("--- Nested Scope ---");
function nestedDemo() {
    const x = "Nested";
    function inner() {
        console.log(x);
    }
    inner();
}
nestedDemo();

console.log("\\n--- Closure ---");
function closureDemo() {
    const y = "Closure";
    function inner() {
        console.log(y);
    }
    return inner;
}
const fn = closureDemo();
fn();`);
                }
            },
            {
                title: "Encapsulation (Données Privées)",
                type: "Cas Pratique",
                icon: "fas fa-user-shield",
                description: "Utiliser les closures pour masquer des variables et empêcher leur modification directe.",
                code: `function creerCompteur() {
    let count = 0; // Variable privée
    
    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        },
        getCount: function() {
            return count;
        }
    };
}

const compteur = creerCompteur();
compteur.increment(); // 1
compteur.increment(); // 2
// compteur.count; // undefined (inaccessible directement)`,
                output: "",
                runCode: function() {
                    return executeCode(`function creerCompteur() {
    let count = 0;
    return {
        increment: function() { count++; console.log("Compteur:", count); },
        decrement: function() { count--; console.log("Compteur:", count); },
        getCount: function() { return count; }
    };
}
const c = creerCompteur();
c.increment();
c.increment();
console.log("Tentative d'accès direct à c.count:", c.count);`);
                }
            },
            {
                title: "Factory Functions",
                type: "Cas Pratique",
                icon: "fas fa-industry",
                description: "Créer des fonctions configurées avec des paramètres spécifiques.",
                code: `function creerMultiplicateur(facteur) {
    // 'facteur' est capturé par la closure
    return function(nombre) {
        return nombre * facteur;
    };
}

const double = creerMultiplicateur(2);
const triple = creerMultiplicateur(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15`,
                output: "",
                runCode: function() {
                    return executeCode(`function creerMultiplicateur(facteur) {
    return function(nombre) {
        return nombre * facteur;
    };
}
const double = creerMultiplicateur(2);
const triple = creerMultiplicateur(3);
console.log("double(5) =", double(5));
console.log("triple(5) =", triple(5));`);
                }
            },
            {
                title: "Le Piège des Boucles",
                type: "Attention",
                icon: "fas fa-exclamation-triangle",
                description: "Problème classique avec var dans les boucles asynchrones et sa solution.",
                code: `// Problème avec var (Function Scope)
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log("Var:", i); // Affiche 4, 4, 4 !
    }, 100);
}

// Solution avec let (Block Scope)
for (let j = 1; j <= 3; j++) {
    setTimeout(function() {
        console.log("Let:", j); // Affiche 1, 2, 3
    }, 100);
}`,
                output: "",
                runCode: function() {
                    // Simulation car setTimeout est asynchrone et executeCode capture synchrone
                    // Mais on peut simuler le résultat pour l'explication
                    return executeCode(`console.log("--- Avec var ---");
for (var i = 1; i <= 3; i++) {
    // Simulation du délai
    (function(val) {
        // En réalité, la boucle finit avant que le timeout s'exécute
        // Avec var, i vaut 4 à la fin
    })(i);
}
console.log("Var: 4");
console.log("Var: 4");
console.log("Var: 4");

console.log("\\n--- Avec let ---");
for (let j = 1; j <= 3; j++) {
    console.log("Let:", j);
}`);
                }
            }
        ]
    },

    "this_keyword": {
        title: "Le mot-clé 'this'",
        icon: "fas fa-fingerprint",
        description: "La valeur de 'this' dépend de la façon dont la fonction est appelée (contexte d'exécution).",
        topics: [
            {
                title: "Default Binding (Liaison par Défaut)",
                type: "Règle #1",
                icon: "fas fa-circle",
                description: "Appel de fonction simple. 'this' pointe vers l'objet global (window) ou undefined en mode strict.",
                code: `function foo() {
    console.log(this.a);
}

var a = 2; // Variable globale

// Appel simple
foo(); // Affiche 2 (en mode non-strict)

// En mode strict ('use strict'), this serait undefined`,
                output: "",
                runCode: function() {
                    return executeCode(`var a = 2;
function foo() {
    try {
        console.log("this.a =", this.a);
        console.log("Valeur de 'this':", this);
    } catch (e) {
        console.log("Erreur:", e.message);
    }
}
foo();`);
                }
            },
            {
                title: "Implicit Binding (Liaison Implicite)",
                type: "Règle #2",
                icon: "fas fa-arrow-right",
                description: "La fonction est appelée comme méthode d'un objet. 'this' pointe vers cet objet.",
                code: `// Exemple 1 : Syntaxe classique
function foo() {
    console.log(this.a);
}

const obj = {
    a: 42,
    foo: foo
};

obj.foo(); // 42

// Exemple 2 : Syntaxe raccourcie (User Request)
const user = {
    name: "Salma",
    greet() {
        console.log("Bonjour " + this.name);
    }
};

user.greet(); // "Bonjour Salma"

// Attention à la perte de contexte !
const bar = obj.foo;
bar(); // undefined (Retour à la règle #1)`,
                output: "",
                runCode: function() {
                    return executeCode(`function foo() {
    console.log("this.a =", this.a);
}
const obj = {
    a: 42,
    foo: foo
};
console.log("--- Exemple 1 ---");
obj.foo();

console.log("\\n--- Exemple 2 (Salma) ---");
const user = {
    name: "Salma",
    greet() {
        console.log("Bonjour " + this.name);
    }
};
user.greet();

console.log("\\n--- Perte de contexte ---");
const bar = obj.foo;
bar();`);
                }
            },
            {
                title: "Explicit Binding (Liaison Explicite)",
                type: "Règle #3",
                icon: "fas fa-hand-point-right",
                description: "On force 'this' à pointer vers un objet spécifique avec call, apply ou bind.",
                code: `function foo() {
    console.log(this.a);
}

const obj = { a: 100 };

// call : arguments séparés par des virgules
foo.call(obj); // 100

// apply : arguments dans un tableau
foo.apply(obj); // 100

// bind : retourne une nouvelle fonction liée
const boundFoo = foo.bind(obj);
boundFoo(); // 100`,
                output: "",
                runCode: function() {
                    return executeCode(`function foo() {
    console.log("this.a =", this.a);
}
const obj = { a: 100 };

console.log("foo.call(obj):");
foo.call(obj);

console.log("foo.bind(obj)():");
const boundFoo = foo.bind(obj);
boundFoo();`);
                }
            },
            {
                title: "New Binding (Liaison avec new)",
                type: "Règle #4",
                icon: "fas fa-plus-circle",
                description: "Avec 'new', 'this' pointe vers le nouvel objet créé. Cela fonctionne aussi avec les classes ES6.",
                code: `// 1. Fonction Constructeur (ES5)
function Foo(a) {
    this.a = a;
}

const bar = new Foo(123);
console.log(bar.a); // 123

// 2. Classe ES6 (User Request)
class Person {
    constructor(name) {
        this.name = name; // 'this' est la nouvelle instance
    }
    
    greet() {
        console.log("Hello " + this.name);
    }
}

const alice = new Person("Alice");
alice.greet(); // "Hello Alice"`,
                output: "",
                runCode: function() {
                    return executeCode(`console.log("--- Constructeur ES5 ---");
function Foo(a) {
    this.a = a;
    console.log("Dans Foo, this.a =", this.a);
}
const bar = new Foo(123);
console.log("Instance bar:", bar);

console.log("\\n--- Classe ES6 ---");
class Person {
    constructor(name) {
        this.name = name;
        console.log("Dans constructor, this.name =", this.name);
    }
    greet() {
        console.log("Hello " + this.name);
    }
}
const alice = new Person("Alice");
alice.greet();`);
                }
            },
            {
                title: "Arrow Functions (Lexical this)",
                type: "Exception",
                icon: "fas fa-bolt",
                description: "Les fonctions fléchées n'ont pas leur propre 'this'. Elles héritent du 'this' de la portée englobante.",
                code: `const obj = {
    a: 20,
    // Fonction classique
    regular: function() {
        console.log("Regular this:", this.a); // 20
        
        // Problème classique dans un callback
        setTimeout(function() {
            console.log("Callback this:", this.a); // undefined
        }, 100);
        
        // Solution avec Arrow Function
        setTimeout(() => {
            console.log("Arrow this:", this.a); // 20 (Hérité de obj)
        }, 100);
    }
};

obj.regular();`,
                output: "",
                runCode: function() {
                    return executeCode(`const obj = {
    a: 20,
    regular: function() {
        console.log("Regular this:", this.a);
        
        // Simulation synchrone pour executeCode
        const callback = function() {
            console.log("Callback classique this.a:", this.a);
        };
        callback(); // Appel simple -> Default Binding
        
        const arrow = () => {
            console.log("Arrow this.a:", this.a);
        };
        arrow(); // Hérite de 'regular' -> Implicit Binding
    }
};
obj.regular();`);
                }
            }
        ]
    },

    "prototypes": {
        title: "Prototypes",
        icon: "fas fa-dna",
        description: "Comprendre à 100% le prototype, la chaîne de prototypes et la relation avec les classes.",
        topics: [
            {
                title: "1. Le Problème & La Solution",
                type: "Fondamental",
                icon: "fas fa-exclamation-circle",
                description: "Pourquoi le prototype existe ? Pour éviter le gaspillage de mémoire.",
                code: `// ❌ PROBLÈME : Gaspillage mémoire
// Chaque instance crée sa propre copie de greet
function UserBad(name) {
    this.name = name;
    this.greet = function() {
        console.log("Hello " + this.name);
    };
}
const u1 = new UserBad("Salma");
const u2 = new UserBad("Sara");
console.log(u1.greet === u2.greet); // false (2 fonctions différentes)

// ✅ SOLUTION : Le Prototype
// Une seule fonction en mémoire, partagée par toutes les instances
function UserGood(name) {
    this.name = name;
}
UserGood.prototype.greet = function() {
    console.log("Hello " + this.name);
};

const u3 = new UserGood("Salma");
const u4 = new UserGood("Sara");
console.log(u3.greet === u4.greet); // true (La même fonction !)

u3.greet();`,
                output: "",
                runCode: function() {
                    return executeCode(`function UserBad(name) {
    this.name = name;
    this.greet = function() { console.log("Hello " + this.name); };
}
const u1 = new UserBad("Salma");
const u2 = new UserBad("Sara");
console.log("Sans prototype (UserBad):");
console.log("- u1.greet === u2.greet ?", u1.greet === u2.greet);

function UserGood(name) {
    this.name = name;
}
UserGood.prototype.greet = function() {
    console.log("Hello " + this.name);
};
const u3 = new UserGood("Salma");
const u4 = new UserGood("Sara");
console.log("\\nAvec prototype (UserGood):");
console.log("- u3.greet === u4.greet ?", u3.greet === u4.greet);
u3.greet();`);
                }
            },
            {
                title: "2. Concepts & Relation Objet-Prototype",
                type: "Théorie",
                icon: "fas fa-project-diagram",
                description: "Comprendre la terminologie (prototype, __proto__) et le lien entre instance et constructeur.",
                code: `// Terminologie :
// - prototype : propriété des fonctions constructrices (ex: User.prototype)
// - __proto__ : lien interne de l'instance vers le prototype
// - [[Prototype]] : le mécanisme interne

function User(name) {
    this.name = name;
}
const u1 = new User("Salma");

// Relation
console.log(u1.__proto__ === User.prototype); // true

// Schéma mental :
// u1 -> User.prototype -> Object.prototype -> null`,
                output: "",
                runCode: function() {
                    return executeCode(`function User(name) {
    this.name = name;
}
const u1 = new User("Salma");

console.log("u1.__proto__ === User.prototype ?", u1.__proto__ === User.prototype);
console.log("User.prototype.__proto__ === Object.prototype ?", User.prototype.__proto__ === Object.prototype);
console.log("Object.prototype.__proto__ === null ?", Object.prototype.__proto__ === null);`);
                }
            },
            {
                title: "3. Prototype Chain (Chaîne de Prototypes)",
                type: "Mécanisme",
                icon: "fas fa-link",
                description: "Le mécanisme de recherche de propriété : Instance -> Prototype -> Object.prototype -> null.",
                code: `// Exemple avec un tableau
const arr = [];
arr.push(1);

// Recherche de .push() :
// 1. Dans arr ? Non.
// 2. Dans Array.prototype ? Oui ! (arr.__proto__)
// 3. Dans Object.prototype ? (Si pas trouvé avant)
// 4. null (Fin de la chaîne)

console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true`,
                output: "",
                runCode: function() {
                    return executeCode(`const arr = [];
console.log("Chaîne de prototype d'un tableau :");
console.log("arr -> Array.prototype ?", arr.__proto__ === Array.prototype);
console.log("Array.prototype -> Object.prototype ?", Array.prototype.__proto__ === Object.prototype);
console.log("Object.prototype -> null ?", Object.prototype.__proto__ === null);`);
                }
            },
            {
                title: "4. Class = Sucre Syntaxique",
                type: "Comparaison",
                icon: "fas fa-candy-cane",
                description: "Les classes font exactement la même chose que les prototypes, mais avec une syntaxe plus claire.",
                code: `// Version Class (Moderne)
class UserClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}

// Version Fonction (Classique)
function UserFunc(name) {
    this.name = name;
}
UserFunc.prototype.greet = function() {
    console.log("Hello " + this.name);
};

// C'est la même chose !
console.log(typeof UserClass); // "function"
console.log(new UserClass("Salma").greet === UserClass.prototype.greet); // true`,
                output: "",
                runCode: function() {
                    return executeCode(`class UserClass {
    constructor(name) { this.name = name; }
    greet() { console.log("Hello " + this.name); }
}
console.log("Type de UserClass :", typeof UserClass);
const u = new UserClass("Salma");
console.log("La méthode est sur le prototype ?", u.__proto__.greet === UserClass.prototype.greet);
u.greet();`);
                }
            },
            {
                title: "5. Héritage (Ancien vs Moderne)",
                type: "Avancé",
                icon: "fas fa-sitemap",
                description: "Comment hériter des propriétés et méthodes d'un autre constructeur.",
                code: `// --- MODERNE (Class extends) ---
class User {
    constructor(name) { this.name = name; }
    greet() { console.log("Hello " + this.name); }
}

class Admin extends User {
    constructor(name, role) {
        super(name); // Appel du constructeur parent
        this.role = role;
    }
    deleteUser() { console.log("User deleted"); }
}

// --- ANCIEN (Prototype) ---
function UserProto(name) { this.name = name; }
UserProto.prototype.greet = function() { console.log("Hello " + this.name); };

function AdminProto(name, role) {
    UserProto.call(this, name); // Super() manuel
    this.role = role;
}
// Héritage de la chaîne
AdminProto.prototype = Object.create(UserProto.prototype);
AdminProto.prototype.constructor = AdminProto;

AdminProto.prototype.deleteUser = function() { console.log("User deleted"); };`,
                output: "",
                runCode: function() {
                    return executeCode(`class User {
    constructor(name) { this.name = name; }
}
class Admin extends User {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
    deleteUser() { console.log("User deleted"); }
}
const admin = new Admin("Salma", "SuperAdmin");
console.log("Admin créé :", admin.name, admin.role);
admin.deleteUser();
console.log("admin est instance de User ?", admin instanceof User);`);
                }
            },
            {
                title: "6. Méthodes Utiles & Pièges",
                type: "Attention",
                icon: "fas fa-tools",
                description: "Object.create, getPrototypeOf et les erreurs à éviter.",
                code: `// Object.create()
const userProto = {
    greet() { console.log("Hello"); }
};
const user = Object.create(userProto); // user.__proto__ === userProto

// Méthodes utiles
console.log(Object.getPrototypeOf(user) === userProto); // true
console.log(user.hasOwnProperty("greet")); // false (hérité)

// ❌ PIÈGE : Modifier un prototype natif
// Array.prototype.sum = function() {}; // NE FAITES PAS ÇA !

// ✅ BONNE PRATIQUE :
// - Méthodes -> Prototype
// - Données -> Instance
// - Utiliser class pour la lisibilité`,
                output: "",
                runCode: function() {
                    return executeCode(`const userProto = {
    greet() { console.log("Hello from proto"); }
};
const user = Object.create(userProto);
console.log("Appel méthode héritée :");
user.greet();
console.log("user a 'greet' en propre ?", user.hasOwnProperty("greet"));
console.log("Prototype de user :", Object.getPrototypeOf(user));`);
                }
            }
        ]
    },

    "classes": {
        title: "Classes",
        icon: "fas fa-shapes",
        description: "Les classes ES6 : sucre syntaxique, héritage et bonnes pratiques.",
        topics: [
            {
                title: "1. Fondamentaux (Class, Constructor, New)",
                type: "Concept",
                icon: "fas fa-cube",
                description: "Une class est un sucre syntaxique sur le prototype. 'new' crée l'instance et lie 'this'.",
                code: `class User {
    // S'exécute automatiquement avec 'new'
    constructor(name) {
        this.name = name; // Initialisation
    }

    // Méthode (sur User.prototype)
    greet() {
        console.log("Hello " + this.name);
    }
}

const user = new User("Salma");
user.greet(); // "Hello Salma"

// Preuve que c'est du prototype :
console.log(typeof User); // "function"
console.log(user.greet === User.prototype.greet); // true`,
                output: "",
                runCode: function() {
                    return executeCode(`class User {
    constructor(name) {
        this.name = name;
        console.log("Constructor exécuté pour " + name);
    }
    greet() {
        console.log("Hello " + this.name);
    }
}
const user = new User("Salma");
user.greet();
console.log("Type de User:", typeof User);`);
                }
            },
            {
                title: "2. Méthodes, Propriétés & Static",
                type: "Syntaxe",
                icon: "fas fa-list",
                description: "Distinction entre propriétés d'instance, méthodes de prototype et méthodes statiques.",
                code: `class Example {
    value = 10; // Propriété d'instance (nouveau standard)

    // Méthode d'instance (sur le prototype)
    show() {
        console.log(this.value);
    }

    // Méthode statique (sur la classe elle-même)
    static info() {
        return "Je suis une classe";
    }
}

const ex = new Example();
ex.show(); // 10
console.log(Example.info()); // "Je suis une classe"
// ex.info(); // Erreur !`,
                output: "",
                runCode: function() {
                    return executeCode(`class Example {
    value = 10;
    show() { console.log("Value:", this.value); }
    static info() { return "Static Info"; }
}
const ex = new Example();
ex.show();
console.log("Appel static:", Example.info());
try { ex.info(); } catch(e) { console.log("Erreur appel static sur instance:", e.message); }`);
                }
            },
            {
                title: "3. Héritage & Polymorphisme",
                type: "Mécanisme",
                icon: "fas fa-sitemap",
                description: "Utiliser 'extends' pour hériter et 'super' pour appeler le parent.",
                code: `class User {
    constructor(name) { this.name = name; }
    greet() { console.log("Hello " + this.name); }
}

class Admin extends User {
    constructor(name, role) {
        super(name); // Obligatoire avant d'utiliser 'this'
        this.role = role;
    }

    // Override (Polymorphisme)
    greet() {
        console.log("Admin " + this.name + " (" + this.role + ")");
    }
}

const admin = new Admin("Salma", "SuperAdmin");
admin.greet(); // "Admin Salma (SuperAdmin)"`,
                output: "",
                runCode: function() {
                    return executeCode(`class User {
    constructor(name) { this.name = name; }
    greet() { console.log("Hello " + this.name); }
}
class Admin extends User {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
    greet() { console.log("Admin " + this.name + " (" + this.role + ")"); }
}
const admin = new Admin("Salma", "SuperAdmin");
admin.greet();`);
                }
            },
            {
                title: "4. Fonctionnalités Avancées (Privé & this)",
                type: "Avancé",
                icon: "fas fa-lock",
                description: "Champs privés (#) et gestion du contexte 'this'.",
                code: `class BankAccount {
    #balance = 0; // Champ privé

    deposit(amount) {
        this.#balance += amount;
        console.log("Déposé: " + amount);
    }
    
    getBalance() { return this.#balance; }
}

const account = new BankAccount();
account.deposit(100);
// console.log(account.#balance); // Erreur syntaxe (Privé)

// Problème de 'this'
class Counter {
    count = 0;
    // Arrow function pour lier 'this' automatiquement
    increment = () => {
        this.count++;
        console.log(this.count);
    }
}
const c = new Counter();
const inc = c.increment;
inc(); // 1 (Fonctionne grâce à l'arrow function)`,
                output: "",
                runCode: function() {
                    return executeCode(`class BankAccount {
    #balance = 0;
    deposit(amount) { this.#balance += amount; }
    getBalance() { return this.#balance; }
}
const acc = new BankAccount();
acc.deposit(50);
console.log("Solde:", acc.getBalance());

class Counter {
    count = 0;
    increment = () => {
        this.count++;
        console.log("Count:", this.count);
    }
}
const c = new Counter();
const inc = c.increment;
inc();`);
                }
            },
            {
                title: "5. Architecture & Comparaison",
                type: "Best Practices",
                icon: "fas fa-balance-scale",
                description: "Composition vs Héritage et quand utiliser les classes.",
                code: `// Composition > Héritage
// Au lieu de : class Dog extends Animal {}
function canBark(state) {
    return {
        bark: () => console.log(state.name + " barks")
    };
}

const dog = { name: "Rex" };
Object.assign(dog, canBark(dog));
dog.bark();

// Pièges Classiques :
// 1. Oublier 'new' (TypeError)
// 2. Trop d'héritage (Complexe)
// 3. Arrow methods consomment plus de mémoire (créées par instance)`,
                output: "",
                runCode: function() {
                    return executeCode(`function canBark(state) {
    return {
        bark: () => console.log(state.name + " barks")
    };
}
const dog = { name: "Rex" };
Object.assign(dog, canBark(dog));
dog.bark();`);
                }
            }
        ]
    },

    "iterables": {
        title: "Iterables & Iterators",
        icon: "fas fa-sync-alt",
        description: "Le protocole qui permet de parcourir des données (Array, String, Map, Set...) de manière uniforme.",
        topics: [
            {
                title: "1. Concepts de Base (Iterable vs Iterator)",
                type: "Fondamental",
                icon: "fas fa-book",
                description: "Un Iterable a une méthode [Symbol.iterator](). Un Iterator a une méthode next().",
                code: `// 1. Iterable (ex: Array)
const arr = [1, 2, 3];
// Il possède la méthode spéciale :
console.log(typeof arr[Symbol.iterator]); // "function"

// 2. Récupérer l'Iterator
const iterator = arr[Symbol.iterator]();

// 3. Utiliser l'Iterator manuellement
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }`,
                output: "",
                runCode: function() {
                    return executeCode(`const arr = [1, 2, 3];
console.log("L'objet est-il iterable ?", typeof arr[Symbol.iterator] === 'function');

const iterator = arr[Symbol.iterator]();
console.log("Appel manuel de next() :");
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());`);
                }
            },
            {
                title: "2. Consommation (for...of, Spread)",
                type: "Utilisation",
                icon: "fas fa-utensils",
                description: "Les structures JS natives (for...of, spread ...) utilisent ce protocole automatiquement.",
                code: `const arr = [10, 20, 30];

// 1. for...of
console.log("--- for...of ---");
for (const val of arr) {
    console.log(val);
}

// 2. Spread Operator
console.log("--- Spread ---");
const copy = [...arr, 40];
console.log(copy); // [10, 20, 30, 40]

// 3. Destructuring
console.log("--- Destructuring ---");
const [first, ...rest] = arr;
console.log(first); // 10
console.log(rest);  // [20, 30]`,
                output: "",
                runCode: function() {
                    return executeCode(`const arr = [10, 20, 30];
console.log("--- for...of ---");
for (const val of arr) { console.log(val); }

console.log("\\n--- Spread ---");
console.log([...arr, 40]);

console.log("\\n--- Destructuring ---");
const [first, ...rest] = arr;
console.log("First:", first);
console.log("Rest:", rest);`);
                }
            },
            {
                title: "3. Création d'Iterables Personnalisés",
                type: "Avancé",
                icon: "fas fa-cogs",
                description: "Rendre vos propres objets compatibles avec for...of.",
                code: `const range = {
    start: 1,
    end: 3,
    // Implémentation du protocole Iterable
    [Symbol.iterator]() {
        let current = this.start;
        let end = this.end;

        // Retourne un Iterator
        return {
            next() {
                if (current <= end) {
                    return { value: current++, done: false };
                }
                return { done: true };
            }
        };
    }
};

// Maintenant ça marche !
for (const n of range) {
    console.log(n); // 1, 2, 3
}
console.log([...range]); // [1, 2, 3]`,
                output: "",
                runCode: function() {
                    return executeCode(`const range = {
    start: 1,
    end: 3,
    [Symbol.iterator]() {
        let current = this.start;
        let end = this.end;
        return {
            next() {
                if (current <= end) {
                    return { value: current++, done: false };
                }
                return { done: true };
            }
        };
    }
};
console.log("Boucle for...of sur range :");
for (const n of range) { console.log(n); }
console.log("Spread sur range :", [...range]);`);
                }
            },
            {
                title: "4. Générateurs (Generators)",
                type: "Syntaxe",
                icon: "fas fa-magic",
                description: "Les fonctions génératrices (function*) créent des itérateurs automatiquement. Plus simple !",
                code: `// function* crée un Generator
function* rangeGen(start, end) {
    for (let i = start; i <= end; i++) {
        yield i; // Pause et retourne la valeur
    }
}

const gen = rangeGen(1, 3);
// Un générateur EST un itérateur (et un itérable)
console.log(gen.next()); // { value: 1, done: false }

// Utilisation facile
for (const n of rangeGen(1, 3)) {
    console.log(n);
}`,
                output: "",
                runCode: function() {
                    return executeCode(`function* rangeGen(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
console.log("Utilisation du générateur :");
for (const n of rangeGen(1, 3)) {
    console.log(n);
}
console.log("Spread :", [...rangeGen(5, 7)]);`);
                }
            },
            {
                title: "5. Async Iterators",
                type: "Avancé",
                icon: "fas fa-bolt",
                description: "Pour parcourir des données asynchrones (ex: appels API séquentiels).",
                code: `// Simulation d'attente
const delay = ms => new Promise(r => setTimeout(r, ms));

async function* fetchPages() {
    const pages = ["Page 1", "Page 2"];
    for (const page of pages) {
        await delay(100); // Simulation API
        yield page;
    }
}

// for await...of
(async () => {
    console.log("Début du chargement...");
    for await (const page of fetchPages()) {
        console.log("Reçu :", page);
    }
    console.log("Fin.");
})();`,
                output: "",
                runCode: function() {
                    // Simulation synchrone pour executeCode (car il capture console.log synchrone)
                    // On simule le comportement
                    return executeCode(`console.log("Début du chargement...");
console.log("Reçu : Page 1");
console.log("Reçu : Page 2");
console.log("Fin.");
console.log("(Note: Ceci est une simulation, le vrai code utilise await)");`);
                }
            },
            {
                title: "6. Résumé & Bonnes Pratiques",
                type: "Best Practices",
                icon: "fas fa-check-circle",
                description: "Quand utiliser quoi et les pièges à éviter.",
                code: `// ✅ QUAND UTILISER ?
// - Données séquentielles
// - Lazy loading (Générateurs)
// - Gros datasets (ne pas tout charger en mémoire)

// ❌ PIÈGES
const obj = { a: 1, b: 2 };
try {
    // TypeError: obj is not iterable
    for (const x of obj) {} 
} catch(e) {
    console.log("Erreur :", e.message);
}

// Solution pour objet : for...in ou Object.keys
for (const key in obj) {
    console.log(key, obj[key]);
}`,
                output: "",
                runCode: function() {
                    return executeCode(`const obj = { a: 1, b: 2 };
console.log("Tentative d'itérer sur un objet simple :");
try {
    for (const x of obj) {}
} catch(e) {
    console.log("Erreur capturée :", e.message);
}

console.log("\\nSolution (for...in) :");
for (const key in obj) {
    console.log(key, "->", obj[key]);
}`);
                }
            }
        ]
    },

    "generators": {
        title: "Generators",
        icon: "fas fa-magic",
        description: "Des fonctions qui peuvent être mises en pause et reprises. La base de l'asynchrone moderne et des itérateurs complexes.",
        topics: [
            {
                title: "1. Fondamentaux (Function*, Yield, Next)",
                type: "Concept",
                icon: "fas fa-pause-circle",
                description: "Une fonction déclarée avec function* retourne un Generator Object. 'yield' met en pause.",
                code: `function* gen() {
    console.log("Début");
    yield 1; // Pause ici, retourne 1
    console.log("Reprise");
    yield 2; // Pause ici, retourne 2
    console.log("Fin");
}

const it = gen(); // Ne lance PAS la fonction !
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: undefined, done: true }`,
                output: "",
                runCode: function() {
                    return executeCode(`function* gen() {
    console.log("  -> Exécution: Début");
    yield 1;
    console.log("  -> Exécution: Reprise");
    yield 2;
    console.log("  -> Exécution: Fin");
}

const it = gen();
console.log("1. Appel de next():", it.next());
console.log("2. Appel de next():", it.next());
console.log("3. Appel de next():", it.next());`);
                }
            },
            {
                title: "2. Contrôle de Flux (Return, Throw, Input)",
                type: "Avancé",
                icon: "fas fa-random",
                description: "On peut envoyer des données VERS le générateur, ou forcer un retour/erreur.",
                code: `function* calculator() {
    // yield retourne une valeur ET attend une entrée
    const a = yield "Entrez A";
    const b = yield "Entrez B";
    return a + b;
}

const it = calculator();
console.log(it.next());      // { value: "Entrez A", done: false }
console.log(it.next(10));    // { value: "Entrez B", done: false } (a = 10)
console.log(it.next(20));    // { value: 30, done: true } (b = 20)

// Gestion d'erreur
function* errorGen() {
    try {
        yield 1;
    } catch(e) {
        console.log("Erreur capturée :", e);
    }
}
const errIt = errorGen();
errIt.next();
errIt.throw("Oups !");`,
                output: "",
                runCode: function() {
                    return executeCode(`function* calculator() {
    const a = yield "Entrez A";
    console.log("  -> Reçu A:", a);
    const b = yield "Entrez B";
    console.log("  -> Reçu B:", b);
    return a + b;
}
const it = calculator();
console.log("Start:", it.next());
console.log("Envoi 10:", it.next(10));
console.log("Envoi 20:", it.next(20));`);
                }
            },
            {
                title: "3. Composition & Délégation (Yield*)",
                type: "Syntaxe",
                icon: "fas fa-project-diagram",
                description: "yield* permet de déléguer l'itération à un autre générateur ou itérable.",
                code: `function* letters() {
    yield "a";
    yield "b";
}

function* numbers() {
    yield 1;
    yield 2;
}

function* combined() {
    yield* letters(); // Délègue à letters
    yield* numbers(); // Délègue à numbers
    yield "Fin";
}

console.log([...combined()]); // ["a", "b", 1, 2, "Fin"]`,
                output: "",
                runCode: function() {
                    return executeCode(`function* letters() { yield "a"; yield "b"; }
function* combined() {
    yield* letters();
    yield* [1, 2]; // Délègue à un tableau (itérable)
    yield "Fin";
}
console.log("Résultat combiné :", [...combined()]);`);
                }
            },
            {
                title: "4. Lazy Evaluation & Performance",
                type: "Performance",
                icon: "fas fa-tachometer-alt",
                description: "Générer des valeurs à la demande (Lazy) permet de gérer des séquences infinies sans bloquer la mémoire.",
                code: `function* infiniteId() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const ids = infiniteId();
console.log(ids.next().value); // 0
console.log(ids.next().value); // 1
// On peut continuer à l'infini...

// Comparaison Array vs Generator
// Array: Alloue tout en mémoire tout de suite (Eager)
// Generator: Calcule la valeur suivante uniquement quand demandé (Lazy)`,
                output: "",
                runCode: function() {
                    return executeCode(`function* infiniteId() {
    let i = 0;
    while (true) { yield i++; }
}
const ids = infiniteId();
console.log("ID 1:", ids.next().value);
console.log("ID 2:", ids.next().value);
console.log("ID 3:", ids.next().value);
console.log("(La boucle est infinie mais ne bloque pas)");`);
                }
            },
            {
                title: "5. Cas Réels (State Machines, Async)",
                type: "Pattern",
                icon: "fas fa-cogs",
                description: "Machines à états et itérateurs asynchrones.",
                code: `// State Machine (Feu de signalisation)
function* trafficLight() {
    while (true) {
        yield "VERT";
        yield "ORANGE";
        yield "ROUGE";
    }
}
const light = trafficLight();
console.log(light.next().value); // VERT
console.log(light.next().value); // ORANGE

// Async Generator (Intro)
async function* fetchUsers() {
    // Simulation
    yield await Promise.resolve("User 1");
    yield await Promise.resolve("User 2");
}
// for await (const u of fetchUsers()) { console.log(u); }`,
                output: "",
                runCode: function() {
                    return executeCode(`function* trafficLight() {
    while (true) {
        yield "VERT";
        yield "ORANGE";
        yield "ROUGE";
    }
}
const light = trafficLight();
console.log("État 1:", light.next().value);
console.log("État 2:", light.next().value);
console.log("État 3:", light.next().value);
console.log("État 4 (boucle):", light.next().value);`);
                }
            },
            {
                title: "6. Résumé & Bonnes Pratiques",
                type: "Best Practices",
                icon: "fas fa-check-double",
                description: "Quand utiliser les générateurs ?",
                code: `// ✅ QUAND UTILISER ?
// - Itération paresseuse (Lazy)
// - Flux de données complexes (Streams)
// - Machines à états
// - Redux-Saga (Gestion d'effets secondaires)

// ❌ QUAND ÉVITER ?
// - Logique simple (for loop suffit)
// - Si l'équipe ne maîtrise pas le concept (lisibilité)

// ⚠️ PIÈGES
// - Oublier que next() lance l'exécution
// - Confondre yield (pause) et return (stop)`,
                output: "",
                runCode: function() {
                    return executeCode(`console.log("Résumé :");
console.log("1. Generator = Fonction qui peut être mise en pause.");
console.log("2. yield = Point de pause.");
console.log("3. next() = Reprendre l'exécution.");
console.log("4. Lazy = Calcul à la demande (Performance).");`);
                }
            }
        ]
    },

    "event_loop": {
        title: "Event Loop & Concurrency",
        icon: "fas fa-undo",
        description: "Comprendre comment JS gère l'asynchrone : Call Stack, Web APIs, Task Queue et Microtask Queue.",
        topics: [
            {
                title: "1. Call Stack & Web APIs",
                type: "Fondamental",
                icon: "fas fa-layer-group",
                description: "JS est 'single-threaded'. Il délègue les tâches longues (timer, fetch) aux Web APIs.",
                code: `console.log("1. Début");

// setTimeout est délégué à la Web API
setTimeout(() => {
    console.log("2. Timeout (Callback)");
}, 0);

console.log("3. Fin");

// Ordre :
// 1. "Début" (Stack)
// 2. "Fin" (Stack)
// 3. "Timeout" (Queue -> Stack après que Stack soit vide)`,
                output: "",
                runCode: function() {
                    return executeCode(`console.log("1. Début");
setTimeout(() => {
    console.log("2. Timeout (Callback)");
}, 0);
console.log("3. Fin");`);
                }
            },
            {
                title: "2. Task Queue vs Microtask Queue",
                type: "Avancé",
                icon: "fas fa-random",
                description: "Microtasks (Promises) ont la priorité sur les Tasks (setTimeout).",
                code: `console.log("1. Script Start");

setTimeout(() => {
    console.log("2. setTimeout (Task)");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise (Microtask)");
});

console.log("4. Script End");

// Ordre :
// 1. Script Start
// 2. Script End
// 3. Promise (Microtask passe AVANT Task)
// 4. setTimeout`,
                output: "",
                runCode: function() {
                    return executeCode(`console.log("1. Script Start");
setTimeout(() => {
    console.log("2. setTimeout (Task)");
}, 0);
Promise.resolve().then(() => {
    console.log("3. Promise (Microtask)");
});
console.log("4. Script End");`);
                }
            },
            {
                title: "3. Async/Await Interne",
                type: "Deep Dive",
                icon: "fas fa-microchip",
                description: "Async/Await est juste des Promesses + Générateurs. 'await' suspend l'exécution comme 'yield'.",
                code: `async function demo() {
    console.log("1. Avant await");
    
    // await met la fonction en pause et retourne au caller
    await Promise.resolve();
    
    // Ce code va dans la Microtask Queue
    console.log("2. Après await");
}

console.log("0. Caller Start");
demo();
console.log("3. Caller End");

// Ordre : 0 -> 1 -> 3 -> 2`,
                output: "",
                runCode: function() {
                    return executeCode(`async function demo() {
    console.log("1. Avant await");
    await Promise.resolve();
    console.log("2. Après await");
}
console.log("0. Caller Start");
demo();
console.log("3. Caller End");`);
                }
            }
        ]
    },

    "memory": {
        title: "Memory Management",
        icon: "fas fa-memory",
        description: "Comment JS gère la mémoire : Heap, Stack, Garbage Collection et fuites mémoires.",
        topics: [
            {
                title: "1. Heap vs Stack",
                type: "Théorie",
                icon: "fas fa-cubes",
                description: "Stack = Primitives & Pointeurs (Rapide). Heap = Objets & Fonctions (Lent, Dynamique).",
                code: `// Stack (Primitives)
let a = 10;
let b = a; // Copie de valeur

// Heap (Objets)
let obj1 = { name: "Alice" };
let obj2 = obj1; // Copie de référence (pointeur)

obj2.name = "Bob";
console.log(obj1.name); // "Bob" (Les deux pointent vers le même objet dans la Heap)`,
                output: "",
                runCode: function() {
                    return executeCode(`let a = 10;
let b = a;
b = 20;
console.log("Stack: a =", a, ", b =", b);

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log("Heap: obj1.name =", obj1.name);`);
                }
            },
            {
                title: "2. Garbage Collection (GC)",
                type: "Mécanisme",
                icon: "fas fa-trash-alt",
                description: "JS utilise 'Mark-and-Sweep'. Si un objet n'est plus accessible (reachable) depuis la racine, il est supprimé.",
                code: `let user = { name: "John" };
// 'user' référence l'objet {name: "John"}

user = null;
// L'objet {name: "John"} n'a plus de référence.
// Le GC va le détecter et libérer la mémoire.

// Cas des références circulaires (Géré par Mark-and-Sweep)
function cycle() {
    const a = {};
    const b = {};
    a.link = b;
    b.link = a;
    // Quand la fonction termine, a et b ne sont plus accessibles de l'extérieur -> GC
}`,
                output: "",
                runCode: function() {
                    return executeCode(`console.log("Simulation GC :");
let user = { name: "John" };
console.log("1. Objet créé, référencé par 'user'");
user = null;
console.log("2. 'user' mis à null. L'objet est éligible au GC.");`);
                }
            },
            {
                title: "3. WeakMap & WeakSet",
                type: "Avancé",
                icon: "fas fa-ghost",
                description: "Références 'faibles' qui n'empêchent pas le Garbage Collection. Idéal pour le cache ou les données privées.",
                code: `let cache = new WeakMap();

function process(obj) {
    if (!cache.has(obj)) {
        cache.set(obj, "Résultat calculé");
    }
    return cache.get(obj);
}

let user = { id: 1 };
process(user);

// Si 'user' est supprimé ailleurs
user = null;
// L'entrée dans WeakMap est automatiquement supprimée par le GC !
// Avec une Map classique, l'objet serait resté en mémoire.`,
                output: "",
                runCode: function() {
                    return executeCode(`let cache = new WeakMap();
let user = { id: 1 };
cache.set(user, "Data");
console.log("Cache a user ?", cache.has(user));

user = null;
console.log("User mis à null. Le GC nettoiera l'entrée de la WeakMap automatiquement.");`);
                }
            }
        ]
    },

    "error_handling": {
        title: "Error Handling Avancé",
        icon: "fas fa-bug",
        description: "Maîtriser les erreurs : Try/Catch/Finally, Custom Errors et gestion asynchrone.",
        topics: [
            {
                title: "1. Try / Catch / Finally",
                type: "Fondamental",
                icon: "fas fa-shield-alt",
                description: "Le bloc 'finally' s'exécute TOUJOURS, même après un return ou une erreur.",
                code: `function demo() {
    try {
        console.log("1. Try");
        throw new Error("Oups !");
    } catch (e) {
        console.log("2. Catch :", e.message);
        return "Retour du Catch";
    } finally {
        console.log("3. Finally (Toujours exécuté)");
    }
}

console.log("Résultat :", demo());`,
                output: "",
                runCode: function() {
                    return executeCode(`function demo() {
    try {
        console.log("1. Try");
        throw new Error("Oups !");
    } catch (e) {
        console.log("2. Catch :", e.message);
        return "Retour du Catch";
    } finally {
        console.log("3. Finally (Toujours exécuté)");
    }
}
console.log("Résultat :", demo());`);
                }
            },
            {
                title: "2. Custom Errors",
                type: "Avancé",
                icon: "fas fa-file-code",
                description: "Étendre la classe Error pour créer des types d'erreurs spécifiques.",
                code: `class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateUser(user) {
    if (!user.email) {
        throw new ValidationError("Email manquant");
    }
}

try {
    validateUser({});
} catch (e) {
    if (e instanceof ValidationError) {
        console.log("Erreur de validation :", e.message);
    } else {
        console.log("Erreur inconnue :", e);
    }
}`,
                output: "",
                runCode: function() {
                    return executeCode(`class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
try {
    throw new ValidationError("Email invalide");
} catch (e) {
    console.log("Type:", e.name);
    console.log("Message:", e.message);
    console.log("Est-ce une ValidationError ?", e instanceof ValidationError);
}`);
                }
            },
            {
                title: "3. Async Error Handling",
                type: "Pattern",
                icon: "fas fa-bolt",
                description: "Gérer les erreurs dans les Promesses et Async/Await.",
                code: `// 1. Async/Await avec Try/Catch
async function fetchUser() {
    try {
        await Promise.reject("Erreur réseau");
    } catch (e) {
        console.log("Catch Async :", e);
    }
}

// 2. Promesses (.catch)
Promise.reject("Erreur Promise")
    .catch(err => console.log("Catch Promise :", err));

fetchUser();`,
                output: "",
                runCode: function() {
                    return executeCode(`async function fetchUser() {
    try {
        console.log("Tentative...");
        await Promise.reject("Erreur réseau simulée");
    } catch (e) {
        console.log("Catch Async réussi :", e);
    }
}
fetchUser();`);
                }
            }
        ]
    },

    "design_patterns": {
        title: "Design Patterns",
        icon: "fas fa-drafting-compass",
        description: "Solutions standards aux problèmes courants : Module, Factory, Singleton, Observer, Strategy.",
        topics: [
            {
                title: "1. Module Pattern",
                type: "Encapsulation",
                icon: "fas fa-box",
                description: "Utiliser les IIFE ou Closures pour créer des variables privées.",
                code: `const CounterModule = (function() {
    let count = 0; // Privé

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        reset: function() {
            count = 0;
        }
    };
})();

CounterModule.increment(); // 1
CounterModule.increment(); // 2
// console.log(CounterModule.count); // undefined (Inaccessible)`,
                output: "",
                runCode: function() {
                    return executeCode(`const CounterModule = (function() {
    let count = 0;
    return {
        increment: function() {
            count++;
            console.log("Count:", count);
        }
    };
})();
CounterModule.increment();
CounterModule.increment();
console.log("Accès direct à count :", CounterModule.count);`);
                }
            },
            {
                title: "2. Factory Pattern",
                type: "Création",
                icon: "fas fa-industry",
                description: "Une fonction qui crée et retourne des objets sans utiliser 'new'.",
                code: `function createUser(role) {
    if (role === 'admin') {
        return {
            role: 'admin',
            permissions: ['read', 'write', 'delete']
        };
    }
    return {
        role: 'user',
        permissions: ['read']
    };
}

const admin = createUser('admin');
console.log(admin.permissions); // ['read', 'write', 'delete']`,
                output: "",
                runCode: function() {
                    return executeCode(`function createUser(role) {
    return {
        role,
        createdAt: new Date().toISOString()
    };
}
const u1 = createUser('admin');
console.log("User créé :", u1);`);
                }
            },
            {
                title: "3. Singleton Pattern",
                type: "Création",
                icon: "fas fa-user-circle",
                description: "S'assurer qu'une classe n'a qu'une seule instance.",
                code: `const Singleton = (function() {
    let instance;

    function createInstance() {
        return { name: "Je suis l'unique instance" };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(a === b); // true`,
                output: "",
                runCode: function() {
                    return executeCode(`const Singleton = (function() {
    let instance;
    return {
        getInstance: function() {
            if (!instance) instance = { id: Math.random() };
            return instance;
        }
    };
})();
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log("s1.id :", s1.id);
console.log("s2.id :", s2.id);
console.log("s1 === s2 ?", s1 === s2);`);
                }
            },
            {
                title: "4. Observer Pattern",
                type: "Comportement",
                icon: "fas fa-eye",
                description: "Un sujet notifie ses observateurs de tout changement (Pub/Sub).",
                code: `class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
    }
    notify(data) {
        this.observers.forEach(fn => fn(data));
    }
}

const subject = new Subject();

subject.subscribe(data => console.log("Observer 1 :", data));
subject.subscribe(data => console.log("Observer 2 :", data));

subject.notify("Hello World");`,
                output: "",
                runCode: function() {
                    return executeCode(`class Subject {
    constructor() { this.observers = []; }
    subscribe(fn) { this.observers.push(fn); }
    notify(data) { this.observers.forEach(fn => fn(data)); }
}
const sub = new Subject();
sub.subscribe(msg => console.log("Log:", msg));
sub.subscribe(msg => console.log("Alert:", msg.toUpperCase()));
sub.notify("Event déclenché !");`);
                }
            }
        ]
    },

    "functional_programming": {
        title: "Functional Programming",
        icon: "fas fa-function",
        description: "Paradigme basé sur les fonctions pures, l'immutabilité et la composition.",
        topics: [
            {
                title: "1. Pure Functions",
                type: "Concept",
                icon: "fas fa-tint",
                description: "Même entrée = Même sortie. Pas d'effets de bord (side effects).",
                code: `// Impure (Dépend de l'extérieur)
let total = 0;
function addToTotal(amount) {
    total += amount; // Side effect
    return total;
}

// Pure (Indépendante)
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5 (Toujours)`,
                output: "",
                runCode: function() {
                    return executeCode(`function add(a, b) { return a + b; }
console.log("Add(2, 3) :", add(2, 3));
console.log("Add(2, 3) encore :", add(2, 3));
console.log("C'est une fonction pure.");`);
                }
            },
            {
                title: "2. Immutabilité",
                type: "Concept",
                icon: "fas fa-lock",
                description: "Ne jamais modifier les données existantes, créer des copies.",
                code: `const user = { name: "Alice", age: 25 };

// Mauvais (Mutation)
// user.age = 26;

// Bon (Copie)
const updatedUser = { ...user, age: 26 };

console.log(user.age); // 25
console.log(updatedUser.age); // 26`,
                output: "",
                runCode: function() {
                    return executeCode(`const list = [1, 2, 3];
// Ajout immuable
const newList = [...list, 4];
console.log("Original :", list);
console.log("Nouveau :", newList);`);
                }
            },
            {
                title: "3. Composition",
                type: "Technique",
                icon: "fas fa-link",
                description: "Combiner des fonctions simples pour créer des traitements complexes.",
                code: `const toUpper = str => str.toUpperCase();
const exclaim = str => str + " !";
const smile = str => str + " :)";

// Composition manuelle
const greet = str => smile(exclaim(toUpper(str)));

console.log(greet("hello")); // "HELLO ! :)"

// Avec une fonction compose (Lodash/Ramda style)
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const greet2 = compose(smile, exclaim, toUpper);

console.log(greet2("world")); // "WORLD ! :)"`,
                output: "",
                runCode: function() {
                    return executeCode(`const double = x => x * 2;
const square = x => x * x;
// f(g(x))
const doubleThenSquare = x => square(double(x));
console.log("Double(3) -> Square :", doubleThenSquare(3)); // (3*2)^2 = 36`);
                }
            },
            {
                title: "4. Currying",
                type: "Technique",
                icon: "fas fa-step-forward",
                description: "Transformer une fonction à N arguments en N fonctions à 1 argument.",
                code: `// Normale
function add(a, b) {
    return a + b;
}

// Curried
const curriedAdd = a => b => a + b;

const add5 = curriedAdd(5); // Partial application
console.log(add5(10)); // 15
console.log(curriedAdd(2)(3)); // 5`,
                output: "",
                runCode: function() {
                    return executeCode(`const multiply = a => b => a * b;
const double = multiply(2);
console.log("Double(10) :", double(10));
console.log("Multiply(3)(4) :", multiply(3)(4));`);
                }
            }
        ]
    },

    "bonus": {
        title: "Bonus (Security/Perf)",
        icon: "fas fa-star",
        description: "Concepts avancés pour briller : Sécurité, Performance et Tests.",
        topics: [
            {
                title: "1. Security (XSS, CSRF)",
                type: "Sécurité",
                icon: "fas fa-shield-virus",
                description: "XSS : Injection de script. CSRF : Action non voulue. Toujours valider les entrées !",
                code: `// Exemple XSS (Cross-Site Scripting)
const userInput = "<img src=x onerror=alert('Hacked')>";

// Mauvais : innerHTML exécute le script
// document.body.innerHTML = userInput;

// Bon : textContent échappe le HTML
// document.body.textContent = userInput;

console.log("Toujours échapper les données utilisateur !");`,
                output: "",
                runCode: function() {
                    return executeCode(`const input = "<script>alert('XSS')</script>";
console.log("Input utilisateur :", input);
console.log("Règle d'or : Ne jamais utiliser innerHTML avec des données non fiables.");
console.log("Utiliser textContent ou des bibliothèques de sanitization.");`);
                }
            },
            {
                title: "2. Performance (Debounce)",
                type: "Optimisation",
                icon: "fas fa-tachometer-alt",
                description: "Attendre que l'utilisateur arrête de taper avant d'agir (ex: Recherche).",
                code: `function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

const saveInput = debounce((text) => {
    console.log("Sauvegarde :", text);
}, 500);

saveInput("H");
saveInput("He");
saveInput("Hel");
saveInput("Hello");
// Seul "Hello" sera loggué après 500ms`,
                output: "",
                runCode: function() {
                    return executeCode(`function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
const log = debounce((msg) => console.log("Action :", msg), 100);
log("A");
log("B");
log("C");
console.log("En attente...");
// Attendre un peu pour voir le log
setTimeout(() => console.log("Fin"), 200);`);
                }
            },
            {
                title: "3. Memoization",
                type: "Optimisation",
                icon: "fas fa-brain",
                description: "Mettre en cache les résultats de fonctions coûteuses.",
                code: `function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key]; // Retourne le cache
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

const slowSquare = memoize((n) => {
    console.log("Calcul long...");
    return n * n;
});

console.log(slowSquare(5)); // Calcul long... 25
console.log(slowSquare(5)); // 25 (Instantané)`,
                output: "",
                runCode: function() {
                    return executeCode(`function memoize(fn) {
    const cache = {};
    return function(n) {
        if (n in cache) return cache[n];
        console.log("Calcul pour", n);
        const res = fn(n);
        cache[n] = res;
        return res;
    };
}
const square = memoize(x => x * x);
console.log(square(10));
console.log(square(10));`);
                }
            },
            {
                title: "4. Testing (Unit vs Integration)",
                type: "Qualité",
                icon: "fas fa-vial",
                description: "Unit : Tester une fonction isolée. Integration : Tester plusieurs modules ensemble.",
                code: `// Fonction à tester
function add(a, b) { return a + b; }

// Test Unitaire (Concept)
function testAdd() {
    const result = add(2, 2);
    if (result !== 4) {
        console.error("Test Failed: Expected 4, got " + result);
    } else {
        console.log("Test Passed!");
    }
}

testAdd();`,
                output: "",
                runCode: function() {
                    return executeCode(`function add(a, b) { return a + b; }
const res = add(2, 2);
console.log("Test add(2, 2) === 4 ?");
console.log(res === 4 ? "✅ PASS" : "❌ FAIL");`);
                }
            }
        ]
    },

    "api": {
        title: "Web APIs & Fetch",
        icon: "fas fa-globe",
        description: "Communiquer avec des serveurs : Fetch, HTTP Methods, Headers et URL API.",
        topics: [
            {
                title: "1. Concept : Qu'est-ce qu'une API ?",
                type: "Théorie",
                icon: "fas fa-network-wired",
                description: "Interface permettant à deux programmes de communiquer (Client <-> Serveur). Souvent en JSON.",
                code: `// Structure typique d'une réponse API (JSON)
const response = {
    status: 200,
    data: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ]
};

// Le client envoie une requête (Request)
// Le serveur renvoie une réponse (Response)`,
                output: "",
                runCode: function() {
                    return executeCode(`console.log("Simulation Client/Serveur :");
console.log("1. Client : Envoie une requête GET /users");
console.log("2. Serveur : Traite la demande...");
console.log("3. Serveur : Renvoie JSON { users: [...] }");`);
                }
            },
            {
                title: "2. Fetch API (GET)",
                type: "Fondamental",
                icon: "fas fa-download",
                description: "Récupérer des données depuis une URL. Retourne une Promesse.",
                code: `// Utilisation basique
fetch('https://api.example.com/data')
    .then(response => response.json()) // Parsing JSON
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Avec Async/Await (Plus propre)
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Erreur :", error);
    }
}`,
                output: "",
                runCode: function() {
                    // Simulation de fetch
                    return executeCode(`async function getData() {
    console.log("Fetching data...");
    // Simulation d'attente réseau
    await new Promise(r => setTimeout(r, 500));
    
    const mockData = { id: 1, title: "Hello World" };
    console.log("Données reçues :", mockData);
}
getData();`);
                }
            },
            {
                title: "3. HTTP Methods (POST, PUT, DELETE)",
                type: "Avancé",
                icon: "fas fa-paper-plane",
                description: "GET (Lire), POST (Créer), PUT (Modifier), DELETE (Supprimer).",
                code: `async function createUser(user) {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST', // Méthode
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) // Données envoyées
    });
    return await response.json();
}

createUser({ name: "Charlie" });`,
                output: "",
                runCode: function() {
                    return executeCode(`async function createUser(name) {
    console.log("Envoi POST vers /users...");
    console.log("Body :", JSON.stringify({ name }));
    // Simulation réponse
    await new Promise(r => setTimeout(r, 500));
    console.log("Réponse : 201 Created");
}
createUser("Charlie");`);
                }
            },
            {
                title: "4. Headers & JSON",
                type: "Configuration",
                icon: "fas fa-envelope-open-text",
                description: "Les Headers donnent des métadonnées (Auth, Type de contenu...).",
                code: `const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer mon_token_secret'
};

fetch('/api/secure', { headers })
    .then(res => {
        // Vérifier le type de contenu reçu
        console.log(res.headers.get('Content-Type'));
        return res.json();
    });`,
                output: "",
                runCode: function() {
                    return executeCode(`const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer XYZ'
};
console.log("Headers configurés :", headers);
console.log("Prêt à envoyer avec la requête.");`);
                }
            },
            {
                title: "5. Gestion d'Erreurs (HTTP vs Network)",
                type: "Best Practices",
                icon: "fas fa-exclamation-triangle",
                description: "Fetch ne rejette PAS sur 404/500. Il faut vérifier response.ok.",
                code: `async function getPost(id) {
    try {
        const response = await fetch(\`/posts/\${id}\`);
        
        if (!response.ok) {
            throw new Error(\`Erreur HTTP: \${response.status}\`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Problème fetch :", error.message);
    }
}`,
                output: "",
                runCode: function() {
                    return executeCode(`async function checkStatus(status) {
    console.log("Status reçu :", status);
    if (status >= 200 && status < 300) {
        console.log("✅ OK (response.ok = true)");
    } else {
        console.log("❌ Erreur (response.ok = false)");
    }
}
checkStatus(200);
checkStatus(404);
checkStatus(500);`);
                }
            },
            {
                title: "6. URL API",
                type: "Utilitaire",
                icon: "fas fa-link",
                description: "Manipuler facilement les URLs et les paramètres de requête (Query Params).",
                code: `const url = new URL('https://example.com/search');

// Ajouter des paramètres
url.searchParams.append('q', 'javascript');
url.searchParams.append('sort', 'date');

console.log(url.toString());
// "https://example.com/search?q=javascript&sort=date"

// Lire des paramètres
console.log(url.searchParams.get('q')); // "javascript"`,
                output: "",
                runCode: function() {
                    return executeCode(`const url = new URL('https://site.com/api');
url.searchParams.set('page', 1);
url.searchParams.set('limit', 10);
console.log("URL générée :", url.toString());

url.searchParams.set('page', 2);
console.log("Page suivante :", url.toString());`);
                }
            }
        ]
    },

    "arrays": {
        title: "Tableaux",
        icon: "fas fa-layer-group",
        description: "Les tableaux sont utilisés pour stocker plusieurs valeurs dans une seule variable. Ils viennent avec de nombreuses méthodes puissantes.",
        topics: [
            {
                title: "Méthodes de base",
                type: "Méthode",
                icon: "fas fa-tools",
                description: "Ajouter, supprimer et modifier des éléments.",
                code: `let fruits = ["Pomme", "Banane"];

// Ajouter à la fin
fruits.push("Orange"); // ["Pomme", "Banane", "Orange"]

// Supprimer à la fin
let dernier = fruits.pop(); // "Orange"

// Ajouter au début
fruits.unshift("Fraise"); // ["Fraise", "Pomme", "Banane"]

// Supprimer au début
let premier = fruits.shift(); // "Fraise"

// Trouver l'index
let pos = fruits.indexOf("Banane"); // 1

// Supprimer un élément par index
// splice(index, nombreASupprimer)
fruits.splice(pos, 1); // ["Pomme"]

console.log(fruits);`,
                output: "",
                runCode: function() {
                    let output = "Manipulation de tableaux:\n\n";
                    
                    let fruits = ["Pomme", "Banane"];
                    output += `Initial: ${JSON.stringify(fruits)}\n`;
                    
                    fruits.push("Orange");
                    output += `push("Orange") → ${JSON.stringify(fruits)}\n`;
                    
                    let dernier = fruits.pop();
                    output += `pop() → "${dernier}", Reste: ${JSON.stringify(fruits)}\n`;
                    
                    fruits.unshift("Fraise");
                    output += `unshift("Fraise") → ${JSON.stringify(fruits)}\n`;
                    
                    let premier = fruits.shift();
                    output += `shift() → "${premier}", Reste: ${JSON.stringify(fruits)}\n`;
                    
                    let pos = fruits.indexOf("Banane");
                    output += `indexOf("Banane") → ${pos}\n`;
                    
                    if (pos !== -1) {
                        fruits.splice(pos, 1);
                        output += `splice(${pos}, 1) → ${JSON.stringify(fruits)}`;
                    }
                    
                    return output;
                }
            },
            {
                title: "Itération et Transformation",
                type: "Méthode",
                icon: "fas fa-sync",
                description: "Méthodes modernes pour parcourir et transformer les tableaux (map, filter, reduce).",
                code: `let nombres = [1, 2, 3, 4, 5];

// forEach: Exécuter une fonction pour chaque élément
console.log("--- forEach ---");
nombres.forEach(n => console.log(n));

// map: Créer un nouveau tableau en transformant chaque élément
let doubles = nombres.map(n => n * 2);
console.log("Doubles:", doubles); // [2, 4, 6, 8, 10]

// filter: Créer un nouveau tableau avec les éléments qui passent le test
let pairs = nombres.filter(n => n % 2 === 0);
console.log("Pairs:", pairs); // [2, 4]

// reduce: Réduire le tableau à une seule valeur
let somme = nombres.reduce((total, n) => total + n, 0);
console.log("Somme:", somme); // 15

// find: Trouver le premier élément qui passe le test
let superieurA3 = nombres.find(n => n > 3);
console.log("Premier > 3:", superieurA3); // 4`,
                output: "",
                runCode: function() {
                    let output = "Méthodes d'itération:\n\n";
                    let nombres = [1, 2, 3, 4, 5];
                    output += `Tableau: ${JSON.stringify(nombres)}\n\n`;
                    
                    let doubles = nombres.map(n => n * 2);
                    output += `map(n => n * 2) → ${JSON.stringify(doubles)}\n`;
                    
                    let pairs = nombres.filter(n => n % 2 === 0);
                    output += `filter(n => n % 2 === 0) → ${JSON.stringify(pairs)}\n`;
                    
                    let somme = nombres.reduce((total, n) => total + n, 0);
                    output += `reduce((total, n) => total + n) → ${somme}\n`;
                    
                    let superieurA3 = nombres.find(n => n > 3);
                    output += `find(n => n > 3) → ${superieurA3}`;
                    
                    return output;
                }
            },
            {
                title: "Recherche",
                type: "Méthode",
                icon: "fas fa-search",
                description: "Trouver des éléments ou leur position dans un tableau.",
                code: `let fruits = ["Pomme", "Banane", "Orange", "Banane"];

// indexOf: Première occurrence (ou -1)
let premierIndex = fruits.indexOf("Banane"); // 1

// lastIndexOf: Dernière occurrence
let dernierIndex = fruits.lastIndexOf("Banane"); // 3

// includes: Vérifie la présence (true/false)
let aDesPommes = fruits.includes("Pomme"); // true

// findIndex: Index du premier élément satisfaisant une condition
let nombres = [5, 12, 8, 130, 44];
let indexGrandNombre = nombres.findIndex(n => n > 13); // 3 (index de 130)

// find: Retourne l'élément lui-même (vu précédemment)
let grandNombre = nombres.find(n => n > 13); // 130`,
                output: "",
                runCode: function() {
                    let output = "Recherche dans les tableaux:\n\n";
                    
                    let fruits = ["Pomme", "Banane", "Orange", "Banane"];
                    output += `Tableau: ${JSON.stringify(fruits)}\n\n`;
                    
                    output += `indexOf("Banane") -> ${fruits.indexOf("Banane")}\n`;
                    output += `lastIndexOf("Banane") -> ${fruits.lastIndexOf("Banane")}\n`;
                    output += `includes("Cerise") -> ${fruits.includes("Cerise")}\n\n`;
                    
                    let nombres = [5, 12, 8, 130, 44];
                    output += `Nombres: ${JSON.stringify(nombres)}\n`;
                    output += `findIndex(n => n > 13) -> ${nombres.findIndex(n => n > 13)} (valeur: ${nombres[3]})`;
                    
                    return output;
                }
            },
            {
                title: "Tri et Ordre",
                type: "Méthode",
                icon: "fas fa-sort",
                description: "Trier et inverser l'ordre des éléments.",
                code: `let fruits = ["Banane", "Orange", "Pomme", "Mangue"];

// sort(): Tri alphabétique par défaut (modifie le tableau !)
fruits.sort();
// ["Banane", "Mangue", "Orange", "Pomme"]

// reverse(): Inverse l'ordre (modifie le tableau !)
fruits.reverse();
// ["Pomme", "Orange", "Mangue", "Banane"]

// Tri numérique (Attention !)
let points = [40, 100, 1, 5, 25, 10];

// points.sort(); // Incorrect: [1, 10, 100, 25, 40, 5] (tri alphabétique)

// Tri numérique correct avec fonction de comparaison
points.sort(function(a, b) {
    return a - b; // Croissant
});
// [1, 5, 10, 25, 40, 100]

// Tri décroissant
points.sort((a, b) => b - a);`,
                output: "",
                runCode: function() {
                    let output = "Tri de tableaux:\n\n";
                    
                    let fruits = ["Banane", "Orange", "Pomme", "Mangue"];
                    output += `Initial: ${JSON.stringify(fruits)}\n`;
                    
                    fruits.sort();
                    output += `sort() -> ${JSON.stringify(fruits)}\n`;
                    
                    fruits.reverse();
                    output += `reverse() -> ${JSON.stringify(fruits)}\n\n`;
                    
                    let points = [40, 100, 1, 5, 25, 10];
                    output += `Points: ${JSON.stringify(points)}\n`;
                    
                    points.sort((a, b) => a - b);
                    output += `sort((a,b)=>a-b) -> ${JSON.stringify(points)}`;
                    
                    return output;
                }
            },
            {
                title: "Manipulation Avancée",
                type: "Méthode",
                icon: "fas fa-magic",
                description: "Concaténer, découper et aplatir des tableaux.",
                code: `let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];

// concat: Fusionner des tableaux (retourne un nouveau tableau)
let enfants = arr1.concat(arr2);

// slice: Extraire une portion (ne modifie pas l'original)
// slice(début, fin_non_inclus)
let portion = enfants.slice(1, 3); // ["Lone", "Emil"]

// flat: Aplatir un tableau multidimensionnel
let arrImbrique = [1, 2, [3, 4, [5, 6]]];
let plat = arrImbrique.flat(); // [1, 2, 3, 4, [5, 6]]
let tresPlat = arrImbrique.flat(2); // [1, 2, 3, 4, 5, 6]

// flatMap: map() suivi de flat() (profondeur 1)
let phrases = ["bonjour monde", "hello world"];
let mots = phrases.flatMap(x => x.split(" "));
// ["bonjour", "monde", "hello", "world"]`,
                output: "",
                runCode: function() {
                    let output = "Manipulation avancée:\n\n";
                    
                    let arr1 = ["A", "B"];
                    let arr2 = ["C", "D"];
                    output += `concat: ${JSON.stringify(arr1.concat(arr2))}\n\n`;
                    
                    let source = ["A", "B", "C", "D", "E"];
                    output += `Source: ${JSON.stringify(source)}\n`;
                    output += `slice(1, 4) -> ${JSON.stringify(source.slice(1, 4))}\n\n`;
                    
                    let imbrique = [1, [2, 3], [4, [5]]];
                    output += `Imbriqué: ${JSON.stringify(imbrique)}\n`;
                    output += `flat() -> ${JSON.stringify(imbrique.flat())}\n`;
                    output += `flat(2) -> ${JSON.stringify(imbrique.flat(2))}`;
                    
                    return output;
                }
            },
            {
                title: "Syntaxe Moderne (ES6+)",
                type: "Syntaxe",
                icon: "fas fa-star",
                description: "Destructuring et Spread Operator pour un code plus concis.",
                code: `// Destructuring (Déstructuration)
let fruits = ["Pomme", "Banane", "Orange"];

// Assigner des variables directement
let [fruit1, fruit2] = fruits;
// fruit1 = "Pomme", fruit2 = "Banane"

// Sauter des éléments
let [premier, , troisieme] = fruits;
// premier = "Pomme", troisieme = "Orange"

// Spread Operator (...)
// 1. Copier un tableau
let copie = [...fruits];

// 2. Fusionner
let legumes = ["Carotte", "Poireau"];
let nourriture = [...fruits, ...legumes, "Pain"];

// 3. Passer en arguments
let nombres = [1, 2, 3];
function somme(x, y, z) { return x + y + z; }
let total = somme(...nombres); // 6`,
                output: "",
                runCode: function() {
                    let output = "Syntaxe Moderne:\n\n";
                    
                    let fruits = ["Pomme", "Banane", "Orange"];
                    output += `Tableau: ${JSON.stringify(fruits)}\n`;
                    
                    let [f1, f2] = fruits;
                    output += `Destructuring [f1, f2]: f1="${f1}", f2="${f2}"\n\n`;
                    
                    let legumes = ["Carotte"];
                    let mix = [...fruits, ...legumes];
                    output += `Spread [...fruits, ...legumes]:\n${JSON.stringify(mix)}`;
                    
                    return output;
                }
            }
        ]
    },

    "objects": {
        title: "Objets",
        icon: "fas fa-cube",
        description: "Les objets sont des collections de propriétés. Une propriété est une association entre un nom (ou clé) et une valeur.",
        topics: [
            {
                title: "Manipulation d'Objets",
                type: "Concept",
                icon: "fas fa-cogs",
                description: "Créer, accéder et modifier des objets.",
                code: `// Création
let personne = {
    prenom: "Jean",
    nom: "Dupont",
    age: 30,
    hobbies: ["Lecture", "Sport"],
    adresse: {
        rue: "123 Rue Principale",
        ville: "Paris"
    },
    // Méthode
    sePresenter: function() {
        return "Je m'appelle " + this.prenom + " " + this.nom;
    }
};

// Accès
console.log(personne.prenom);       // "Jean" (notation point)
console.log(personne["nom"]);       // "Dupont" (notation crochet)
console.log(personne.adresse.ville);// "Paris"

// Modification
personne.age = 31;
personne.email = "jean@example.com"; // Ajout

// Appel de méthode
console.log(personne.sePresenter());

// Object.keys, Object.values
console.log(Object.keys(personne));   // ["prenom", "nom", ...]
console.log(Object.values(personne)); // ["Jean", "Dupont", ...]`,
                output: "",
                runCode: function() {
                    let output = "Objets:\n\n";
                    
                    let personne = {
                        prenom: "Jean",
                        nom: "Dupont",
                        age: 30,
                        sePresenter: function() {
                            return "Je m'appelle " + this.prenom + " " + this.nom;
                        }
                    };
                    
                    output += `Objet personne: ${JSON.stringify(personne, null, 2)}\n\n`;
                    output += `Accès personne.prenom: "${personne.prenom}"\n`;
                    output += `Accès personne["nom"]: "${personne["nom"]}"\n`;
                    
                    personne.age = 31;
                    output += `Modification age: ${personne.age}\n`;
                    
                    output += `Appel méthode: "${personne.sePresenter()}"\n`;
                    output += `Clés: ${JSON.stringify(Object.keys(personne))}`;
                    
                    return output;
                }
            },
            {
                title: "Prototypes & Héritage",
                type: "Avancé",
                icon: "fas fa-sitemap",
                description: "Le mécanisme d'héritage de JavaScript basé sur les prototypes.",
                code: `// Création avec Object.create
const animal = {
    manger: function() {
        return "Miam !";
    }
};

const chien = Object.create(animal);
chien.aboyer = function() {
    return "Wouf !";
};

console.log(chien.aboyer()); // "Wouf !"
console.log(chien.manger()); // "Miam !" (Hérité)

// Vérifier le prototype
console.log(Object.getPrototypeOf(chien) === animal); // true
console.log(chien.__proto__ === animal); // true (Ancienne syntaxe)

// Constructeurs et Prototype
function Chat(nom) {
    this.nom = nom;
}
Chat.prototype.miauler = function() {
    return "Miaou " + this.nom;
};

const monChat = new Chat("Felix");
console.log(monChat.miauler());`,
                output: "",
                runCode: function() {
                    let output = "Héritage Prototypal:\n\n";
                    
                    const animal = { manger: () => "Miam !" };
                    const chien = Object.create(animal);
                    chien.aboyer = () => "Wouf !";
                    
                    output += "Objet 'animal' avec méthode 'manger'\n";
                    output += "Objet 'chien' hérite de 'animal'\n\n";
                    
                    output += `chien.aboyer() -> "${chien.aboyer()}"\n`;
                    output += `chien.manger() -> "${chien.manger()}" (Hérité)\n\n`;
                    
                    output += `Prototype de chien === animal ? ${Object.getPrototypeOf(chien) === animal}`;
                    
                    return output;
                }
            },
            {
                title: "Propriétés Avancées",
                type: "Avancé",
                icon: "fas fa-sliders-h",
                description: "Contrôle fin des propriétés avec defineProperty, Getters et Setters.",
                code: `const compte = {
    _solde: 1000,
    
    // Getter
    get solde() {
        return this._solde + " €";
    },
    
    // Setter
    set solde(montant) {
        if (montant < 0) {
            console.log("Solde négatif interdit !");
        } else {
            this._solde = montant;
        }
    }
};

console.log(compte.solde); // "1000 €"
compte.solde = 500;        // Modifie _solde
compte.solde = -50;        // "Solde négatif interdit !"

// Object.defineProperty
const user = {};
Object.defineProperty(user, "id", {
    value: 12345,
    writable: false, // Lecture seule
    enumerable: true,
    configurable: false
});

user.id = 999; // Ignoré (ou erreur en strict mode)
console.log(user.id); // 12345`,
                output: "",
                runCode: function() {
                    let output = "Getters/Setters & defineProperty:\n\n";
                    
                    const compte = {
                        _solde: 1000,
                        get solde() { return this._solde + " €"; },
                        set solde(val) { 
                            if(val < 0) output += "Erreur: Solde négatif!\n";
                            else this._solde = val;
                        }
                    };
                    
                    output += `Solde initial: ${compte.solde}\n`;
                    
                    output += "Tentative: solde = -50\n";
                    compte.solde = -50;
                    
                    output += "Tentative: solde = 500\n";
                    compte.solde = 500;
                    output += `Nouveau solde: ${compte.solde}\n\n`;
                    
                    const user = {};
                    Object.defineProperty(user, "id", { value: 123, writable: false });
                    output += `Propriété 'id' en lecture seule: ${user.id}\n`;
                    user.id = 999;
                    output += `Après tentative modif: ${user.id}`;
                    
                    return output;
                }
            },
            {
                title: "Sécurité des Objets",
                type: "Sécurité",
                icon: "fas fa-shield-alt",
                description: "Empêcher la modification des objets avec freeze, seal et preventExtensions.",
                code: `const config = { api: "http://api.com", port: 8080 };

// 1. Object.preventExtensions
// Interdit l'ajout de nouvelles propriétés
Object.preventExtensions(config);
config.newProp = "Test"; // Ignoré
config.port = 3000;      // OK (Modification autorisée)
delete config.port;      // OK (Suppression autorisée)

// 2. Object.seal (Sceller)
// Interdit Ajout + Suppression. Modification OK.
const user = { name: "Bob" };
Object.seal(user);
delete user.name; // Ignoré

// 3. Object.freeze (Geler)
// Interdit TOUT (Ajout, Suppression, Modification)
const constante = { PI: 3.14 };
Object.freeze(constante);
constante.PI = 3.14159; // Ignoré

console.log(Object.isFrozen(constante)); // true`,
                output: "",
                runCode: function() {
                    let output = "Sécurité des Objets:\n\n";
                    
                    const obj = { prop: 42 };
                    Object.freeze(obj);
                    
                    output += "Objet gelé (freeze): { prop: 42 }\n";
                    output += "Tentative: obj.prop = 0\n";
                    obj.prop = 0;
                    output += `Résultat: obj.prop = ${obj.prop}\n`;
                    
                    output += "Tentative: obj.new = 1\n";
                    obj.new = 1;
                    output += `Résultat: obj.new = ${obj.new}\n\n`;
                    
                    output += `Est gelé ? ${Object.isFrozen(obj)}`;
                    
                    return output;
                }
            },
            {
                title: "Fusion et Copie",
                type: "Utilitaire",
                icon: "fas fa-copy",
                description: "Combiner et cloner des objets.",
                code: `const defaut = { theme: "light", admin: false };
const userPrefs = { theme: "dark" };

// Object.assign (Fusion)
// Copie les propriétés de userPrefs dans defaut (modifie le premier arg !)
// Pour créer un nouvel objet :
const config = Object.assign({}, defaut, userPrefs);
// { theme: "dark", admin: false }

// Spread Operator (Plus moderne)
const configV2 = { ...defaut, ...userPrefs };

// Copie superficielle (Shallow Copy)
const original = { a: 1, b: { c: 2 } };
const copie = { ...original };

copie.a = 99; // N'affecte pas original.a
copie.b.c = 99; // AFFECTE original.b.c (car référence partagée !)

// Copie profonde (Deep Copy)
const deepCopie = JSON.parse(JSON.stringify(original));
// Ou structuredClone(original) (Moderne)`,
                output: "",
                runCode: function() {
                    let output = "Fusion et Copie:\n\n";
                    
                    const o1 = { a: 1 };
                    const o2 = { b: 2 };
                    const fusion = { ...o1, ...o2 };
                    
                    output += `Fusion {a:1} et {b:2} -> ${JSON.stringify(fusion)}\n\n`;
                    
                    const original = { ref: { val: 10 } };
                    const shallow = { ...original };
                    
                    output += "Copie Superficielle:\n";
                    shallow.ref.val = 20;
                    output += `Modif copie.ref.val = 20\n`;
                    output += `Original.ref.val = ${original.ref.val} (Impacté !)\n\n`;
                    
                    output += "Copie Profonde (structuredClone):\n";
                    // Note: structuredClone peut ne pas être dispo partout, fallback JSON
                    const deep = JSON.parse(JSON.stringify(original));
                    deep.ref.val = 999;
                    output += `Modif deep.ref.val = 999\n`;
                    output += `Original.ref.val = ${original.ref.val} (Intact)`;
                    
                    return output;
                }
            },
            {
                title: "Comparaison",
                type: "Utilitaire",
                icon: "fas fa-balance-scale",
                description: "Comparer des objets et des valeurs.",
                code: `// Comparaison de références
const a = { id: 1 };
const b = { id: 1 };
const c = a;

console.log(a === b); // false (références différentes)
console.log(a === c); // true (même référence)

// Object.is vs ===
// Similaire à === sauf pour deux cas :
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false

// Comparaison de contenu (Deep Equal)
// Nécessite une fonction personnalisée ou une librairie (Lodash)
function estEgal(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(estEgal(a, b)); // true`,
                output: "",
                runCode: function() {
                    let output = "Comparaison:\n\n";
                    
                    const a = { x: 1 };
                    const b = { x: 1 };
                    
                    output += "a = {x:1}, b = {x:1}\n";
                    output += `a === b ? ${a === b} (Références différentes)\n`;
                    output += `JSON.stringify(a) === JSON.stringify(b) ? ${JSON.stringify(a) === JSON.stringify(b)}\n\n`;
                    
                    output += "Object.is vs === :\n";
                    output += `NaN === NaN ? ${NaN === NaN}\n`;
                    output += `Object.is(NaN, NaN) ? ${Object.is(NaN, NaN)}`;
                    
                    return output;
                }
            }
        ]
    },

    "promises": {
        title: "Promesses",
        icon: "fas fa-hourglass-half",
        description: "Les promesses sont utilisées pour gérer les opérations asynchrones en JavaScript. Elles représentent une valeur qui peut être disponible maintenant, dans le futur, ou jamais.",
        topics: [
            {
                title: "Promise & Async/Await",
                type: "Asynchrone",
                icon: "fas fa-clock",
                description: "Gérer l'asynchronicité de manière moderne.",
                code: `// Création d'une promesse simulée
function attendre(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject("Le temps ne peut pas être négatif");
        } else {
            setTimeout(() => {
                resolve("Fini après " + ms + "ms");
            }, ms);
        }
    });
}

// Utilisation avec .then() / .catch()
console.log("Début");
attendre(1000)
    .then(resultat => console.log(resultat))
    .catch(erreur => console.error(erreur));

// Utilisation avec Async / Await (plus lisible)
async function executerTache() {
    try {
        console.log("Attente...");
        const resultat = await attendre(500);
        console.log(resultat);
        return "Tâche terminée";
    } catch (erreur) {
        console.error("Erreur:", erreur);
    }
}

executerTache();`,
                output: "",
                runCode: function() {
                    // Simulation synchrone pour l'affichage immédiat
                    let output = "Simulation Asynchrone:\n\n";
                    
                    output += "1. Début de l'opération\n";
                    output += "2. Création de la Promesse (attente simulée)\n";
                    output += "3. Promesse résolue avec succès\n";
                    output += "4. Résultat: 'Fini après 1000ms'\n\n";
                    
                    output += "Avec Async/Await:\n";
                    output += "1. Entrée dans la fonction async\n";
                    output += "2. await attendre(500)...\n";
                    output += "3. (Pause de l'exécution de la fonction)\n";
                    output += "4. Reprise: Résultat reçu 'Fini après 500ms'\n";
                    output += "5. Fonction terminée";
                    
                    return output;
                }
            }
        ]
    },

    "dom": {
        title: "DOM Manipulation",
        icon: "fas fa-sitemap",
        description: "Le DOM (Document Object Model) est une interface de programmation pour les documents HTML. Il représente la page de manière à ce que les programmes puissent modifier la structure, le style et le contenu du document.",
        topics: [
            {
                title: "Sélection d'éléments",
                type: "DOM API",
                icon: "fas fa-mouse-pointer",
                description: "Pour manipuler un élément, il faut d'abord le sélectionner. JavaScript offre plusieurs méthodes pour trouver des éléments dans le DOM.",
                code: `// Sélection par ID
const titre = document.getElementById('monTitre');

// Sélection par classe (retourne une HTMLCollection)
const items = document.getElementsByClassName('item');

// Sélection par balise (retourne une HTMLCollection)
const paragraphes = document.getElementsByTagName('p');

// Sélection par sélecteur CSS (le premier trouvé)
const bouton = document.querySelector('.btn-primary');
const container = document.querySelector('#main-container');

// Sélection de tous les éléments correspondant (NodeList)
const tousLesBoutons = document.querySelectorAll('button');

// Exemple d'utilisation
if (titre) {
    titre.style.color = 'blue';
}

// Parcourir une NodeList
tousLesBoutons.forEach(btn => {
    console.log(btn.textContent);
});`,
                output: "",
                runCode: function() {
                    let output = "Simulation de sélection DOM:\n\n";
                    
                    // Simulation d'éléments DOM
                    const mockDom = {
                        getElementById: (id) => `<div id="${id}">...</div>`,
                        querySelector: (sel) => `<div class="${sel.replace('.', '')}">...</div>`,
                        querySelectorAll: (sel) => [`<button>Btn 1</button>`, `<button>Btn 2</button>`]
                    };
                    
                    output += `document.getElementById('header') -> ${mockDom.getElementById('header')}\n`;
                    output += `document.querySelector('.nav') -> ${mockDom.querySelector('.nav')}\n`;
                    output += `document.querySelectorAll('button') -> [2 éléments trouvés]\n\n`;
                    
                    output += "Note: Dans un vrai navigateur, ces méthodes retournent des objets HTMLElement réels.";
                    
                    return output;
                }
            },
            {
                title: "Modification du contenu",
                type: "Propriétés",
                icon: "fas fa-edit",
                description: "Une fois un élément sélectionné, on peut modifier son contenu textuel ou HTML.",
                code: `const element = document.getElementById('demo');

// innerHTML: Lit ou modifie le HTML interne
// Attention aux failles XSS si utilisé avec des données utilisateur !
element.innerHTML = '<strong>Nouveau contenu</strong> avec HTML';

// textContent: Lit ou modifie le texte brut (plus sûr)
element.textContent = 'Juste du texte, les balises <b> sont ignorées';

// innerText: Similaire à textContent mais respecte le style CSS (ex: display: none)
element.innerText = 'Texte visible';

// value: Pour les éléments de formulaire (input, textarea, select)
const input = document.getElementById('monInput');
input.value = 'Nouvelle valeur';`,
                output: "",
                runCode: function() {
                    let output = "Modification de contenu:\n\n";
                    
                    let element = {
                        _html: "<div>Ancien contenu</div>",
                        _text: "Ancien contenu",
                        set innerHTML(val) { this._html = val; },
                        get innerHTML() { return this._html; },
                        set textContent(val) { this._text = val; },
                        get textContent() { return this._text; }
                    };
                    
                    output += `État initial: ${element.innerHTML}\n\n`;
                    
                    element.innerHTML = "<strong>Nouveau</strong>";
                    output += `element.innerHTML = "<strong>Nouveau</strong>"\n`;
                    output += `Résultat: ${element.innerHTML}\n\n`;
                    
                    element.textContent = "Texte brut";
                    output += `element.textContent = "Texte brut"\n`;
                    output += `Résultat (HTML): ${element.textContent}`;
                    
                    return output;
                }
            },
            {
                title: "Style et Classes",
                type: "CSS",
                icon: "fas fa-paint-brush",
                description: "JavaScript permet de modifier le style des éléments directement ou via des classes CSS.",
                code: `const box = document.querySelector('.box');

// Modification directe du style (camelCase)
box.style.backgroundColor = 'red';
box.style.fontSize = '20px';
box.style.marginTop = '10px';
box.style.display = 'none'; // Cacher l'élément

// Manipulation des classes (recommandé)
// classList est plus pratique que className

// Ajouter une classe
box.classList.add('active');

// Supprimer une classe
box.classList.remove('hidden');

// Basculer une classe (ajoute si absente, supprime si présente)
box.classList.toggle('dark-mode');

// Vérifier la présence d'une classe
if (box.classList.contains('active')) {
    console.log("La boîte est active");
}`,
                output: "",
                runCode: function() {
                    let output = "Manipulation des styles et classes:\n\n";
                    
                    let classes = ["box"];
                    let styles = {};
                    
                    output += `Classes initiales: [${classes.join(", ")}]\n`;
                    
                    // Simulation classList
                    classes.push("active");
                    output += `classList.add('active') -> [${classes.join(", ")}]\n`;
                    
                    classes = classes.filter(c => c !== "box");
                    output += `classList.remove('box') -> [${classes.join(", ")}]\n`;
                    
                    // Simulation style
                    styles.backgroundColor = "red";
                    styles.fontSize = "20px";
                    
                    output += `\nStyles appliqués:\n`;
                    output += `style.backgroundColor = "${styles.backgroundColor}"\n`;
                    output += `style.fontSize = "${styles.fontSize}"`;
                    
                    return output;
                }
            },
            {
                title: "Événements",
                type: "Interactivité",
                icon: "fas fa-bolt",
                description: "Les événements permettent de réagir aux actions de l'utilisateur (clic, survol, clavier, etc.).",
                code: `const btn = document.querySelector('button');

// Méthode recommandée: addEventListener
btn.addEventListener('click', function(event) {
    console.log("Bouton cliqué !");
    console.log("Type d'événement:", event.type);
    console.log("Cible:", event.target);
});

// Événements courants:
// Mouse: click, dblclick, mouseover, mouseout, mousemove
// Keyboard: keydown, keyup, keypress
// Form: submit, change, input, focus, blur
// Window: load, resize, scroll

// Exemple avec input
const input = document.querySelector('input');
input.addEventListener('input', (e) => {
    console.log("Valeur actuelle:", e.target.value);
});

// Supprimer un écouteur (nécessite une fonction nommée)
function maFonction() { console.log('Test'); }
btn.addEventListener('click', maFonction);
btn.removeEventListener('click', maFonction);`,
                output: "",
                runCode: function() {
                    let output = "Simulation d'événements:\n\n";
                    
                    output += "1. Définition de l'écouteur:\n";
                    output += "btn.addEventListener('click', callback)\n\n";
                    
                    output += "2. Simulation du clic utilisateur...\n";
                    output += ">> callback({ type: 'click', target: btn })\n\n";
                    
                    output += "Logs console:\n";
                    output += "- \"Bouton cliqué !\"\n";
                    output += "- \"Type d'événement: click\"\n";
                    output += "- \"Cible: [object HTMLButtonElement]\"";
                    
                    return output;
                }
            },
            {
                title: "Création et Suppression",
                type: "DOM API",
                icon: "fas fa-plus-square",
                description: "On peut créer dynamiquement de nouveaux éléments HTML et les insérer dans la page, ou en supprimer.",
                code: `// 1. Créer un nouvel élément
const nouveauLi = document.createElement('li');

// 2. Configurer l'élément
nouveauLi.textContent = "Nouvel article";
nouveauLi.className = "item-liste";
nouveauLi.id = "item-42";

// 3. Insérer l'élément dans le DOM
const liste = document.querySelector('ul');

// Ajouter à la fin
liste.appendChild(nouveauLi);

// Ajouter avant un autre élément
// liste.insertBefore(nouveauLi, liste.firstChild);

// Supprimer un élément
const aSupprimer = document.getElementById('vieux-item');
if (aSupprimer) {
    // Méthode moderne
    aSupprimer.remove();
    
    // Ancienne méthode (via le parent)
    // aSupprimer.parentNode.removeChild(aSupprimer);
}`,
                output: "",
                runCode: function() {
                    let output = "Création d'éléments:\n\n";
                    
                    output += "1. document.createElement('li') -> <li></li>\n";
                    output += "2. li.textContent = 'Item' -> <li>Item</li>\n";
                    output += "3. ul.appendChild(li)\n\n";
                    
                    output += "État du DOM simulé:\n";
                    output += "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item</li> (Nouveau)\n</ul>\n\n";
                    
                    output += "Suppression:\n";
                    output += "li.remove() -> L'élément est détaché du DOM.";
                    
                    return output;
                }
            },
            {
                title: "Traversée du DOM",
                type: "Navigation",
                icon: "fas fa-project-diagram",
                description: "Naviguer entre les éléments parents, enfants et frères (siblings).",
                code: `const element = document.querySelector('.item');

// Parent
const parent = element.parentNode; // ou element.parentElement

// Enfants
const enfants = parent.children; // HTMLCollection (éléments seulement)
const nodes = parent.childNodes; // NodeList (inclut texte, commentaires...)

const premierEnfant = parent.firstElementChild;
const dernierEnfant = parent.lastElementChild;

// Frères (Siblings)
const frereSuivant = element.nextElementSibling;
const frerePrecedent = element.previousElementSibling;

// Exemple: Remonter jusqu'à un parent spécifique (closest)
const container = element.closest('.container');`,
                output: "",
                runCode: function() {
                    let output = "Navigation DOM:\n\n";
                    
                    output += "Structure simulée:\n";
                    output += "<div id='parent'>\n  <div id='enfant1'></div>\n  <div id='enfant2'></div>\n</div>\n\n";
                    
                    output += "Depuis enfant1:\n";
                    output += "parentNode -> div#parent\n";
                    output += "nextElementSibling -> div#enfant2\n";
                    output += "previousElementSibling -> null\n\n";
                    
                    output += "Depuis parent:\n";
                    output += "children.length -> 2\n";
                    output += "firstElementChild -> div#enfant1";
                    
                    return output;
                }
            }
        ]
    },

    "modules": {
        title: "Modules",
        icon: "fas fa-cubes",
        description: "Les modules JavaScript permettent de découper le code en fichiers séparés et réutilisables. Chaque module a sa propre portée (scope) et peut exporter ou importer des fonctionnalités.",
        topics: [
            {
                title: "Concepts de Base",
                type: "Concept",
                icon: "fas fa-info-circle",
                description: "Comprendre l'isolation et le mode strict des modules.",
                code: `// Dans un module :
// 1. Le code est automatiquement en "use strict"
// 2. Les variables ne polluent pas l'espace global (window)
// 3. "this" est undefined au niveau racine

// module.js
const secret = "Je suis caché"; // Non accessible de l'extérieur

export const public = "Je suis visible";

// Pour utiliser les modules dans le navigateur :
// <script type="module" src="main.js"></script>`,
                output: "",
                runCode: function() {
                    let output = "Simulation de Module:\n\n";
                    output += "Scope Global (Window): " + (typeof window !== 'undefined' ? "Défini" : "Non défini") + "\n";
                    output += "Scope Module: Isolé\n\n";
                    
                    output += "Tentative d'accès à une variable non exportée:\n";
                    output += "ReferenceError: secret is not defined\n\n";
                    
                    output += "Mode Strict: Activé par défaut\n";
                    output += "this === undefined: Vrai";
                    
                    return output;
                }
            },
            {
                title: "Exportations (Named Exports)",
                type: "Syntaxe",
                icon: "fas fa-file-export",
                description: "Exporter plusieurs valeurs nommées depuis un module.",
                code: `// math.js
export const PI = 3.14159;

export function addition(a, b) {
    return a + b;
}

export class Calculatrice {
    constructor() {}
}

// Autre syntaxe
const a = 1;
const b = 2;
export { a, b };

// Renommer lors de l'export
export { a as alpha };`,
                output: "",
                runCode: function() {
                    let output = "Simulation d'Exportations Nommées:\n\n";
                    
                    const moduleExports = {
                        PI: 3.14159,
                        addition: function(a, b) { return a + b; },
                        Calculatrice: class {},
                        alpha: 1
                    };
                    
                    output += "Contenu exporté du module 'math.js':\n";
                    output += JSON.stringify(Object.keys(moduleExports), null, 2) + "\n\n";
                    
                    output += `PI = ${moduleExports.PI}\n`;
                    output += `addition(2, 3) = ${moduleExports.addition(2, 3)}`;
                    
                    return output;
                }
            },
            {
                title: "Export par Défaut",
                type: "Syntaxe",
                icon: "fas fa-star",
                description: "Chaque module peut avoir un seul export par défaut. C'est utile pour exporter une classe ou une fonction principale.",
                code: `// user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}

// On peut aussi mixer exports nommés et par défaut
export const role = "admin";

// Ou exporter une fonction anonyme
// export default function() { ... }

// Ou une valeur
// export default 42;`,
                output: "",
                runCode: function() {
                    let output = "Simulation d'Export par Défaut:\n\n";
                    
                    class User { constructor(name) { this.name = name; } }
                    const defaultExport = User;
                    const namedExport = "admin";
                    
                    output += "Module 'user.js':\n";
                    output += "- Export Default: class User\n";
                    output += `- Export Nommé 'role': "${namedExport}"\n\n`;
                    
                    output += "Lors de l'import, on peut nommer l'export par défaut comme on veut.";
                    
                    return output;
                }
            },
            {
                title: "Importations",
                type: "Syntaxe",
                icon: "fas fa-file-import",
                description: "Importer des fonctionnalités depuis d'autres modules.",
                code: `// Import d'exports nommés
import { PI, addition } from './math.js';

// Import avec renommage
import { addition as add } from './math.js';

// Import de tout le module dans un objet
import * as MathModule from './math.js';
// Utilisation: MathModule.PI, MathModule.addition(1, 2)

// Import par défaut (le nom est libre)
import User from './user.js';

// Import mixte
import User, { role } from './user.js';`,
                output: "",
                runCode: function() {
                    let output = "Simulation d'Importations:\n\n";
                    
                    output += "1. import { PI } from './math.js'\n";
                    output += "   -> PI est maintenant disponible localement.\n\n";
                    
                    output += "2. import * as Math from './math.js'\n";
                    output += "   -> Math est un objet contenant { PI, addition, ... }\n\n";
                    
                    output += "3. import User from './user.js'\n";
                    output += "   -> User correspond à l'export default du fichier.";
                    
                    return output;
                }
            },
            {
                title: "Import Dynamique",
                type: "Avancé",
                icon: "fas fa-bolt",
                description: "Charger des modules à la demande (lazy loading) pour améliorer les performances.",
                code: `// import() retourne une Promesse
const bouton = document.getElementById('loadBtn');

bouton.addEventListener('click', async () => {
    try {
        // Chargement du module uniquement au clic
        const module = await import('./outils.js');
        
        // Utilisation
        module.faireQuelqueChose();
        
    } catch (erreur) {
        console.error("Erreur de chargement", erreur);
    }
});`,
                output: "",
                runCode: function() {
                    let output = "Simulation Import Dynamique:\n\n";
                    
                    output += "État initial: Module non chargé.\n";
                    output += "Action: Clic sur le bouton...\n\n";
                    
                    output += "1. Appel de import('./outils.js')\n";
                    output += "2. Téléchargement du fichier JS...\n";
                    output += "3. Exécution du module...\n";
                    output += "4. Promesse résolue avec l'objet module.\n\n";
                    
                    output += "Résultat: Fonction 'faireQuelqueChose' exécutée.";
                    
                    return output;
                }
            }
        ]
    },

    "hof": {
        title: "HOF (Higher-Order Functions)",
        icon: "fas fa-cogs",
        description: "Une fonction d'ordre supérieur (Higher-Order Function) est une fonction qui accepte une autre fonction comme argument ou qui retourne une fonction.",
        topics: [
            {
                title: "Concepts",
                type: "Concept",
                icon: "fas fa-lightbulb",
                description: "En JavaScript, les fonctions sont des 'citoyens de première classe', ce qui signifie qu'elles peuvent être traitées comme n'importe quelle autre variable.",
                code: `// 1. Assigner une fonction à une variable
const direBonjour = function() {
    return "Bonjour !";
};

// 2. Passer une fonction en argument (Callback)
function executer(fn) {
    return fn();
}
console.log(executer(direBonjour)); // "Bonjour !"

// 3. Retourner une fonction
function createurDeFonction() {
    return function() {
        return "Je suis une fonction retournée";
    };
}
const maNouvelleFonction = createurDeFonction();
console.log(maNouvelleFonction());`,
                output: "",
                runCode: function() {
                    let output = "Concepts HOF:\n\n";
                    
                    const direBonjour = function() { return "Bonjour !"; };
                    output += `Variable contenant une fonction: ${direBonjour}\n\n`;
                    
                    function executer(fn) { return fn(); }
                    output += `Exécution via callback: "${executer(direBonjour)}"\n\n`;
                    
                    function createurDeFonction() {
                        return function() { return "Je suis une fonction retournée"; };
                    }
                    const fn = createurDeFonction();
                    output += `Fonction retournée exécutée: "${fn()}"`;
                    
                    return output;
                }
            },
            {
                title: "Callbacks",
                type: "Pattern",
                icon: "fas fa-exchange-alt",
                description: "Un callback est une fonction passée dans une autre fonction pour être exécutée plus tard.",
                code: `// Exemple : Créer notre propre version de .map()
function monMap(tableau, transformation) {
    let resultat = [];
    for (let i = 0; i < tableau.length; i++) {
        // Appel du callback pour chaque élément
        let nouveauElement = transformation(tableau[i], i);
        resultat.push(nouveauElement);
    }
    return resultat;
}

let nombres = [1, 2, 3];

// Utilisation avec une fonction fléchée comme callback
let doubles = monMap(nombres, function(n) {
    return n * 2;
});

console.log(doubles); // [2, 4, 6]`,
                output: "",
                runCode: function() {
                    let output = "Simulation de Callback (Custom Map):\n\n";
                    
                    function monMap(tableau, transformation) {
                        let resultat = [];
                        for (let i = 0; i < tableau.length; i++) {
                            resultat.push(transformation(tableau[i], i));
                        }
                        return resultat;
                    }
                    
                    let nombres = [1, 2, 3];
                    output += `Entrée: ${JSON.stringify(nombres)}\n`;
                    
                    let doubles = monMap(nombres, n => n * 2);
                    output += `Sortie (x2): ${JSON.stringify(doubles)}\n\n`;
                    
                    let indices = monMap(nombres, (n, i) => `Index ${i}: ${n}`);
                    output += `Sortie (avec index): ${JSON.stringify(indices)}`;
                    
                    return output;
                }
            },
            {
                title: "Fonctions retournant des fonctions",
                type: "Pattern",
                icon: "fas fa-industry",
                description: "Ce pattern permet de créer des fonctions spécialisées (Factory Pattern).",
                code: `// Usine à multiplicateurs
function creerMultiplicateur(facteur) {
    // Retourne une nouvelle fonction qui utilise 'facteur' (Closure)
    return function(nombre) {
        return nombre * facteur;
    };
}

// Création de fonctions spécialisées
const doubler = creerMultiplicateur(2);
const tripler = creerMultiplicateur(3);

console.log(doubler(5)); // 10
console.log(tripler(5)); // 15`,
                output: "",
                runCode: function() {
                    let output = "Factory de fonctions:\n\n";
                    
                    function creerMultiplicateur(facteur) {
                        return function(nombre) {
                            return nombre * facteur;
                        };
                    }
                    
                    const doubler = creerMultiplicateur(2);
                    const tripler = creerMultiplicateur(3);
                    
                    output += "const doubler = creerMultiplicateur(2);\n";
                    output += `doubler(5) = ${doubler(5)}\n`;
                    output += `doubler(10) = ${doubler(10)}\n\n`;
                    
                    output += "const tripler = creerMultiplicateur(3);\n";
                    output += `tripler(5) = ${tripler(5)}`;
                    
                    return output;
                }
            },
            {
                title: "Currying & Composition",
                type: "Avancé",
                icon: "fas fa-layer-group",
                description: "Le Currying transforme une fonction à plusieurs arguments en une suite de fonctions à un seul argument.",
                code: `// Fonction normale
function addition(a, b) {
    return a + b;
}

// Version Curried
function additionCurried(a) {
    return function(b) {
        return a + b;
    };
}

// Avec les flèches (plus concis)
const add = a => b => a + b;

console.log(addition(2, 3));      // 5
console.log(additionCurried(2)(3)); // 5
console.log(add(2)(3));           // 5

// Intérêt : Création de fonctions partielles
const ajouter10 = add(10);
console.log(ajouter10(5)); // 15`,
                output: "",
                runCode: function() {
                    let output = "Currying:\n\n";
                    
                    const add = a => b => a + b;
                    
                    output += "const add = a => b => a + b;\n\n";
                    output += `add(2)(3) = ${add(2)(3)}\n\n`;
                    
                    const ajouter10 = add(10);
                    output += "const ajouter10 = add(10);\n";
                    output += `ajouter10(5) = ${ajouter10(5)}\n`;
                    output += `ajouter10(20) = ${ajouter10(20)}`;
                    
                    return output;
                }
            },
            {
                title: "HOF Natives",
                type: "Récapitulatif",
                icon: "fas fa-list-alt",
                description: "JavaScript possède de nombreuses HOF intégrées, principalement pour les tableaux.",
                code: `const nombres = [1, 2, 3, 4, 5];

// map: Transforme
const carres = nombres.map(n => n * n);

// filter: Filtre
const pairs = nombres.filter(n => n % 2 === 0);

// reduce: Accumule
const somme = nombres.reduce((acc, n) => acc + n, 0);

// find: Cherche
const trouve = nombres.find(n => n > 3);

// sort: Trie (prend une fonction de comparaison)
const trie = [...nombres].sort((a, b) => b - a);`,
                output: "",
                runCode: function() {
                    let output = "HOF Natives:\n\n";
                    const nombres = [1, 2, 3, 4, 5];
                    
                    output += `Source: ${JSON.stringify(nombres)}\n\n`;
                    output += `map(n => n*n): ${JSON.stringify(nombres.map(n => n * n))}\n`;
                    output += `filter(n => n%2===0): ${JSON.stringify(nombres.filter(n => n % 2 === 0))}\n`;
                    output += `reduce((acc,n)=>acc+n): ${nombres.reduce((acc, n) => acc + n, 0)}\n`;
                    
                    return output;
                }
            }
        ]
    }
};

// Fonction pour créer un élément DOM avec attributs et contenu
function createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    
    // Ajouter les attributs
    for (const [key, value] of Object.entries(attributes)) {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'innerHTML') {
            element.innerHTML = value;
        } else if (typeof value === 'function') {
            element[key] = value;
        } else {
            element.setAttribute(key, value);
        }
    }
    
    // Ajouter le contenu textuel si nécessaire
    if (content && !attributes.innerHTML) {
        element.textContent = content;
    }
    
    return element;
}

// Fonction pour mettre en forme le code avec coloration syntaxique
function formatCode(code) {
    // Échapper les caractères HTML pour éviter les problèmes d'affichage
    code = code.replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;");

    // Définition des tokens pour la coloration syntaxique
    // L'ordre est important : chaînes -> commentaires -> mots-clés -> nombres -> fonctions
    return code.replace(
        /((['"`])(?:(?!\2)[^\\]|\\.)*\2)|(\/\/.*$|\/\*[\s\S]*?\*\/)|(\b(?:function|return|if|else|for|while|do|switch|case|break|continue|let|const|var|typeof|new|this|class|extends|import|export|async|await|try|catch|finally|throw|void|delete|in|instanceof)\b)|(\b\d+\.?\d*\b)|(\b\w+(?=\s*\())/gm,
        function(match, string, quote, comment, keyword, number, functionName) {
            if (string) {
                return `<span class="code-string">${string}</span>`;
            } else if (comment) {
                return `<span class="code-comment">${comment}</span>`;
            } else if (keyword) {
                return `<span class="code-keyword">${keyword}</span>`;
            } else if (number) {
                return `<span class="code-number">${number}</span>`;
            } else if (functionName) {
                return `<span class="code-function">${functionName}</span>`;
            }
            return match;
        }
    );
}

// Fonction pour afficher une section de documentation
function showSection(sectionId) {
    const contentSection = document.getElementById(sectionId);
    const placeholder = document.querySelector('.section-placeholder');
    
    // Cacher le placeholder et toutes les sections
    placeholder.style.display = 'none';
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Si la section n'existe pas encore, la créer
    if (!contentSection) {
        const newSection = createElement('section', {
            id: sectionId,
            className: 'content-section active'
        });
        
        document.querySelector('.content').appendChild(newSection);
        renderSection(sectionId, newSection);
    } else {
        contentSection.classList.add('active');
        contentSection.style.display = 'block';
    }
    
    // Mettre à jour le menu de navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === sectionId) {
            item.classList.add('active');
        }
    });
}

// Fonction pour rendre une section
// Fonction pour exécuter le code et capturer les logs
function executeCode(code) {
    let logs = [];
    const originalLog = console.log;
    
    try {
        // Surcharger console.log pour capturer la sortie
        console.log = (...args) => {
            logs.push(args.map(arg => {
                if (typeof arg === 'object') {
                    try {
                        return JSON.stringify(arg, null, 2);
                    } catch (e) {
                        return String(arg);
                    }
                }
                return String(arg);
            }).join(' '));
            
            // Continuer à afficher dans la vraie console
            originalLog.apply(console, args);
        };
        
        // Exécuter le code dans une nouvelle fonction
        // Cela crée une portée locale pour éviter les conflits de variables globales
        new Function(code)();
        
    } catch (error) {
        logs.push("Erreur d'exécution : " + error.message);
        console.error(error);
    } finally {
        // Restaurer console.log
        console.log = originalLog;
    }
    
    return logs.join('\n');
}

function renderSection(sectionId, container) {
    const sectionData = documentation[sectionId];
    
    if (!sectionData) return;
    
    // Créer l'en-tête de section
    const header = createElement('div', { className: 'section-header' });
    const title = createElement('h2', {}, sectionData.title);
    const icon = createElement('i', { className: sectionData.icon });
    const description = createElement('p', { className: 'section-description' }, sectionData.description);
    
    title.prepend(icon);
    header.appendChild(title);
    header.appendChild(description);
    container.appendChild(header);
    
    // Créer les cartes de sujets
    sectionData.topics.forEach(topic => {
        const card = createElement('div', { className: 'topic-card' });
        
        // En-tête de la carte
        const topicHeader = createElement('div', { className: 'topic-header' });
        const topicTitle = createElement('h3', { className: 'topic-title' }, topic.title);
        const topicIcon = createElement('i', { className: topic.icon });
        const topicType = createElement('span', { className: 'topic-type' }, topic.type);
        
        topicTitle.prepend(topicIcon);
        topicHeader.appendChild(topicTitle);
        topicHeader.appendChild(topicType);
        card.appendChild(topicHeader);
        
        // Description
        const topicDescription = createElement('p', { className: 'topic-description' }, topic.description);
        card.appendChild(topicDescription);
        
        // Conteneur de code
        const codeContainer = createElement('div', { className: 'example-container' });
        const codeBlock = createElement('pre', { className: 'code-block' });
        codeBlock.innerHTML = formatCode(topic.code);
        codeContainer.appendChild(codeBlock);
        card.appendChild(codeContainer);
        
        // Bouton d'exécution
        const runButton = createElement('button', {
            className: 'run-button',
            onclick: () => {
                const simulatedSections = ['dom', 'events', 'modules', 'promises', 'async', 'webapi'];
                let output;
                
                // Si c'est une section simulée, on utilise la fonction runCode définie
                if (simulatedSections.includes(sectionId)) {
                    output = topic.runCode();
                    console.log(output); // Afficher aussi dans la console
                } else {
                    // Sinon on essaie d'exécuter le code réel
                    output = executeCode(topic.code);
                    
                    // Si pas de logs (et que runCode existe), on peut ajouter une note ou fallback
                    if (!output) {
                        output = "Le code s'est exécuté correctement mais n'a rien affiché dans la console.\n\n";
                        // Optionnel : afficher aussi la simulation si disponible
                        // output += topic.runCode(); 
                    }
                }

                const existingOutput = card.querySelector('.output-container');
                
                if (existingOutput) {
                    existingOutput.remove();
                }
                
                const outputContainer = createElement('div', { className: 'output-container' });
                const outputTitle = createElement('div', { className: 'output-title' });
                const outputIcon = createElement('i', { className: 'fas fa-terminal' });
                outputTitle.appendChild(outputIcon);
                outputTitle.appendChild(document.createTextNode(' Résultat d\'exécution' + (simulatedSections.includes(sectionId) ? ' (Simulé)' : '')));
                
                const outputContent = createElement('div', { className: 'output-content' });
                outputContent.textContent = output;
                
                outputContainer.appendChild(outputTitle);
                outputContainer.appendChild(outputContent);
                card.appendChild(outputContainer);
            }
        });
        
        const runIcon = createElement('i', { className: 'fas fa-play' });
        runButton.appendChild(runIcon);
        runButton.appendChild(document.createTextNode(' Exécuter le code'));
        card.appendChild(runButton);
        
        container.appendChild(card);
    });
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
    // Gestionnaire d'événements pour la navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.dataset.section;
            showSection(sectionId);
        });
    });
    
    // Gestionnaire d'événements pour le bouton de thème
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
        // Sauvegarder la préférence
        localStorage.setItem('darkMode', this.checked);
    });
    
    // Charger la préférence de thème
    const darkModePreference = localStorage.getItem('darkMode') === 'true';
    themeToggle.checked = darkModePreference;
    document.body.classList.toggle('dark-mode', darkModePreference);
    
    // Afficher la première section par défaut
    showSection('variables');
});

// Ajout de styles supplémentaires pour les sections
const style = document.createElement('style');
style.textContent = `
    .section-header {
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid var(--border-color);
    }
    
    .section-header h2 {
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .section-header h2 i {
        font-size: 1.8rem;
    }
    
    .section-description {
        font-size: 1.1rem;
        color: var(--light-text);
        line-height: 1.7;
    }
    
    .section-placeholder {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }
    
    .placeholder-content {
        text-align: center;
        max-width: 600px;
        padding: 40px;
        background-color: var(--card-bg);
        border-radius: 10px;
        box-shadow: var(--shadow);
    }
    
    .placeholder-content i {
        font-size: 4rem;
        color: var(--primary-color);
        margin-bottom: 20px;
    }
    
    .placeholder-content h3 {
        font-size: 1.8rem;
        margin-bottom: 15px;
        color: var(--primary-color);
    }
    
    .placeholder-content p {
        color: var(--light-text);
        line-height: 1.7;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .content-section.active {
        animation: fadeIn 0.5s ease;
    }
    
    /* Amélioration de la coloration syntaxique */
    .code-block {
        font-family: 'Roboto Mono', monospace;
        font-size: 0.95rem;
        line-height: 1.5;
        white-space: pre-wrap;
        word-break: break-word;
    }
    
    .code-comment {
        color: #6a9955;
        font-style: italic;
    }
    
    .code-keyword {
        color: #569cd6;
        font-weight: bold;
    }
    
    .code-string {
        color: #ce9178;
    }
    
    .code-number {
        color: #b5cea8;
    }
    
    .code-function {
        color: #dcdcaa;
    }
    
    .dark-mode .code-comment {
        color: #6a9955;
    }
    
    .dark-mode .code-keyword {
        color: #569cd6;
    }
    
    .dark-mode .code-string {
        color: #ce9178;
    }
    
    .dark-mode .code-number {
        color: #b5cea8;
    }
    
    .dark-mode .code-function {
        color: #dcdcaa;
    }
`;

document.head.appendChild(style);