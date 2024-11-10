// eslint-disable-next-line react/prop-types
const Avatar = ({ src, className }) => (
  <div className={`avatar ${className}`}>
    <div className="mask mask-squircle w-24">
      <img src={src} alt="Avatar" />
    </div>
  </div>
);

export default Avatar;
