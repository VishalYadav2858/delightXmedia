import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, TrendingUp, Users, Eye } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'TechReview Pro',
      category: 'YouTube Channel',
      description: 'Transformed a tech review channel from 10K to 500K subscribers in 8 months',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      stats: {
        views: '25M+',
        subscribers: '500K+',
        growth: '+4900%'
      },
      services: ['Video Editing', 'Thumbnail Design', 'SEO Optimization']
    },
    {
      id: 2,
      title: 'FashionForward',
      category: 'Brand Campaign',
      description: 'Multi-platform influencer campaign generating 15M+ impressions',
      image: 'https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg',
      stats: {
        views: '15M+',
        engagement: '8.5%',
        reach: '3M+'
      },
      services: ['Influencer Management', 'Content Strategy', 'Brand Partnerships']
    },
    {
      id: 3,
      title: 'GameZone Elite',
      category: 'Gaming Channel',
      description: 'Complete rebrand and growth strategy for gaming content creator',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      stats: {
        views: '40M+',
        subscribers: '800K+',
        revenue: '+300%'
      },
      services: ['Video Editing', 'Brand Development', 'Monetization Strategy']
    },
    {
      id: 4,
      title: 'LifestyleLuxe',
      category: 'Lifestyle Brand',
      description: 'End-to-end content creation and brand partnership management',
      image: 'https://images.pexels.com/photos/1181265/pexels-photo-1181265.jpeg',
      stats: {
        campaigns: '50+',
        brands: '25+',
        revenue: '$500K+'
      },
      services: ['Content Creation', 'Brand Deals', 'Performance Analytics']
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Content Creator',
      company: 'TechReview Pro',
      content: 'DelightxMedia transformed my channel beyond my wildest dreams. Their strategic approach and creative expertise took me from struggling creator to YouTube success story.',
      avatar: 'AT'
    },
    {
      name: 'Sarah Chen',
      role: 'Brand Manager',
      company: 'FashionForward',
      content: 'Working with DelightxMedia was a game-changer. They delivered results that exceeded all our expectations and created campaigns that truly resonated with our audience.',
      avatar: 'SC'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Gaming Influencer',
      company: 'GameZone Elite',
      content: 'The team at DelightxMedia understands the digital landscape like no one else. They helped me build a sustainable business around my passion for gaming.',
      avatar: 'MR'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-800/30">
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
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real clients - see how we've transformed creators and brands into digital powerhouses
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:border-slate-600/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                
                {/* Play Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-lg font-bold text-white">{value}</p>
                      <p className="text-xs text-gray-400 capitalize">{key}</p>
                    </div>
                  ))}
                </div>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="bg-slate-800/50 text-gray-300 px-3 py-1 rounded-full text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            What Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Clients Say</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-blue-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;