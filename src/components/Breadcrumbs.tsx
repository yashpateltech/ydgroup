import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-gray-50 border-b border-gray-100 py-3">
      <div className="container mx-auto px-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
        <Link to="/" className="hover:text-[#0047ff] flex items-center gap-1 transition-colors">
          <Home className="h-3 w-3" /> Home
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const displayName = name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <div key={name} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3" />
              {isLast ? (
                <span className="text-[#0047ff]">{displayName}</span>
              ) : (
                <Link to={routeTo} className="hover:text-[#0047ff] transition-colors">
                  {displayName}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
