import Navbar from '@/components/navbar'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import Link from 'next/link'

interface MarketingLayoutProps {
    children: React.ReactNode;
  }

export default function MarketingLayout ({children}:MarketingLayoutProps){
    
    return (
        <>
        <div className="sticky inset-x-0 top-0 z-50 h-16">
            <header className="relative">
                <MaxWidthWrapper className="border-b">
                    <div className="flex h-16 items-center justify-center">
                    <Navbar />
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
        {children}
        </>
    )
}