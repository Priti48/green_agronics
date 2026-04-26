/**
 * WhatsApp prefill helper for inquiry integration
 * Generates WhatsApp links with pre-filled message text
 */

const WHATSAPP_BASE_URL = "https://wa.me";
const DEFAULT_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "";

export interface WhatsAppPrefillParams {
  phone?: string;
  message: string;
}

/**
 * Builds a WhatsApp URL with pre-filled message
 * Phone number should be in international format without + (e.g., 919876543210)
 */
export function buildWhatsAppUrl({
  phone = DEFAULT_PHONE,
  message,
}: WhatsAppPrefillParams): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);

  return `${WHATSAPP_BASE_URL}/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Generates RFQ inquiry message for WhatsApp
 */
export function buildRFQMessage(params: {
  product?: string;
  quantity?: string;
  name?: string;
  company?: string;
  country?: string;
}): string {
  const lines: string[] = ["*New RFQ Inquiry*", ""];

  if (params.name) lines.push(`Name: ${params.name}`);
  if (params.company) lines.push(`Company: ${params.company}`);
  if (params.country) lines.push(`Country: ${params.country}`);
  if (params.product) lines.push(`Product: ${params.product}`);
  if (params.quantity) lines.push(`Quantity: ${params.quantity}`);

  return lines.join("\n");
}
