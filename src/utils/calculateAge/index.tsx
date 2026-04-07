export function calculateAge(birthDate: string): number | null {
  const [day, month, year] = birthDate.split("/").map(Number);
  if (!day || !month || !year || year < 1900) return null;
  const today = new Date();
  const birth = new Date(year, month - 1, day);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age >= 0 ? age : null;
}
