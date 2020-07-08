import { Repository, getConnection, ObjectType, getManager } from "typeorm";

export const getDBRepository = async <Repository>(
  repository: ObjectType<Repository>
): Promise<Repository> => await getConnection().getCustomRepository(repository);

export const entityManager = getManager;