import type { ContactFormData } from "@/types";

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean }> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }

  return response.json();
}
