// eslint-disable-next-line react/prop-types
const Logo = ({ children, className, ...props }) => {
    return (
        <h1 className={`${className}`} {...props}>
            {children}
        </h1>
    );
};

export default Logo;
