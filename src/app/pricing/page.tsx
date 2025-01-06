import React from "react";
import { Check, HelpCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "9.99",
      description: "Perfect for individual designers",
      features: [
        "Up to 30 downloads per month",
        "Access to basic resources",
        "Standard license",
        "Email support",
        "No attribution required",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "19.99",
      description: "Ideal for professional designers",
      features: [
        "Unlimited downloads",
        "Access to all resources",
        "Extended license",
        "Priority support",
        "API access",
        "Team sharing (up to 3 members)",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "49.99",
      description: "For design teams and agencies",
      features: [
        "Unlimited downloads",
        "Access to all resources",
        "Extended license",
        "24/7 Priority support",
        "API access",
        "Team sharing (unlimited)",
        "Custom integration",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto pt-24 pb-12 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get access to millions of premium Freepik resources at a fraction of
            the cost. All plans include unlimited access to our growing library.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular ? "border-blue-500 shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
                <HelpCircle className="w-5 h-5" />
                What's included in the downloads?
              </h3>
              <p className="text-gray-600">
                All downloads include full access to the resource files,
                including vectors, PSDs, and other formats when available. You
                get commercial usage rights with all plans.
              </p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
                <HelpCircle className="w-5 h-5" />
                Can I cancel my subscription?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. You'll
                continue to have access until the end of your billing period.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
                <HelpCircle className="w-5 h-5" />
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for
                enterprise plans. All payments are processed securely through
                Stripe.
              </p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
                <HelpCircle className="w-5 h-5" />
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                We offer a 7-day money-back guarantee if you're not satisfied
                with our service. Contact our support team to process your
                refund.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of designers who are already saving with Freepiker.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
