import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "underline" : "none", color: match ? "brown" : "black", fontWeight: match ? "bold" : "normal" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && ""}
        </div>
    );
}

export default CustomLink;