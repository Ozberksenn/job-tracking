import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMenu, deleteProduct, postProduct, updateProduct } from "./services";
import { MenuType, ProductType } from "./types";

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
      queryClient.invalidateQueries({ queryKey: ['product', variables.MenuId] })
    },
    onError: (error) => {
      console.error(error);
    },
  });
}


export function useCreateMenu() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: MenuType) => createMenu(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['menu'] })
    },
    onError: (error) => {
      console.error(error);
    },
  });
}