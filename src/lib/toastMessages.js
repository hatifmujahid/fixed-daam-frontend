export const SUCCESS = {
  CREATE: (entity) => `${entity} created successfully.`,
  UPDATE: (entity) => `${entity} updated successfully.`,
  DELETE: (entity) => `${entity} deleted successfully.`,
};

export const ERROR = {
  CREATE: (entity) => `Failed to create ${entity}.`,
  UPDATE: (entity) => `Failed to update ${entity}.`,
  DELETE: (entity) => `Failed to delete ${entity}.`,
};

export const WARNING = {
  UNSAVED_CHANGES: "You have unsaved changes.",
};
