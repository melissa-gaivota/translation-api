const fs = require("fs");

interface IRequest {
  language: string;
  moduleName: string;
  translationKey: string;
}

class DeleteTranslationUseCase {
  constructor() {}
  async execute({
    language,
    moduleName,
    translationKey,
  }: IRequest): Promise<void> {
    try {
      const data = await fs.promises.readFile(
        `./tmp/${language}/${moduleName}.json`,
        "utf8"
      );
      const jsonData = JSON.parse(data);
      delete jsonData[translationKey];
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

export { DeleteTranslationUseCase };
