import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowDown, Leaf, Users, Award, Mail, Phone, MapPin, Send, Star, Shield, Heart, Recycle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Animation refs for different sections
  const [heroRef, heroVisible] = useScrollAnimation();
  const [missionRef, missionVisible] = useScrollAnimation();
  const [productsRef, productsVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();
  const [farmersRef, farmersVisible] = useScrollAnimation();
  const [certificationsRef, certificationsVisible] = useScrollAnimation();
  const [healthRef, healthVisible] = useScrollAnimation();
  const [impactRef, impactVisible] = useScrollAnimation();
  const [faqRef, faqVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative bg-gradient-to-br from-green-50 to-amber-50 min-h-screen flex items-center transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-1000" style={{
          backgroundImage: "url('/lovable-uploads/7861bcd8-0e5d-4eed-896c-612ff18dfbb1.png')"
        }} />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 bg-green-100 text-green-800 font-semibold rounded-full text-sm mb-4 transition-all duration-500 transform ${
                heroVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}>
                Premium Organic Products
              </span>
            </div>
            <h1 className={`font-bold text-4xl md:text-6xl lg:text-7xl text-green-900 mb-8 leading-tight transition-all duration-700 delay-200 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              From Farm to Your Table
            </h1>
            <p className={`text-xl md:text-2xl text-green-700 mb-12 max-w-2xl mx-auto font-medium transition-all duration-700 delay-400 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Connecting Karnataka's finest coconut farmers directly with conscious consumers
            </p>
            
            {/* Key Stats with Animation */}
            <div className={`grid grid-cols-3 gap-8 mb-12 max-w-lg mx-auto transition-all duration-700 delay-600 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="text-center group">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-900">
                  {heroVisible && <AnimatedCounter end={100} suffix="%" />}
                </div>
                <div className="text-sm text-green-700">Organic</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-2 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-900">
                  {heroVisible && <AnimatedCounter end={500} suffix="+" />}
                </div>
                <div className="text-sm text-green-700">Farmers</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-900">A+</div>
                <div className="text-sm text-green-700">Quality</div>
              </div>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-800 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button 
                size="lg" 
                className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 text-lg font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg" 
                onClick={() => window.location.href = '/products'}
              >
                Shop Products
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-10 py-4 text-lg font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg" 
                onClick={() => window.location.href = '/about'}
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-green-700" />
        </div>
      </section>

      {/* Mission Overview */}
      <section 
        ref={missionRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold text-green-900 mb-6 transition-all duration-700 ${
                missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Why Choose ECONUT
              </h2>
              <p className={`text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Experience the difference of authentic, farm-fresh coconut products
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🌱",
                  title: "Sustainable Farming",
                  description: "100% organic practices that protect the environment and ensure premium quality",
                  delay: "delay-300"
                },
                {
                  icon: "🤝",
                  title: "Direct Trade",
                  description: "Fair prices for farmers, fresh products for you - no middlemen involved",
                  delay: "delay-500"
                },
                {
                  icon: "💪",
                  title: "Community Impact",
                  description: "Supporting rural communities and creating sustainable livelihoods",
                  delay: "delay-700"
                }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className={`border-green-200 hover:shadow-xl transition-all duration-500 text-center transform hover:scale-105 hover:-translate-y-2 ${
                    missionVisible ? `opacity-100 translate-y-0 ${item.delay}` : 'opacity-0 translate-y-10'
                  }`}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:rotate-12">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <CardTitle className="text-green-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section 
        ref={productsRef}
        className={`py-20 bg-gradient-to-br from-amber-50 to-green-50 transition-all duration-1000 ${
          productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold text-green-900 mb-6 transition-all duration-700 ${
                productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Featured Products
              </h2>
              <p className={`text-xl text-gray-700 max-w-2xl mx-auto mb-8 transition-all duration-700 delay-200 ${
                productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Discover our premium coconut products, sourced directly from Karnataka's finest farms
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  image: "/lovable-uploads/eba3f987-276d-4443-8831-72d6c8043626.jpg",
                  title: "Neera Sugar",
                  description: "Natural sweetener with low glycemic index",
                  delay: "delay-300"
                },
                {
                  image: "/lovable-uploads/40a66529-6750-4393-af80-e85e5aed29d8.png",
                  title: "Virgin Coconut Oil",
                  description: "Cold-pressed, pure and nutritious",
                  delay: "delay-500"
                },
                {
                  image: "/lovable-uploads/d370a513-6062-4ecb-8449-7881c7e6c0ba.jpg",
                  title: "Coconut Milkshake",
                  description: "Refreshing and naturally nutritious",
                  delay: "delay-700"
                }
              ].map((product, index) => (
                <Card 
                  key={index}
                  className={`border-amber-200 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group ${
                    productsVisible ? `opacity-100 translate-y-0 ${product.delay}` : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-t-lg overflow-hidden">
                    <img 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      src={product.image} 
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-amber-800">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className={`text-center transition-all duration-700 delay-800 ${
              productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button 
                size="lg" 
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg" 
                onClick={() => window.location.href = '/products'}
              >
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section 
        ref={testimonialsRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold text-green-900 mb-6 transition-all duration-700 ${
                testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                What Our Customers Say
              </h2>
              <p className={`text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Real experiences from families who trust ECONUT for their organic needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card 
                key={0}
                className={`border-green-200 hover:shadow-lg transition-shadow ${
                  testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-bold">P</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900">Priya Sharma</h4>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">
                    "The coconut oil is absolutely pure! You can taste the difference from the first spoon. My family has been using ECONUT products for over a year now."
                  </p>
                </CardContent>
              </Card>

              <Card 
                key={1}
                className={`border-amber-200 hover:shadow-lg transition-shadow ${
                  testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-700 font-bold">R</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900">Rajesh Kumar</h4>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">
                    "As a diabetic, finding natural sweeteners is crucial. Neera sugar has been a game-changer for our family's health journey."
                  </p>
                </CardContent>
              </Card>

              <Card 
                key={2}
                className={`border-green-200 hover:shadow-lg transition-shadow ${
                  testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-bold">A</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900">Anita Menon</h4>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">
                    "Supporting local farmers while getting premium quality products - what more could I ask for? ECONUT delivers on both fronts."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Farmers */}
      <section 
        ref={farmersRef}
        className={`py-20 bg-gradient-to-br from-green-50 to-amber-50 transition-all duration-1000 ${
          farmersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold text-green-900 mb-6 transition-all duration-700 ${
                farmersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Meet Our Farmers
              </h2>
              <p className={`text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                farmersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                The passionate people behind every coconut, working with traditional methods and modern sustainability
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card 
                key={0}
                className={`border-green-200 hover:shadow-xl transition-all text-center ${
                  farmersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg overflow-hidden">
                  <img alt="Farmer Suresh" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop" />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-900">Suresh Patil</CardTitle>
                  <CardDescription>3rd Generation Farmer, Haveri District</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    "My grandfather started this farm 70 years ago. Today, we use his wisdom with organic methods to grow the finest coconuts in Karnataka."
                  </p>
                </CardContent>
              </Card>

              <Card 
                key={1}
                className={`border-amber-200 hover:shadow-xl transition-all text-center ${
                  farmersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-t-lg overflow-hidden">
                  <img alt="Farmer Lakshmi" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop" />
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-800">Lakshmi Devi</CardTitle>
                  <CardDescription>Organic Certification Leader, Tumkur</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    "Leading our cooperative towards complete organic certification. Every coconut tells the story of our commitment to nature."
                  </p>
                </CardContent>
              </Card>

              <Card 
                key={2}
                className={`border-green-200 hover:shadow-xl transition-all text-center ${
                  farmersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg overflow-hidden">
                  <img alt="Farmer Ravi" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop" />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-900">Ravi Shankar</CardTitle>
                  <CardDescription>Young Innovator, Mysore District</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    "Combining traditional knowledge with modern sustainable techniques. We're not just growing coconuts, we're growing the future."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section 
        ref={certificationsRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold text-green-900 mb-6 transition-all duration-700 ${
                certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Certified Quality & Trust
              </h2>
              <p className={`text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Our certifications and quality standards ensure you get the finest organic products
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <Card 
                key={0}
                className={`border-green-200 hover:shadow-lg transition-shadow text-center ${
                  certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-700" />
                  </div>
                  <CardTitle className="text-green-900 text-lg">FSSAI Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Food Safety & Standards Authority of India approved
                  </CardDescription>
                </CardContent>
              </Card>

              <Card 
                key={1}
                className={`border-amber-200 hover:shadow-lg transition-shadow text-center ${
                  certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-amber-700" />
                  </div>
                  <CardTitle className="text-amber-800 text-lg">Organic Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    India Organic & NPOP certified organic products
                  </CardDescription>
                </CardContent>
              </Card>

              <Card 
                key={2}
                className={`border-green-200 hover:shadow-lg transition-shadow text-center ${
                  certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-700" />
                  </div>
                  <CardTitle className="text-green-900 text-lg">ISO 22000</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    International food safety management standards
                  </CardDescription>
                </CardContent>
              </Card>

              <Card 
                key={3}
                className={`border-amber-200 hover:shadow-lg transition-shadow text-center ${
                  certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-amber-700" />
                  </div>
                  <CardTitle className="text-amber-800 text-lg">Fair Trade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Ethical sourcing and fair farmer compensation
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section 
        ref={healthRef}
        className={`py-20 bg-gradient-to-br from-amber-50 to-green-50 transition-all duration-1000 ${
          healthVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold text-green-900 mb-6 transition-all duration-700 ${
                healthVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Nutritional Powerhouse
              </h2>
              <p className={`text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                healthVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Discover the incredible health benefits of our organic coconut products
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card 
                key={0}
                className={`border-green-200 hover:shadow-lg transition-shadow ${
                  healthVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-green-700" />
                  </div>
                  <CardTitle className="text-green-900">Heart Healthy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Rich in healthy MCTs that support cardiovascular health and boost metabolism
                  </CardDescription>
                </CardContent>
              </Card>

              <Card 
                key={1}
                className={`border-amber-200 hover:shadow-lg transition-shadow ${
                  healthVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-amber-700" />
                  </div>
                  <CardTitle className="text-amber-800">Immune Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Natural antioxidants and lauric acid boost your body's natural defense system
                  </CardDescription>
                </CardContent>
              </Card>

              <Card 
                key={2}
                className={`border-green-200 hover:shadow-lg transition-shadow ${
                  healthVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-green-700" />
                  </div>
                  <CardTitle className="text-green-900">Natural Energy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Quick-absorbing natural sugars provide sustained energy without crashes
                  </CardDescription>
                </CardContent>
              </Card>

              <Card 
                key={3}
                className={`border-amber-200 hover:shadow-lg transition-shadow ${
                  healthVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-amber-700" />
                  </div>
                  <CardTitle className="text-amber-800">Low Glycemic</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Neera sugar has a lower glycemic index, making it diabetic-friendly
                  </CardDescription>
                </CardContent>
              </Card>

              <Card 
                key={4}
                className={`border-green-200 hover:shadow-lg transition-shadow ${
                  healthVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-green-700" />
                  </div>
                  <CardTitle className="text-green-900">Digestive Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Natural fibers and enzymes support healthy digestion and gut health
                  </CardDescription>
                </CardContent>
              </Card>

              <Card 
                key={5}
                className={`border-amber-200 hover:shadow-lg transition-shadow ${
                  healthVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-amber-700" />
                  </div>
                  <CardTitle className="text-amber-800">Skin & Hair</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Vitamin E and essential fatty acids nourish skin and promote healthy hair
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Impact */}
      <section 
        ref={impactRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold text-green-900 mb-6 transition-all duration-700 ${
                impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Our Environmental Impact
              </h2>
              <p className={`text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Creating positive change for our planet, one coconut at a time
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { icon: Recycle, number: 2500, suffix: "", label: "Tons CO2 Saved Annually", delay: "delay-300" },
                { icon: Leaf, number: 15000, suffix: "", label: "Trees Preserved", delay: "delay-500" },
                { icon: Users, number: 500, suffix: "+", label: "Farmer Families Supported", delay: "delay-700" },
                { icon: Award, number: 100, suffix: "%", label: "Renewable Energy Powered", delay: "delay-900" }
              ].map((stat, index) => (
                <Card 
                  key={index}
                  className={`border-green-200 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                    impactVisible ? `opacity-100 translate-y-0 ${stat.delay}` : 'opacity-0 translate-y-10'
                  }`}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:rotate-12">
                      <stat.icon className="w-8 h-8 text-green-700" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-green-900">
                      {impactVisible && <AnimatedCounter end={stat.number} suffix={stat.suffix} />}
                    </CardTitle>
                    <CardDescription>{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-100 to-amber-100 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  Our Commitment to Zero Waste
                </h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Every part of the coconut is utilized - from the meat and water to the husk and shells. 
                  Our circular economy approach ensures nothing goes to waste, creating additional income 
                  streams for farmers while protecting the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        ref={faqRef}
        className={`py-20 bg-gradient-to-br from-green-50 to-amber-50 transition-all duration-1000 ${
          faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold text-green-900 mb-6 transition-all duration-700 ${
                faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Frequently Asked Questions
              </h2>
              <p className={`text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Everything you need to know about ECONUT products and our farming practices
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "What makes ECONUT products different from store-bought coconut products?",
                  answer: "Our products are sourced directly from certified organic farms in Karnataka, ensuring freshness and quality. We use traditional cold-pressing methods and avoid any chemical processing, preservatives, or additives."
                },
                {
                  question: "How do you ensure the organic certification of your products?",
                  answer: "All our partner farms are certified by India Organic and NPOP standards. We maintain complete traceability from farm to your table, with regular third-party audits and soil testing to ensure organic integrity."
                },
                {
                  question: "What is the shelf life of ECONUT products?",
                  answer: "Our virgin coconut oil has a shelf life of 24 months, Neera sugar lasts 18 months, and coconut-based beverages should be consumed within 6 months of manufacturing for optimal taste and nutrition."
                },
                {
                  question: "Do you ship products across India?",
                  answer: "Yes, we ship pan-India through our logistics partners. Orders are typically delivered within 3-7 business days depending on your location. Free shipping is available on orders above ₹999."
                },
                {
                  question: "How does purchasing ECONUT products support farmers?",
                  answer: "We practice direct trade, ensuring farmers receive 60-70% more than market rates. Your purchase directly supports over 500 farming families and funds community development projects in rural Karnataka."
                }
              ].map((faq, index) => (
                <Card 
                  key={index} 
                  className={`border-green-200 transition-all duration-500 transform hover:shadow-lg ${
                    faqVisible ? `opacity-100 translate-y-0` : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader 
                    className="cursor-pointer hover:bg-green-50 transition-all duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-green-900 text-lg font-semibold">
                        {faq.question}
                      </CardTitle>
                      <div className="transform transition-transform duration-300">
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-green-700" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-green-700" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent className="animate-accordion-down">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold text-green-900 mb-6 transition-all duration-700 ${
                contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Get In Touch
              </h2>
              <p className={`text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Ready to experience the finest coconut products? Contact us today to learn more about our offerings or to place an order.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">Email</h4>
                        <p className="text-gray-700">info@econut.in</p>
                        <p className="text-gray-700">sales@econut.in</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-amber-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">Phone</h4>
                        <p className="text-gray-700">+91 98765 43210</p>
                        <p className="text-gray-700">+91 87654 32109</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">Address</h4>
                        <p className="text-gray-700">
                          ECONUT Farmer Producer Organization<br />
                          Karnataka Agricultural Complex<br />
                          Bangalore, Karnataka 560001<br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card 
                  key={0}
                  className={`border-amber-200 bg-gradient-to-br from-amber-50 to-green-50 ${
                    contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-amber-800 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card 
                key={1}
                className={`border-green-200 hover:shadow-lg transition-shadow ${
                  contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-green-900">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-green-900">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="border-green-200 focus:border-green-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-green-900">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="border-green-200 focus:border-green-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-green-900">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="border-green-200 focus:border-green-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-green-900">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-green-900">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        className="border-green-200 focus:border-green-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-green-900">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        className="border-green-200 focus:border-green-500 min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-green-700 hover:bg-green-800 text-white py-3 text-lg font-semibold rounded-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
