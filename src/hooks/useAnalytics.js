import { useEffect } from "react";
import { useAnalytics } from "@vercel/analytics/react";

export const useTrackEvent = () => {
  const track = useAnalytics();

  const trackEvent = (eventName, properties = {}) => {
    track(eventName, properties);
  };

  return trackEvent;
};

export const usePageView = (pageName) => {
  const track = useAnalytics();

  useEffect(() => {
    track("page_view", { page: pageName });
  }, [pageName, track]);
};

export const useTrackClick = (elementName, elementCategory) => {
  const trackEvent = useTrackEvent();

  const handleClick = () => {
    trackEvent("click", {
      element: elementName,
      category: elementCategory,
    });
  };

  return handleClick;
};

export const useTrackDownload = (fileName) => {
  const trackEvent = useTrackEvent();

  const handleDownload = () => {
    trackEvent("download", {
      file: fileName,
      type: fileName.split(".").pop(),
    });
  };

  return handleDownload;
};

export const useTrackScroll = () => {
  const trackEvent = useTrackEvent();

  useEffect(() => {
    let maxScroll = 0;

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        // Track at key milestones
        if (maxScroll === 25) {
          trackEvent("scroll_depth", { depth: 25 });
        } else if (maxScroll === 50) {
          trackEvent("scroll_depth", { depth: 50 });
        } else if (maxScroll === 75) {
          trackEvent("scroll_depth", { depth: 75 });
        } else if (maxScroll === 100) {
          trackEvent("scroll_depth", { depth: 100 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [trackEvent]);
};
