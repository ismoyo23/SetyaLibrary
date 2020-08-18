import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../component/theme/admin/Header";
import Navbar from "../../component/theme/admin/Navbar";
import AbsenceComponent from "../../component/body/admin/AbsenceComponent";
import style from "../../styles/Admin/Sidebar.module.css";
import $ from "jquery";
class UsersAbsence extends Component {
  componentDidMount() {
    $(".sideBarBtn").show();
    $(".sideBarBtnHide").hide();
  }

  render() {
    let EventClick = () => {
      $(".sidebar").addClass(style.sidebar12);
      $(".navbar123").addClass(style.navbar12);
      $(".sideBarBtn").hide();
      $(".body").css("margin-left", "100px");
      $(".sideBarBtnHide").show();
    };

    let EventClickShow = () => {
      $(".sideBarBtn").show();
      $(".navbar123").addClass(style.navbar13);
      $(".sidebar").removeClass(style.sidebar12);
      $(".navbar123").removeClass(style.navbar12);
      $(".sideBarBtnHide").hide();
      $(".body").css("margin-left", "10px");
    };
    return (
      <>
        <div className={`${style.sidebar} sidebar`}>
          <Sidebar />
        </div>
        <div className={`${style.Col2} navbar123`}>
          <Navbar eventShow={EventClickShow} event={EventClick} />
          <div className="body">
            <AbsenceComponent />
          </div>
        </div>
      </>
    );
  }
}

export default UsersAbsence;