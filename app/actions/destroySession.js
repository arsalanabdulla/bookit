'use server';
import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

async function destroySession() {
  // Retrieve the session cookie
  const sessionCookie = cookies().get('appwrite-session');

  if (!sessionCookie) {
    return {
      error: 'No session cookie found',
    };
  }

  try {
    // Create a client instance using the session cookie
    const { account } = await createSessionClient(sessionCookie.value);

    // Delete the current session from Appwrite
    await account.deleteSession('current');

    // Clear the session cookie by setting its expiration in the past
    cookies().set('appwrite-session', '', { expires: new Date(0) });    
    return {
      success: true,
    };
  } catch (error) {
    console.error('Error deleting session:', error);
    return {
      error: 'Error deleting session',
    };
  }
}

export default destroySession;
