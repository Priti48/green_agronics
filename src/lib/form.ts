/**
 * Web3Forms integration utility
 * https://web3forms.com/ - Free form backend, no backend required
 *
 * Setup:
 * 1. Get access key from https://web3forms.com/
 * 2. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local
 */

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export interface Web3FormsPayload {
  access_key: string;
  name: string;
  email: string;
  subject?: string;
  message?: string;
  [key: string]: string | undefined;
}

export interface Web3FormsResponse {
  success: boolean;
  message: string;
}

export async function submitToWeb3Forms(
  payload: Omit<Web3FormsPayload, "access_key"> & { access_key?: string }
): Promise<Web3FormsResponse> {
  const accessKey =
    payload.access_key || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Web3Forms access key is required");
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, access_key: accessKey }),
  });

  const data = (await response.json()) as Web3FormsResponse;

  if (!response.ok) {
    throw new Error(data.message || "Form submission failed");
  }

  return data;
}
