import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] max-w-[250px] p-3 rounded-lg cursor-pointer hover:bg-[#ffffff26] transition duration-300"
    >
      <img
        className="w-full h-40 object-cover rounded-lg"
        src={image}
        alt={name}
      />
      <p className="font-bold mt-2 mb-1 text-white">{name}</p>
      <p className="text-slate-300 text-sm line-clamp-2">{desc}</p>
    </div>
  );
};

export default AlbumItem;
