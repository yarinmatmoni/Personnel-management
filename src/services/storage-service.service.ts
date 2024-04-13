interface EntityId {
  _id: string;
}

const query = <T>(entityType: string, delay: number = 200): Promise<T[]> => {
  const entities = JSON.parse(localStorage.getItem(entityType) || "null") || [];
  return new Promise((resolve) => setTimeout(() => resolve(entities), delay));
};

const get = async <T extends EntityId>(
  entityType: string,
  entityId: string
) => {
  const entities = await query<T>(entityType);
  const entity = entities.find((e) => {
    e._id === entityId;
  });

  if (!entity)
    throw new Error(
      `Get field to find entity with id: ${entityId} in ${entityType}`
    );

  return entity;
};

const post = async <T extends EntityId>(entityType: string, entityToAdd: T) => {
  const newEntity = { ...entityToAdd };
  newEntity._id = _makeId();
  const entities = await query<T>(entityType);
  entities.push(newEntity);
  _saveToLocalStorage(entityType, entities);
  return newEntity;
};

const put = async <T extends EntityId>(
  entityType: string,
  updatedEntity: T
) => {
  const entities = await query<T>(entityType);
  const index = entities.findIndex((e) => e._id === updatedEntity._id);

  if (index < 0)
    throw new Error(
      `Update field, cannot find entity with id: ${updatedEntity._id}`
    );

  entities.splice(index, 1, updatedEntity);
  _saveToLocalStorage(entityType, entities);
  return updatedEntity;
};

const remove = async <T extends EntityId>(
  entityType: string,
  entityId: string
) => {
  const entities = await query<T>(entityType);
  const index = entities.findIndex((e) => e._id === entityId);

  if (index < 0)
    throw new Error(`Remove filed, cannot find entity with id: ${entityId}`);

  entities.splice(index, 1);
  _saveToLocalStorage(entityType, entities);
};

//Private functions
const _makeId = (): string => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

const _saveToLocalStorage = <T>(entityType: string, entities: T[]) => {
  localStorage.setItem(entityType, JSON.stringify(entities));
};

export const storageService = { query, get, post, put, remove };
