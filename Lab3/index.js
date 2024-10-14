import parseJson from 'parse-json';

const jsonString = '{"name": "John", "age": 30}';

try {
    const parsedData = parseJson(jsonString);
    console.log(parsedData);
    console.log("Moduł 'parse-json' umożliwia sprawdzenie poprawności, czyli parsuje stringi JSON.");
} catch (error) {
    console.error("Błąd podczas parsowania JSON:", error.message);
}

const invalidJsonString = '{"name": "John", "age": 30';

try {
    const parsedData = parseJson(invalidJsonString);
    console.log(parsedData);
} catch (error) {
    console.error("Błąd podczas parsowania JSON:", error.message);
}
