import Eye from "../assets/images/eye.svg";

export default function EditProfile({ handle }) {
  function handleEye(e) {
    e.preventDefault();
    let type = e.currentTarget.parentNode.previousElementSibling.type;
    if (type === "password") {
      e.currentTarget.parentNode.previousElementSibling.type = "text";
    } else {
      e.currentTarget.parentNode.previousElementSibling.type = "password";
    }
  }
  return (
    <div className={`account mx-5 pt-6 flex flex-col justify-between`}>
      <div>
        <form>
          <div className="flex flex-col gap-5">
            <label
              htmlFor="user"
              className="text-[#4D3483] font-semibold text-base"
            >
              Usuario
            </label>
            <input
              type="text"
              id="user"
              name="user"
              className="flex justify-between font-normal border-solid border-2 border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
            />
            <label
              htmlFor="email"
              className="text-[#4D3483] font-semibold text-base"
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="flex justify-between font-normal border-solid border-2 border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
            />
            <label
              htmlFor="password"
              className="text-[#4D3483] font-semibold text-base"
            >
              Contraseña
            </label>
            <div className="relative h-12">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full font-normal border-solid border-2 border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <button onClick={handleEye}>
                  <img src={Eye} alt="Eye" />
                </button>
              </div>
            </div>
            <label
              htmlFor="password"
              className="text-[#4D3483] font-semibold text-base"
            >
              Repetir contraseña
            </label>
            <div className="h-12">
              <input
                type="password"
                name="password"
                className="w-full flex justify-between font-normal border-solid border-2 border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="mb-5">
        <button
          onClick={handle}
          className="box-border border-2 border-solid border-[#7064FF] rounded-[20px] text-[#7064FF] font-semibold text-xl mb-5 h-[49px]"
        >
          Cancelar
        </button>
        <button className="bg-[#7064FF] rounded-[20px] text-white font-semibold text-xl">
          Actualizar datos
        </button>
      </div>
    </div>
  );
}
