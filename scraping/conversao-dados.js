exports.horario = (hr) => {
  if (hr.includes("pm")) {
    hr = hr.replace("pm", "");
    let splitString = hr.split(":");
    if (splitString[0] !== "12") {
      splitString[0] = parseInt(splitString[0]) + 12;
      hr = `${splitString[0]}:${splitString[1]}`;
    }
  }
  if (hr.includes("am")) {
    hr = hr.replace("am", "");
    let splitString = hr.split(":");
    if (splitString[0] === "12") {
      splitString[0] = parseInt(splitString[0]) - 12;
      hr = `${splitString[0]}:${splitString[1]}`;
    }
    hr = "0" + hr;
  }

  return hr;
};

exports.linguagem = (lgm) => {
  if (lgm) {
    let splitString = lgm.split(" ", 1);
    if (splitString[0] === "Dubbed") {
      splitString[0] = "Dublado";
    }
    if (splitString[0] === "Subtitled") {
      splitString[0] = "Legendado";
    }
    return (lgm = splitString[0]);
  } else {
    return "Legendado";
  }
};

exports.data = (dt, i) => {
  if (dt == "Hoje") {
    const hoje = new Date();

    return formatarData(hoje);
  } else {
    const hoje = new Date();
    const diaSeguinte = new Date(hoje);
    diaSeguinte.setDate(hoje.getDate() + i);

    return formatarData(diaSeguinte);
  }
  function formatarData(data) {
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();

    if (mes < 10) {
      mes = "0" + mes;
    }
    if (dia < 10) {
      dia = "0" + dia;
    }

    return `${dia}/${mes}`;
  }
};

exports.tecnologia = (tc) => {
  if (tc === "Standard") {
    tc = "2D";
  }

  return tc;
};

