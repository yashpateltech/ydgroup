import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "How does YDGROUPS ensure business growth?",
      a: "We combine expert groups with deep industry experience to skyrocket your solutions. Our partnerships with big companies allow us to bring enterprise-grade expertise to every project."
    },
    {
      q: "What services are included in the initial consultation?",
      a: "Our initial consultation covers a full audit of your current digital presence, identifying opportunities in SEO, AI automation, and web performance to build a custom growth roadmap."
    },
    {
      q: "Do you handle custom software development?",
      a: "Yes, we specialize in full-stack development, ERP systems, and CRM software tailored to your specific business workflows."
    },
    {
      q: "How do I start a project with YDGROUPS?",
      a: "Simply fill out our enquiry form with your project details and budget. Our team will review your requirements and schedule a discovery call within 24 hours."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full border-t">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b">
              <AccordionTrigger className="text-left hover:no-underline hover:bg-gray-50 px-4 py-6 text-sm md:text-base font-semibold text-gray-700">
                <span className="flex gap-4">
                  <span className="text-[#0078d4] opacity-50">{(i + 1).toString().padStart(2, '0')}/</span>
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-14 py-4 text-gray-600 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
