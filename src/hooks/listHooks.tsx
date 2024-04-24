import React, { createContext, useContext, useEffect, useState } from "react";

interface Item {
  id: number;
  nome: string;
  dataInicial: string;
  dataFinal: string;
  infosPropriedade: { id: number; nome: string; cnpj: string };
  laboratorio: { id: number; nome: string };
  observacoes: string;
}

interface NewItem extends Omit<Item, "id"> {}

interface ListContextType {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  addItem: (newItem: NewItem) => void;
  deleteItemByCnpj: (cnpj: string) => void;
  getItemByCnpj: (cnpj: string) => Item | undefined;
}

interface ListProviderProps {
  children: React.ReactNode;
}

const ItemContext = createContext<ListContextType | undefined>(undefined);

export const useListContext = (): ListContextType => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("useItemContext must be used within an ItemProvider");
  }
  return context;
};

export function ListProvider({ children }: ListProviderProps) {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (newItem: NewItem) => {
    const payload = {
      ...newItem,
      id: items.length,
    };
    console.log("add", payload);
    setItems([...items, payload]);
  };

  const deleteItemByCnpj = (cnpj: string) => {
    setItems(items.filter((item) => item.infosPropriedade.cnpj !== cnpj));
  };

  const getItemByCnpj = (cnpj: string) => {
    return items.find((item) => item.infosPropriedade.cnpj === cnpj);
  };

  const contextValue: ListContextType = {
    items,
    addItem,
    deleteItemByCnpj,
    getItemByCnpj,
    setItems,
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
}

export const useList = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("useList deve ser usado dentro de um ItemProvider");
  }
  return context;
};
