/**
 * Mobile Optimization Utilities
 *
 * Ensures components meet mobile accessibility standards including:
 * - Touch-friendly interaction areas (44px minimum)
 * - Optimal font sizes for mobile reading
 * - Proper spacing for touch targets
 */

// Touch target size constants (based on Apple/Google guidelines)
export const TOUCH_TARGET = {
  MIN_SIZE: "44px", // Minimum touch target size (44x44px)
  RECOMMENDED_SIZE: "48px", // Recommended size for better accessibility
  SPACING: "8px", // Minimum spacing between touch targets
} as const;

// Mobile-optimized font sizes (in rem)
export const MOBILE_FONT_SIZES = {
  xs: "0.75rem", // 12px - captions, labels
  sm: "0.875rem", // 14px - small text, metadata
  base: "1rem", // 16px - body text (minimum for readability)
  lg: "1.125rem", // 18px - large body text, subheadings
  xl: "1.25rem", // 20px - headings
  "2xl": "1.5rem", // 24px - large headings
  "3xl": "1.875rem", // 30px - page titles
  "4xl": "2.25rem", // 36px - hero titles
} as const;

// Mobile breakpoints for responsive design
export const MOBILE_BREAKPOINTS = {
  xs: "475px", // Small mobile (iPhone SE)
  sm: "640px", // Large mobile (iPhone Pro)
  md: "768px", // Tablet portrait
  lg: "1024px", // Tablet landscape / small laptop
} as const;

/**
 * Generates touch-friendly button classes
 * Ensures minimum 44px touch target with proper padding
 */
export function getTouchFriendlyClasses(
  size: "sm" | "md" | "lg" = "md"
): string {
  const sizes = {
    sm: "min-h-[44px] px-3 py-2 text-sm",
    md: "min-h-[48px] px-4 py-3 text-base",
    lg: "min-h-[52px] px-6 py-4 text-lg",
  };

  return `${sizes[size]} inline-flex items-center justify-center transition-all duration-200 touch-manipulation`;
}

/**
 * Generates mobile-optimized spacing classes
 * Ensures adequate spacing between touch targets
 */
export function getMobileSpacingClasses(
  context: "buttons" | "cards" | "navigation" = "buttons"
): string {
  const spacing = {
    buttons: "space-x-2 space-y-2 xs:space-x-3 sm:space-x-4",
    cards: "space-y-4 xs:space-y-6 sm:space-y-8",
    navigation: "space-y-1 xs:space-y-2",
  };

  return spacing[context];
}

/**
 * Generates responsive font size classes optimized for mobile reading
 */
export function getMobileFontClasses(
  element: "body" | "heading" | "caption" | "button" = "body"
): string {
  const fontClasses = {
    body: "text-base xs:text-base sm:text-lg", // Minimum 16px for readability
    heading: "text-xl xs:text-2xl sm:text-3xl lg:text-4xl",
    caption: "text-sm xs:text-sm sm:text-base",
    button: "text-sm xs:text-base",
  };

  return fontClasses[element];
}

/**
 * Generates mobile-optimized card classes
 * Ensures proper max-width and responsive behavior
 */
export function getMobileCardClasses(
  maxWidth: "sm" | "md" | "lg" | "xl" = "md"
): string {
  const widthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return `${widthClasses[maxWidth]} w-full mx-auto`;
}

/**
 * Generates classes to prevent horizontal scrolling
 * Essential for mobile layouts
 */
export function getScrollSafeClasses(): string {
  return "overflow-x-hidden max-w-full";
}

/**
 * Generates mobile-optimized navigation classes
 */
export function getMobileNavClasses(): string {
  return "flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4";
}

/**
 * CSS-in-JS styles for mobile optimization
 */
export const mobileOptimizationStyles = `
  /* Touch-friendly interactive elements */
  .touch-target {
    min-height: ${TOUCH_TARGET.MIN_SIZE};
    min-width: ${TOUCH_TARGET.MIN_SIZE};
  }
  
  .touch-target-lg {
    min-height: ${TOUCH_TARGET.RECOMMENDED_SIZE};
    min-width: ${TOUCH_TARGET.RECOMMENDED_SIZE};
  }
  
  /* Mobile-optimized typography */
  .mobile-body-text {
    font-size: ${MOBILE_FONT_SIZES.base};
    line-height: 1.6;
  }
  
  .mobile-heading {
    font-size: ${MOBILE_FONT_SIZES.xl};
    line-height: 1.3;
  }
  
  /* Prevent horizontal scrolling */
  .scroll-safe {
    overflow-x: hidden;
    max-width: 100vw;
  }
  
  /* Mobile-friendly focus states */
  .mobile-focus:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
  
  /* Touch-friendly hover states (only on non-touch devices) */
  @media (hover: hover) and (pointer: fine) {
    .mobile-hover:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }
  
  /* Mobile-specific animations */
  @media (prefers-reduced-motion: no-preference) {
    .mobile-animate {
      transition: all 0.2s ease-out;
    }
  }
  
  /* Responsive spacing utilities */
  .mobile-spacing-xs { margin: 0.5rem; }
  .mobile-spacing-sm { margin: 0.75rem; }
  .mobile-spacing-md { margin: 1rem; }
  .mobile-spacing-lg { margin: 1.5rem; }
  
  /* Media query helpers for mobile optimization */
  @media (max-width: ${MOBILE_BREAKPOINTS.xs}) {
    .mobile-xs-hide { display: none !important; }
    .mobile-xs-show { display: block !important; }
  }
  
  @media (max-width: ${MOBILE_BREAKPOINTS.sm}) {
    .mobile-sm-hide { display: none !important; }
    .mobile-sm-show { display: block !important; }
    
    /* Increase touch targets on small screens */
    .touch-auto {
      min-height: ${TOUCH_TARGET.RECOMMENDED_SIZE};
      padding: 0.75rem 1rem;
    }
  }
  
  /* iOS Safari specific fixes */
  @supports (-webkit-touch-callout: none) {
    .ios-safe-area {
      padding-bottom: env(safe-area-inset-bottom);
      padding-top: env(safe-area-inset-top);
    }
    
    /* Fix for iOS Safari viewport units */
    .ios-full-height {
      height: 100vh;
      height: -webkit-fill-available;
    }
  }
`;

