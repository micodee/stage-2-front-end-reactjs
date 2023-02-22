import React from "react";
import { Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCust = (rest) => {
  return (
    <div>
      <Form className="d-flex align-items-center gap-3">
        <Link to="/cart">
          <img
            src={`img/nav-cart.png`}
            alt="icon"
            style={{ width: "35px", height: "32px", cursor: "pointer" }}
          />
        </Link>
        <Dropdown className="dropdown">
          <Dropdown.Toggle className="profile">
            <img
              src={`img/drop-profile.png`}
              alt="icon"
              style={{
                width: "60px",
                height: "60px",
                cursor: "pointer",
              }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/profile" className="menu">
                <img src={`img/drop-user.png`} alt="user" />
                Profile
              </Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={rest.logout} className="menu">
              <img src={`img/drop-logout.png`} alt="logout" />
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    </div>
  );
};

export default UserCust;
