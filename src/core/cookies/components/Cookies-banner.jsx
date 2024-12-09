import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import supabase from '../../../utils/supabase/supabase';

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!Cookies.get('cookies_accepted')) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = async () => {
    Cookies.set('cookies_accepted', 'true', { expires: 365 });

    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error('Error fetching session:', error.message);
      return;
    }

    const session = data?.session;

    if (session && session.user) {
      const userId = session.user.id;

      const policyVersion = '1.0';
      const consentType = 'essential, analytics, marketing';
      const consentMethod = 'manual';
      const userAgent = navigator.userAgent;
      const userLanguage = navigator.language || navigator.userLanguage;
      const marketingPreferences = {
        email_marketing: true,
        sms_marketing: false,
        personalized_ads: true,
        data_sharing: false,
      };

      const { error } = await supabase.from('cookies').insert([
        {
          user_id: userId,
          accepted: true,
          accepted_at: new Date(),
          policy_version: policyVersion,
          consent_type: consentType,
          consent_method: consentMethod,
          user_agent: userAgent,
          user_language: userLanguage,
          marketing_preferences: marketingPreferences,
        },
      ]);

      if (error) {
        console.error('Error saving cookie consent:', error.message);
      } else {
        console.log('Cookie consent saved successfully');
      }
    } else {
      console.error('No user session found.');
    }

    // Ocultar el banner
    setShowBanner(false);
  };

  if (!showBanner) return null;
  return (
    <>
      <section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl">
        <h2 className="font-semibold text-gray-800 dark:text-white">
          🍪 Cookie Notice
        </h2>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          We use cookies to ensure that we give you the best experience on our
          website.{' '}
          <a href="/cookies" className="text-blue-500 hover:underline">
            Read cookies policies
          </a>
          .{' '}
        </p>

        <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
          <button className="text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
            Manage your preferences
          </button>

          <button
            onClick={handleAccept}
            className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          >
            Accept
          </button>
        </div>
      </section>
    </>
  );
};
