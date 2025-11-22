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

CORE INTERACTIVE EFFECTS:

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

ADVANCED VISUAL EFFECTS:

9. Matrix Rain Effect
   - Animated falling characters in hero section background
   - Canvas-based rendering with customizable characters
   - Responsive to window resize events
   - Creates cyberpunk aesthetic with brand colors

10. Glitch Effect on Section Titles
    - Hover-triggered glitch animation on section headings
    - 1-second duration with automatic reset
    - Adds dynamic, tech-forward visual interest

11. 3D Tilt Effect on Cards
    - Mouse-tracking perspective transform on count boxes and resume items
    - Real-time calculation based on cursor position
    - Creates depth and interactivity on hover
    - Smooth return to neutral state on mouse leave

12. Parallax Scrolling Effect
    - Elements with data-parallax attribute move at different speeds
    - Configurable speed multiplier per element
    - Creates depth perception during scroll

13. Neon Pulse on Navigation Links
    - Hover effect adds neon-pulse class to nav menu items
    - Enhances navigation interactivity
    - Consistent with overall neon theme

14. Typing Sound Effect Simulation
    - Visual ripple effect synchronized with typed text
    - Uses MutationObserver to detect text changes
    - Adds tactile feedback to typing animation

15. Exploding Confetti on Skill Section
    - Triggers when skills section enters viewport
    - 20 colorful confetti particles with random trajectories
    - 2-second delay after section visibility
    - One-time trigger per page load

16. Holographic Card Effect
    - Mouse-tracking gradient effect on count boxes
    - CSS custom properties for dynamic positioning
    - Creates premium, futuristic card appearance
    - Activates holo-active class on hover

17. Shockwave Effect on Click
    - Expanding circle animation at click position
    - Desktop only for performance
    - 1-second animation with auto-cleanup
    - Adds tactile feedback to user interactions

18. Floating Text Animation
    - Individual word animation in section descriptions
    - Staggered animation delays (50ms per word)
    - Creates wave-like entrance effect
    - Applied to all section-title paragraphs

19. Lightning Strike Effect
    - Random lightning flashes in hero section
    - 5% probability check every 2 seconds
    - 500ms flash duration
    - Enhances dramatic hero section atmosphere

20. Magnetic Button Effect
    - Social media links follow cursor within proximity
    - 30% movement multiplier for subtle effect
    - Smooth transform transitions
    - Resets on mouse leave

21. Progress Bar Race Animation
    - Sequential animation trigger for skill bars
    - 200ms stagger between each bar
    - Triggered on scroll into skills section
    - Adds race-animation class for styling

22. Cyberpunk Scan Line Effect
    - Animated horizontal scan line across viewport
    - Continuous vertical movement
    - Enhances cyberpunk/tech aesthetic
    - Subtle overlay effect

23. Ripple Effect on Resume Items
    - Click-triggered expanding ripple animation
    - Positioned at exact click coordinates
    - 600ms duration with auto-cleanup
    - Provides tactile click feedback

TECHNICAL IMPLEMENTATION:
------------------------

JavaScript (assets/js/main.js):
- All animations use vanilla JavaScript (no additional dependencies)
- Intersection Observer API for scroll-triggered animations
- Event listeners for hover, click, and mousemove interactions
- Canvas API for Matrix rain effect rendering
- MutationObserver for typed text change detection
- Performance optimized with cleanup and throttling
- Automatic DOM element cleanup (sparkles, trails, confetti, ripples)
- Conditional rendering based on viewport width (desktop vs mobile)
- CSS custom properties manipulation for dynamic effects

CSS (assets/css/style.css):
- Keyframe animations for smooth transitions
- Hardware-accelerated transforms (translateX, translateY, scale, rotate)
- Responsive design with mobile optimizations
- Accessibility support (prefers-reduced-motion)
- CSS custom properties (--mouse-x, --mouse-y, --tx, --ty, --r)
- Radial and linear gradients for visual effects
- Box-shadow animations for glow effects
- Clip-path animations for glitch effects
- Transform-style: preserve-3d for 3D tilt effects

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
- Matrix rain: Modify chars string, fontSize, or interval timing (default: 50ms)
- Confetti count: Change loop limit in createConfetti() (default: 20)
- Lightning frequency: Adjust Math.random() threshold (default: 0.95 = 5% chance)
- Scan line speed: Modify setInterval timing in createScanLine()

To modify visual styling, edit assets/css/style.css:
- Colors: Update rgba values (primary: #fd6d6d, secondary: #549d8a)
- Animation speed: Modify animation-duration values
- Glow intensity: Adjust box-shadow values
- Particle size: Change width/height in .particle class
- Glitch intensity: Adjust transform values in @keyframes glitch
- Neon pulse: Modify text-shadow values in @keyframes neonPulse
- Shockwave size: Change max width/height in @keyframes shockwaveExpand
- Lightning appearance: Adjust gradient stops and box-shadow in .lightning
- Scan line thickness: Modify height property in .scan-line class
