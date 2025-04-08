'use client';
import { useState } from 'react';

import { SearchDialog } from '@/components/layout/search-profile-bar/search-dialog';
import { SearchForm } from '@/components/layout/search-profile-bar/search-form';
import { searchDialogContext } from '@/hooks/use-search-dialog';

export function SearchProfileBar() {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((prev) => !prev)
  };

  return (
    <searchDialogContext.Provider value={value}>
      <div className="relative z-20 h-full w-full bg-white px-5 py-4">
        <SearchForm />
      </div>
      <SearchDialog />
    </searchDialogContext.Provider>
  );
}
