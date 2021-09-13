const { choices, decisions } = require("../tokens");
const fs = require("fs");

const toKebabCase = (string) => {
  return string
    .replace(/([A-Z])([A-Z])/g, "$1-$2")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

const cleanLines = (string = "") => string.trim().replace(/^\n\n/gm, "\n");

function transformTokens(parentKey, object) {
  // Obtengo las keys del objeto
  const objectKeys = Object.keys(object);

  return objectKeys.reduce((transformedTokens, objectKey) => {
    // Obtengo el valor de la key actual
    const value = object[objectKey];
    // Creo el string css con el valor del key actual
    const customProperty = parentKey
      ? toKebabCase(`${parentKey}-${objectKey}`)
      : toKebabCase(`${objectKey}`);

    if (Array.isArray(value)) {
      return `${transformedTokens}\n --${customProperty}: ${value.join(", ")};`;
    } else if (typeof value === "object") {
      return `${transformedTokens}\n${transformTokens(customProperty, value)}`;
    }

    const label = `--${parentKey}-${toKebabCase(objectKey)}`;
    return `${transformedTokens}\n ${label}: ${value};`;
  }, "");
}

function buildTokens() {
  const transformedChoices = transformTokens(null, choices);
  const transformedDecisions = transformTokens(null, decisions);
  const customProperties = `${transformedChoices}${transformedDecisions}`;

  const data = `:root {\n ${cleanLines(customProperties)}\n}\n`;

  fs.writeFile("./src/styles/tokens.css", data, "utf8", (error) => {
    if (error) throw error
    console.log("Custom properties created!");
  });
}

buildTokens();
