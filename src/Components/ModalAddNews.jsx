import React from "react";
import Editor from "./TextEditor";
import ButtonCustom from "./ButtonCustom";
import { useAllStore } from "../Store/AppStore";

export default function ModalAddNews() {
  const { modalStatusShow, setModalStatusShow } = useAllStore();
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
        <div className="bg-[#111827] p-8 px-10 rounded-lg shadow-lg max-w-4xl w-full min-h-[80%]">
          <div className="mb-4 grid">
            <span className="text-lg">Adicionar Noticias</span> <br />
            <span className="text-xs">
              Ao adicionar Noticias tenha em atenção o conteudo a ser postado
            </span>
          </div>{" "}
          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label htmlFor="title" className="bloc font-medium text-gray-300">
                Titulo
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full mt-1 px-2 py-2.5 rounded-lg border border-solid border-gray-300 bg-white/10 focus:outline-none focus:border-gray-200 focus:bg-white/5"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="category"
                className="block  font-medium text-gray-300"
              >
                Categoria
              </label>
              <select
                id="category"
                name="category"
                className="w-full mt-1 px-2 py-3 rounded-lg border border-solid border-gray-300 bg-white/10 focus:outline-none focus:border-gray-200 focus:bg-white/5"
              >
                <option value="celebridade">Celebridade</option>
                <option value="desporto">Desporto</option>
                <option value="mundo">Mundo</option>
              </select>
            </div>
            <div className="col-span-2">
              <Editor />
            </div>
            <div></div>
            <div className="flex justify-end items-center gap-4">
              <button
              onClick={e => setModalStatusShow(!modalStatusShow)}
                className="w-full border border-white text-white px-2 py-2 mt-4 text-center rounded-lg hover:bg-white/10 duration-300">
                Cancelar
              </button>
              <ButtonCustom type={'submit'} text="Finalizar"  />
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
}
