function Avatar({ url }) {
  return (
    <div>
    
      <img
        loading="lazy"
        className="h-10 cursor-pointer rounded-full transform hover:scale-110"
        src={url}
        alt="profile pic"
      />
    
    </div>
  );
}

export default Avatar;
