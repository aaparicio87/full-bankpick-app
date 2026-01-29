/**
 * Formats card number: 1234 5678 9012 3456
 * @param value - Raw card number input
 * @returns Formatted card number with spaces
 */
export const formatCardNumber = (value: string): string => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, "");

  // Limit to 16 digits
  const limited = digits.slice(0, 16);

  // Add space every 4 digits
  const formatted = limited.replace(/(\d{4})(?=\d)/g, "$1 ");

  return formatted;
};

/**
 * Formats expiry date: MM/YYYY
 * @param value - Raw expiry date input
 * @returns Formatted expiry date
 */
export const formatExpiryDate = (value: string) => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, "");

  // Limit to 6 digits (MMYYYY)
  const limited = digits.slice(0, 6);

  // Add slash after month
  if (limited.length <= 2) {
    return limited;
  }

  const month = limited.slice(0, 2);
  const year = limited.slice(2, 6);

  // Validate month (01-12)
  const monthNum = parseInt(month, 10);
  if (monthNum > 12) {
    return "12";
  }
  if (monthNum === 0 && limited.length >= 2) {
    return "01";
  }

  return `${month}/${year}`;
};
