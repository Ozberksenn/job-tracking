import { useMutation } from "@tanstack/react-query";
import { postProduct } from "./services";
import { ProductType } from "./types";

export function useCreateProduct() {
  return useMutation({
    mutationFn: (data:ProductType) =>  postProduct(data),
    onSuccess: () => {
      console.log("Product created!");
    },
    onError: (error) => {
      console.error(error);
    },
  });
}