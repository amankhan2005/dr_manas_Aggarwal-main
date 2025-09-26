import React, { useEffect } from 'react';

function GoogleReviewsWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Remove script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <style>
        {`
          /* Hide the branding text */
          .elfsight-app-bd34bbf1-a7e8-4dd5-8839-4b0b9584e598 .eapps-link {
            display: none !important;
          }
        `}
      </style>
      <div className="elfsight-app-bd34bbf1-a7e8-4dd5-8839-4b0b9584e598" data-elfsight-app-lazy></div>
    </>
  );
}

export default GoogleReviewsWidget;
