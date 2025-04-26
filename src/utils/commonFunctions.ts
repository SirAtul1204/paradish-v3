export const getRecordFromFormData = <T extends Record<string, any>>(
  formData: FormData,
): T => {
  const record = {} as T;
  formData.forEach((value, key) => {
    if (key in record) {
      record[key as keyof T] = value as T[keyof T];
    }
  });
  return record;
};
