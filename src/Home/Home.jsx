import { Link } from "react-router-dom";
import NavBarLeft from "../Components/MainComponentes/NavBarLeft";
import NavBarTop from "../Components/MainComponentes/NavBarTop";
import { useState } from "react";
import postImage from "../assets/img/posts.png";
import pagesImage from "../assets/img/pages.png";
import comentsImage from "../assets/img/comment.png";
import men from "../assets/img/Man2.png";
import VisitCharts from "../Components/VisitCharts";

export default function Home() {
  const [nome, setNome] = useState("@user");
  const [categoria, setCategoria] = useState("Editor/Escritor");

  return (
    <>
      <div className="w-screen h-screen max-w-full flex min-w-[1200px]">
        <NavBarLeft></NavBarLeft>
        <div className="w-full h-auto pl-24">
          <NavBarTop></NavBarTop>
          <div className="w-full h-auto px-20 pt-10">
            <div className="w-auto h-auto">
              <h1 className="text-4xl">Bem-vindo </h1>
              <span className="text-gray-400">Saudações Pelo Turno!</span>
            </div>

            <div className="w-auto h-auto my-7 flex justify-between gap-4">
              <div className="p-6 border border-solid rounded-lg border-gray-300 grow relative flex flex-col justify-end">
                <img
                  src={men}
                  alt="men image"
                  className="w-36 absolute -top-20 -right-0"
                />
                <div className="grid">
                  <span className="text-xl">Olá {nome}</span>
                  <span className="text-gray-400">{categoria}</span>
                </div>

                <div className="w-full h-auto my-3 flex gap-5">
                  <div className="text-gray-400">
                    <span className="text-xl text-gray-100">32</span>
                    <span> Posts no Total</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-xl text-gray-100">2002</span>
                    <span> Edições</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-solid rounded-lg flex flex-col justify-end border-gray-700 bg-white/10 min-w-[250px]">
                <div>
                  <img
                    src={postImage}
                    alt="posts image"
                    className="size-20 mb-6"
                  />
                </div>
                <div className="grid">
                  <span className="text-gray-300">Total de Posts</span>
                  <span className="text-xl">299</span>
                </div>
              </div>

              <div className="p-6 border border-solid rounded-lg flex flex-col justify-end border-gray-700 bg-white/10 min-w-[250px]">
                <div>
                  <img
                    src={pagesImage}
                    alt="pages image"
                    className="size-20 mb-6"
                  />
                </div>
                <div className="grid">
                  <span className="text-gray-300">Total de Páginas</span>
                  <span className="text-xl">23</span>
                </div>
              </div>

              <div className="p-6 border border-solid rounded-lg flex flex-col justify-end border-gray-700 bg-white/10 min-w-[250px]">
                <div>
                  <img
                    src={comentsImage}
                    alt="comment image"
                    className="size-20 mb-6"
                  />
                </div>
                <div className="grid">
                  <span className="text-gray-300">Comentários</span>
                  <span className="text-xl">25</span>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="w-1/2 flex justify-start">
                <VisitCharts></VisitCharts>
              </div>
              <div className="">
                Posts Recentes
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Adicionar
                </button>
              </div>
              <div>
                <img src="" alt="" />
                <div>
                  <h2>Cidades Inteligentes</h2>
                  <div>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                      </svg>
                      302 Comentários
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      560 Visualizações
                    </span>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
