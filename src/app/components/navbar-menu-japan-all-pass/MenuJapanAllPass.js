import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faHouse,
  faBookAtlas,
  faNewspaper,
  faTrain,
  faDownload,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function MenuJapanAllPass() {
  const pathname = usePathname();
  const menus = [
    {
      name: "หน้าหลัก",
      dropdowns: null,
      icon: null,
      iconMobile: <FontAwesomeIcon icon={faHouse} />,
      setId: null,
      link: `/`,
      // path: `${pathname == "/" ? "active" : ""}`,
    },
    {
      name: "ข้อมูลเที่ยวญี่ปุ่น",
      dropdowns: null,
      icon: null,
      iconMobile: <FontAwesomeIcon icon={faBookAtlas} />,
      setId: null,
      link: `https://japanallpass.com/category/japan-fit-travel/`,
      path: "",
    },
    {
      name: "New & Update",
      dropdowns: null,
      icon: null,
      iconMobile: <FontAwesomeIcon icon={faNewspaper} />,
      setId: null,
      link: `https://japanallpass.com/category/news-update/`,
      path: "",
    },
    {
      name: "JR Pass และสินค้าอื่นๆ",
      dropdowns: [
        {
          name: "JR Pass และสินค้าอื่นๆ",
          link: `https://japanallpass.com/category/jr-pass-and-product/`,
        },
        {
          name: "JR Pass",
          link: `https://japanallpass.com/category/jr-pass-and-product/ticket-jr-pass/`,
        },
        {
          name: "Ticket",
          link: `https://japanallpass.com/category/jr-pass-and-product/ticket/`,
        },
        {
          name: "Bus",
          link: `https://japanallpass.com/category/jr-pass-and-product/ticket-bus/`,
        },
        {
          name: "One Day Tour",
          link: `https://japanallpass.com/category/jr-pass-and-product/one-day-tour/`,
        },
      ],
      icon: <FontAwesomeIcon icon={faAngleDown} />,
      iconMobile: <FontAwesomeIcon icon={faTrain} />,
      setId: 1,
    },
    {
      name: "ดาวน์โหลดข้อมูลฟรี",
      dropdowns: null,
      icon: null,
      iconMobile: <FontAwesomeIcon icon={faDownload} />,
      setId: null,
      link: `https://japanallpass.com/category/free-download/`,
      path: "",
    },
    {
      name: "ติดต่อเรา",
      dropdowns: [
        {
          name: "ติดต่อเรา",
          link: `https://japanallpass.com/contact-us/`,
        },
        {
          name: "นโยบายความเป็นส่วนตัว (Privacy Policy)",
          link: `https://japanallpass.com/%e0%b8%99%e0%b9%82%e0%b8%a2%e0%b8%9a%e0%b8%b2%e0%b8%a2%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1%e0%b9%80%e0%b8%9b%e0%b9%87%e0%b8%99%e0%b8%aa%e0%b9%88%e0%b8%a7%e0%b8%99%e0%b8%95%e0%b8%b1%e0%b8%a7-privacy-policy/`,
        },
        {
          name: "ข้อตกลงและเงื่อนไขการใช้งานเว็บไซต์",
          link: `https://japanallpass.com/privacy-policy/`,
        },
        {
          name: "นโยบายการรับเปลี่ยน-คืน สินค้า/บริการ JAPANALLPASS",
          link: `https://japanallpass.com/%e0%b8%84%e0%b8%b7%e0%b8%99%e0%b9%80%e0%b8%87%e0%b8%b4%e0%b8%99%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad%e0%b8%84%e0%b8%b7%e0%b8%99%e0%b8%aa%e0%b8%b4%e0%b8%99%e0%b8%84%e0%b9%89%e0%b8%b2/`,
        },
        {
          name: "นโยบายด้านความปลอดภัย",
          link: `https://japanallpass.com/%e0%b8%99%e0%b9%82%e0%b8%a2%e0%b8%9a%e0%b8%b2%e0%b8%a2%e0%b8%94%e0%b9%89%e0%b8%b2%e0%b8%99%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1%e0%b8%9b%e0%b8%a5%e0%b8%ad%e0%b8%94%e0%b8%a0%e0%b8%b1%e0%b8%a2/`,
        },
        {
          name: "นโยบายการแก้ปัญหาข้อร้องเรียน",
          link: `https://japanallpass.com/%e0%b8%99%e0%b9%82%e0%b8%a2%e0%b8%9a%e0%b8%b2%e0%b8%a2%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%81%e0%b8%81%e0%b9%89%e0%b8%9b%e0%b8%b1%e0%b8%8d%e0%b8%ab%e0%b8%b2%e0%b8%82%e0%b9%89%e0%b8%ad%e0%b8%a3%e0%b9%89%e0%b8%ad%e0%b8%87%e0%b9%80%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b8%99/`,
        },
      ],
      icon: <FontAwesomeIcon icon={faAngleDown} />,
      iconMobile: <FontAwesomeIcon icon={faAddressCard} />,
      setId: 2,
    },
  ];
  return (
    <>
      {/* Desktop */}
      <div className="hidden w-full lg:block lg:w-auto" id="navbar-dropdown">
        <ul className="flex gap-4 p-4 md:p-0">
          {menus.map((menu) => {
            const path = pathname == menu.link;
            return (
              <li key={menu.name}>
                {/* No Dropdown */}
                {menu.dropdowns == null && (
                  <a
                    href={menu.link}
                    className={`${
                      path ? "active" : ""
                    } block px-2 font-caption`}
                    aria-current="page"
                  >
                    {menu.name}
                  </a>
                )}
                {/* End No Dropdown */}

                {/* Use Dropdown */}
                {menu.dropdowns != null && (
                  <React.Fragment>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle={`dropdownNavbar${menu.setId}`}
                      className="flex items-center justify-between w-full px-2 gap-3 font-caption"
                    >
                      {menu.name}
                      <span className="text-base flex items-center">
                        {menu.icon}
                      </span>
                    </button>
                    <div
                      id={`dropdownNavbar${menu.setId}`}
                      className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 bg-white"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        {menu.dropdowns.map((dropdown, index) => (
                          <li key={index}>
                            <a
                              href="#"
                              className="block px-4 py-2 font-caption leading-6 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {dropdown.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </React.Fragment>
                )}
                {/* End Use Dropdown */}
              </li>
            );
          })}
        </ul>
      </div>
      {/* End Desktop */}

      {/* Mobile */}
      <div
        id="drawer-navigation"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-full sm:w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <p
          id="drawer-navigation-label"
          className="font-body font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </p>

        {/* Close Menu */}
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        {/* End Close Menu */}

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-body">
            {menus.map((menu) => (
              <li key={menu.name}>
                {/* No Dropdown */}
                {menu.dropdowns == null && (
                  <a
                    href={menu.link}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                  >
                    <span
                      className="w-5 h-5 transition duration-75 font-small"
                      aria-hidden="true"
                    >
                      {menu.iconMobile}
                    </span>

                    <p className="ms-3 font-body">{menu.name}</p>
                  </a>
                )}
                {/* End No Dropdown */}

                {/* Use Dropdown */}
                {menu.dropdowns != null && (
                  <React.Fragment>
                    <button
                      type="button"
                      className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      aria-controls="dropdown-example"
                      data-collapse-toggle={`dropdown-example${menu.setId}`}
                    >
                      <span
                        className="w-5 h-5 transition duration-75 font-small"
                        aria-hidden="true"
                      >
                        {menu.iconMobile}
                      </span>
                      <p className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-body">
                        {menu.name}
                      </p>
                      <span
                        className="flex-shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900"
                        aria-hidden="true"
                      >
                        {menu.icon}
                      </span>
                    </button>

                    <ul
                      id={`dropdown-example${menu.setId}`}
                      className="hidden py-2 space-y-2"
                    >
                      {menu.dropdowns.map((dropdown, index) => (
                        <li key={index}>
                          <a
                            href={dropdown.link}
                            className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                          >
                            {dropdown.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                )}
                {/* End Use Dropdown */}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* End Mobile */}
    </>
  );
}
