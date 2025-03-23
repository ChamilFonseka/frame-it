import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center justify-between h-16 ">
                <div className="flex items-center gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl">FrameIt</span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                            Home
                        </Link>
                        <Link href="/upload" className="text-sm font-medium transition-colors hover:text-primary">
                            Upload Photo
                        </Link>
                        <Link href="#frames" className="text-sm font-medium transition-colors hover:text-primary">
                            Frames
                        </Link>
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                            About
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

