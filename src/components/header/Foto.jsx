import FotoPerfil from "../../assets/Foto.jpeg";

export default function Foto() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[var(--gradient-start)] via-[var(--gradient-via)] to-[var(--gradient-end)] flex items-center justify-center p-4">
      <div className="w-60 h-60 sm:w-64 sm:h-64 flex-shrink-0">
        <img
          src={FotoPerfil}
          alt="Foto de perfil"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
}
