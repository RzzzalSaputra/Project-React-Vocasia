// eslint-disable-next-line react/prop-types
const Label = ({ children, ...props }) => {
    return (
        <label className="label" {...props}>
            {children}
        </label>
    );
};

export default Label;
