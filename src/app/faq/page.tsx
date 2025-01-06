import React from "react";
import { Plus, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is Freepiker?",
      answer:
        "Freepiker is a subscription service that provides access to premium Freepik resources at competitive prices. We offer various plans tailored to individual designers, professionals, and enterprises.",
    },
    {
      question: "How does the subscription work?",
      answer:
        "Once you subscribe, you'll get immediate access to download resources based on your plan's limits. Basic plans include 30 downloads per month, while Professional and Enterprise plans offer unlimited downloads.",
    },
    {
      question: "What types of resources can I download?",
      answer:
        "You can download all types of resources available on Freepik, including vectors, PSDs, icons, templates, mockups, and photos. All downloads come with proper licensing for commercial use.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time through your account dashboard. You'll continue to have access until the end of your current billing period.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 7-day money-back guarantee if you're not satisfied with our service. Contact our support team to process your refund.",
    },
    {
      question: "How do team accounts work?",
      answer:
        "Professional plans include team sharing for up to 3 members, while Enterprise plans offer unlimited team members. Each team member gets their own login credentials and download limits.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through Stripe.",
    },
    {
      question: "Is there a download limit?",
      answer:
        "Download limits vary by plan. Basic plans include 30 downloads per month, while Professional and Enterprise plans offer unlimited downloads.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Find answers to common questions about Freepiker's services
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="transition group-open:rotate-180">
                    <Plus className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Button asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
