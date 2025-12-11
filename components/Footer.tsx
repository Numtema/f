import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer class="w-full border-t border-neutral-border bg-white py-12">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div class="flex items-center gap-2">
          <div class="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
            <span class="material-symbols-outlined text-xl">face</span>
          </div>
          <span class="font-display text-lg font-bold text-text-main">
            FaceàFace
          </span>
        </div>
        <div class="flex gap-8 text-sm text-text-secondary">
          <a class="hover:text-primary" href="#">
            Privacy
          </a>
          <a class="hover:text-primary" href="#">
            Terms
          </a>
          <a class="hover:text-primary" href="#">
            Contact
          </a>
        </div>
        <div class="text-sm text-text-secondary">© 2024 FaceàFace Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;