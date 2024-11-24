import { useState, useEffect } from 'react';
import supabase from '../utils/supabase/supabase';

export default function useProfileInfo() {
  const [profileData, setProfile] = useState({
    email: null,
    avatarUrl: null,
    nickname: null,
    createdAt: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProfileInfo = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;

        const session = data?.session;
        const userMetadata = session?.user?.user_metadata || {};

        setProfile({
          email: session?.user?.email || '',
          avatarUrl: userMetadata.avatar_url || '',
          nickname: userMetadata.user_name || userMetadata.full_name || '',
          createdAt: session?.user?.created_at || '',
        });
      } catch (err) {
        setError(err.message);
        console.error('Error fetching profile info:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileInfo();
  }, []);

  return { profileData, loading, error };
}
