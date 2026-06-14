import { useState } from "react";

const FORM_ENDPOINT = ""; // Add your API route, Formspree endpoint, CRM webhook, or serverless function URL.

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  requirement: "",
  message: "",
  website: "",
};

const validators = {
  name: (value) => value.trim().length >= 2,
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()),
  phone: (value) => /^\+?[0-9\s().-]{7,22}$/.test(value.trim()),
};

export default function InquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (validators[name]) {
      setErrors((current) => ({ ...current, [name]: !validators[name](value) }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (values.website) return;

    const nextErrors = {
      name: !validators.name(values.name),
      email: !validators.email(values.email),
      phone: !validators.phone(values.phone),
    };
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus({ type: "error", message: "Please complete all required fields before submitting." });
      return;
    }

    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      if (!FORM_ENDPOINT) throw new Error("Missing FORM_ENDPOINT");
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          source: "Gloria Food B2B inquiry form",
          to: "sales@gloriafood.asia",
        }),
      });
      if (!response.ok) throw new Error("Submit failed");
      setValues(initialValues);
      setStatus({ type: "success", message: "Thank you. Your inquiry has been submitted successfully." });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Submission failed. Connect FORM_ENDPOINT to send inquiries to email, CRM, or database.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="advanced-form" onSubmit={handleSubmit} noValidate>
      <input
        className="spam-field"
        name="website"
        value={values.website}
        onChange={updateField}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      <Field label="Name" name="name" required error={errors.name}>
        <input id="name" name="name" value={values.name} onChange={updateField} placeholder="Your full name" autoComplete="name" />
      </Field>

      <Field label="Email" name="email" required error={errors.email}>
        <input id="email" name="email" type="email" value={values.email} onChange={updateField} placeholder="name@company.com" autoComplete="email" />
      </Field>

      <Field label="Phone" name="phone" required error={errors.phone}>
        <input id="phone" name="phone" value={values.phone} onChange={updateField} placeholder="+1 555 123 4567" inputMode="tel" autoComplete="tel" />
      </Field>

      <Field label="Company Name" name="company">
        <input id="company" name="company" value={values.company} onChange={updateField} placeholder="Your company name" autoComplete="organization" />
      </Field>

      <Field label="Country / Region" name="country">
        <input id="country" name="country" value={values.country} onChange={updateField} placeholder="Canada, Germany, UAE..." autoComplete="country-name" />
      </Field>

      <Field label="Product Requirement" name="requirement">
        <select id="requirement" name="requirement" value={values.requirement} onChange={updateField}>
          <option value="">Select a product category</option>
          <option>IQF Frozen Vegetables</option>
          <option>Frozen Edamame / Mukimame</option>
          <option>Noodle & Pastry</option>
          <option>Seafood</option>
          <option>OEM / Private Label Program</option>
        </select>
      </Field>

      <Field label="Message" name="message" full>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={updateField}
          placeholder="Tell us the product, packaging, quantity, destination port, certification needs or private label requirements."
        />
      </Field>

      <button className={`button primary submit-button full ${loading ? "loading" : ""}`} type="submit" disabled={loading}>
        <span className="button-label">{loading ? "Submitting..." : "Submit Inquiry"}</span>
        <span className="button-spinner" aria-hidden="true" />
      </button>

      {status.message && <p className={`form-status full ${status.type}`}>{status.message}</p>}
    </form>
  );
}

function Field({ label, name, required, error, full, children }) {
  return (
    <div className={`field ${full ? "full" : ""} ${error ? "invalid" : ""}`}>
      <label htmlFor={name}>
        {label} {required && <strong>*</strong>}
      </label>
      {children}
      {required && <small className="field-hint">Please enter a valid {label.toLowerCase()}.</small>}
    </div>
  );
}
