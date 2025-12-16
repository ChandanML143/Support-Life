 "use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="page-shell">
      <div className="auth-layout">
        <section className="auth-card">
          <div>
            <h1 className="auth-heading">Welcome Back</h1>
            <p className="auth-subtext">
              Enter your credentials to login your account
            </p>
          </div>

          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="manmadhanaros@gmail.com"
              className="text-input"
              defaultValue="manmadhanaros@gmail.com"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                className="text-input password-input"
                defaultValue="password123"
              />
              <button
                type="button"
                className="eye-toggle"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
              >
                👁
              </button>
            </div>
          </div>

          <div className="actions-row">
            <label className="checkbox-row">
              <input type="checkbox" defaultChecked />
              Remember me
            </label>
            <Link className="muted-link" href="#">
              Forgot password?
            </Link>
          </div>

          <Link href="/dashboard">
            <button className="primary-btn" type="button">
              Login
            </button>
          </Link>

          <div className="register-strip">
            Don&apos;t have an account?{" "}
            <Link className="muted-link" href="/register">
              Register
            </Link>
          </div>
        </section>

        <Image
          src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=80"
          alt="Doctor portrait"
          width={750}
          height={935}
          className="doctor-photo"
          priority
        />
      </div>
    </div>
  );
}
