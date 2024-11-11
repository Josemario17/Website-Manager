import React, { useState } from "react";
import Title from "../Title";

const News = () => {
  return (
    <div className="w-full h-auto px-20 pt-10">
      <section className="max-w-7xl">
        <Title />
        <div className="flex justify-center items-center min-h-screen -mt-24">
          <div className="w-full max-w-7xl border border-gray-400 rounded-lg overflow-x-auto">
            <table className="w-full text-left">
              <thead className="rounded-lg">
                <tr>
                  <th className="p-4 w-[20%]">
                    <div className="flex items-center text-2xl font-bold w-full">
                      Noticias
                    </div>
                  </th>
                  <th className="px-4 py-3 w-[15%]"></th>
                  <th className="px-4 py-3 w-[23%]"></th>
                  <th className="px-4 py-3 w-[15%]"></th>
                  <th className="px-4 py-3 w-[10%]">
                    <button className=" border border-gray-400 rounded-md text-base font-normal text-white px-6 py-2 hover:bg-white hover:text-black">
                      Adicionar
                    </button>
                  </th>
                </tr>
              </thead>
              <thead className="font-bold border-t border-gray-400">
                <tr>
                  <th className="px-4 py-3 w-[20%]">
                    <div className="flex items-center gap-2 w-full">Titulo</div>
                  </th>
                  <th className="px-4 py-3 w-[15%]">Categoria</th>
                  <th className="px-4 py-3 w-[18%]">Data do Post</th>
                  <th className="px-4 py-3 w-[15%]">Postado Por</th>
                  <th className="px-4 py-3 w-[10%]"></th>
                </tr>
              </thead>
              <tbody>
                {Array(10)
                  .fill()
                  .slice(0, 5)
                  .map((_, index) => (
                    <tr key={index} className="border-t border-gray-400">
                      <td className="px-4 py-3 w-[20%]">
                        <div className="flex items-center space-x-2 w-full">
                          <div className="bg-gray-200 rounded-full h-8 w-8"></div>
                          <span>Titulo</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 w-[15%]">
                        <span className="rounded-md">Categoria</span>
                      </td>
                      <td className="px-4 py-3 w-[18%]">23/02/2002</td>
                      <td className="px-4 py-3 w-[15%]">Username</td>
                      <td className="px-4 py-3 w-[10%]">
                        <div className="flex w-full justify-end">
                          <button className="flex flex-col gap-y-1 text-white hover:text-gray-300 mr-3">
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
                                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                              />
                            </svg>
                          </button>
                          <button className="flex flex-col gap-y-1 text-white hover:text-gray-300 mr-3">
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
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                            </svg>
                          </button>
                          <button className="flex flex-col gap-y-1 text-white hover:text-gray-300 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="red"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="w-full min-w-[720px]">
              <div className="flex justify-between items-center p-4 border-t border-gray-400 w-full">
                <button className="font-bold border border-gray-400 md:px-4 md:py-2 p-2 rounded-md hover:border-gray-100">
                  Anterior
                </button>
                <div>
                  <ul className="flex">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <li
                          key={i}
                          className={`px-4 py-3 ${i === 0 ? "border border-gray-200 rounded-lg" : ""}`}
                        >
                          {i + 1}
                        </li>
                      ))}
                  </ul>
                </div>
                <button className="font-bold border border-gray-400 md:px-4 md:py-3 p-2 rounded-md hover:border-gray-100">
                  Próximo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
