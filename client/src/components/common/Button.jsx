import {Link} from "react-router-dom";

function Button({
    children,
    to,
    type="button",
    variant="primary",
    className="",
    ...props 
}) {
    const baseStyles = "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-400",

        outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:ring-blue-500",

        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    };

    const classes = `${baseStyles} ${variants[variant]} ${className}`;
    if(to){
        return(
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return(
        <button type={type} className={classes} {...props}>
            {children}
        </button>
    );
}

export default Button;