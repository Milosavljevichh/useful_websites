
'use client';
import { CacheProvider } from '@emotion/react';
import { emotionCache } from './EmotionCache';

export default function EmotionProvider({ children }) {
  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}