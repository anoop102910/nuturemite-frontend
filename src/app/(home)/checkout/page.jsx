"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import OrderSummary from "../cart/OrderSummary";

export default function Page() {
  const [formData, setFormData] = useState({
    billing: {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      zipcode: "",
    },
    shipping: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
    },
    payment: {
      cardNumber: "",
      cardHolderName: "",
      expiryDate: "",
      cvv: "",
    },
    shipToDifferentAddress: false,
  });

  const formDetails = [
    [
      {
        label: "First Name",
        value: "firstName",
        section: "billing",
      },
      {
        label: "Last Name",
        value: "lastName",
        section: "billing",
      },
    ],
    [
      {
        label: "Email",
        value: "email",
        section: "billing",
      },
      {
        label: "Phone",
        value: "phone",
        section: "billing",
      },
    ],
    {
      label: "Address",
      value: "address",
      section: "billing",
    },
    [
      {
        label: "Country",
        value: "country",
        section: "shipping",
      },
      {
        label: "City",
        value: "city",
        section: "shipping",
      },
    ],
    [
      {
        label: "State",
        value: "state",
        section: "shipping",
      },
      {
        label: "Zipcode",
        value: "zipcode",
        section: "shipping",
      },
    ],
  ];

  const paymentDetails = [
    {
      label: "Card Holder Name",
      value: "cardHolderName",
      section: "payment",
    },
    [
      {
        label: "Card Number",
        value: "cardNumber",
        section: "payment",
      },

      {
        label: "Expiry Date",
        value: "expiryDate",
        section: "payment",
      },
      {
        label: "CVV",
        value: "cvv",
        section: "payment",
      },
    ],
  ];

  const handleChange = e => {
    const { name, value } = e.target;
    const section = e.target.getAttribute("data-section");
    setFormData(prevData => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: value,
      },
    }));
  };

  const handleCheckboxChange = e => {
    const { checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      shipToDifferentAddress: checked,
    }));
  };

  return (
    <div className="mt-10 pb-10">
      <h2 className="h2-primary">Billing Details</h2>
      <div className="flex gap-20 ">
        <div className="basis-3/5">
          <div className="bg-white p-6">
            {formDetails.map((section, index) => (
              <div key={index} className="flex mb-4">
                {Array.isArray(section) ? (
                  <div className="flex gap-10 w-full">
                    {section.map((field, idx) => (
                      <div key={idx} className="mr-4 w-full">
                        <Label className={"text-slate-600"} htmlFor={field.value}>
                          {field.label}
                        </Label>
                        <Input
                          type="text"
                          id={field.value}
                          name={field.value}
                          data-section={field.section}
                          value={formData[field.section][field.value]}
                          onChange={handleChange}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mr-4 w-full">
                    <Label className={"text-slate-600"} htmlFor={section.value}>
                      {section.label}
                    </Label>
                    <Input
                      type="text"
                      id={section.value}
                      name={section.value}
                      data-section={section.section}
                      value={formData[section.section][section.value]}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center mt-2">
              <input
                id="ship-to-different"
                className="w-4 h-4"
                type="checkbox"
                checked={formData.shipToDifferentAddress}
                onChange={handleCheckboxChange}
              />
              <Label className="text-slate-600 ml-3" htmlFor="ship-to-different">
                Ship to different address
              </Label>
            </div>
          </div>

          {formData.shipToDifferentAddress && (
            <div>
              <h2 className="h2-primary mt-6">Shipping Details</h2>
              <div className="bg-white p-6">
                {formDetails.map((section, index) => (
                  <div key={index} className="flex mb-4">
                    {Array.isArray(section) ? (
                      <div className="flex gap-10 w-full">
                        {section.map((field, idx) => (
                          <div key={idx} className="mr-4 w-full">
                            <Label className={"text-slate-600"} htmlFor={field.value}>
                              {field.label}
                            </Label>
                            <Input
                              type="text"
                              id={field.value}
                              name={field.value}
                              data-section={field.section}
                              value={formData[field.section][field.value]}
                              onChange={handleChange}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mr-4 w-full">
                        <Label className={"text-slate-600"} htmlFor={section.value}>
                          {section.label}
                        </Label>
                        <Input
                          type="text"
                          id={section.value}
                          name={section.value}
                          data-section={section.section}
                          value={formData[section.section][section.value]}
                          onChange={handleChange}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="h2-primary mt-6">Payment Details</h2>
            <div className="bg-white p-6">
              {paymentDetails.map((section, index) => (
                <div key={index} className="flex mb-4">
                  {Array.isArray(section) ? (
                    <div className="flex gap-10 w-full">
                      {section.map((field, idx) => (
                        <div key={idx} className="mr-4 w-full">
                          <Label className={"text-slate-600"} htmlFor={field.value}>
                            {field.label}
                          </Label>
                          <Input
                            type="text"
                            id={field.value}
                            name={field.value}
                            data-section={field.section}
                            value={formData[field.section][field.value]}
                            onChange={handleChange}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mr-4 w-full">
                      <Label className={"text-slate-600"} htmlFor={section.value}>
                        {section.label}
                      </Label>
                      <Input
                        type="text"
                        id={section.value}
                        name={section.value}
                        data-section={section.section}
                        value={formData[section.section][section.value]}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" basis-2/5">
          <h2 className="h2-primary">Order Details</h2>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
