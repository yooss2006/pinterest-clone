import { createContext, useContext } from 'react';

type searchDialogContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export const searchDialogContext = createContext<searchDialogContextType | null>(null);

export const useSearchDialog = () => {
  const context = useContext(searchDialogContext);
  if (!context) {
    throw new Error('useSearchDialogContext must be used within a SearchDialogContext');
  }
  return context;
};
