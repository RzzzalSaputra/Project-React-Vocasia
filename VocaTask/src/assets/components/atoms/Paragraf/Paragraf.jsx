// eslint-disable-next-line react/prop-types
const Paragraf = ({ className, children, ...props }) => {
    return (
        <p className={`text-white ${className}`} {...props}>
            {children}
        </p>
    );
};

export default Paragraf;