exports.pais = (iso_3166_1) => {
  const dicionarioDePaises = {
    AD: "Andorra",
    AE: "Emirados Árabes Unidos",
    AF: "Afeganistão",
    AG: "Antígua e Barbuda",
    AI: "Anguilla",
    AL: "Albânia",
    AM: "Armênia",
    AO: "Angola",
    AQ: "Antártica",
    AR: "Argentina",
    AS: "Samoa Americana",
    AT: "Áustria",
    AU: "Austrália",
    AW: "Aruba",
    AX: "Ilhas Åland",
    AZ: "Azerbaijão",
    BA: "Bósnia e Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Bélgica",
    BF: "Burkina Faso",
    BG: "Bulgária",
    BH: "Bahrein",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthélemy",
    BM: "Bermudas",
    BN: "Brunei Darussalam",
    BO: "Bolívia",
    BQ: "Bonaire",
    BR: "Brasil",
    BS: "Bahamas",
    BT: "Butão",
    BV: "Ilha Bouvet",
    BW: "Botsuana",
    BY: "Bielorrússia",
    BZ: "Belize",
    CA: "Canadá",
    CC: "Ilhas Cocos (Keeling)",
    CD: "República Democrática do Congo",
    CF: "República Centro-Africana",
    CG: "República do Congo",
    CH: "Suíça",
    CI: "Costa do Marfim",
    CK: "Ilhas Cook",
    CL: "Chile",
    CM: "Camarões",
    CN: "China",
    CO: "Colômbia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cabo Verde",
    CW: "Curaçao",
    CX: "Ilha Christmas",
    CY: "Chipre",
    CZ: "República Tcheca",
    DE: "Alemanha",
    DJ: "Djibouti",
    DK: "Dinamarca",
    DM: "Dominica",
    DO: "República Dominicana",
    DZ: "Argélia",
    EC: "Equador",
    EE: "Estônia",
    EG: "Egito",
    EH: "Saara Ocidental",
    ER: "Eritreia",
    ES: "Espanha",
    ET: "Etiópia",
    FI: "Finlândia",
    FJ: "Fiji",
    FK: "Ilhas Malvinas",
    FM: "Micronésia",
    FO: "Ilhas Faroé",
    FR: "França",
    GA: "Gabão",
    GB: "Reino Unido",
    "GB-ENG": "Inglaterra",
    "GB-WLS": "Gales",
    GD: "Granada",
    GE: "Geórgia",
    GF: "Guiana Francesa",
    GG: "Guernsey",
    GH: "Gana",
    GI: "Gibraltar",
    GL: "Groenlândia",
    GM: "Gâmbia",
    GN: "Guiné",
    GP: "Guadalupe",
    GQ: "Guiné Equatorial",
    GR: "Grécia",
    GS: "Geórgia do Sul e Ilhas Sandwich do Sul",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guiné-Bissau",
    GY: "Guiana",
    HK: "Hong Kong",
    HM: "Ilha Heard e Ilhas McDonald",
    HN: "Honduras",
    HR: "Croácia",
    HT: "Haiti",
    HU: "Hungria",
    ID: "Indonésia",
    IE: "Irlanda",
    IL: "Israel",
    IM: "Ilha de Man",
    IN: "Índia",
    IO: "Território Britânico do Oceano Índico",
    QI: "Iraque",
    IR: "Irã",
    IS: "Islândia",
    TI: "Itália",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordão",
    JP: "Japão",
    KE: "Quênia",
    KG: "Quirguistão",
    KH: "Camboja",
    KI: "Kiribati",
    KM: "Comores",
    KN: "São Cristóvão e Nevis",
    KP: "Coreia do Norte",
    KR: "Coreia do Sul",
    KW: "Kuwait",
    KY: "Ilhas Cayman",
    KZ: "Cazaquistão",
    LA: "República Democrática Popular do Laos",
    LB: "Líbano",
    LC: "Santa Lúcia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Libéria",
    LS: "Lesoto",
    LT: "Lituânia",
    LU: "Luxemburgo",
    LV: "Letônia",
    LY: "Líbia",
    MA: "Marrocos",
    MC: "Mônaco",
    MD: "Moldávia",
    ME: "Montenegro",
    MF: "Saint Martin (Parte Francesa)",
    MG: "Madagascar",
    MH: "Ilhas Marshall",
    MK: "Macedônia do Norte",
    ML: "Mali",
    MM: "Mianmar",
    MN: "Mongólia",
    MO: "Macau",
    MP: "Ilhas Marianas do Norte",
    MQ: "Martinica",
    MR: "Mauritânia",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Maurício",
    MV: "Maldivas",
    MW: "Malauí",
    MX: "México",
    MY: "Malásia",
    MZ: "Moçambique",
    NA: "Namíbia",
    NC: "Nova Caledônia",
    NE: "Níger",
    NF: "Ilha Norfolk",
    NG: "Nigéria",
    NI: "Nicarágua",
    NL: "Holanda",
    NO: "Noruega",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Nova Zelândia",
    OM: "Omã",
    PA: "Panamá",
    PE: "Peru",
    PF: "Polinésia Francesa",
    PG: "Papua Nova Guiné",
    PH: "Filipinas",
    PK: "Paquistão",
    PL: "Polônia",
    PM: "São Pedro e Miquelon",
    PN: "Pitcairn",
    PR: "Porto Rico",
    PS: "Palestina",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguai",
    QA: "Catar",
    RE: "Reunião",
    RO: "Romênia",
    RS: "Sérvia",
    RU: "Rússia",
    RW: "Ruanda",
    SA: "Arábia Saudita",
    SB: "Ilhas Salomão",
    SC: "Seychelles",
    SD: "Sudão",
    SE: "Suécia",
    SG: "Cingapura",
    SH: "Santa Helena, Ascensão e Tristão da Cunha",
    SI: "Eslovênia",
    SJ: "Svalbard e Jan Mayen",
    SK: "Eslováquia",
    SL: "Serra Leoa",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somália",
    SR: "Suriname",
    SS: "Sudão do Sul",
    ST: "São Tomé e Príncipe",
    SV: "El Salvador",
    SX: "Sint Maarten (Parte Holandesa)",
    SY: "República Árabe Síria",
    SZ: "Eswatini",
    TC: "Ilhas Turks e Caicos",
    TD: "Chade",
    TF: "Territórios Franceses do Sul",
    TG: "Togo",
    TH: "Tailândia",
    TJ: "Tadjiquistão",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TM: "Turcomenistão",
    TN: "Tunísia",
    TO: "Tonga",
    TR: "Turquia",
    TT: "Trinidad e Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "República Unida da Tanzânia",
    UA: "Ucrânia",
    UG: "Uganda",
    UM: "Ilhas Menores Distantes dos Estados Unidos",
    US: "Estados Unidos",
    UY: "Uruguai",
    UZ: "Uzbequistão",
    VA: "Santa Sé",
    VC: "São Vicente e Granadinas",
    VE: "Venezuela, República Bolivariana de",
    VG: "Ilhas Virgens Britânicas",
    VI: "Ilhas Virgens, EUA",
    VN: "Viet Nam",
    VU: "Vanuatu",
    WF: "Wallis e Futuna",
    WS: "Samoa",
    YE: "Iêmen",
    YT: "Mayotte",
    ZA: "África do Sul",
    ZM: "Zâmbia",
    ZW: "Zimbabwe",
  };

  return dicionarioDePaises[iso_3166_1] || iso_3166_1;
};
