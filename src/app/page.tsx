import React from "react";
import { ArrowRight, Download, Users, CreditCard, Star } from "lucide-react";

const LandingPage = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "UI Designer",
      comment:
        "Freepiker has saved me thousands on design resources. The unlimited downloads are a game-changer for my workflow.",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      role: "Marketing Director",
      comment:
        "Perfect for our agency needs. We get all Freepik resources at a fraction of the cost. Highly recommended!",
      rating: 5,
    },
    {
      name: "Ana Silva",
      role: "Freelance Designer",
      comment:
        "The best investment I've made for my design business. Customer support is excellent too.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Access Premium Freepik Content for Less
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of designers who save money while getting unlimited
            access to Freepiks vast library of resources.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pricing"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 flex items-center"
            >
              View Plans <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Unlimited Downloads
              </h3>
              <p className="text-gray-600">
                Access millions of premium resources without restrictions
              </p>
            </div>
            <div className="text-center">
              <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Affordable Plans</h3>
              <p className="text-gray-600">
                Save up to 70% compared to regular subscription prices
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Get help anytime you need it from our dedicated team
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of designers and start saving on your Freepik
            downloads today.
          </p>
          <a
            href="/signup"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-gray-100 inline-flex items-center"
          >
            Start Saving Now <ArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
