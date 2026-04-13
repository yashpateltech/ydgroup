/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Solutions from "./components/Solutions";
import FreeProducts from "./components/FreeProducts";
import FAQ from "./components/FAQ";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Solutions />
        <FreeProducts />
        <FAQ />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}


