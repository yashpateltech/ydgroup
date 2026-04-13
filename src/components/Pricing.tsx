import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  const freeFeatures = [
    "Available only to new YDGROUPS customers",
    "Free monthly amounts of 20+ popular services for 12 months",
    "Free monthly amounts of 55+ always-free services",
    "Access to full catalog of services up to free amounts and USD 200 credit",
    "Spending protection—credit card won't be charged",
    "No upfront commitment—cancel anytime",
    "Move to pay-as-you-go pricing to continue beyond 30 days or after credit is used up",
  ];

  const payAsYouGoFeatures = [
    "Free monthly amounts of 20+ popular services for 12 months (new customers only)",
    "Free monthly amounts of 55+ always-free services",
    "Access to full catalog of services with no cap on service usage",
    "Technical support options available",
    "No upfront commitment—cancel anytime",
    "No action required to continue beyond 30 days",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose the YDGROUPS account that's right for you</h2>
          <p className="text-gray-600">Pay as you go or try YDGROUPS free for up to 30 days. There's no upfront commitment—cancel anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">YDGROUPS free account</CardTitle>
              <p className="text-sm text-gray-500">Best for proof of concept and exploring capabilities</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {freeFeatures.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-[#0078d4] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#0078d4]">USD 200 credit</span>
                  <p className="text-xs text-gray-500 mt-1">to use on YDGROUPS services within 30 days</p>
                </div>
                <Button className="w-full bg-[#0078d4] hover:bg-[#005a9e]">Try YDGROUPS for free</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Pay as you go</CardTitle>
              <p className="text-sm text-gray-500">Best for customers ready to start building workloads</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {payAsYouGoFeatures.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-[#0078d4] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#0078d4]">Pay only for what you use</span>
                  <p className="text-xs text-gray-500 mt-1">beyond free monthly amounts</p>
                </div>
                <Button variant="outline" className="w-full border-[#0078d4] text-[#0078d4] hover:bg-blue-50">Sign up</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          During the signup verification process, there may be a temporary USD 1 authorization placed on your card, which will be reversed upon verification.
        </p>
      </div>
    </section>
  );
}
