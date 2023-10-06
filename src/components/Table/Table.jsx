import React from "react";

export default function Table() {
  return (
    <>
      <div
        className="col-md-12"
        id="contenidoDetalleEnc"
        styke={{ minHeight: "20em" }}
      >
        <div className="container" style={{ padding: 0 }}>
          <div
            className="col-md-10"
            style={{
              padding: 0,
              borderRadius: "3px",
              width: "100%",
              marginBottom: "0",
              border: "1px solid #cccc",
              paddingBottom: 0,
            }}
          >
            <table className="table table" style={{ borderRadius: "3px" }}>
              <thead id="head" style={{ borderRadius: "3px" }}>
                <tr style={{ borderRadius: "3px" }}>
                  <th
                    style={{
                      backgroundColor: "e6e6e6",
                    }}
                  >
                    <div className="manito selectable">
                      <div style={{ display: "none" }}>
                        <i
                          aria-hidden="true"
                          className="fa fa-sort"
                          style={{ color: "868686", position: "absolute" }}
                        ></i>
                        <i
                          aria-hidden="true"
                          className="fa hidden fa-sort-asc"
                          style={{ color: "868686", position: "absolute" }}
                        ></i>
                      </div>
                    </div>
                  </th>

                  <th
                    style={{
                      backgroundColor: "e6e6e6",
                    }}
                  >
                    <div className="selectable"></div>
                  </th>
                  <th style={{ backgroundColor: "e6e6e6" }}>
                    <div className="selectable">Estado</div>
                  </th>

                  <th style={{ backgroundColor: "e6e6e6" }}>
                    <div className="manito selectable">
                      Creación
                      <div style={{ display: "none" }}>
                        <i
                          aria-hidden="true"
                          className="fa fa-sort"
                          style={{ color: "#868686", position: "absolute" }}
                        ></i>
                        <i
                          aria-hidden="true"
                          className="fa hidden fa-sort-asc"
                          style={{ position: "absolute" }}
                        ></i>
                      </div>
                    </div>
                  </th>

                  <th style={{ backgroundColor: "e6e6e6" }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ height: "68px", height: "max-content" }}>
                  <td
                    className="col-md-2 col-xs-2 text-truncate"
                    title="Leandro Solano Silva"
                    style={{
                      maxHeight: "21px",
                      padding: 0,
                    }}
                  >
                    <div
                      className="col-md-2 col-xs-2 text-truncate"
                      title="EX-2023-00510696-   -GCABA-DGROC"
                      style={{ width: "fit-content" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "max-content",
                          padding: "10px 0 10px 0",
                        }}
                        className=""
                      >
                        <a
                          id="tramite 1"
                          className="explorador"
                          title="Solicitud de certificado de nivel"
                          style={{
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: 400,
                            textDecoration: "underline",
                            lineHeight: "24px",
                            color: "#007bc7",
                            wordWrap: "break-word",
                            width: "100%",
                          }}
                        >
                          Solicitud de certificado de nivel
                        </a>
                        <span
                          className="col-md-2 col-xs-2 text-truncate"
                          title="EX-2023-00510696-   -GCABA-DGROC"
                          style={{
                            width: "max-content",
                            display: "flex",
                            gap: "6px",
                            marginLeft: "0",
                            padding: "0",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{ height: "17px", cursor: "pointer" }}
                          >
                            <title>content-copy</title>
                            <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
                          </svg>

                          <span>EX-2023-00453010- -GCABA-DGROC</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td
                    className="col-md-1 col-xs-1 margen text-truncate"
                    title="Iniciación"
                  >
                    Leandro Solano Silva
                  </td>

                  <td className="date col-md-1 col-xs-1">
                    <div
                      style={{
                        width: "max-content",
                        height: "100%",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        background: "#f5f9fc",
                        borderRadius: "8px",
                        border: "1px #007bc7 solid",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#38485c",
                          fontSize: "13px",
                          fontFamily: "Open Sans",
                          fontWeight: 400,
                          textTransform: "uppercase",
                          lineHeight: "16px",
                          wordWrap: "break-word",
                        }}
                      >
                        iniciación
                      </div>
                    </div>
                  </td>

                  <td className="date col-md-1 col-xs-1" id="actions">
                    22/09/2023
                  </td>
                  <td className="date col-md-1 col-xs-1" id="actions">
                    <a
                      className="icon-toolbar accionItemActive"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                          fill="#424242"
                        ></path>
                      </svg>
                    </a>

                    <a
                      className="icon-toolbar accionItemActive"
                      href="/tramitesadistancia/detalle-tramite;idTramite=946969"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.125 11.0002C16.39 11.0002 17.4075 9.9735 17.4075 8.7085C17.4075 7.4435 16.39 6.41683 15.125 6.41683C13.86 6.41683 12.8334 7.4435 12.8334 8.7085C12.8334 9.9735 13.86 11.0002 15.125 11.0002ZM8.25004 10.0835C9.77171 10.0835 10.9909 8.85516 10.9909 7.3335C10.9909 5.81183 9.77171 4.5835 8.25004 4.5835C6.72837 4.5835 5.50004 5.81183 5.50004 7.3335C5.50004 8.85516 6.72837 10.0835 8.25004 10.0835ZM15.125 12.8335C13.4475 12.8335 10.0834 13.6768 10.0834 15.3543V16.5002C10.0834 17.0043 10.4959 17.4168 11 17.4168H19.25C19.7542 17.4168 20.1667 17.0043 20.1667 16.5002V15.3543C20.1667 13.6768 16.8025 12.8335 15.125 12.8335ZM8.25004 11.9168C6.11421 11.9168 1.83337 12.9893 1.83337 15.1252V16.5002C1.83337 17.0043 2.24587 17.4168 2.75004 17.4168H8.25004V15.3543C8.25004 14.5752 8.55254 13.2093 10.4225 12.1735C9.62504 12.0085 8.85504 11.9168 8.25004 11.9168Z"
                          fill="#424242"
                        ></path>
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr dnd-draggable="">
                  <td
                    className="col-md-2 col-xs-2 text-truncate"
                    title="Leandro Solano Silva"
                    style={{
                      width: "max-content",
                      maxHeight: "21px",
                      padding: 0,
                    }}
                  >
                    <div
                      className="col-md-2 col-xs-2 text-truncate"
                      title="EX-2023-00510696-   -GCABA-DGROC"
                      style={{ width: "fit-content" }}
                    >
                      <div
                        className=""
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "max-content",
                          padding: "10px 0 10px 0",
                        }}
                      >
                        <a
                          id="tramite 2"
                          className="explorador"
                          title="Solicitud de certificado de nivel"
                          style={{
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: 400,
                            textDecoration: "underline",
                            lineHeight: "24px",
                            color: "#007bc7",
                            wordWrap: "break-word",
                            width: "100%",
                          }}
                        >
                          Solicitud de certificado de nivel
                        </a>
                        <span
                          className="col-md-2 col-xs-2 text-truncate"
                          title="EX-2023-00510696-   -GCABA-DGROC"
                          style={{
                            width: "max-content",
                            display: "flex",
                            gap: "6px",
                            marginLeft: "0",
                            padding: "0",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{
                              height: "17px",
                              cursor: "pointer",
                            }}
                          >
                            <title>content-copy</title>
                            <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
                          </svg>

                          <span>EX-2023-00453010- -GCABA-DGROC</span>
                        </span>
                      </div>
                    </div>
                  </td>

                  <td
                    className="col-md-2 col-xs-2 text-truncate"
                    title="Leandro Solano Silva"
                  >
                    Leandro Solano Silva&nbsp;
                  </td>
                  <td className="date col-md-1 col-xs-1">
                    <div
                      style={{
                        width: "max-content",
                        height: "100%",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        background: "#f5f9fc",
                        borderRadius: "8px",
                        border: "1px #007bc7 solid",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#38485c",
                          fontSize: "13px",
                          fontFamily: "Open Sans",
                          fontWeight: 400,
                          textTransform: "uppercase",
                          lineHeight: "16px",
                          wordWrap: "break-word",
                        }}
                      >
                        Tramitación
                      </div>
                    </div>
                  </td>

                  <td className="date col-md-1 col-xs-1">22/09/2023</td>

                  <td className="date col-md-1 col-xs-1" id="actions">
                    <a
                      className="icon-toolbar accionItemActive"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                          fill="#424242"
                        ></path>
                      </svg>
                    </a>

                    <a
                      className="icon-toolbar accionItemActive"
                      href="/tramitesadistancia/detalle-tramite;idTramite=946969"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.125 11.0002C16.39 11.0002 17.4075 9.9735 17.4075 8.7085C17.4075 7.4435 16.39 6.41683 15.125 6.41683C13.86 6.41683 12.8334 7.4435 12.8334 8.7085C12.8334 9.9735 13.86 11.0002 15.125 11.0002ZM8.25004 10.0835C9.77171 10.0835 10.9909 8.85516 10.9909 7.3335C10.9909 5.81183 9.77171 4.5835 8.25004 4.5835C6.72837 4.5835 5.50004 5.81183 5.50004 7.3335C5.50004 8.85516 6.72837 10.0835 8.25004 10.0835ZM15.125 12.8335C13.4475 12.8335 10.0834 13.6768 10.0834 15.3543V16.5002C10.0834 17.0043 10.4959 17.4168 11 17.4168H19.25C19.7542 17.4168 20.1667 17.0043 20.1667 16.5002V15.3543C20.1667 13.6768 16.8025 12.8335 15.125 12.8335ZM8.25004 11.9168C6.11421 11.9168 1.83337 12.9893 1.83337 15.1252V16.5002C1.83337 17.0043 2.24587 17.4168 2.75004 17.4168H8.25004V15.3543C8.25004 14.5752 8.55254 13.2093 10.4225 12.1735C9.62504 12.0085 8.85504 11.9168 8.25004 11.9168Z"
                          fill="#424242"
                        ></path>
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr dnd-draggable="">
                  <td
                    className="col-md-2 col-xs-2 text-truncate"
                    title="Leandro Solano Silva"
                    style={{
                      width: "max-content",
                      maxHeight: "21px",
                      padding: "0",
                    }}
                  >
                    <div
                      className="col-md-2 col-xs-2 text-truncate"
                      title="EX-2023-00510696-   -GCABA-DGROC"
                      style={{
                        width: "fit-content",
                      }}
                    >
                      <div
                        className=""
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "max-content",
                          padding: "10px 0 10px 0",
                        }}
                      >
                        <a
                          id="tramite 3"
                          className="explorador"
                          title="Solicitud de certificado de nivel"
                          style={{
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: 400,
                            textDecoration: "underline",
                            lineHeight: "24px",
                            color: "#007bc7",
                            wordWrap: "break-word",
                            width: "100%",
                          }}
                        >
                          Solicitud de certificado de nivel
                        </a>
                        <span
                          className="col-md-2 col-xs-2 text-truncate"
                          title="EX-2023-00510696-   -GCABA-DGROC"
                          style={{
                            width: "max-content",
                            display: "flex",
                            /* alignItems: 'flex-start', */ // Esta línea se encuentra en un comentario y se ignorará en JSX
                            gap: "6px",
                            marginLeft: "0",
                            padding: "0",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{
                              height: "17px",
                              cursor: "pointer",
                            }}
                          >
                            <title>content-copy</title>
                            <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
                          </svg>

                          <span>EX-2023-00453010- -GCABA-DGROC</span>
                        </span>
                      </div>
                    </div>
                  </td>

                  <td
                    className="col-md-2 col-xs-2 text-truncate"
                    title="Leandro Solano Silva"
                  >
                    Leandro Solano Silva&nbsp;
                  </td>
                  <td className="date col-md-1 col-xs-1">
                    <div
                      style={{
                        width: "max-content",
                        height: "100%",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        background: "#f5f9fc",
                        borderRadius: "8px",
                        border: "1px #007bc7 solid",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#38485c",
                          fontSize: "13px",
                          fontFamily: "Open Sans",
                          fontWeight: 400,
                          textTransform: "uppercase",
                          lineHeight: "16px",
                          wordWrap: "break-word",
                        }}
                      >
                        subsanación
                      </div>
                    </div>
                  </td>

                  <td className="date col-md-1 col-xs-1">22/09/2023</td>

                  <td className="date col-md-1 col-xs-1" id="actions">
                    <a
                      className="icon-toolbar accionItemActive"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                          fill="#424242"
                        ></path>
                      </svg>
                    </a>

                    <a
                      className="icon-toolbar accionItemActive"
                      href="/tramitesadistancia/detalle-tramite;idTramite=946969"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.125 11.0002C16.39 11.0002 17.4075 9.9735 17.4075 8.7085C17.4075 7.4435 16.39 6.41683 15.125 6.41683C13.86 6.41683 12.8334 7.4435 12.8334 8.7085C12.8334 9.9735 13.86 11.0002 15.125 11.0002ZM8.25004 10.0835C9.77171 10.0835 10.9909 8.85516 10.9909 7.3335C10.9909 5.81183 9.77171 4.5835 8.25004 4.5835C6.72837 4.5835 5.50004 5.81183 5.50004 7.3335C5.50004 8.85516 6.72837 10.0835 8.25004 10.0835ZM15.125 12.8335C13.4475 12.8335 10.0834 13.6768 10.0834 15.3543V16.5002C10.0834 17.0043 10.4959 17.4168 11 17.4168H19.25C19.7542 17.4168 20.1667 17.0043 20.1667 16.5002V15.3543C20.1667 13.6768 16.8025 12.8335 15.125 12.8335ZM8.25004 11.9168C6.11421 11.9168 1.83337 12.9893 1.83337 15.1252V16.5002C1.83337 17.0043 2.24587 17.4168 2.75004 17.4168H8.25004V15.3543C8.25004 14.5752 8.55254 13.2093 10.4225 12.1735C9.62504 12.0085 8.85504 11.9168 8.25004 11.9168Z"
                          fill="#424242"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="icon-toolbar accionItemActive"
                      href="/tramitesadistancia/detalle-tramite;idTramite=946969"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.7925 6.79266L13.365 2.36516C13.0258 2.026 12.5583 1.8335 12.0725 1.8335H5.49996C4.49163 1.8335 3.67579 2.6585 3.67579 3.66683L3.66663 18.3335C3.66663 19.3418 4.48246 20.1668 5.49079 20.1668H16.5C17.5083 20.1668 18.3333 19.3418 18.3333 18.3335V8.09433C18.3333 7.6085 18.1408 7.141 17.7925 6.79266ZM13.5666 13.7502H11.9166V16.5002C11.9166 17.0043 11.5041 17.4168 11 17.4168C10.4958 17.4168 10.0833 17.0043 10.0833 16.5002V13.7502H8.44246C8.02996 13.7502 7.82829 13.2552 8.12163 12.971L10.6883 10.4135C10.8716 10.2393 11.1558 10.2393 11.3391 10.4135L13.8966 12.971C14.1716 13.2552 13.97 13.7502 13.5666 13.7502ZM12.8333 8.25016C12.3291 8.25016 11.9166 7.83766 11.9166 7.3335V3.2085L16.9583 8.25016H12.8333Z"
                          fill="#424242"
                        ></path>
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr dnd-draggable="">
                  <td
                    className="col-md-2 col-xs-2 text-truncate"
                    title="Leandro Solano Silva"
                    style={{
                      width: "max-content",
                      /* height: '67px', */ // Esta línea se encuentra en un comentario y se ignorará en JSX
                      maxHeight: "21px",
                      padding: "0",
                    }}
                  >
                    <div
                      className="col-md-2 col-xs-2 text-truncate"
                      title="EX-2023-00510696-   -GCABA-DGROC"
                      style={{ width: "fit-content" }}
                    >
                      <div
                        className=""
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "max-content",
                          padding: "10px 0 10px 0",
                        }}
                      >
                        <a
                          id="tramite 4"
                          className="explorador"
                          title="Solicitud de certificado de nivel"
                          style={{
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: 400,
                            textDecoration: "underline",
                            lineHeight: "24px",
                            color: "#007bc7",
                            wordWrap: "break-word",
                            width: "100%",
                          }}
                        >
                          Solicitud de certificado de nivel
                        </a>
                        <span
                          className="col-md-2 col-xs-2 text-truncate"
                          title="EX-2023-00510696-   -GCABA-DGROC"
                          style={{
                            width: "max-content",
                            display: "flex",
                            /* alignItems: 'flex-start', */ // Esta línea se encuentra en un comentario y se ignorará en JSX
                            gap: "6px",
                            marginLeft: "0",
                            padding: "0",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{ height: 17, cursor: "pointer" }}
                          >
                            <title>content-copy</title>
                            <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
                          </svg>

                          <span>EX-2023-00453010- -GCABA-DGROC</span>
                        </span>
                      </div>
                    </div>
                  </td>

                  <td
                    className="col-md-2 col-xs-2 text-truncate"
                    title="Leandro Solano Silva"
                  >
                    Leandro Solano Silva&nbsp;
                  </td>
                  <td className="date col-md-1 col-xs-1">
                    <div
                      style={{
                        width: "max-content",
                        height: "100%",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        background: "#f5f9fc",
                        borderRadius: "8px",
                        border: "1px #007bc7 solid",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#38485c",
                          fontSize: "13px",
                          fontFamily: "Open Sans",
                          fontWeight: 400,
                          textTransform: "uppercase",
                          lineHeight: "16px",
                          wordWrap: "break-word",
                        }}
                      >
                        iniciación
                      </div>
                    </div>
                  </td>

                  <td className="date col-md-1 col-xs-1">22/09/2023</td>

                  <td className="date col-md-1 col-xs-1" id="actions">
                    <a
                      className="icon-toolbar accionItemActive"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                          fill="#424242"
                        ></path>
                      </svg>
                    </a>

                    <a
                      className="icon-toolbar accionItemActive"
                      href="/tramitesadistancia/detalle-tramite;idTramite=946969"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.125 11.0002C16.39 11.0002 17.4075 9.9735 17.4075 8.7085C17.4075 7.4435 16.39 6.41683 15.125 6.41683C13.86 6.41683 12.8334 7.4435 12.8334 8.7085C12.8334 9.9735 13.86 11.0002 15.125 11.0002ZM8.25004 10.0835C9.77171 10.0835 10.9909 8.85516 10.9909 7.3335C10.9909 5.81183 9.77171 4.5835 8.25004 4.5835C6.72837 4.5835 5.50004 5.81183 5.50004 7.3335C5.50004 8.85516 6.72837 10.0835 8.25004 10.0835ZM15.125 12.8335C13.4475 12.8335 10.0834 13.6768 10.0834 15.3543V16.5002C10.0834 17.0043 10.4959 17.4168 11 17.4168H19.25C19.7542 17.4168 20.1667 17.0043 20.1667 16.5002V15.3543C20.1667 13.6768 16.8025 12.8335 15.125 12.8335ZM8.25004 11.9168C6.11421 11.9168 1.83337 12.9893 1.83337 15.1252V16.5002C1.83337 17.0043 2.24587 17.4168 2.75004 17.4168H8.25004V15.3543C8.25004 14.5752 8.55254 13.2093 10.4225 12.1735C9.62504 12.0085 8.85504 11.9168 8.25004 11.9168Z"
                          fill="#424242"
                        ></path>
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr dnd-draggable="">
                  <td
                    className="col-md-2 col-xs-2 text-truncate"
                    title="Leandro Solano Silva"
                    style={{
                      width: "max-content",
                      /* height: '67px', */ // Esta línea se encuentra en un comentario y se ignorará en JSX
                      maxHeight: "21px",
                      padding: "0",
                    }}
                  >
                    <div
                      className="col-md-2 col-xs-2 text-truncate"
                      title="EX-2023-00510696-   -GCABA-DGROC"
                      style={{
                        width: "fit-content",
                      }}
                    >
                      <div
                        className=""
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "max-content",
                          padding: "10px 0 10px 0",
                        }}
                      >
                        <a
                          id="tramite 5"
                          className="explorador"
                          title="Solicitud de certificado de nivel"
                          style={{
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: 400,
                            textDecoration: "underline",
                            lineHeight: "24px",
                            color: "#007bc7",
                            wordWrap: "break-word",
                            width: "100%",
                          }}
                        >
                          Solicitud de partidas
                        </a>
                        <span
                          classname="col-md-2 col-xs-2 text-truncate"
                          title="EX-2023-00510696-   -GCABA-DGROC"
                          style={{
                            width: "max-content",
                            display: "flex" /* alignItems: 'flex-start', */,
                            gap: 6,
                            marginLeft: 0,
                            padding: 0,
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{ height: 17, cursor: "pointer" }}
                          >
                            <title>content-copy</title>
                            <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
                          </svg>

                          <span>01234567/23</span>
                        </span>
                      </div>
                    </div>
                  </td>

                  <td
                    className="col-md-2 col-xs-2 text-truncate"
                    title="Leandro Solano Silva"
                  >
                    Leandro Solano Silva&nbsp;
                  </td>
                  <td className="date col-md-1 col-xs-1">
                    <div
                      style={{
                        width: "max-content",
                        height: "100%",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        background: "#f5f9fc",
                        borderRadius: "8px",
                        border: "1px #007bc7 solid",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#38485c",
                          fontSize: 13,
                          fontFamily: "Open Sans",
                          fontWeight: 400,
                          textTransform: "uppercase",
                          lineHeight: 16,
                          wordWrap: "break-word",
                        }}
                      >
                        iniciación
                      </div>
                    </div>
                  </td>

                  <td className="date col-md-1 col-xs-1">22/09/2023</td>

                  <td className="date col-md-1 col-xs-1" id="actions">
                    <a
                      className="icon-toolbar accionItemActive"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                          fill="#424242"
                        ></path>
                      </svg>
                    </a>

                    <a
                      className="icon-toolbar accionItemActive"
                      href="/tramitesadistancia/detalle-tramite;idTramite=946969"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.125 11.0002C16.39 11.0002 17.4075 9.9735 17.4075 8.7085C17.4075 7.4435 16.39 6.41683 15.125 6.41683C13.86 6.41683 12.8334 7.4435 12.8334 8.7085C12.8334 9.9735 13.86 11.0002 15.125 11.0002ZM8.25004 10.0835C9.77171 10.0835 10.9909 8.85516 10.9909 7.3335C10.9909 5.81183 9.77171 4.5835 8.25004 4.5835C6.72837 4.5835 5.50004 5.81183 5.50004 7.3335C5.50004 8.85516 6.72837 10.0835 8.25004 10.0835ZM15.125 12.8335C13.4475 12.8335 10.0834 13.6768 10.0834 15.3543V16.5002C10.0834 17.0043 10.4959 17.4168 11 17.4168H19.25C19.7542 17.4168 20.1667 17.0043 20.1667 16.5002V15.3543C20.1667 13.6768 16.8025 12.8335 15.125 12.8335ZM8.25004 11.9168C6.11421 11.9168 1.83337 12.9893 1.83337 15.1252V16.5002C1.83337 17.0043 2.24587 17.4168 2.75004 17.4168H8.25004V15.3543C8.25004 14.5752 8.55254 13.2093 10.4225 12.1735C9.62504 12.0085 8.85504 11.9168 8.25004 11.9168Z"
                          fill="#424242"
                        ></path>
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
