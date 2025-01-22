const Branding = () => {
    return (
      <div className="p-8 bg-transparent text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <h1 className=" text-center text-2xl sm:text-3xl md:text-4xl font-bold pb-4 
                bg-clip-text text-transparent bg-gradient-to-r 
                from-indigo-500 via-purple-500 to-pink-500 p-3">
            Branding
          </h1>
  
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
              Visual Identity
            </h2>
            <p>
              This includes your logo, color palette, typography, imagery, and packaging. These elements make your brand visually recognizable.
            </p>
          </div>
  
          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
              Brand Messaging
            </h2>
            <p>
              Define your mission, vision, tagline, and tone of voice to clearly communicate your brand's purpose and promise.
            </p>
          </div>
  
          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
              Brand Personality
            </h2>
            <p>
              Showcase the human-like traits of your brand. Are you adventurous, luxurious, or playful? Build emotional connections through personality.
            </p>
          </div>
  
          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
              Audience & Positioning
            </h2>
            <p>
              Identify your target audience and define your unique market position to stand out and resonate with the right people.
            </p>
          </div>
  
          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
              Brand Experience
            </h2>
            <p>
              Ensure a consistent experience across all touchpoints, from your website and social media to product packaging and customer support.
            </p>
          </div>
  
          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
              Emotional Connection
            </h2>
            <p>
              Build trust and loyalty by consistently delivering on your brand's promise and engaging with your audience authentically.
            </p>
          </div>
  
          {/* Image Placeholder */}
          <div className="mt-12">
            <div className="w-full h-54 bg-neutral-700 bg-opacity-50 flex items-center justify-center">
              <img  src="/Images/pexels-eva-bronzini-7661590.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Branding;