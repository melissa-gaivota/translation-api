const fs = require("fs");

interface IRequest {
  language: string;
  moduleName: string;
  translationKey: string;
  newTranslation: string;
}

class CreateTranslationUseCase {
  constructor() {}
  async execute({
    language,
    moduleName,
    translationKey,
    newTranslation,
  }: IRequest): Promise<void> {
    try {
      const data = await fs.promises.readFile(
        `./tmp/${language}/${moduleName}.json`,
        "utf8"
      );
      const jsonData = JSON.parse(data);
      jsonData[translationKey] = newTranslation;
      await fs.writeFileSync(
        `./tmp/${language}/${moduleName}.json`,
        JSON.stringify(jsonData)
      );
      return;
    } catch (err) {
      console.log(err);
    }
  }
}

export { CreateTranslationUseCase };
