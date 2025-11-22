Thanks for downloading this template!

Template Name: iPortfolio
Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
Author: BootstrapMade.com
License: https://bootstrapmade.com/license/

================================================================================
CUSTOM ENHANCEMENTS
================================================================================

This portfolio has been enhanced with advanced interactive animations and 
visual effects to create a more engaging user experience.

NEW FEATURES ADDED:
-------------------

1. Profile Image Pulse Effect
   - Interactive hover animation on profile image
   - Smooth scale and rotation transform with elastic easing
   - Location: Header sidebar profile section

2. Section Entry Sparkle Animation
   - Sparkles appear when scrolling into new sections
   - 8 sparkles per section with staggered timing
   - Automatically triggers once per section view
   - Uses Intersection Observer API for performance

3. Floating Particles Background
   - 30 animated particles in hero section
   - Continuous upward floating motion
   - Randomized positions and timing for organic feel
   - Desktop only (hidden on mobile for performance)

4. Skill Bar Glow Effect
   - Progress bars glow after animation completes
   - Pulsing shadow effect for visual emphasis
   - Highlights technical proficiency dynamically

5. Interactive Count Boxes
   - Hover effects on coding achievement boxes
   - Lift and scale animation with shadow
   - Enhanced visual feedback for platform statistics

6. Resume Items Slide-in Effect
   - Sequential fade and slide animation
   - Staggered timing (100ms delay between items)
   - Triggered on scroll using Intersection Observer
   - Smooth entrance for professional experience items

7. Cursor Trail Effect
   - Follows mouse movement with trailing particles
   - Desktop only (disabled on mobile)
   - Maximum 10 trail elements for performance
   - Auto-cleanup after 500ms

8. Section Title Animation
   - Titles slide in when scrolling into view
   - Underline expands with delay for emphasis
   - Smooth cubic-bezier easing for professional feel

TECHNICAL IMPLEMENTATION:
------------------------

JavaScript (assets/js/main.js):
- All animations use vanilla JavaScript (no additional dependencies)
- Intersection Observer API for scroll-triggered animations
- Event listeners for hover interactions
- Performance optimized with cleanup and throttling

CSS (assets/css/style.css):
- Keyframe animations for smooth transitions
- Hardware-accelerated transforms (translateX, scale, rotate)
- Responsive design with mobile optimizations
- Accessibility support (prefers-reduced-motion)

PERFORMANCE CONSIDERATIONS:
--------------------------
- Particles and cursor trail disabled on mobile devices
- Intersection Observer used instead of scroll events
- Animations use CSS transforms for GPU acceleration
- Automatic cleanup of DOM elements (sparkles, trails)
- Reduced motion support for accessibility

BROWSER COMPATIBILITY:
---------------------
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires ES6 support
- Intersection Observer API (widely supported)
- Graceful degradation for older browsers

CUSTOMIZATION:
-------------
To modify animation behavior, edit assets/js/main.js:
- Particle count: Change loop limit in createParticles() (default: 30)
- Sparkle count: Modify loop in sparkleObserver (default: 8)
- Trail length: Adjust maxTrailLength constant (default: 10)
- Animation timing: Update setTimeout delays and durations

To modify visual styling, edit assets/css/style.css:
- Colors: Update rgba values (primary: #fd6d6d, secondary: #549d8a)
- Animation speed: Modify animation-duration values
- Glow intensity: Adjust box-shadow values
- Particle size: Change width/height in .particle class
