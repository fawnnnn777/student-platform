'use client'
import { usePathname } from 'next/navigation';
import Dropdown from '@/app/ui/Dropdown'

export default function SectionPage() {
    const pathname = usePathname();
    const section = pathname.split('/').pop();
    if (!section) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-4">
                {section.charAt(0).toUpperCase() + section.slice(1)} Practice
            </h1>
            <Dropdown level="Basic" />
            <Dropdown level="Intermediate" />
            <Dropdown level="Advanced" />
        </div>
    )
}
