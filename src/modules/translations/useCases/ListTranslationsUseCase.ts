const fs = require("fs");

interface IRequest {
  moduleName: string;
  language: string;
}

class ListTranslationsUseCase {
  constructor() {}
  async execute({ moduleName, language }: IRequest): Promise<any> {
    try {
      const data = await fs.promises.readFile(
        `./tmp/${language}/${moduleName}.json`,
        "utf8"
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

export { ListTranslationsUseCase };
