import React, { useState } from "react";
import VisitCharts from "../VisitCharts";
import men from "../../assets/img/Man2.png";
import postImage from "../../assets/img/posts.png";
import pagesImage from "../../assets/img/pages.png";
import comentsImage from "../../assets/img/comment.png";
import SectionNewsDashboard from "../SectionNewsDashboard";
import Title from "../Title";
import { useAllStore } from "../../Store/AppStore";

const Dashboard = () => {
    const [categoria, setCategoria] = useState("Editor/Escritor");
    const { setDashboardPath, modalStatusShow, setModalStatusShow } = useAllStore();
    const [nome, setNome] = useState("@user");
    const [noticias, setNoticias] = useState([
        {
          id: 0,
          titulo: "Ordenamento Social das pontes",
          img: "https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=",
          viwes: 10,
          coments: 12,
        },
        {
          id: 0,
          titulo: "Ordenamento Social das pontes",
          img: "https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=",
          viwes: 10,
          coments: 12,
        },
        {
          id: 0,
          titulo: "Ordenamento Social das pontes",
          img: "https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=",
          viwes: 10,
          coments: 12,
        },
        {
          id: 0,
          titulo: "Ordenamento Social das pontes",
          img: "https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=",
          viwes: 10,
          coments: 12,
        },
      ]);
  return (
    <div className="w-full h-auto px-20 pt-10">
      <Title />
      <div className="w-auto h-auto my-7 flex justify-between gap-4">
        <div className="p-6 border border-solid rounded-lg border-gray-300 grow relative flex flex-col justify-between">
          <img
            src={men}
            alt="men image"
            className="w-36 absolute -top-20 -right-0"
          />
          <div className="grid">
            <span className="text-2xl">Olá {nome}</span>
            <span className="text-gray-400 text-lg">{categoria}</span>
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
            <img src={postImage} alt="posts image" className="size-20 mb-6" />
          </div>
          <div className="grid">
            <span className="text-gray-300">Total de Posts</span>
            <span className="text-xl">299</span>
          </div>
        </div>

        <div className="p-6 border border-solid rounded-lg flex flex-col justify-end border-gray-700 bg-white/10 min-w-[250px]">
          <div>
            <img src={pagesImage} alt="pages image" className="size-20 mb-6" />
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

      <div className="w-full flex justify-between gap-6">
        <div className="w-auto flex justify-start">
          <VisitCharts></VisitCharts>
        </div>
        <div className="w-auto grow flex flex-col items-start gap-0">
          <div className="w-full flex justify-between py-3 items-center h-auto">
            <a href="" className="text-2xl">
              Posts Recentes
            </a>
            <button onClick={e => {
              setDashboardPath("News");
              setModalStatusShow(!modalStatusShow);
            } }  className="w-auto px-6 h-10 items-center duration-200 ease-in-out flex justify-between gap-4 border border-solid border-gray-300 rounded-lg hover:bg-[#7577cd] hover:text-white hover:border-[#7577cd]">
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
          {noticias.map((item, index) => {
            return (
              <SectionNewsDashboard
                key={index}
                titulo={item.titulo}
                img={item.img}
                coments={item.coments}
                viwes={item.viwes}
              ></SectionNewsDashboard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
