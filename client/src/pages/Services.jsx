import {Zap, Droplets, Wrench, Paintbrush, Hammer, Sparkles,} from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

function Services() {
    const services =[
        {
            name: "Electrician",
            icon: Zap,
            description: "Electrical installation, repairs, wiring and maintenance.",
        },
        {
            icon: Droplets,
            name: "Plumber",
            description: "Pipe repairs, water systems, fittings and plumbing maintenance.",
        },
        {
            name: "Carpenter",
            icon: Hammer,
            description: "Furniture repairs, woodwork, doors and custom carpentry.",
        },
        {
            name: "Painter",
            icon: Paintbrush,
            description: "Interior and exterior painting, wall finishes and coatings.",
        },
        {
            name: "Home Repair",
            icon: Wrench,
            description: "General home repairs, maintenance and handyman services.",
        },
        {
            name: "Cleaning",
            icon: Sparkles,
            description: "House cleaning and deep cleaning services.",
        },
    ];

    return(
        <section className="py-16 sm:py-20">
            <Container>
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Services</p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                        Home Services made simple
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                        Choose a service and find professionals who can help with your home service requirements.
                    </p>        
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return(
                            <div key={service.name} className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shandow-lg"> 
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <Icon size={26} />
                                </div>
                                <h2 className="mt-6 text-xl font-semibold text-slate-900">
                                    {service.name}
                                </h2>
                                <p className="mt-3 leading-7 text-slate-500">
                                    {service.description}
                                </p>
                                <Button to="/providers" variant="outline" className="mt-6">
                                    Find Professionals
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );

}
export default Services;