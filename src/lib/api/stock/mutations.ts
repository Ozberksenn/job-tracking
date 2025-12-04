import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postProduct } from "./services";
import { ProductType } from "./types";

export function useCreateProduct() {
  const queryClient = useQueryClient()
  return useMutation({

    mutationFn: (data:ProductType) =>  postProduct(data),
    onSuccess: (data, variables) => {
      console.log("Product created!");
      queryClient.invalidateQueries({ queryKey: ['product',variables.MenuId]  })
    },
    onError: (error) => {
      console.error(error);
    },
  });
}