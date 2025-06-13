import Foto from "../../components/header/Foto";
import Sobre from "../../components/header/Sobre";

export default function Profile() {
  return (
    <section className="flex justify-center pt-12 px-4">
      <div className="p-[2px] rounded-2xl gradient-border-wrapper w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_7fr] bg-secondary rounded-[14px] overflow-hidden h-auto lg:h-[360px]">
          <Foto />
          <Sobre />
        </div>
      </div>
    </section>
  );
}
