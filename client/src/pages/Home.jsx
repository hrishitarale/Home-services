import {
  Search,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  Wrench,
  Zap,
  Droplets,
  Paintbrush,
} from "lucide-react";

import Container from "../components/common/Container";
import Button from "../components/common/Button";

function Home() {
  const services = [
    {
      name: "Electrician",
      icon: Zap,
      description: "Electrical repairs and installations.",
    },
    {
      name: "Plumber",
      icon: Droplets,
      description: "Plumbing repairs and maintenance.",
    },
    {
      name: "Carpenter",
      icon: Wrench,
      description: "Furniture and woodwork services.",
    },
    {
      name: "Painter",
      icon: Paintbrush,
      description: "Professional painting services.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Find a Professional",
      description:
        "Search for trusted service professionals based on your required service and location.",
      icon: Search,
    },
    {
      number: "02",
      title: "Book a Service",
      description:
        "View professional profiles and submit a booking request at your preferred time.",
      icon: CalendarCheck,
    },
    {
      number: "03",
      title: "Get Your Service",
      description:
        "Connect with the selected professional and get your home service completed.",
      icon: ShieldCheck,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.25),_transparent_45%)]" />

        <Container className="relative">
          <div className="grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-2">
            
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
                <ShieldCheck size={16} />
                Trusted Home Service Professionals
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Find the right professional for your{" "}
                <span className="text-blue-400">
                  home.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                HomeServe makes it simple to find, compare and book
                professionals for your everyday home service needs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/providers">
                  Find a Professional
                  <ArrowRight size={18} className="ml-2" />
                </Button>

                <Button
                  to="/register"
                  variant="outline"
                  className="border-slate-700 bg-transparent text-white hover:bg-slate-800"
                >
                  Join HomeServe
                </Button>
              </div>
            </div>

            {/* Hero Card */}
            <div className="hidden lg:block">
              <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-2xl bg-white p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Wrench size={28} />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        Home Services
                      </p>
                      <p className="text-sm text-slate-500">
                        Professionals near you
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {services.slice(0, 3).map((service) => {
                      const Icon = service.icon;

                      return (
                        <div
                          key={service.name}
                          className="flex items-center gap-4 rounded-xl border border-slate-100 p-4"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                            <Icon size={20} />
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              {service.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              Available professionals
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need for your home
            </h2>

            <p className="mt-4 text-slate-600">
              Browse professionals across common home service categories.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.name}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 font-semibold text-slate-900">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                  <Button
                    to="/providers"
                    variant="secondary"
                    className="mt-5 w-full"
                  >
                    View Professionals
                  </Button>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Get your service in three simple steps
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl bg-white p-8 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <Icon size={22} />
                    </div>

                    <span className="text-4xl font-bold text-slate-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center sm:px-12">
            <h2 className="text-3xl font-bold text-white">
              Ready to get started?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-blue-100">
              Find a reliable professional for your home service needs.
            </p>

            <Button
              to="/providers"
              variant="secondary"
              className="mt-7"
            >
              Find a Professional
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;