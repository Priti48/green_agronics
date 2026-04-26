"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import styles from "./RFQForm.module.scss";

export interface RFQFormData {
  name: string;
  company: string;
  country: string;
  product: string;
  quantity: string;
  email: string;
  whatsapp: string;
  message: string;
}

const initialValues: RFQFormData = {
  name: "",
  company: "",
  country: "",
  product: "",
  quantity: "",
  email: "",
  whatsapp: "",
  message: "",
};

export function RFQForm() {
  const [formData, setFormData] = useState<RFQFormData>(initialValues);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Integration with lib/form.ts Web3Forms - to be wired
    setStatus("idle");
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Request for Quote"
    >
      <div className={styles.field}>
        <label htmlFor="rfq-name">Name *</label>
        <input
          id="rfq-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="rfq-company">Company *</label>
        <input
          id="rfq-company"
          name="company"
          type="text"
          required
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="rfq-country">Country *</label>
        <input
          id="rfq-country"
          name="country"
          type="text"
          required
          value={formData.country}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="rfq-product">Product *</label>
        <input
          id="rfq-product"
          name="product"
          type="text"
          required
          value={formData.product}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="rfq-quantity">Quantity *</label>
        <input
          id="rfq-quantity"
          name="quantity"
          type="text"
          required
          value={formData.quantity}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="rfq-email">Email *</label>
        <input
          id="rfq-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="rfq-whatsapp">WhatsApp</label>
        <input
          id="rfq-whatsapp"
          name="whatsapp"
          type="tel"
          value={formData.whatsapp}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="rfq-message">Message</label>
        <textarea
          id="rfq-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit RFQ"}
      </Button>
    </form>
  );
}
