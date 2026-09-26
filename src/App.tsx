import { useEffect } from 'react';

const AD_SRCDOC = `<!DOCTYPE html><html><head><meta charset='utf-8'><style>html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;display:flex;justify-content:center;align-items:center;background:transparent;}</style></head><body><script type='text/javascript'>atOptions = {'key' : '9120e6932cff4b0757e097740b2e83a4','format' : 'iframe','height' : 250,'width' : 300,'params' : {}};</script><script type='text/javascript' src='https://glamourpicklessteward.com/9120e6932cff4b0757e097740b2e83a4/invoke.js'></script></body></html>`;

export default function App() {
  useEffect(() => {
    let animationFrameId: number;
    let userInterrupted = false;

    const onUserInteraction = () => {
      userInterrupted = true;
      cancelAnimationFrame(animationFrameId);
    };

    window.addEventListener('wheel', onUserInteraction, { passive: true });
    window.addEventListener('touchstart', onUserInteraction, { passive: true });
    window.addEventListener('keydown', onUserInteraction, { passive: true });

    const startSlowScroll = () => {
      if (userInterrupted) return;
      const target =
        document.getElementById('social-buttons-section') ||
        document.querySelector('.social-container');
      if (!target) return;

      const startY = window.pageYOffset || document.documentElement.scrollTop;
      const targetRect = target.getBoundingClientRect();
      const targetY = targetRect.top + startY - 10;
      const distance = targetY - startY;

      if (distance <= 0) return;

      // Smooth slow scroll (~5.2 seconds total duration) to allow comfortable ad viewing
      const duration = 5200;
      let startTime: number | null = null;

      // Ease in and out smoothly so it glides past each ad naturally
      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const step = (currentTime: number) => {
        if (userInterrupted) return;
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * easedProgress);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    };

    // Give visitors ~1.2s to notice the top banner before slowly scrolling down
    const timer = setTimeout(startSlowScroll, 1200);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('wheel', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('keydown', onUserInteraction);
    };
  }, []);

  return (
    <div className="page-wrapper">
      {/* Top 5 Ads (Above Buttons) */}
      <section className="top-ads-section" id="top-ads" aria-label="Top Advertisements">
        {[1, 2, 3, 4, 5].map((index) => (
          <div className="ad-slot" id={`top-ad-slot-${index}`} key={`top-ad-${index}`}>
            <iframe
              title={`Top Advertisement ${index}`}
              srcDoc={AD_SRCDOC}
              width="300"
              height="250"
              scrolling="no"
            />
          </div>
        ))}
      </section>

      {/* Social Buttons & Header Section (Target for Auto-Scroll) */}
      <div
        id="social-buttons-section"
        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div className="header-image-container">
          <img
            src="https://i.ibb.co.com/LdsYF96s/file-00000000c7b881f889146fe9423f4179.png"
            alt="Header"
            className="header-img"
            referrerPolicy="no-referrer"
          />
        </div>

        <main className="social-container" role="region" aria-label="Social media links">
          {/* Telegram */}
          <a
            href="https://t.me/HalpLine_bot?start=556588"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            id="telegram-btn"
            aria-label="Telegram"
          >
            <div className="running-border-wrapper" style={{ animationDelay: '0s' }}>
              <div className="running-beam-bg" style={{ animationDelay: '0s' }} />
              <div className="icon-box icon-telegram" style={{ position: 'relative', zIndex: 10 }}>
                <svg className="tg-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.674c.458 0 .66-.21.917-.46l2.203-2.14 4.58 3.385c.844.464 1.452.225 1.662-.782l3.003-14.153c.308-1.233-.472-1.793-1.468-1.331z" />
                </svg>
              </div>
            </div>
            <span className="label">Telegram</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://whatsapp.com/channel/0029Vb7fVTzDzgT78gexpV3V"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            id="whatsapp-btn"
            aria-label="WhatsApp"
          >
            <div className="running-border-wrapper" style={{ animationDelay: '-0.8s' }}>
              <div className="running-beam-bg" style={{ animationDelay: '-0.8s' }} />
              <div className="icon-box icon-whatsapp" style={{ position: 'relative', zIndex: 10 }}>
                <svg className="wa-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
                </svg>
              </div>
            </div>
            <span className="label">WhatsApp</span>
          </a>

          {/* imo */}
          <a
            href="https://s.channelcom.tech/4r0kiM?from=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            id="imo-btn"
            aria-label="imo"
          >
            <div className="running-border-wrapper" style={{ animationDelay: '-1.6s' }}>
              <div className="running-beam-bg" style={{ animationDelay: '-1.6s' }} />
              <div className="icon-box icon-imo" style={{ position: 'relative', zIndex: 10 }}>
                <span className="imo-text">imo</span>
              </div>
            </div>
            <span className="label">imo</span>
          </a>
        </main>

        <p className="buttons-notice-text" id="buttons-notice-text">
          উপরের এই তিনটা মাধ্যমে ভিডিও দেখতে পারবা
        </p>

        {/* Compact Rules / Guide */}
        <div className="rules-compact-card" id="rules-box">
          <div className="rules-header">
            <span className="rules-tag">⚠️ নিয়ম</span>
          </div>
          <div className="rules-steps">
            <div className="rule-item">
              <span className="rule-num">১</span>
              <span className="rule-text">উপরে ৩ আইকন (⋮👆) ক্লিক করুন</span>
            </div>
            <div className="rule-item">
              <span className="rule-num">২</span>
              <span className="rule-text">Open in browser ক্লিক করুন</span>
            </div>
            <div className="rule-item">
              <span className="rule-num">৩</span>
              <span className="rule-text">Chrome ব্রাউজারে নিয়ে আসুন</span>
            </div>
            <div className="rule-item">
              <span className="rule-num">৪</span>
              <span className="rule-text">তারপর ঐ বাটনগুলোতে ক্লিক করুন</span>
            </div>
          </div>
        </div>
      </div>

      {/* 10 Ads (1 inch below the buttons) */}
      <section className="ads-section" aria-label="Advertisements">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <div className="ad-slot" id={`ad-slot-${index}`} key={`ad-${index}`}>
            <iframe
              title={`Advertisement ${index}`}
              srcDoc={AD_SRCDOC}
              width="300"
              height="250"
              scrolling="no"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
