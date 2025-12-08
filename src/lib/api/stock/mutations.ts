import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMenu, createProductVariant, deleteMenu, deleteProduct, deleteProductVariant, postProduct, updateMenu, updateProduct } from "./services";
import { MenuType, ProductType, ProductVariantType } from "./types";

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

// -------- Menu --------

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

export function useUpdateMenu() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: MenuType) => updateMenu(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['menu'] })
    },
    onError: (error) => {
      console.error(error);
    },
  });
}

export function useDeleteMenu() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: MenuType) => deleteMenu(data.MenuId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['menu'] })
    },
    onError: (error) => {
      console.error(error);
    },
  });
}


// -------- ProductVariant ---------

export function useCretaProductVariant() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: ProductVariantType) => createProductVariant(data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['productVariant', variables.ProductId] })
    },
    onError: (error) => {
      throw (error)
    },
  });
}

export function useDeleteProductVariant() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: ProductVariantType) => deleteProductVariant(data.VariantId),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['productVariant', variables.ProductId] })
    },
    onError: (error) => {
      console.error(error);
    },
  });
}
