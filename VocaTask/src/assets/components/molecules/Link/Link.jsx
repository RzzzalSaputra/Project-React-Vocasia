function Link({ title, linkText, onClick }) {
    return (
        <>
        <p className="link text-center text-xl cursor-default text-gray-500 no-underline">
            {title}
            <span className="text-xl cursor-pointer underline" onClick={onClick} >
                    {linkText}
            </span>
        </p>
        </>
    );
}

export default Link;
