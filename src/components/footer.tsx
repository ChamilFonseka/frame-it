import Link from "next/link";

export default function Footer() {
    return (
        <footer >
            <div className="container mx-auto border-t py-6 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} FrameIt. All rights reserved.</p>
            </div>
        </footer>
    );
}
