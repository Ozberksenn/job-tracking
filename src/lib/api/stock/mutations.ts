import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, postProduct, updateProduct } from "./services";
import { ProductType } from "./types";

export function useCreateProduct() {
  const queryClient = useQueryClient()
  return useMutation({

    mutationFn: (data: ProductType) => postProduct(data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['product', variables.MenuId] })
    },
    onError: (error) => {
      console.error(error);
    },
  });
}


export function useUpdateProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: ProductType) => updateProduct(data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['product', variables.MenuId] })
    },
    onError: (error) => {
      console.error(error);
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: ProductType) => deleteProduct(data.ProductId),
    onSuccess: (data, variables) => {
      console.log('delete success product')
      queryClient.invalidateQueries({ queryKey: ['product', variables.MenuId] })
    },
    onError: (error) => {
      console.error(error);
    },
  });
}