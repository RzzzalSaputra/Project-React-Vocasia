// eslint-disable-next-line react/prop-types
const Button = ({ children, className, ...props }) => {
    return (
        <button className={`btn ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
