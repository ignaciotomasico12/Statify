"use client";

import { signIn } from "next-auth/react";
import {useTranslations} from 'next-intl';

export default function LoginPage() {
  const t = useTranslations('auth.signIn');
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black dark:text-white">
      <h1 className="text-4xl font-bold mb-8">{t('pageTitle')}</h1>
      <button
        onClick={() => signIn("spotify")}
        className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-400 transition"
      >
        {t('signInButton')}
      </button>
    </div>
  );
}