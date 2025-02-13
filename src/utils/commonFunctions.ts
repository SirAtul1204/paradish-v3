export const getRecordFromFormData = (
  formData: FormData
): Record<string, string> => {
  const record: Record<string, string> = {};
  formData.forEach((value, key) => (record[key] = value as string));
  return record;
};
