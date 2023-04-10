import { useState, useEffect } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      Boolean(
        userAgent.match(
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i
        )
      )
    );
  }, []);

  return isMobile;
}
