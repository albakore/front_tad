import React from "react";

export default function UserInfo({name,level,children}) {
  return (
    <>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border dropdown-toggle"
          data-toggle="dropdown"
        >
          <span style={{fontWeight: 600}} className="btn-dropdown-text">{name}</span>
          <span className="btn-dropdown-text">{ level }</span>
          <span className="material-icons-round btn-dropdown-icon">
            expand_more
          </span>
        </button>
        <div
          className="dropdown-menu"          
          style={{ position: 'absolute', transform: 'translate3d(0px, 48px, 0px)', top: 0, left: 0, willChange: 'transform' }}
        >
          {children}
          
        </div>
      </div>
    </>
  );
}
