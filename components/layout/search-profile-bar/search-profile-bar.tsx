'use client';
import { useState } from 'react';

import { ProfileLink } from '@/components/layout/search-profile-bar/profile-link';
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
      <div className="relative z-20 flex h-full w-full items-center justify-between gap-2 bg-white px-5 py-4">
        <SearchForm />
        <div className="flex items-center gap-2">
          <ProfileLink />
        </div>
      </div>
      <SearchDialog />
    </searchDialogContext.Provider>
  );
}
