import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="page-shell">
      <div className="auth-layout">
        <section className="auth-card">
          <div>
            <h1 className="auth-heading">Register Your Account</h1>
            <p className="auth-subtext">
              Enter your credentials to register your account
            </p>
          </div>

          <div className="form-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Manamadhan"
              className="text-input"
              defaultValue="Manamadhan"
            />
          </div>

          <div className="form-field">
            <label htmlFor="regEmail">Email address</label>
            <input
              id="regEmail"
              type="email"
              placeholder="manmadhanaros@gmail.com"
              className="text-input"
              defaultValue="manmadhanaros@gmail.com"
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Mobile Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 97913 36435"
              className="text-input"
              defaultValue="+91 97913 36435"
            />
          </div>

          <Link href="/dashboard">
            <button className="primary-btn" type="button">
              Register Now
            </button>
          </Link>

          <div className="register-strip">
            Already have an account?{" "}
            <Link className="muted-link" href="/">
              Login
            </Link>
          </div>
        </section>

        <Image
          src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1200&q=80"
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

