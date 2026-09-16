import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { formatDateToLocal } from '@/app/lib/utils';

console.log(formatDateToLocal('100', 'en-US'))

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
<h1>jamie</h1>
<p>this i sjamie saying hello</p>
    </main>
  );
}
