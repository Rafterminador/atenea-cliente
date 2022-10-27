import React from 'react'
import Button from './Button'

const NameAsistencia = () => {
  return (
    <>
    <div className="contenedor-admin ">
            <div className="container-asistencia">
              <div className="grid grid-cols-3">
                <p className="text-[28px] font-[1100]">¿</p>
                <p className="text-center text-[21.33px]">Fredy Math Xhun</p>
                <p className="text-[28px] text-end  font-[1100]">?</p>
              </div>

              <div className="flex justify-between mt-28">
                <div>
                  <Button
                    // onClick={handleEliminar}
                    text="Presente"
                    typeButton={"button-type-2"}
                    className="my-5"
                    type="button"
                  />
                </div>

                <div>
                  <Button
                    // onClick={handleEliminar}
                    text="No"
                    typeButton={"button-type-1"}
                    className="my-5"
                    type="button"
                  />
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default NameAsistencia