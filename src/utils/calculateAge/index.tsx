export function calculateAge(birthDate: string): number | null {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(birthDate)) return null;

  const [day, month, year] = birthDate.split("/").map(Number);

  if (year < 1900 || month < 1 || month > 12 || day < 1 || day > 31)
    return null;

  const today = new Date();
  const birth = new Date(year, month - 1, day);

  if (birth.getMonth() !== month - 1 || birth.getDate() !== day) return null;

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }
  return age >= 0 ? age : null;
}
