function Avatar({ url, className }) {
  return (
    <img
      className={`rounded-full h-11 w-11 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="profile picture"
      loading="lazy"
      layout="fill"
    />
  );
}

export default Avatar;
