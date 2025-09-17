import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Users, 
  TrendingUp, 
  Handshake, 
  ArrowRight,
  Scissors,
  Target,
  BarChart3
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing that captivates audiences and drives engagement across all platforms.',
      features: ['Motion Graphics', 'Color Grading', 'Sound Design', 'Multi-Platform Optimization'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Influencer Management',
      description: 'End-to-end influencer management services that build authentic connections with your audience.',
      features: ['Content Strategy', 'Audience Growth', 'Brand Positioning', 'Community Management'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'YouTube Growth',
      description: 'Data-driven strategies to accelerate your YouTube channel growth and maximize monetization.',
      features: ['SEO Optimization', 'Thumbnail Design', 'Analytics Tracking', 'Monetization Strategy'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Handshake,
      title: 'Brand Deals',
      description: 'Strategic brand partnerships that align with your values and drive meaningful collaborations.',
      features: ['Partnership Matching', 'Contract Negotiation', 'Campaign Management', 'Performance Tracking'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your brand, audience, and goals',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Custom roadmap tailored to your objectives',
      icon: BarChart3
    },
    {
      step: '03',
      title: 'Creation',
      description: 'Bringing your vision to life with precision',
      icon: Scissors
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous improvement for maximum impact',
      icon: TrendingUp
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and accelerate growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className="group/btn flex items-center text-white font-semibold hover:text-blue-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
              
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Process</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results every time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-blue-400">
                  {step.step}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h4>
              
              <p className="text-gray-400 text-sm">
                {step.description}
              </p>
              
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;