/**
 * Validates if an element meets mobile accessibility requirements
 */
export function validateMobileAccessibility(element: HTMLElement): {
  isValid: boolean;
  issues: string[];
  suggestions: string[];
} {
  const issues: string[] = [];
  const suggestions: string[] = [];

  // Check touch target size
  const computedStyle = window.getComputedStyle(element);
  const height = parseInt(computedStyle.height);
  const width = parseInt(computedStyle.width);

  if (height < 44 || width < 44) {
    issues.push("Touch target too small (minimum 44x44px required)");
    suggestions.push(
      "Add min-h-[44px] and min-w-[44px] classes or use getTouchFriendlyClasses()"
    );
  }

  // Check font size for text elements
  if (element.textContent && element.textContent.trim()) {
    const fontSize = parseInt(computedStyle.fontSize);
    if (fontSize < 16) {
      issues.push(
        "Font size too small for mobile reading (minimum 16px required)"
      );
      suggestions.push("Use text-base or larger, or getMobileFontClasses()");
    }
  }

  // Check for proper spacing between interactive elements
  if (
    element.getAttribute("role") === "button" ||
    element.tagName === "BUTTON"
  ) {
    const siblings = Array.from(element.parentElement?.children || []);
    const elementIndex = siblings.indexOf(element);

    siblings.forEach((sibling, index) => {
      if (index !== elementIndex && Math.abs(index - elementIndex) === 1) {
        const siblingRect = (sibling as HTMLElement).getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const distance = Math.min(
          Math.abs(siblingRect.left - elementRect.right),
          Math.abs(siblingRect.right - elementRect.left),
          Math.abs(siblingRect.top - elementRect.bottom),
          Math.abs(siblingRect.bottom - elementRect.top)
        );

        if (distance < 8) {
          issues.push(
            "Interactive elements too close together (minimum 8px spacing required)"
          );
          suggestions.push(
            "Add proper spacing classes or use getMobileSpacingClasses()"
          );
        }
      }
    });
  }

  return {
    isValid: issues.length === 0,
    issues,
    suggestions,
  };
}

/**
 * Automatically applies mobile optimization to all interactive elements
 */
export function applyMobileOptimizations(
  container: HTMLElement = document.body
): void {
  // Find all interactive elements
  const interactiveElements = container.querySelectorAll(
    'button, a, input, select, textarea, [role="button"], [tabindex]'
  );

  interactiveElements.forEach((element) => {
    const htmlElement = element as HTMLElement;

    // Apply touch-friendly classes
    if (!htmlElement.classList.contains("touch-target")) {
      htmlElement.classList.add("touch-target");
    }

    // Ensure proper focus styles
    if (!htmlElement.classList.contains("mobile-focus")) {
      htmlElement.classList.add("mobile-focus");
    }

    // Add touch-friendly animations
    if (!htmlElement.classList.contains("mobile-animate")) {
      htmlElement.classList.add("mobile-animate");
    }
  });

  // Apply scroll safety to container
  if (!container.classList.contains("scroll-safe")) {
    container.classList.add("scroll-safe");
  }
}

// Type declarations for window object
declare global {
  interface Window {
    MobileOptimization?: typeof MobileOptimizationUtils;
  }
}

const MobileOptimizationUtils = {
  TOUCH_TARGET,
  MOBILE_FONT_SIZES,
  MOBILE_BREAKPOINTS,
  getTouchFriendlyClasses,
  getMobileSpacingClasses,
  getMobileFontClasses,
  getMobileCardClasses,
  getScrollSafeClasses,
  getMobileNavClasses,
  validateMobileAccessibility,
  applyMobileOptimizations,
};

// Export for use in window object (for global access)
if (typeof window !== "undefined") {
  window.MobileOptimization = MobileOptimizationUtils;
}

export default {
  ...MobileOptimizationUtils,
  mobileOptimizationStyles,
};
