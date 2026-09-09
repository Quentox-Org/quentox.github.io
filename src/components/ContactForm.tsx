import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Alert,
  CircularProgress,
} from "@mui/material";

const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID;

const FIELD_LIMITS = {
  name: 100,
  email: 254,
  company: 200,
  message: 5000,
} as const;

type FormState = "idle" | "submitting" | "success" | "error";

type FormFields = {
  name: string;
  email: string;
  company: string;
  message: string;
  _gotcha: string;
};

const initialFields: FormFields = {
  name: "",
  email: "",
  company: "",
  message: "",
  _gotcha: "",
};

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    bgcolor: "background.paper",
    "& fieldset": {
      borderColor: "hsl(var(--border))",
    },
    "&:hover fieldset": {
      borderColor: "hsl(var(--primary))",
    },
    "&.Mui-focused fieldset": {
      borderColor: "hsl(var(--primary))",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "hsl(var(--primary))",
  },
};

export const ContactForm: React.FunctionComponent = () => {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange =
    (field: keyof FormFields) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formspreeFormId) {
      setFormState("error");
      return;
    }

    setFormState("submitting");

    const payload = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      company: fields.company.trim(),
      message: fields.message.trim(),
      _gotcha: fields._gotcha,
    };

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFields(initialFields);
        setFormState("success");
        return;
      }

      setFormState("error");
    } catch {
      setFormState("error");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
    >
      <Box
        component="input"
        type="text"
        name="_gotcha"
        value={fields._gotcha}
        onChange={handleChange("_gotcha")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 3,
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={fields.name}
          onChange={handleChange("name")}
          required
          inputProps={{ maxLength: FIELD_LIMITS.name }}
          fullWidth
          sx={textFieldSx}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={fields.email}
          onChange={handleChange("email")}
          required
          inputProps={{ maxLength: FIELD_LIMITS.email }}
          fullWidth
          sx={textFieldSx}
        />
      </Box>

      <TextField
        label="Company"
        name="company"
        value={fields.company}
        onChange={handleChange("company")}
        inputProps={{ maxLength: FIELD_LIMITS.company }}
        fullWidth
        sx={textFieldSx}
      />

      <TextField
        label="Message"
        name="message"
        value={fields.message}
        onChange={handleChange("message")}
        required
        inputProps={{ maxLength: FIELD_LIMITS.message }}
        fullWidth
        multiline
        rows={6}
        sx={textFieldSx}
      />

      {formState === "success" && (
        <Alert severity="success">
          Thank you for reaching out. We will get back to you shortly.
        </Alert>
      )}

      {formState === "error" && (
        <Alert severity="error">
          Something went wrong while sending your message. Please try again or
          email us at info@quentox.com.
        </Alert>
      )}

      <Box>
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={formState === "submitting"}
          sx={{
            bgcolor: "hsl(var(--foreground))",
            color: "hsl(var(--background))",
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 600,
            "&:hover": {
              bgcolor: "hsl(var(--foreground) / 0.9)",
            },
            "&.Mui-disabled": {
              bgcolor: "hsl(var(--foreground) / 0.6)",
              color: "hsl(var(--background))",
            },
          }}
        >
          {formState === "submitting" ? (
            <CircularProgress size={24} sx={{ color: "hsl(var(--background))" }} />
          ) : (
            "Send message"
          )}
        </Button>
      </Box>
    </Box>
  );
};
