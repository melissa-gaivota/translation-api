import { Router } from "express";

import { ListTranslationsUseCase } from "../modules/translations/useCases/ListTranslationsUseCase";
import { CreateTranslationUseCase } from "../modules/translations/useCases/CreateTranslationUseCase";
import { DeleteTranslationUseCase } from "../modules/translations/useCases/DeleteTranslationUseCase";

const translationRoutes = Router();

const listTranslationsUseCase = new ListTranslationsUseCase();
const createTranslationUseCase = new CreateTranslationUseCase();
const deleteTranslationUseCase = new DeleteTranslationUseCase();

translationRoutes.get("/", async (request, response) => {
  const moduleName = request.query.moduleName as string;
  const language = request.query.language as string;

  const translation = await listTranslationsUseCase.execute({
    moduleName,
    language,
  });
  return response.send(translation);
});

translationRoutes.patch("/", async (request, response) => {
  const { moduleName, language, translationKey, newTranslation } = request.body;
  await createTranslationUseCase.execute({
    moduleName,
    language,
    translationKey,
    newTranslation,
  });
  return response.send();
});

translationRoutes.delete("/", async (request, response) => {
  const { moduleName, language, translationKey } = request.body;
  await deleteTranslationUseCase.execute({
    moduleName,
    language,
    translationKey,
  });
  return response.send();
});

export { translationRoutes };
