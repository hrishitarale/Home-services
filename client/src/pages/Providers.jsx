import {Search, MapPin, Star, Briefcase } from "lucide-react";
import Container from "../components/common/Container";

function Providers() {
    const providers = [
        {
            name: "Rajesh Kumar",
            service:"Electrician",
            experience:"8 Years",
            rating:"4.8",
            city:"Amravati",
        },
        {
            name:"Amit Patil",
            service:"Plumber",
            experience:"5 Years",
            rating:"4.5",
            city:"Amravati",
        },
        {
            name:"Suresh Gupta",
            service:"Carpenter",
            experience:"10 Years",
            rating:"4.9",
            city:"Amravati",
        },
    ];

    return(
        <section className="py-16 sm:py-20">
            <Container>
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Find professionals
                    </p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Find Trusted Professionals</h1>
                    <p className="mt-4 text-lg text-slate-600">
                        Search and compare service professionals based on their service and location. 
                    </p>
                </div>
                {/* search */}
                <div className="mt-10 rounded-2xl border border-slate-200bg-white p-4 shadow-sm">
                    <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                        <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4">
                            <Search size={20} className="text-slate-400" />

                            <input type="text" placeholder="Search service..." className="w-full border-none bg-transparent py-3 outline-none" />
                        </div>
                        <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4">
                            <MapPin size={20} className="text;slate-400" />
                            <input type="text" plceholder="Enter City..." className="w-full border-none bg-transparent py-3 outline-none" />
                        </div>
                        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                            Search
                        </button>
                    </div>
                </div>
                
                {/* Provider cards */}
                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    {providers.map((provider) => (
                        <div key={provider.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-transparent-y-1 hover:shadow-lg">
                            <div className="h-24 bg-slate-100" />
                            <div className="-mt-10 px-6 pb-6">
                                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-blue-600 text-2xl font-bold text-white">
                                    {provider.name.charAt(0)}
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-xl font-semibold text-slate-900">{provider.name}</h2>
                                    <p className="mt-1 font-medium text-blue-600">{provider.service}</p>
                                    <div className="mt-4 space-y-2 text-sm text-slate-500">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            {provider.experience}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            {provider.city}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star size={16}  className="fill-current text-amber-500"/>
                                            <span className="font-medium text-slate-700">
                                                {provider.rating}
                                            </span>
                                            <span>Rating</span>
                                        </div>
                                    </div>

                                    <button className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Providers;