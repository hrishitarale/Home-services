import { CalendarCheck, User, Wrench } from "lucide-react";

import Container from "../components/common/Container";
import { useAuth } from "../context/AuthContext";

function CustomerDashboard() {
  const { user } = useAuth();

  return (
    <section className="py-12">
      <Container>
        <div className="rounded-3xl bg-slate-950 p-8 sm:p-10">
          <p className="text-sm font-medium text-blue-400">
            Customer Dashboard
          </p>

          <h1 className="mt-3 text-3xl font-bold text-white">
            Welcome, {user.name}
          </h1>

          <p className="mt-3 text-slate-400">
            Manage your HomeServe bookings and profile from here.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <CalendarCheck className="text-blue-600" size={24} />

            <h2 className="mt-4 font-semibold text-slate-900">
              My Bookings
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              View your service booking history.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <Wrench className="text-blue-600" size={24} />

            <h2 className="mt-4 font-semibold text-slate-900">
              Find Services
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Find professionals for your home.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <User className="text-blue-600" size={24} />

            <h2 className="mt-4 font-semibold text-slate-900">
              My Profile
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Manage your account information.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CustomerDashboard;