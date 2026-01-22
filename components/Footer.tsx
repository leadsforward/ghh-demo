import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif font-bold text-white mb-4 tracking-tight">
              GHH
            </h3>
            <p className="text-sm text-neutral-400 mb-2">Gold Heart Homes</p>
            <p className="text-neutral-400 mb-4 max-w-md leading-relaxed">
              Design-build remodeling in Kansas City. One team guiding every detail
              from concept to completion.
            </p>
            <div className="space-y-2">
              <a
                href="tel:9133792423"
                className="flex items-center text-neutral-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                (913) 379-2423
              </a>
              <a
                href="mailto:dustin@goldhearthomes.com"
                className="flex items-center text-neutral-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                dustin@goldhearthomes.com
              </a>
              <div className="flex items-start text-neutral-300">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>11121 College Ave #1, Kansas City, MO 64137</span>
              </div>
              <div className="text-sm text-neutral-400 mt-2">
                Open Mon-Sat 8:00 AM to 9:00 PM
              </div>
              <div className="text-sm text-neutral-400">
                LIC#: 2023-0010631
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/interiors"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Interiors
                </Link>
              </li>
              <li>
                <Link
                  href="/services/exteriors"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Exteriors
                </Link>
              </li>
              <li>
                <Link
                  href="/services/3d-rendering"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  3D Rendering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/additions"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Additions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-served"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Areas Served
                </Link>
              </li>
              <li>
                <Link
                  href="/financing"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Financing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-neutral-400 mb-6">
            <div>
              <h5 className="text-white font-semibold mb-2">Service Areas</h5>
              <p className="text-xs">
                Kansas City, Independence, Lee's Summit, Overland Park, Shawnee,
                Olathe, Lenexa, Liberty
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">Quick Links</h5>
              <div className="flex flex-col space-y-1">
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Our Work
                </Link>
                <Link href="/financing" className="hover:text-white transition-colors">
                  Financing
                </Link>
              </div>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">Legal</h5>
              <div className="flex flex-col space-y-1">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-neutral-500 border-t border-neutral-800 pt-6">
            <p>
              Copyright © Gold Heart Homes {new Date().getFullYear()}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
