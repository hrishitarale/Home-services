import {Link} from "react-router-dom";
import {Wrench} from "lucide-react";
import Container from "../common/Container";

function Footer(){
    return(
        <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
            <Container>
                <div className="grid gap-10 py-12 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                                <Wrench size={20} />
                            </div>
                            <span className="text-xl font-bold text-white">
                                Home<span className="text-blue-400">Serve</span>
                            </span>
                        </div>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
                            Find Trusted Professionals for your Home Services quickly and conveniently. Our platform connects you with skilled experts to meet your needs.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white">
                            Quick Links
                        </h3>
                        <div className="mt-4 flex flex-col gap-3 text-sm">
                            <Link to="/" className="hover:text-white">
                                Home
                            </Link>
                            <Link to="/services" className="hover:text-white">
                                Services
                            </Link>
                            <Link to="/providers" className="hover:text-white">
                                Find Professionals
                            </Link>
                        </div>
                    </div>
                    {/* Account */}
                    <div>
                        <h3 className="font-semibold text-white">
                            Account
                        </h3>
                        <div className="mt-4 flex flex-col gap-3 text-sm">
                            <Link to="/login" className="hover:text-white">
                                Login
                            </Link>
                            <Link to="/register" className="hover:text-white">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} Home Service. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;