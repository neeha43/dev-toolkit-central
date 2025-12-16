import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-card/30 py-4 sm:py-6">
            <div className="container mx-auto px-3 sm:px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                        © {new Date().getFullYear()} DevTools. Free developer tools • No data stored
                    </p>
                    <nav className="flex items-center gap-4 sm:gap-6">
                        <RouterLink to="/about">About</RouterLink>
                        <RouterLink to="/privacy">Privacy Policy</RouterLink>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
