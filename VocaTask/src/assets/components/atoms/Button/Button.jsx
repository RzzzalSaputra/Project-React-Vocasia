// eslint-disable-next-line react/prop-types
const Button = ({ children, className, ...props }) => {
    return (
        <button className={`btn btn-primary text-xl font-medium text-white ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
