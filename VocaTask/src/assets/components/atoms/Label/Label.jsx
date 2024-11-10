// eslint-disable-next-line react/prop-types
const Label = ({ children, ...props }) => {
    return (
        <label className="label w-full" {...props}>
            {children}
        </label>
    );
};

export default Label;
