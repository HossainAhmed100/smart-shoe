import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Avatar, DropdownMenu, DropdownItem, DropdownTrigger, Dropdown, Badge, Button} from "@nextui-org/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";
import { FaCartShopping } from "react-icons/fa6";
import { VscSignOut } from "react-icons/vsc";
import Swal from "sweetalert2";
import auth from "../../../firebase/firebase.config";
import {ShoeLogo} from "../../../assets/ShoeLogo";
import "./NavBar.css";


function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [signOut] = useSignOut(auth);
    const menuItems = [
        "Profile",
        "Log Out",
      ];
    const handleLogOut = async () => {
      const success = await signOut();
        if (success) {
          navigate("/login")
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logout Successfull",
            showConfirmButton: false,
            timer: 1500
          });
      }
    }
  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/" className="flex items-center gap-2 justify-center">
          <ShoeLogo />
          <p className="font-bold text-inherit">Smart Shoe</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink color="foreground" to="/">Home</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="/allProduct">Product</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="/about">About</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="/contact">Contact</NavLink>
        </NavbarItem>
      </NavbarContent>
      {
        user ? 
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="/dashboard/messages">
              <Badge color="danger" content={0} shape="circle">
                <FaCartShopping size={30}/>
              </Badge>
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar isBordered as="button" className="transition-transform" color="primary" 
                  name={user?.displayName} size="sm"
                  src={user?.photoURL}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem textValue="userNameandEmail" key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user?.email}</p>
                </DropdownItem>
                <DropdownItem textValue="myProfile" key="Provile">Profile</DropdownItem>
                <DropdownItem textValue="dashboard" key="dashboard">Dashbaord</DropdownItem>
                <DropdownItem textValue="termsAndConditions" key="termsAndConditions">Terms & Conditions</DropdownItem>
                <DropdownItem textValue="privicPolicy" key="privicPolicy">Privicy Policy</DropdownItem>
                <DropdownItem textValue="logout" onClick={handleLogOut} key="logout" color="danger" className="flex items-center justify-center flex-row gap-2">
                  <span className="flex items-center gap-1 justify-start">
                  <VscSignOut />
                  Log Out
                  </span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent> :
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
          </NavbarItem>
        </NavbarContent> 
      }
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full" to="/" size="lg" >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar
