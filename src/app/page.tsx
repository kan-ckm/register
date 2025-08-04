'use client'

import { useState } from "react";
import { ArrowLeft, ArrowRight, Facebook, Instagram } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import clsx from "clsx";
import { PasswordInput } from "@/components/PasswordInput";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={clsx("container", { "right-panel-active": isRegister })} id="container">
      {/* Register Form */}
      <div className="form-container register-container">
        <form action={"#"}>
          <h1 className="text-4xl pt-20">Register</h1>
          <Input className="" type="text" placeholder="Enter your name" />
          <Input type="email" placeholder="Enter your email" />
          <PasswordInput className="" />
          <PasswordInput className="" />
          <button>Register</button>
          <span>or use your account</span>
          <div className="social-container flex items-center">
            <a href="#" className="social"><Facebook /></a>
            <a href="#" className="social"><FaGoogle size={18} /></a>
            <a href="#" className="social"><Instagram /></a>
          </div>
        </form>
      </div>

      {/* Login Form */}
      <div className="form-container login-container">
        <form action={"#"}>
          <h1 className="text-5xl pt-20">Login</h1>
          <Input type="email" placeholder="Enter your email" />
          <PasswordInput className="" />
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <button>Login</button>
          <span>or use your account</span>
          <div className="social-container flex items-center gap-2">
            <a href="#" className="social"><Facebook /></a>
            <a href="#" className="social"><FaGoogle size={18} /></a>
            <a href="#" className="social"><Instagram /></a>
          </div>
        </form>
      </div>

      {/* Overlay */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="title">I  miss <br />Mita</h1>
            <p>If you already have an account, login and have fun</p>
            <button className="ghost" id="login" onClick={() => setIsRegister(false)}>
              <i className="login"><ArrowLeft size={18} /></i>
              Login
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="title">Start your<br /> journey now</h1>
            <p>If you don&apos;t have an account yet, join us and start your journey</p>
            <button className="ghost" id="register" onClick={() => setIsRegister(true)}>
              <i className="register"><ArrowRight size={18} /></i>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
