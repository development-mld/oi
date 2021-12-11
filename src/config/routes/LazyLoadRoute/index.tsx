import { Suspense } from 'react';
import TopLoading from '../../../components/TopLoading';

// @ts-ignore
export default function LazyLoadRoute({ children, fallback = <TopLoading /> }) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
