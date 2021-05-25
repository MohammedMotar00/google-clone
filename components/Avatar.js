function Avatar({ url }) {
  return (
    <img
      src={url}
      alt="profile picture"
      loading="lazy"
      className="h-10 rounded-full"
    />
  );
}

export default Avatar;
