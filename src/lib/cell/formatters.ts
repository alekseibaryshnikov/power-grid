type DefaultLocales = "en-US" | "en-GB" | "de-DE" | "fr-FR" | "es-ES";

function defaultNumberFormatter(value: unknown, locale: DefaultLocales) {
  return new Intl.NumberFormat(locale).format(value as number);
}

function defaultDateFormatter(value: unknown, locale: DefaultLocales) {
  return new Intl.DateTimeFormat(locale).format(value as Date);
}

function defaultBooleanFormatter(value: unknown) {
  return value ? "Yes" : "No";
}

function defaultStringFormatter(value: unknown) {
  return `${value}`;
}

function defaultObjectFormatter(value: unknown) {
  return JSON.stringify(value);
}

function defaultFormatter(value: unknown, type: Grid.DataType) {
  switch (type) {
    case "Integer":
    case "Float":
    case "Decimal":
      return defaultNumberFormatter(value, "en-US");
    case "Date":
      return defaultDateFormatter(value, "en-US");
    case "Boolean":
      return defaultBooleanFormatter(value);
    case "Object":
      return defaultObjectFormatter(value);
    default:
      return defaultStringFormatter(value);
  }
}

export { defaultFormatter };
