document.getElementById("boton-reserva").addEventListener("click", function() {
    window.location.href = "#reserva";
});

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Agrega el evento click al botón
    document.getElementById("boton").addEventListener("click", enviarFormulario);
});

function enviarFormulario() {
    // Captura los valores de los campos de entrada
    const nombreInput = document.getElementById('nombre').value;
    const documentoInput = document.getElementById('documento').value;
    const selectElement = document.getElementById('marca');
    const marcaInput = selectElement.selectedOptions[0].text;
    const modeloInput = document.getElementById('modelo').value;
    const añoInput = document.getElementById('año').value;
    const fallaInput = document.getElementById('falla').value;
    
    // Valida que los campos obligatorios estén completos
    if (nombreInput.trim() === '' || marcaInput.trim() === '' || modeloInput.trim() === '' || fallaInput.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Genera el mensaje con los detalles del servicio
    const mensaje = `Hola, soy ${nombreInput}.  Mi razón social o carnet es: ${documentoInput} tengo una falla de mi vehículo ${marcaInput}, ${modeloInput}, año ${añoInput}. La falla es: ${fallaInput} `;

    // Codifica el mensaje para incluirlo en la URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Abre WhatsApp con el mensaje prellenado
    window.open(`https://api.whatsapp.com/send?phone=59160854979&text=${mensajeCodificado}`);
}
const models = {
    1: ["500", "Grande Punto", "Punto Evo", "500c", "695", "Punto"],
    2: ["155", "156", "159", "164", "145", "147", "146", "Gtv", "Spider", "166", "Gt", "Crosswagon", "Brera", "90", "75", "33", "Giulietta", "Sprint", "Mito"],
    3: ["Expander", "10", "24", "Dacia"],
    4: ["Rocsta"],
    5: ["Rocsta"],
    6: ["Db7", "V8", "Db9", "Vanquish", "V8 Vantage", "Vantage", "Dbs", "Volante", "Virage", "Vantage V8", "Vantage V12", "Rapide", "Cygnet"],
    7: ["80", "A4", "A6", "S6", "Coupe", "S2", "Rs2", "A8", "Cabriolet", "S8", "A3", "S4", "Tt", "S3", "Allroad Quattro", "Rs4", "A2", "Rs6", "Q7", "R8", "A5", "S5", "V8", "200", "100", "90", "Tts", "Q5", "A4 Allroad Quattro", "Tt Rs", "Rs5", "A1", "A7", "Rs3", "Q3", "A6 Allroad Quattro", "S7", "Sq5"],
    8: ["Mini", "Montego", "Maestro", "Metro", "Mini Moke"],
    9: ["Diesel"],
    10: ["Brooklands", "Turbo", "Continental", "Azure", "Arnage", "Continental Gt", "Continental Flying Spur", "Turbo R", "Mulsanne", "Eight", "Continental Gtc", "Continental Supersports"],
    11: ["Freeclimber Diesel"],
    12: ["Serie 3", "Serie 5", "Compact", "Serie 7", "Serie 8", "Z3", "Z4", "Z8", "X5", "Serie 6", "X3", "Serie 1", "Z1", "X6", "X1"],
    13: ["Seville", "Sts", "El Dorado", "Cts", "Xlr", "Srx", "Escalade", "Bls"],
    14: ["Corvette", "Blazer", "Astro", "Nubira", "Evanda", "Trans Sport", "Camaro", "Matiz", "Alero", "Tahoe", "Tacuma", "Trailblazer", "Kalos", "Aveo", "Lacetti", "Epica", "Captiva", "Hhr", "Cruze", "Spark", "Orlando", "Volt", "Malibu"],
    15: ["Vision", "300m", "Grand Voyager", "Viper", "Neon", "Voyager", "Stratus", "Sebring", "Sebring 200c", "New Yorker", "Pt Cruiser", "Crossfire", "300c", "Le Baron", "Saratoga"],
    16: ["Xantia", "Xm", "Ax", "Zx", "Evasion", "C8", "Saxo", "C2", "Xsara", "C4", "Xsara Picasso", "C5", "C3", "C3 Pluriel", "C1", "C6", "Grand C4 Picasso", "C4 Picasso", "Ccrosser", "C15", "Jumper", "Jumpy", "Berlingo", "Bx", "C25", "Cx", "Gsa", "Visa", "Lna", "2cv", "Nemo", "C4 Sedan", "Berlingo First", "C3 Picasso", "Ds3", "Czero", "Ds4", "Ds5", "C4 Aircross", "Celysee"],
    17: ["Corvette"],
    18: ["Contac", "Logan", "Sandero", "Duster", "Lodgy"],
    19: ["Nexia", "Aranos", "Lanos", "Nubira", "Compact", "Nubira Compact", "Leganza", "Evanda", "Matiz", "Tacuma", "Kalos", "Lacetti"],
    21: ["Applause", "Charade", "Rocky", "Feroza", "Terios", "Sirion"],
    22: ["Serie Xj", "Xj", "Double Six", "Six", "Series Iii"],
    23: ["Viper", "Caliber", "Nitro", "Avenger", "Journey"],
    24: ["F355", "360", "F430", "F512 M", "550 Maranello", "575m Maranello", "599", "456", "456m", "612", "F50", "Enzo", "Superamerica", "430", "348", "Testarossa", "512", "355", "F40", "412", "Mondial", "328", "California", "458", "Ff"],
    25: ["Croma", "Cinquecento", "Seicento", "Punto", "Grande Punto", "Panda", "Tipo", "Coupe", "Uno", "Ulysse", "Tempra", "Marea", "Barchetta", "Bravo", "Stilo", "Brava", "Palio Weekend", "600", "Multipla", "Idea", "Sedici", "Linea", "500", "Fiorino", "Ducato", "Doblo Cargo", "Doblo", "Strada", "Regata", "Talento", "Argenta", "Ritmo", "Punto Classic", "Qubo", "Punto Evo", "500c", "Freemont", "Panda Classic", "500l"],
    26: ["Mondeo", "Focus", "Ka", "Fiesta", "Escort", "Orion", "Sierra", "Scorpio", "Fusion", "Street Ka", "C-max", "Kuga", "S-max", "Galaxy", "Ranger", "Tourneo", "Transit", "Maverick", "Cougar", "Windstar", "Explorer", "Cortina", "Taunus", "Capri", "Granada", "Focus Cmax", "F-150", "F-250", "Transit Connect"],
    27: ["Exceed", "Galloper", "Innovation"],
    28: ["Sonoma", "Envoy"],
    29: ["Civic", "Accord", "Prelude", "Legend", "Concerto", "Cr-v", "Crx", "S2000", "Insight", "Hr-v", "Stream", "Jazz", "Frv", "Element", "Integra", "Nsx"],
    30: ["H1", "H2", "H3"],
    31: ["Accent", "Lantra", "S-coupe", "Sonata", "Coupe", "Atos", "Getz", "Santa Fe", "Terracan", "Matrix", "Elantra", "H-1", "H-100", "Xg", "Tucson", "I30", "I10", "I20", "Ix35", "Ix55", "Veloster", "Genesis"],
    32: ["Fx", "Ex", "G", "M", "Qx"],
    33: ["Mille", "Small", "Elba", "Duna", "500", "Mini"],
    34: ["Trooper", "Pick Up", "Faster"],
    35: ["Daily", "Massif"],
    36: ["35-10", "Trakker"],
    37: ["S-type", "Xj", "Xjr", "Xk", "X-type", "Xf", "Xkr", "Daimler"],
    38: ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Commander", "Patriot"],
    39: ["Sephia", "Claruis", "Pride", "Rio", "Shuma", "Sportage", "Carnival", "Opirus", "Sorento", "Cerato", "Picanto", "Carens", "Ceed", "Pro Ceed", "Magentis", "Soul", "Venga"],
    40: ["Samara", "Niva", "110", "112", "111", "1200", "1300"],
    41: ["Murcielago", "Gallardo"],
    42: ["Dedra", "Delta", "Kappa", "Y", "Lybra", "Thema", "Ypsilon", "Thesis", "Phedra", "Musa", "Voyager"],
    43: ["Defender", "Discovery", "Freelander", "Range Rover", "Range Rover Sport"],
    44: ["Cub"],
    45: ["Ls", "Gs", "Is", "Rx", "Sc", "Lx", "Ct", "Lfa"],
    46: ["Elise", "Esprit", "Exige", "Evora"],
    47: ["Mahindra"],
    48: ["3200gt", "Quattroporte", "Spyder", "Gran Sport", "Grancabrio", "Gran Turismo"],
    49: ["57", "62"],
    50: ["323", "Demio", "3", "5", "6", "121", "Premacy", "Xedos 6", "Xedos 9", "Rx-7", "Rx-8", "Mx-5", "Cabrio", "Mx-3", "Mx-6", "929", "323f", "323 Astina", "121 Jeboo", "626", "B 2500", "Bt-50", "Cx-7", "Tribute"],
    51: ["Clase E", "Clase S", "Clase A", "Clase B", "Viano", "Clase Cl", "Clase C", "Clase Clk", "Clase Slk", "Clase M", "Clase G", "Clase Cls", "Sprinter", "Vaneo", "Clase Gls", "Clase Gl", "Clase R", "Clase Sl", "Clase Slr Mclaren", "Clase V", "Clase Clc", "Clase Slk", "Clase Sls", "Clase Glk", "Vito"],
    52: ["F", "Tf", "Zr", "Zs", "Zt"],
    53: ["One", "Cooper", "Clubman", "Countryman", "Cabrio", "Coupe", "Roadster", "Paceman"],
    54: ["Carisma", "Lancer", "Galant", "Pajero", "Colt", "Spacestar", "Outlander", "Grandis", "Pajero Pinin", "Space Runner", "Space Wagon", "3000 Gt", "3000gt", "Canter", "Fuso", "Eclipse", "Sigma", "Space Gear", "Space Star", "Fuso Cante", "Space Gear", "Space Gear", "I-miev", "Asx"],
    55: ["4/4", "Plus 4", "Plus 8", "Plus 4 4", "Aero 8"],
    56: ["Patrol", "Primera", "Micra", "100 Nx", "Almera", "Patrol Gr", "Terrano Ii", "Vanette Cargo", "Serena", "200 Sx", "Sunny", "Maxima", "300 Zx", "Almera Tino", "350 Z", "Murano", "Pathfinder", "X-trail", "Qashqai", "Note", "Pixo", "Cube", "Juke", "Evalia", "Nv200"],
    57: ["Corsa", "Kadett", "Astra", "Vectra", "Frontera", "Omega", "Monterey", "Corsa C", "Astra F", "Tigra", "Combo", "Zafira", "Meriva", "Sintra", "Vivaro", "Insignia", "Antara", "Astra Coupe", "Astra Gtc", "Ampera", "Cascada", "Adam"],
    58: ["205", "405", "605", "309", "306", "806", "405 Break", "106", "406", "605 Limusina", "406 Coupe", "Boxer", "Partner", "Bipper", "Rcz", "207"],
    59: ["Firebird", "Trans Sport", "Solstice"],
    60: ["911", "928", "944", "968", "Boxster", "Cayenne", "Carrera Gt", "Cayman", "Panamera"],
    61: ["Super 5", "Clio", "19", "Twingo", "21", "25", "Fuego", "Trafic", "Express", "Espace", "Safrane", "Megane", "Laguna", "Scenic", "Master", "Kangoo", "Avantime", "Vel Satis", "Modus", "Wind", "Latitude", "Koleos", "Fluence", "Twizy", "Captur", "Zoe", "Kadjar"],
    62: ["Silver Spirit", "Corniche", "Park Ward", "Silver Seraph", "Park Ward Limusina", "Phantom", "Drophead", "Wraith"],
    63: ["114", "214", "414", "75", "216", "416", "416 Tourer", "620", "618", "820", "623", "825", "220", "200", "Rover 25", "Rover 45", "Streetwise"],
    64: ["90", "900", "9000", "93", "95", "96", "99", "Sonett", "9-2x", "9-3", "9-4x", "9-5", "9-7x"],
    65: ["Ps10", "Series"],
    66: ["Ibiza", "Cordoba", "Toledo", "Leon", "Arosa", "Altea", "Exeo", "Alhambra", "Marbella", "Inca", "Fura", "600", "1400", "133", "Ronda", "Terra", "600e", "Mii"],
    67: ["Felicia", "Octavia", "Fabia", "Superb", "Roomster", "Yeti", "Rapid", "Citigo"],
    68: ["City Coupe", "Forfour", "Fortwo"],
    69: ["Korando", "Musso", "Rexton", "Rodius", "Kyron", "Actyon"],
    70: ["Legacy", "Outback", "Impreza", "Forester", "Justy", "Brz", "Levorg"],
    71: ["Samurai", "Vitara", "Swift", "Alto", "Wagon R", "Baleno", "Jimny", "Ignis", "Liana", "Splash", "Sx4", "Kizashi", "Celerio"],
    72: ["Avensis", "Carina", "Celica", "Corolla", "Rav4", "Yaris", "Aygo", "Starlet", "Land Cruiser", "Hiace", "Hilux", "Previa", "Camry", "Mr2", "Picnic", "Liteace", "Avensis Verso", "Corolla Verso", "Urban Cruiser", "Iq", "Verso", "Prius", "Land Cruiser V8"],
    73: ["Tiguan", "Polo", "Golf", "Passat", "Jetta", "Santana", "Scirocco", "Beetle", "Touran", "Touareg", "Multivan", "Eos", "Phaeton", "Sharan", "Corrado", "California", "New Beetle", "Caravelle", "Caddy", "Transporter", "Lt"],
    74: ["S60", "C30", "S40", "S80", "240", "244", "343", "440", "740", "850", "940", "960", "Amazon", "C70", "V40", "V50", "V60", "V70", "V90", "Xc90", "Xc60", "Xc70"],
    75: ["Avenger", "Consul", "Minx", "Rapier", "Viva", "Chevette", "Victor", "Ascona", "Kadett"],
    76: ["1007", "4007", "407", "607", "3008", "5008", "807", "206", "207", "306", "307", "406", "508", "Boxer", "Bipper"],
    77: ["Frv"],
    78: ["Jumbuck"],
    79: ["Berlingo", "C1", "C2", "C3", "C4", "C5", "C6", "C8", "Xsara", "Xsara Picasso", "Saxo", "Xantia", "Evasion", "Jumpy", "Synergie", "C-crosser", "C-zero"],
    80: ["17", "18", "19", "20", "21", "25", "30", "Kangoo", "Koleos", "Laguna", "Master", "Megane", "Safrane", "Scenic", "Trafic", "Twingo", "Zoe"],
    81: ["Accord", "Civic", "Cr-v", "Crx", "Element", "Fr-v", "Hr-v", "Insight", "Integra", "Jazz", "Legend", "Nsx", "Prelude", "S2000", "Stream"],
    82: ["300zx", "350z", "370z", "Almera", "Almera Tino", "Altima", "Bluebird", "Cedric", "Cube", "Evalia", "Fuga", "Interstar", "Juke", "Leaf", "Maxima", "Micra", "Murano", "Navara", "Note", "Nv200", "Pathfinder", "Patrol", "Patrol Gr", "Pick Up", "Pixo", "Prairie", "Primastar", "Primera", "Pulsar", "Qashqai", "Quest", "Serena", "Sunny", "Terrano Ii", "Tiida", "Vanette", "X-trail"],
    83: ["Alfa 145", "Alfa 146", "Alfa 147", "Alfa 155", "Alfa 156", "Alfa 159", "Alfa 164", "Alfa 166", "Alfa 33", "Alfa 75", "Alfa 90", "Alfa 145", "Alfa 146", "Alfa 147", "Alfa 155", "Alfa 156", "Alfa 159", "Alfa 164", "Alfa 166", "Alfa 33", "Alfa 75", "Alfa 90", "Alfasud", "Arna", "Brera", "Giulietta", "Gtv", "MiTo", "Rz", "Sp"],
};

document.getElementById('marca').addEventListener('change', function() {
    const marcaId = this.value;
    const modeloSelect = document.getElementById('modelo');
    modeloSelect.innerHTML = '<option value="">Seleccione un modelo</option>';
    if (marcaId) {
        const opciones = models[marcaId].map(modelo => `<option value="${modelo.toLowerCase()}">${modelo}</option>`).join('');
        modeloSelect.innerHTML += opciones;
    }
});