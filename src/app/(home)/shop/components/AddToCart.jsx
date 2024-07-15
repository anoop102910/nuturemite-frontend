"use client";
import { Button } from "@/components/ui/button";
import api from "@/lib/api";
import { tst } from "@/lib/utils";
import React, { useState } from "react";

function AddToCart({ product, isChild, children,quantity }) {
  const [pending, setPending] = useState(false);

  async function handleCartAdd(e) {
    e.preventDefault();
    try {
      setPending(true);
      await api.post("/cartitems", { productId: product.id, quantity: quantity || 1 });
      tst.success("Cart item added");
    } catch (error) {
      tst.error(error);
    } finally {
      setPending(false);
    }
  }

  if (isChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick: handleCartAdd });
  }
  return (
    <Button  pending={pending} onClick={handleCartAdd} size="lg">
      Add to Cart
    </Button>
  );
}

export default AddToCart;
