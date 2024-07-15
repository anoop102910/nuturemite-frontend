"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useBrand } from "@/lib/data";
import { Textarea } from "@/components/ui/textarea";
import { tst } from "@/lib/utils";
import api from "@/lib/api";
import Loader from "@/components/shared/loader";
import Joi from "joi";

const brandSchema = Joi.object({
  name: Joi.string().trim().min(3).required().messages({
    "string.base": `Name should be a type of 'text'`,
    "string.empty": `Name cannot be an empty field`,
    "string.min": `Name should have a minimum length of {#limit}`,
    "any.required": `Name is a required field`,
  }),
  description: Joi.string()
    .trim()
    .optional()
    .allow(null || "")
    .min(10)
    .messages({
      "string.base": `Description should be a type of 'text'`,
      "string.empty": `Description cannot be an empty field`,
      "string.min": `Description should have a minimum length of {#limit}`,
    }),
});

function BrandForm({ update, params }) {
  const { brand, isLoading } = update
    ? useBrand(params?.id)
    : { brand: {}, isLoading: false };

  const [formData, setFormData] = useState({
    name: brand?.name || "",
    description: brand?.description || "",
  });

  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (update && brand) {
      setFormData({
        name: brand.name,
        description: brand.description,
      });
    }
  }, [update, brand]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFocus = e => {
    const { name } = e.target;
    setFormErrors(prevData => ({
      ...prevData,
      [name]: "",
    }));
    setError(null);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setPending(true);

    try {
      const { value, error } = brandSchema.validate(formData, { abortEarly: false });

      if (error) {
        const errors = {};
        error.details.forEach(err => {
          errors[err.path[0]] = err.message;
        });
        setFormErrors(errors);
        return;
      }

      if (!update) {
        await api.post("/brands", value);
        tst.success("Brand created successfully");
      } else {
        await api.put(`/brands/${params.id}`, value);
        tst.success("Brand updated successfully");
      }
      setFormErrors({});
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        tst.error(err);
      }
    } finally {
      setPending(false);
    }
  };

  if (update && isLoading) return <Loader />;

  return (
    <form className="p-10 max-w-2xl mx-auto" onSubmit={handleSubmit}>
      <div className="grid gap-8 py-4">
        <div>
          <Label htmlFor="name" className="mb-2 block">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id="name"
            disabled={pending}
            placeholder="Brand Name"
            className={`col-span-3 ${formErrors.name ? "border-red-500" : ""}`}
            onFocus={handleFocus}
          />
          {formErrors.name && <div className="text-red-500 text-sm">{formErrors.name}</div>}
        </div>
        <div>
          <Label htmlFor="description" className="mb-2 block">
            Description
          </Label>
          <Textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            disabled={pending}
            id="description"
            placeholder="Brand Description"
            className={`col-span-3 ${formErrors.description ? "border-red-500" : ""}`}
            onFocus={handleFocus}
          />
          {formErrors.description && (
            <div className="text-red-500 text-sm">{formErrors.description}</div>
          )}
          {error && (
            <div className="text-red-500 px-2 py-3 border border-red-300 text-sm mt-2">{error}</div>
          )}
        </div>
        <Button disabled={pending} pending={pending} type="submit">
          {!update ? "Add Brand" : "Update Brand"}
        </Button>
      </div>
    </form>
  );
}

export default BrandForm;
